import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Yalçın Isı KVKK aydınlatma metni — kişisel verilerin işlenmesi hakkında bilgilendirme.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <div className="container-page max-w-prose py-20">
      <h1 className="font-display text-3xl font-bold text-ink">
        KVKK Aydınlatma Metni
      </h1>
      <p className="mt-2 text-sm text-steel-400">
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) md. 10
      </p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-steel-500">
        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            1. Veri sorumlusu
          </h2>
          <p className="mt-2">
            {company.legalName} (“Yalçın Isı”), {site.officeAddress} adresinde
            faaliyet gösteren veri sorumlusudur. İletişim:{" "}
            <a href={site.phoneHref} className="text-ember-600 hover:text-ember-500">
              {site.phoneDisplay}
            </a>
            , web: {site.domain}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            2. İşlenen kişisel veriler
          </h2>
          <p className="mt-2">
            Teklif ve iletişim formları ile WhatsApp / telefon yoluyla iletilen
            kimlik (ad soyad), iletişim (telefon, isteğe bağlı e-posta) ve talep
            içeriği (ürün ilgisi, mesaj) verileri işlenebilir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            3. İşleme amaçları ve hukuki sebepler
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Ürün teklifi, keşif ve satış öncesi bilgilendirme</li>
            <li>Müşteri taleplerine yanıt ve kayıt</li>
            <li>Mevzuattan doğan yükümlülüklerin yerine getirilmesi</li>
          </ul>
          <p className="mt-2">
            İşleme, KVKK md. 5 kapsamında meşru menfaat, sözleşmenin kurulması /
            ifası ve açık rıza (form onayı) hukuki sebeplerine dayanır.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            4. Aktarım
          </h2>
          <p className="mt-2">
            Veriler, barındırma ve form altyapısı (ör. Netlify) gibi hizmet
            sağlayıcılarla, yalnızca belirtilen amaçlarla ve gerekli ölçüde
            paylaşılabilir. Yurt dışı aktarım söz konusu olduğunda KVKK’daki
            güvencelere uyulur.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            5. Saklama süresi
          </h2>
          <p className="mt-2">
            Talepler, işleme amacının gerektirdiği süre ve ilgili mevzuattaki
            zamanaşımı süreleri boyunca saklanır; sonrasında silinir veya
            anonimleştirilir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            6. Haklarınız
          </h2>
          <p className="mt-2">
            KVKK md. 11 uyarınca verilerinizin işlenip işlenmediğini öğrenme,
            düzeltme, silme, itiraz ve şikâyet haklarına sahipsiniz. Başvurularınızı{" "}
            <a href={site.phoneHref} className="text-ember-600 hover:text-ember-500">
              {site.phoneDisplay}
            </a>{" "}
            numarası veya ofis adresimiz üzerinden iletebilirsiniz.
          </p>
        </section>

        <p className="rounded-xl border border-steel-200 bg-mist p-4 text-sm">
          Bu metin bilgilendirme amacıyla hazırlanmıştır. Özel durumlarınız için
          hukuki danışmanlık almanızı öneririz.{" "}
          <Link href="/gizlilik-politikasi" className="text-ember-600">
            Gizlilik Politikası
          </Link>{" "}
          ve{" "}
          <Link href="/cerez-politikasi" className="text-ember-600">
            Çerez Politikası
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
