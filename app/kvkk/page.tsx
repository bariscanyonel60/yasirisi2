import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  robots: { index: false },
};

export default function KvkkPage() {
  return (
    <div className="container-page py-20 max-w-prose">
      <h1 className="font-display text-3xl font-bold text-ink">
        KVKK Aydınlatma Metni
      </h1>
      <p className="mt-6 text-steel-500 leading-relaxed">
        {/* TODO: Hukuki danışmanlık ile hazırlanmış gerçek KVKK aydınlatma
        metni eklenecektir. */}
        Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
        hazırlanacak aydınlatma metni için ayrılmıştır.
      </p>
    </div>
  );
}
