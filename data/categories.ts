import type { ProductCategory, ProductCategorySlug } from "@/types/product";

export const categories: ProductCategory[] = [
  {
    slug: "pelet-sobalari",
    name: "Pelet Sobaları",
    shortLabel: "Pelet Sobaları",
    description:
      "Tokat pelet sobası üretimi — YPS iç ve dış mekân pelet sobaları. Doğal ısının modern teknolojiyle buluştuğu nokta.",
    image: "/images/categories/pelet-sobalari.jpg",
  },
  {
    slug: "pelet-yakit",
    name: "Pelet Yakıt",
    shortLabel: "Pelet",
    description:
      "Tokat pelet yakıt: pelet sobaları için yüksek kalorili, temiz yanan pelet yakıt çözümleri.",
    image: "/images/categories/pelet-yakit.jpg",
  },
  {
    slug: "gunes-enerji-sistemleri",
    name: "Güneş Enerji Sistemleri",
    shortLabel: "Güneş Enerjisi",
    description:
      "Tokat güneş enerjisi: güneş paneli elektrik üretimi, kolektör sistemleri, depolar ve sistem bileşenleri.",
    image: "/images/categories/gunes-enerjisi.jpg",
  },
  {
    slug: "ruzgar-enerjisi",
    name: "Rüzgâr Enerjisi",
    shortLabel: "Rüzgâr",
    description:
      "Tokat rüzgâr enerjisi yatırımları ve kendi üretimimizi destekleyen RES deneyimi.",
    image: "/images/categories/ruzgar-enerjisi.jpg",
  },
  {
    slug: "kangal-borular",
    name: "Kangal Borular",
    shortLabel: "Kangal Borular",
    description:
      "Tokat kangal boru üretimi: farklı çaplarda PE kangal borular; tarımsal ve endüstriyel kullanım.",
    image: "/images/categories/kangal-borular.jpg",
  },
  {
    slug: "damlama-sulama-borulari",
    name: "Damlama Sulama Boruları",
    shortLabel: "Damlama Sulama",
    description:
      "Tokat damlama sulama boruları: farklı çap, damlatıcı aralığı ve rulo uzunluklarında damlama ve kör sulama boruları.",
    image: "/images/categories/damlama-sulama.jpg",
  },
  {
    slug: "sulama-baglanti-parcalari",
    name: "Sulama Ekipmanları ve Bağlantı Parçaları",
    shortLabel: "Bağlantı Parçaları",
    description:
      "PE kaplin bağlantı parçaları, mandallı borular ve ekleri, mini vanalar, damlatıcı ve sprinkler ekipmanları.",
    image: "/images/categories/sulama-baglanti.jpg",
  },
  {
    slug: "elektrik-panolari",
    name: "Elektrik Panoları",
    shortLabel: "Elektrik Panoları",
    description:
      "Özel sac karkaslı, elektrostatik toz boyalı şantiye ve sayaçlı elektrik panoları — Tokat OSB'de üretim.",
    image: "/images/categories/elektrik-panolari.jpg",
  },
];

export type ProductGroup = {
  id: string;
  name: string;
  title: string;
  description: string;
  categories: ProductCategorySlug[];
  /** Tokat yerel landing sayfası */
  landing?: string;
};

/** Navbar ile aynı dört ana ürün grubu */
export const productGroups: ProductGroup[] = [
  {
    id: "pelet",
    name: "Pelet",
    title: "Pelet Sobası ve Pelet Yakıt",
    description:
      "Kendi patentimizle ürettiğimiz YPS pelet sobaları ve doğal çam talaşından çam pelet.",
    categories: ["pelet-sobalari", "pelet-yakit"],
    landing: "/tokat-pelet-soba",
  },
  {
    id: "enerji",
    name: "Enerji Sistemleri",
    title: "Güneş ve Rüzgâr Enerji Sistemleri",
    description:
      "3 / 6,2 / 11 kW güneş paketleri, kolektör ve vakum tüplü sistemler, rüzgâr enerjisi.",
    categories: ["gunes-enerji-sistemleri", "ruzgar-enerjisi"],
    landing: "/tokat-gunes-enerjisi",
  },
  {
    id: "kangal",
    name: "Kangal Borular",
    title: "Kangal Boru ve Sulama Sistemleri",
    description:
      "6 ve 10 ATÜ PE kangal boru, damlama sulama boruları, kaplin ve sulama ekipmanları.",
    categories: [
      "kangal-borular",
      "damlama-sulama-borulari",
      "sulama-baglanti-parcalari",
    ],
    landing: "/tokat-kangal-boru",
  },
  {
    id: "elektrik",
    name: "Elektrik Panoları",
    title: "Elektrik Panoları",
    description:
      "Sac karkaslı, elektrostatik toz boyalı sayaçlı ve şantiye panoları.",
    categories: ["elektrik-panolari"],
  },
];

export function getProductGroupByLanding(path: string) {
  return productGroups.find((g) => g.landing === path);
}

/** Ana sayfa / menüde öne çıkan enerji ürün grupları */
export const energyCategories = categories.filter((c) =>
  [
    "pelet-sobalari",
    "pelet-yakit",
    "gunes-enerji-sistemleri",
    "ruzgar-enerjisi",
  ].includes(c.slug)
);

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
