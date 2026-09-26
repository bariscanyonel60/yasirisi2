import { site } from "@/data/site";

/** Birincil yerel arama kümeleri — one-page SEO stratejisinin omurgası */
export const primaryKeywords = [
  "tokat pelet soba",
  "tokat pelet sobası",
  "tokat güneş enerjisi",
  "tokat kangal boru",
] as const;

export const secondaryKeywords = [
  "yalçın ısı tokat",
  "tokat pelet yakıt",
  "tokat güneş paneli",
  "tokat pe kangal boru",
  "tokat damlama sulama",
  "tokat rüzgâr enerjisi",
  "yps pelet sobası",
  "tokat organize sanayi pelet",
] as const;

export const allKeywords = [
  site.name,
  "Yalçın Isı Tokat",
  ...primaryKeywords,
  ...secondaryKeywords,
  "pelet sobası",
  "pelet yakıt",
  "güneş paneli elektrik üretimi",
  "güneş enerji sistemleri",
  "kangal boru",
  "PE kangal boru",
  "damlama sulama borusu",
];

export type LocalServiceSlug =
  | "tokat-pelet-soba"
  | "tokat-gunes-enerjisi"
  | "tokat-kangal-boru";

export type LocalService = {
  slug: LocalServiceSlug;
  /** URL path without leading slash handled in pages */
  path: `/${LocalServiceSlug}`;
  /** Exact-match odaklı H1 */
  h1: string;
  /** Title tag (kısa) */
  title: string;
  description: string;
  keywords: string[];
  /** Ana sayfa bölüm id'si (one-page anchor) */
  homeAnchor: string;
  categoryHref: string;
  eyebrow: string;
  summary: string;
  paragraphs: string[];
  bullets: string[];
  ctaLabel: string;
};

export const localServices: LocalService[] = [
  {
    slug: "tokat-pelet-soba",
    path: "/tokat-pelet-soba",
    h1: "Tokat Pelet Sobası",
    title: "Tokat Pelet Sobası | Yerli YPS Üretimi",
    description:
      "Tokat pelet sobası ve pelet yakıt: Yalçın Isı YPS serisi ile iç ve dış mekân ısıtma. Tokat OSB'de yerli üretim, keşif ve teklif.",
    keywords: [
      "tokat pelet soba",
      "tokat pelet sobası",
      "tokat pelet yakıt",
      "yalçın ısı pelet sobası",
      "yps pelet sobası tokat",
    ],
    homeAnchor: "tokat-pelet-soba",
    categoryHref: "/urunler/kategori/pelet-sobalari",
    eyebrow: "Isıtma · Pelet",
    summary:
      "Tokat'ta pelet sobası arayanlar için YPS serisi: temiz yanma, yüksek ısıtma gücü ve yerli üretim desteği.",
    paragraphs: [
      "Tokat pelet sobası ihtiyacında Yalçın Isı, 1993'ten bu yana bölgede üretim yapan bir sanayi firmasıdır. YPS serisi pelet sobaları iç ve dış mekân kullanımına uygun tasarlanır; pelet yakıt ile birlikte bütünleşik ısıtma çözümü sunulur.",
      "Tokat Organize Sanayi Bölgesi'ndeki üretim kapasitemiz sayesinde pelet sobası seçimi, teknik bilgilendirme ve satış sonrası destek aynı çatı altında yürütülür. Konut, iş yeri ve açık alan ısıtması için doğru modeli birlikte belirliyoruz.",
      "Arama motorlarında sık sorulan \"tokat pelet soba\" ve \"tokat pelet sobası\" ihtiyaçlarına yanıt olarak yerli üretim, pelet yakıt tedariki ve saha deneyimini bir arada sunuyoruz.",
    ],
    bullets: [
      "YPS iç ve dış mekân pelet sobaları",
      "Pelet yakıt üretimi ve tedarik desteği",
      "Tokat OSB'de yerli üretim",
      "Keşif, model seçimi ve teklif",
    ],
    ctaLabel: "Pelet sobası teklifi al",
  },
  {
    slug: "tokat-gunes-enerjisi",
    path: "/tokat-gunes-enerjisi",
    h1: "Tokat Güneş Enerjisi",
    title: "Tokat Güneş Enerjisi | Panel ve Kolektör",
    description:
      "Tokat güneş enerjisi çözümleri: güneş paneli elektrik üretimi, kolektör sistemleri ve sistem bileşenleri. Yalçın Isı ile keşif ve teklif.",
    keywords: [
      "tokat güneş enerjisi",
      "tokat güneş paneli",
      "tokat pv sistem",
      "güneş enerjisi tokat",
      "yalçın ısı güneş",
    ],
    homeAnchor: "tokat-gunes-enerjisi",
    categoryHref: "/urunler/kategori/gunes-enerji-sistemleri",
    eyebrow: "Yenilenebilir · PV & Kolektör",
    summary:
      "Tokat güneş enerjisi yatırımlarında panel elektrik üretimi, kolektör ve depolama bileşenleriyle bütünleşik çözümler.",
    paragraphs: [
      "Tokat güneş enerjisi alanında Yalçın Isı; fotovoltaik güneş paneli sistemleri, güneş kolektörleri, depolar ve sistem bileşenleriyle konut, tarım ve tesis ihtiyaçlarına yönelik çözümler sunar.",
      "Öz tüketim, tarımsal sulama enerjisi ve tesis elektrik ihtiyacı için doğru panel ve sistem kurgusunu birlikte planlıyoruz. Yerel üretim ve saha deneyimimiz, Tokat ve çevresindeki projelerde hızlı keşif–teklif sürecini destekler.",
      "\"Tokat güneş enerjisi\" ve \"tokat güneş paneli\" aramalarında güvenilir bir yerel üretici ve çözüm ortağı olarak ürün gamımızı ve uygulama yaklaşımımızı şeffaf biçimde paylaşıyoruz.",
    ],
    bullets: [
      "Güneş paneli elektrik üretimi (PV)",
      "Güneş kolektör ve sıcak su sistemleri",
      "Depo ve sistem bileşenleri",
      "Tokat ve çevresinde keşif / teklif",
    ],
    ctaLabel: "Güneş enerjisi teklifi al",
  },
  {
    slug: "tokat-kangal-boru",
    path: "/tokat-kangal-boru",
    h1: "Tokat Kangal Boru",
    title: "Tokat Kangal Boru | PE Kangal Üretimi",
    description:
      "Tokat kangal boru ve PE kangal boru üretimi: tarımsal ve endüstriyel kullanım. Yalçın Isı, Tokat OSB'de günlük üretim kapasitesiyle hizmet verir.",
    keywords: [
      "tokat kangal boru",
      "tokat pe kangal boru",
      "tokat pe boru",
      "kangal boru tokat",
      "yalçın ısı kangal boru",
    ],
    homeAnchor: "tokat-kangal-boru",
    categoryHref: "/urunler/kategori/kangal-borular",
    eyebrow: "Plastik · Kangal & Sulama",
    summary:
      "Tokat kangal boru üretiminde PE kangal ve damlama sulama boruları; tarım ve endüstri için farklı çap seçenekleri.",
    paragraphs: [
      "Tokat kangal boru ihtiyacında Yalçın Isı, Organize Sanayi Bölgesi'ndeki plastik üretim hattıyla PE kangal boru ve damlama sulama boruları üretir. Farklı çap seçenekleri tarımsal sulama ve endüstriyel hatlar için uygundur.",
      "Günlük üretim kapasitemiz ve ultrasonik kaynak deneyimimiz, bölgesel tedarikte süreklilik sağlar. Damlama sulama boruları ile birlikte sulama hattı ihtiyaçlarınızı tek noktadan planlayabilirsiniz.",
      "\"Tokat kangal boru\" aramalarında yerli üretici olarak stok, çap seçenekleri ve teklif süreçlerini şeffaf yürütüyoruz.",
    ],
    bullets: [
      "PE kangal boru (farklı çaplar)",
      "Damlama sulama boruları",
      "Tokat OSB üretim kapasitesi",
      "Tarımsal ve endüstriyel kullanım",
    ],
    ctaLabel: "Kangal boru teklifi al",
  },
];

export function getLocalService(slug: string) {
  return localServices.find((s) => s.slug === slug);
}

/** Ana sayfa SSS — FAQPage schema ile birlikte kullanılır */
export const homeFaqs = [
  {
    question: "Tokat'ta pelet sobası nereden alınır?",
    answer:
      "Yalçın Isı, Tokat'ta YPS serisi pelet sobası üretir ve satar. İç ve dış mekân modelleri, pelet yakıt desteği ve teklif için iletişime geçebilirsiniz.",
  },
  {
    question: "Tokat güneş enerjisi sistemlerinde hangi ürünler var?",
    answer:
      "Güneş paneli elektrik üretimi, kolektör sistemleri, depolar ve sistem bileşenleri sunuyoruz. Konut, tarım ve tesis uygulamaları için keşif ve teklif veriyoruz.",
  },
  {
    question: "Tokat kangal boru üretimi yapıyor musunuz?",
    answer:
      "Evet. Tokat Organize Sanayi Bölgesi'nde PE kangal boru ve damlama sulama boruları üretiyoruz. Farklı çap ve kullanım senaryoları için teklif alabilirsiniz.",
  },
  {
    question: "Yalçın Isı fabrika ve ofis nerede?",
    answer: `Ofis: ${site.officeAddress}. Üretim: ${site.factoryAddress}. Telefon: ${site.phoneDisplay}.`,
  },
  {
    question: "Pelet sobası ile pelet yakıt birlikte mi sunuluyor?",
    answer:
      "Evet. Pelet sobası seçimine ek olarak pelet yakıt üretimi ve tedarik desteği sunuyoruz; ısıtma çözümünü bütünleşik planlıyoruz.",
  },
];

export const homeSeo = {
  title:
    "Tokat Pelet Sobası, Güneş Enerjisi ve Kangal Boru | Yalçın Isı",
  description:
    "Tokat pelet sobası, Tokat güneş enerjisi ve Tokat kangal boru: Yalçın Isı yerli üretim. YPS pelet sobası, güneş paneli, PE kangal boru — keşif ve teklif için arayın.",
  keywords: allKeywords,
};
