import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Yalçın Isı çerez politikası — sitede kullanılan çerez türleri ve tercihleriniz.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPage() {
  return (
    <div className="container-page max-w-prose py-20">
      <h1 className="font-display text-3xl font-bold text-ink">
        Çerez Politikası
      </h1>
      <p className="mt-2 text-sm text-steel-400">Son güncelleme: Eylül 2026</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-steel-500">
        <p>
          {site.name} web sitesi ({site.domain}), site deneyimini iyileştirmek ve
          temel işlevleri sağlamak için çerezler veya benzeri teknolojiler
          kullanabilir.
        </p>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">
            Çerez türleri
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Zorunlu çerezler:</strong> Site
              güvenliği, form gönderimi ve tercih kaydı (ör. çerez onayı) için
              gereklidir.
            </li>
            <li>
              <strong className="text-ink">İşlevsel çerezler:</strong> Dil veya
              arayüz tercihlerinizi hatırlamak için kullanılabilir.
            </li>
            <li>
              <strong className="text-ink">Analitik çerezler:</strong> Trafik
              ölçümü eklenirse, toplu ve kimliksiz istatistik için kullanılabilir;
              eklenmeden önce bilgilendirilirsiniz.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Yönetim</h2>
          <p className="mt-2">
            Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
            Zorunlu çerezler engellenirse bazı site özellikleri çalışmayabilir.
            İlk ziyarette gösterilen çerez bildirimi ile tercih kaydedilir.
          </p>
        </section>

        <p>
          Kişisel veriler hakkında:{" "}
          <Link href="/kvkk" className="text-ember-600">
            KVKK
          </Link>{" "}
          ·{" "}
          <Link href="/gizlilik-politikasi" className="text-ember-600">
            Gizlilik
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
