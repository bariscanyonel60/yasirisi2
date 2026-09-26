import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  robots: { index: false },
};

export default function GizlilikPage() {
  return (
    <div className="container-page py-20 max-w-prose">
      <h1 className="font-display text-3xl font-bold text-ink">
        Gizlilik Politikası
      </h1>
      <p className="mt-6 text-steel-500 leading-relaxed">
        {/* TODO: gerçek gizlilik politikası metni eklenecektir. */}
        Bu sayfa gizlilik politikası metni için ayrılmıştır.
      </p>
    </div>
  );
}
