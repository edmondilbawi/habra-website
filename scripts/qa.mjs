import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright-core'

const rootUrl = 'http://127.0.0.1:4173/habra-website/'
const artifactDirectory = 'qa-artifacts'
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const failures = []
const browserErrors = []

function check(condition, message) {
  if (!condition) failures.push(message)
}

async function revealEntirePage(page, viewportHeight) {
  const documentHeight = await page.evaluate(() => document.documentElement.scrollHeight)
  const step = Math.max(300, Math.floor(viewportHeight * 0.7))

  for (let position = 0; position < documentHeight; position += step) {
    await page.evaluate((top) => window.scrollTo({ top }), position)
    await page.waitForTimeout(35)
  }

  await page.evaluate(() => window.scrollTo({ top: 0 }))
  await page.waitForTimeout(180)
}

async function waitForServer() {
  const deadline = Date.now() + 20_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(rootUrl)
      if (response.ok) return
    } catch {
      // The preview server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
  throw new Error('تعذّر تشغيل خادم المعاينة خلال المهلة المحددة.')
}

await mkdir(artifactDirectory, { recursive: true })

const preview = spawn(
  process.execPath,
  ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4173'],
  { stdio: ['ignore', 'pipe', 'pipe'] },
)

let browser

try {
  await waitForServer()
  browser = await chromium.launch({ executablePath: chromePath, headless: true })

  const routes = [
    { path: '', name: 'home', title: 'هبرة | الرئيسية' },
    { path: '#/menu', name: 'menu', title: 'القائمة | هبرة' },
    { path: '#/about', name: 'about', title: 'من نحن | هبرة' },
  ]
  const viewports = [
    { name: '1920x1080', width: 1920, height: 1080 },
    { name: '1440x900', width: 1440, height: 900 },
    { name: '1366x768', width: 1366, height: 768 },
    { name: '430x932', width: 430, height: 932 },
    { name: '390x844', width: 390, height: 844 },
    { name: '360x800', width: 360, height: 800 },
  ]

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport })
    const page = await context.newPage()

    page.on('console', (message) => {
      if (message.type() === 'error') browserErrors.push(`console ${viewport.name}: ${message.text()}`)
    })
    page.on('pageerror', (error) => browserErrors.push(`page ${viewport.name}: ${error.message}`))
    page.on('requestfailed', (request) => {
      browserErrors.push(`network ${viewport.name}: ${request.url()} — ${request.failure()?.errorText}`)
    })

    for (const route of routes) {
      await page.goto('about:blank')
      const response = await page.goto(`${rootUrl}${route.path}`, { waitUntil: 'networkidle' })
      check(response?.ok(), `${route.path} أعاد حالة ${response?.status()} عند ${viewport.name}`)
      check((await page.title()) === route.title, `عنوان ${route.path} غير صحيح عند ${viewport.name}`)

      const documentState = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        dir: document.documentElement.dir,
        viewportWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        h1Count: document.querySelectorAll('main h1').length,
        formCount: document.querySelectorAll('form').length,
        brokenImages: [...document.images]
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc),
        imagesWithoutAlt: [...document.images].filter((image) => !image.hasAttribute('alt')).length,
      }))

      check(documentState.lang === 'ar', `${route.path} لا يستخدم lang=ar عند ${viewport.name}`)
      check(documentState.dir === 'rtl', `${route.path} لا يستخدم dir=rtl عند ${viewport.name}`)
      check(documentState.h1Count === 1, `${route.path} لا يحتوي على عنوان رئيسي واحد عند ${viewport.name}`)
      check(documentState.formCount === 0, `${route.path} يحتوي على نموذج غير مطلوب`)
      check(documentState.imagesWithoutAlt === 0, `${route.path} يحتوي صوراً دون alt`)
      check(documentState.brokenImages.length === 0, `${route.path} يحتوي صوراً مكسورة: ${documentState.brokenImages.join(', ')}`)
      check(
        documentState.scrollWidth <= documentState.viewportWidth + 1,
        `${route.path} يتجاوز العرض عند ${viewport.name}: ${documentState.scrollWidth}/${documentState.viewportWidth}`,
      )

      const shouldCapture = route.name === 'home' || viewport.name === '1440x900' || viewport.name === '390x844'
      if (shouldCapture) {
        await revealEntirePage(page, viewport.height)
        await page.screenshot({
          path: `${artifactDirectory}/${route.name}-${viewport.name}.png`,
          fullPage: true,
        })
      }
    }

    await context.close()
  }

  const interactionContext = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const interactionPage = await interactionContext.newPage()
  interactionPage.on('console', (message) => {
    if (message.type() === 'error') browserErrors.push(`console interaction: ${message.text()}`)
  })
  interactionPage.on('pageerror', (error) => browserErrors.push(`page interaction: ${error.message}`))
  interactionPage.on('requestfailed', (request) => {
    browserErrors.push(`network interaction: ${request.url()} — ${request.failure()?.errorText}`)
  })

  await interactionPage.goto(rootUrl, { waitUntil: 'networkidle' })
  await interactionPage.getByRole('button', { name: 'فتح القائمة' }).focus()
  await interactionPage.keyboard.press('Enter')
  check(
    (await interactionPage.getByRole('button', { name: 'إغلاق القائمة' }).getAttribute('aria-expanded')) === 'true',
    'قائمة الهاتف لا تفتح عبر لوحة المفاتيح',
  )
  await interactionPage.getByRole('navigation', { name: 'التنقل عبر الهاتف' }).getByRole('link', { name: 'القائمة' }).click()
  await interactionPage.waitForURL('**/habra-website/#/menu')
  await interactionPage.getByRole('heading', { level: 1, name: 'القائمة' }).waitFor()
  check(new URL(interactionPage.url()).hash === '#/menu', 'رابط القائمة في تنقل الهاتف لا يعمل')
  check((await interactionPage.getByRole('navigation', { name: 'أقسام القائمة' }).getByRole('link').count()) === 4, 'القائمة لا تحتوي على أربعة أقسام رئيسية')
  check((await interactionPage.locator('.menu-subcategory-title').count()) === 3, 'قسم ساندويش لحم غنم لا يحتوي على ثلاثة أقسام فرعية')
  check((await interactionPage.locator('.prepared-menu-item').count()) === 15, 'القائمة لا تحتوي على ١٥ طبقاً محضّراً')
  check((await interactionPage.getByLabel(/^السعر /).count()) === 0, 'تظهر أسعار غير معتمدة في القائمة')

  await interactionPage.getByRole('navigation', { name: 'أقسام القائمة' }).getByRole('link', { name: 'لحوم الغنم الطازجة' }).click()
  check(new URL(interactionPage.url()).hash === '#/menu#fresh-lamb', 'تنقل أقسام القائمة لا يحدّث الرابط')
  check((await interactionPage.locator('#fresh-lamb .fresh-meat-item').count()) === 17, 'قسم لحوم الغنم الطازجة لا يحتوي على ١٧ صنفاً')

  await interactionPage.goto(`${rootUrl}#/#contact`, { waitUntil: 'networkidle' })
  await interactionPage.waitForTimeout(500)
  const featuredNames = await interactionPage.locator('.food-card h3').allTextContents()
  check(featuredNames.length === 4, 'الصفحة الرئيسية لا تعرض أربعة أطباق حقيقية مختارة')
  check(featuredNames.every((name) => ['كفتة', 'كباب فليفلة', 'برغر كلاسيك مدخّن', 'شيش طاووق أحمر'].includes(name)), 'الصفحة الرئيسية تعرض طبقاً غير موجود في القائمة المعتمدة')
  check((await interactionPage.locator('#contact').count()) === 1, 'رابط التواصل لا يصل إلى قسم التواصل')
  check((await interactionPage.locator('.contact-method').count()) === 4, 'وسائل التواصل الأربع غير موجودة')
  check((await interactionPage.locator('a.contact-method').count()) === 0, 'هناك رابط تواصل مضلل قبل إضافة بيانات معتمدة')

  await interactionPage.evaluate(() => {
    document.body.tabIndex = -1
    document.body.focus()
    document.body.removeAttribute('tabindex')
  })
  await interactionPage.keyboard.press('Tab')
  check(
    (await interactionPage.evaluate(() => document.activeElement?.textContent?.trim())) === 'الانتقال إلى المحتوى',
    'رابط تجاوز المحتوى ليس أول عنصر في ترتيب التركيز',
  )

  await interactionPage.emulateMedia({ reducedMotion: 'reduce' })
  await interactionPage.reload({ waitUntil: 'networkidle' })
  const reducedMotionState = await interactionPage.evaluate(() => {
    const hero = document.querySelector('.hero-content')
    const reveal = document.querySelector('.reveal')
    return {
      heroDuration: hero ? getComputedStyle(hero).animationDuration : null,
      revealDuration: reveal ? getComputedStyle(reveal).transitionDuration : null,
    }
  })
  check(
    reducedMotionState.heroDuration !== null && parseFloat(reducedMotionState.heroDuration) <= 0.001,
    `حركة البطل لا تحترم تقليل الحركة: ${reducedMotionState.heroDuration}`,
  )
  check(
    reducedMotionState.revealDuration !== null && parseFloat(reducedMotionState.revealDuration) <= 0.001,
    `حركة الكشف لا تحترم تقليل الحركة: ${reducedMotionState.revealDuration}`,
  )

  await interactionContext.close()
  failures.push(...browserErrors)

  if (failures.length > 0) {
    console.error(JSON.stringify({ passed: false, failures }, null, 2))
    process.exitCode = 1
  } else {
    console.log(
      JSON.stringify(
        {
          passed: true,
          routes: routes.map((route) => route.path),
          viewports: viewports.map((viewport) => viewport.name),
          consoleErrors: 0,
          failedRequests: 0,
          brokenImages: 0,
          horizontalOverflow: 0,
        },
        null,
        2,
      ),
    )
  }
} finally {
  await browser?.close()
  preview.kill()
}
