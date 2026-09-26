export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tokat-pelet-sobasi-nasil-secilir",
    title: "Tokat'ta pelet sobası nasıl seçilir?",
    excerpt:
      "İç ve dış mekân, ısıtma ihtiyacı ve pelet yakıt tedariki — doğru YPS modelini seçerken dikkat edilecekler.",
    date: "2026-03-10",
    category: "Pelet",
    cover: "/images/categories/pelet-sobalari.jpg",
    content: [
      "Tokat pelet sobası seçiminde ilk adım kullanım alanını netleştirmektir: iç mekân mı, teras/bahçe mi, yoksa ticari dış mekân mı?",
      "Yalçın Isı YPS serisi farklı formlarda pelet sobası sunar. Isıtılacak alanın büyüklüğü, havalandırma ve pelet yakıt tedarik kolaylığı seçimi doğrudan etkiler.",
      "Yerli üretim avantajı sayesinde model seçimi, keşif ve satış sonrası destek aynı noktadan planlanabilir. Teklif için iletişime geçebilirsiniz.",
    ],
    seoTitle: "Tokat Pelet Sobası Nasıl Seçilir? | Yalçın Isı Blog",
    seoDescription:
      "Tokat pelet sobası seçim rehberi: iç/dış mekân, YPS modelleri ve pelet yakıt. Yalçın Isı üretim desteği.",
  },
  {
    slug: "tokat-gunes-enerjisi-oz-tuketim",
    title: "Tokat güneş enerjisi: öz tüketim için nelere bakılır?",
    excerpt:
      "PV panel, kolektör ve depolama — konut ve tarımsal enerji ihtiyaçlarında temel seçim kriterleri.",
    date: "2026-02-18",
    category: "Güneş",
    cover: "/images/marketing/gunes-enerjisi-banner.jpg",
    content: [
      "Tokat güneş enerjisi yatırımlarında hedef çoğu zaman öz tüketimi karşılamak veya tarımsal sulama enerjisini desteklemektir.",
      "Fotovoltaik paneller elektrik üretimi; kolektör sistemleri sıcak su ihtiyaçları için değerlendirilir. Depo ve sistem bileşenleri bütünleşik planlanmalıdır.",
      "Yalçın Isı, Tokat'ta yerel üretim ve saha deneyimiyle keşif–teklif sürecini yönetir.",
    ],
    seoTitle: "Tokat Güneş Enerjisi Öz Tüketim | Yalçın Isı Blog",
    seoDescription:
      "Tokat güneş enerjisi öz tüketim rehberi: panel, kolektör ve sistem bileşenleri. Yalçın Isı.",
  },
  {
    slug: "pe-kangal-boru-ve-damlama-sulama",
    title: "PE kangal boru ve damlama sulama: tarımda doğru hat",
    excerpt:
      "Çap seçimi, rulo uzunluğu ve damlatıcı aralığı — tarımsal sulamada boru seçiminin temelleri.",
    date: "2026-01-22",
    category: "Sulama",
    cover: "/images/marketing/damlama-sulama-banner.jpg",
    content: [
      "Tokat kangal boru ve damlama sulama hatlarında çap, et kalınlığı ve rulo uzunluğu tarla tipine göre belirlenir.",
      "Damlama borularında damlatıcı aralığı bitki sırasına göre seçilir; kör (deliksiz) hatlar ise özel uygulamalarda kullanılır.",
      "Yalçın Isı, Tokat OSB'deki plastik üretim kapasitesiyle PE kangal ve damlama ürünlerini yerli olarak sunar.",
    ],
    seoTitle: "PE Kangal Boru ve Damlama Sulama | Yalçın Isı Blog",
    seoDescription:
      "Tokat kangal boru ve damlama sulama seçim notları. Yalçın Isı yerli üretim.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}
