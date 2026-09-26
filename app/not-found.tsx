import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-ink">
        Sayfa bulunamadı
      </h1>
      <p className="mt-4 text-steel-400">
        Aradığınız sayfa kaldırılmış veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center rounded-md bg-ember-600 px-6 py-3 text-sm font-semibold text-white"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
