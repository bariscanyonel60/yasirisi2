import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  robots: { index: false },
};

export default function CerezPage() {
  return (
    <div className="container-page py-20 max-w-prose">
      <h1 className="font-display text-3xl font-bold text-ink">
        Çerez Politikası
      </h1>
      <p className="mt-6 text-steel-500 leading-relaxed">
        {/* TODO: gerçek çerez politikası metni eklenecektir. */}
        Bu sayfa çerez politikası metni için ayrılmıştır.
      </p>
    </div>
  );
}
