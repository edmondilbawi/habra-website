import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="site-container flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-bold text-habra-red">٤٠٤</p>
      <h1 className="mt-4 text-4xl font-black text-white">الصفحة غير موجودة</h1>
      <p className="mt-5 text-neutral-400">يمكنك العودة إلى الصفحة الرئيسية.</p>
      <Link to="/" className="button-primary focus-ring mt-8">
        الرئيسية
        <span aria-hidden="true">←</span>
      </Link>
    </section>
  )
}
