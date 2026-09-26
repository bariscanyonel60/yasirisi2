import { ProductCategory } from "@/types/product";

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
];

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
