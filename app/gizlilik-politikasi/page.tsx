import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Yalçın Isı gizlilik politikası — web sitesi ve iletişim kanallarında veri kullanımı.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPage() {
  return (
    <div className="container-page max-w-prose py-20">
      <h1 className="font-display text-3xl font-bold text-ink">
        Gizlilik Politikası
      </h1>
      <p className="mt-2 text-sm text-steel-400">Son güncelleme: Eylül 2026</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-steel-500">
        <p>
          {company.shortName} ({company.legalName}), {site.url} adresindeki web
          sitesini ziyaret eden kullanıcıların gizliliğine önem verir. Bu
          politika; site kullanımı, teklif formu ve iletişim kanallarında
          toplanan bilgilerin nasıl kullanıldığını açıklar.
        </p>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            Toplanan bilgiler
          </h2>
          <p className="mt-2">
            Form üzerinden ad soyad, telefon, ürün ilgisi ve mesaj; ayrıca site
            trafiğine ilişkin teknik veriler (IP, tarayıcı tipi — barındırma /
            güvenlik amaçlı) işlenebilir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Kullanım</h2>
          <p className="mt-2">
            Bilgiler yalnızca teklif, bilgilendirme, müşteri hizmetleri ve site
            güvenliği için kullanılır; pazarlama amaçlı üçüncü taraflara
            satılmaz.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Çerezler</h2>
          <p className="mt-2">
            Çerez kullanımı hakkında ayrıntılar için{" "}
            <Link href="/cerez-politikasi" className="text-ember-600">
              Çerez Politikası
            </Link>{" "}
            sayfasını inceleyin.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">İletişim</h2>
          <p className="mt-2">
            Gizlilik ile ilgili sorularınız için: {site.officeAddress} ·{" "}
            <a href={site.phoneHref} className="text-ember-600">
              {site.phoneDisplay}
            </a>
            . Kişisel veri haklarınız için{" "}
            <Link href="/kvkk" className="text-ember-600">
              KVKK Aydınlatma Metni
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
