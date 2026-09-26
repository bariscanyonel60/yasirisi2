import { Product } from "@/types/product";

// NOTE: Teknik özellikleri doğrulanmamış ürünler için "TODO" değeri
// kullanılmıştır. Gerçek veriler sağlandığında bu alanlar güncellenmelidir.

const TODO = "TODO";

export const pelletFeatures = [
  "Yüksek ısıtma gücü",
  "Doğal pelet yakıt",
  "Güvenli kullanım",
  "Modern tasarım",
] as const;

export const pelletPerformanceFeatures = [
  "Güçlü ısı performansı",
  "Güvenli kullanım",
  "Enerji tasarrufu",
  "Modern tasarım",
] as const;

function whatsappHref(productName: string) {
  const phone = "905442619205";
  const text = encodeURIComponent(
    `Merhaba, Yalçın Isı ${productName} hakkında bilgi ve fiyat almak istiyorum.`
  );
  return `https://wa.me/${phone}?text=${text}`;
}

type StoveMeta = {
  shortDescription: string;
  description: string;
  usageAreas: string[];
  images: string[];
};

const stoveMeta: Record<string, StoveMeta> = {
  "01": {
    shortDescription: "Dış mekân kule tip pelet sobası.",
    description:
      "YPS-01 pelet sobası; doğal ısının modern teknolojiyle buluştuğu noktada, yüksek ısıtma gücü ve modern tasarımıyla terasa ve dış mekâna sıcaklık taşır. Sıcaklık her zaman yanınızda.",
    usageAreas: ["Dış mekân", "Teras", "Bahçe"],
    images: [
      "/images/products/yps-01-pelet-sobasi/01.jpg",
      "/images/products/yps-01-pelet-sobasi/03.jpg",
    ],
  },
  "02": {
    shortDescription: "Dış mekân kule tip pelet sobası.",
    description:
      "YPS-02 pelet sobası; yüksek ısıtma gücü, doğal pelet yakıt ve güvenli kullanım ile dış mekân ısıtmada modern bir çözüm sunar. Sıcaklık her zaman yanınızda.",
    usageAreas: ["Dış mekân", "Teras", "Bahçe"],
    images: [
      "/images/products/yps-02-pelet-sobasi/01.jpg",
      "/images/products/yps-02-pelet-sobasi/03.jpg",
    ],
  },
  "03": {
    shortDescription: "Dış mekân ısıtıcı — pelet sobası.",
    description:
      "YPS-03 dış mekân ısıtıcı; güçlü ısı performansı, enerji tasarrufu ve modern tasarımıyla kafe, restoran ve teras alanları için üretilmiştir. Sıcaklık her yerde sizinle.",
    usageAreas: ["Dış mekân", "Kafe / restoran terası", "Ticari alan"],
    images: [
      "/images/products/yps-03-pelet-sobasi/01.jpg",
      "/images/products/yps-03-pelet-sobasi/03.jpg",
    ],
  },
  "04": {
    shortDescription: "İç mekân pelet sobası / ısıtıcı.",
    description:
      "YPS-04 iç mekân ısıtıcı; güçlü ısı performansı, güvenli kullanım ve enerji tasarrufu ile konut ve işyerlerinde modern pelet ısıtma sunar. Sıcaklık her yerde sizinle.",
    usageAreas: ["İç mekân", "Konut", "İşyeri"],
    images: [
      "/images/products/yps-04-pelet-sobasi/01.jpg",
      "/images/products/yps-04-pelet-sobasi/03.jpg",
    ],
  },
  "05": {
    shortDescription: "YPS serisi pelet sobası.",
    description:
      "Yalçın Isı YPS-05 pelet sobası. Verimli yanma, dayanıklı gövde ve modern tasarım. Detaylı teknik özellikler için iletişime geçin.",
    usageAreas: ["Konut", "İşyeri"],
    images: ["/images/products/yps-05-pelet-sobasi/01.jpg"],
  },
  "06": {
    shortDescription: "YPS serisi pelet sobası.",
    description:
      "Yalçın Isı YPS-06 pelet sobası. Verimli yanma, dayanıklı gövde ve modern tasarım. Detaylı teknik özellikler için iletişime geçin.",
    usageAreas: ["Konut", "İşyeri"],
    images: ["/images/products/yps-06-pelet-sobasi/01.jpg"],
  },
  "07": {
    shortDescription: "Dekoratif dış mekân pelet sobası — kule form.",
    description:
      "YPS-07 pelet sobası; dekoratif kule tasarımıyla teras ve bahçe alanlarına sıcaklık taşır. Doğal pelet yakıt, görünür alev ve modern dış mekân konforu. Sıcaklık her yerde sizinle.",
    usageAreas: ["Dış mekân", "Teras", "Bahçe"],
    images: [
      "/images/products/yps-07-pelet-sobasi/01.jpg",
      "/images/products/yps-07-pelet-sobasi/02.jpg",
    ],
  },
  "08": {
    shortDescription: "Endüstriyel formda dış mekân pelet sobası.",
    description:
      "YPS-08 pelet sobası; boru detaylı endüstriyel tasarımı ve güçlü ısıtma karakteriyle dış mekân ve ticari teraslar için üretilmiştir. Sıcaklık her yerde sizinle.",
    usageAreas: ["Dış mekân", "Teras", "Ticari alan"],
    images: [
      "/images/products/yps-08-pelet-sobasi/01.jpg",
      "/images/products/yps-08-pelet-sobasi/02.jpg",
    ],
  },
  "09": {
    shortDescription: "İç mekân endüstriyel pelet sobası.",
    description:
      "YPS-09 pelet sobası; iç mekân kullanımına uygun endüstriyel form, duvar baca bağlantısı ve görünür alev ile modern yaşam alanlarına sıcaklık sunar. Sıcaklık her yerde sizinle.",
    usageAreas: ["İç mekân", "Konut", "Ofis"],
    images: [
      "/images/products/yps-09-pelet-sobasi/01.jpg",
      "/images/products/yps-09-pelet-sobasi/02.jpg",
    ],
  },
  "10": {
    shortDescription: "Cam kule tip dış mekân pelet ısıtıcı.",
    description:
      "YPS-10 pelet sobası; cam silindir alev odası ve kule formuyla teras ve loungelarda premium dış mekân ısıtma sunar. Sıcaklık her yerde sizinle.",
    usageAreas: ["Dış mekân", "Teras", "Lounge"],
    images: [
      "/images/products/yps-10-pelet-sobasi/01.jpg",
      "/images/products/yps-10-pelet-sobasi/02.jpg",
    ],
  },
};

/** YPS-01 … YPS-10 */
export const pelletStoves: Product[] = Array.from({ length: 10 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const slug = `yps-${num}-pelet-sobasi`;
  const name = `YPS-${num}`;
  const meta = stoveMeta[num];
  return {
    id: slug,
    slug,
    name,
    category: "pelet-sobalari" as const,
    shortDescription: meta.shortDescription,
    description: meta.description,
    images: meta.images,
    technicalSpecs: [
      { label: "Isıtma Kapasitesi", value: TODO },
      { label: "Yakıt Deposu Kapasitesi", value: TODO },
      { label: "Enerji Verimliliği", value: TODO },
      { label: "Ağırlık", value: TODO },
      { label: "Ölçüler (G x D x Y)", value: TODO },
    ],
    usageAreas: meta.usageAreas,
    documents: [{ label: "Ürün Kataloğu (PDF)", href: "#" }],
    featured: true,
    seoTitle: `${name} Pelet Sobası | Yalçın Isı`,
    seoDescription: `Yalçın Isı ${name} pelet sobası — ${meta.shortDescription} Görseller, özellikler ve teklif.`,
  };
});


export const pelletFuel: Product[] = [
  {
    id: "pelet-yakit",
    slug: "pelet-yakit",
    name: "Pelet Yakıt",
    category: "pelet-yakit",
    shortDescription: "Pelet sobaları için yüksek kalorili pelet yakıt.",
    description:
      "Yalçın Isı pelet yakıtı, pelet sobalarında temiz ve verimli yanma için sunulur. Torba ve palet bazlı tedarik seçenekleri için iletişime geçin.",
    images: ["/images/products/pelet-yakit/01.jpg"],
    technicalSpecs: [
      { label: "Kalori Değeri", value: TODO },
      { label: "Nem Oranı", value: TODO },
      { label: "Kül Oranı", value: TODO },
      { label: "Ambalaj", value: TODO },
    ],
    usageAreas: ["Pelet sobası yakıtı", "Konut ısıtma", "İşyeri ısıtma"],
    featured: true,
    seoTitle: "Pelet Yakıt | Yalçın Isı",
    seoDescription:
      "Yalçın Isı pelet yakıtı — pelet sobası için yüksek kalorili yakıt çözümleri.",
  },
];

export const solarProducts: Product[] = [
  {
    id: "gunes-paneli-elektrik-uretimi",
    slug: "gunes-paneli-elektrik-uretimi",
    name: "Güneş Paneli Elektrik Üretimi",
    category: "gunes-enerji-sistemleri",
    shortDescription:
      "Fotovoltaik güneş paneli sistemleriyle elektrik üretimi.",
    description:
      "Konut, tarım ve tesis tipi uygulamalar için güneş paneli (PV) elektrik üretim sistemleri. Kurulum, panel seçimi ve sistem bileşenleri hakkında bilgi için iletişime geçin.",
    images: ["/images/products/gunes-panel-pv/01.jpg"],
    technicalSpecs: [
      { label: "Sistem Tipi", value: "Fotovoltaik (PV)" },
      { label: "Kurulu Güç Aralığı", value: TODO },
      { label: "Panel Tipi", value: TODO },
      { label: "İnverter", value: TODO },
    ],
    usageAreas: [
      "Konut elektrik üretimi",
      "Tarımsal sulama enerjisi",
      "Tesis / fabrika öz tüketim",
    ],
    featured: true,
    seoTitle: "Güneş Paneli Elektrik Üretimi | Yalçın Isı",
    seoDescription:
      "Yalçın Isı güneş paneli elektrik üretim sistemleri — PV çözümleri ve teklif.",
  },
  {
    id: "gunes-enerji-kolektor-sistemleri",
    slug: "gunes-enerjisi-kolektor-sistemleri",
    name: "Kolektör Sistemleri",
    category: "gunes-enerji-sistemleri",
    shortDescription: "Güneş enerjisi kolektör sistemleri.",
    description:
      "Yalçın Isı güneş enerjisi kolektör sistemleri, konut ve tesis tipi kurulumlar için farklı kapasitelerde üretilmektedir. Teknik detaylar için lütfen iletişime geçin.",
    images: ["/images/products/gunes-kolektor/01.jpg"],
    technicalSpecs: [
      { label: "Kolektör Tipi", value: TODO },
      { label: "Panel Ölçüleri", value: TODO },
      { label: "Verimlilik", value: TODO },
    ],
    seoTitle: "Güneş Enerjisi Kolektör Sistemleri | Yalçın Isı",
    seoDescription:
      "Yalçın Isı güneş enerjisi kolektör sistemleri hakkında bilgi alın.",
  },
  {
    id: "gunes-enerji-depolari",
    slug: "gunes-enerjisi-depolari",
    name: "Depolar",
    category: "gunes-enerji-sistemleri",
    shortDescription: "Güneş enerjisi sistem depoları.",
    description:
      "Sistemle bütünleşik çalışan depolar, farklı litre kapasiteleriyle konut ve ticari kullanıma uygun şekilde üretilmektedir.",
    images: ["/images/products/gunes-depo/01.jpg"],
    technicalSpecs: [
      { label: "Kapasite", value: TODO },
      { label: "İzolasyon Tipi", value: TODO },
      { label: "Malzeme", value: TODO },
    ],
    seoTitle: "Güneş Enerjisi Depoları | Yalçın Isı",
    seoDescription: "Yalçın Isı güneş enerjisi depoları hakkında bilgi alın.",
  },
  {
    id: "gunes-enerji-sistem-bilesenleri",
    slug: "gunes-enerjisi-sistem-bilesenleri",
    name: "Sistem Bileşenleri",
    category: "gunes-enerji-sistemleri",
    shortDescription: "Güneş enerjisi sistemlerine ait tamamlayıcı bileşenler.",
    description:
      "Montaj aksamı, bağlantı elemanları ve sistemi tamamlayan diğer bileşenler.",
    images: ["/images/products/gunes-bilesen/01.jpg"],
    technicalSpecs: [{ label: "Kapsam", value: TODO }],
    seoTitle: "Güneş Enerjisi Sistem Bileşenleri | Yalçın Isı",
    seoDescription:
      "Yalçın Isı güneş enerjisi sistem bileşenleri hakkında bilgi alın.",
  },
];

export const windProducts: Product[] = [
  {
    id: "ruzgar-enerjisi-santrali",
    slug: "ruzgar-enerjisi-santrali",
    name: "Rüzgâr Enerjisi Santrali",
    category: "ruzgar-enerjisi",
    shortDescription:
      "OKA destekli lisanssız rüzgâr enerjisi yatırımı deneyimi.",
    description:
      "Tokat'ta OKA destekli proje kapsamında gerçekleştirdiğimiz lisanssız rüzgâr enerji santrali ile üretimimizin bir kısmını kendi ürettiğimiz yenilenebilir enerjiyle karşılıyoruz. Benzer yatırımlar ve rüzgâr enerjisi çözümleri için iletişime geçin.",
    images: ["/images/products/ruzgar-enerjisi/01.jpg"],
    technicalSpecs: [
      { label: "Kurulu Güç", value: "100 kW" },
      { label: "Destek", value: "OKA" },
      { label: "Konum", value: "Tokat" },
      { label: "Lisans Tipi", value: "Lisanssız" },
    ],
    usageAreas: [
      "Öz tüketim",
      "Yenilenebilir enerji yatırımı",
      "Sürdürülebilir üretim",
    ],
    featured: true,
    seoTitle: "Rüzgâr Enerjisi Santrali | Yalçın Isı",
    seoDescription:
      "Yalçın Isı 100 kW lisanssız rüzgâr enerjisi santrali ve yenilenebilir enerji yatırımları.",
  },
];

export const coilPipes: Product[] = [
  {
    id: "pe-kangal-boru",
    slug: "pe-kangal-boru",
    name: "PE Kangal Boru",
    category: "kangal-borular",
    shortDescription: "Farklı çap seçenekleriyle PE kangal boru.",
    description:
      "Tarımsal sulama ve farklı endüstriyel uygulamalarda kullanılan PE kangal borular, çeşitli çap seçenekleriyle üretilmektedir. Çap bazlı teknik ölçü ve ağırlık tablosu için lütfen iletişime geçin.",
    images: ["/images/products/pe-kangal-boru/01.jpg"],
    technicalSpecs: [
      { label: "Çap Seçenekleri", value: TODO },
      { label: "Et Kalınlığı", value: TODO },
      { label: "Ağırlık (metre başına)", value: TODO },
      { label: "Rulo Uzunluğu", value: TODO },
    ],
    usageAreas: ["Tarımsal sulama", TODO],
    seoTitle: "PE Kangal Boru | Yalçın Isı",
    seoDescription:
      "Yalçın Isı PE kangal boru çap seçenekleri ve teknik bilgiler.",
  },
];

export const dripIrrigationPipes: Product[] = [
  {
    id: "16mm-deliksiz-400m-kor-boru",
    slug: "16-mm-deliksiz-400-m-damlama-kor-borusu",
    name: "16 mm Deliksiz 400 m Damlama Kör Borusu",
    category: "damlama-sulama-borulari",
    shortDescription: "16 mm çapında deliksiz (kör) damlama borusu, 400 m rulo.",
    description:
      "Damlatıcısız kör hat gerektiren tarımsal sulama uygulamaları için 16 mm çapında, 400 metre rulo uzunluğunda damlama kör borusu.",
    images: ["/images/products/damlama/16mm-kor-400m/01.jpg"],
    technicalSpecs: [
      { label: "Çap", value: "16 mm" },
      { label: "Damlatıcı Aralığı", value: "Deliksiz (kör boru)" },
      { label: "Rulo Uzunluğu", value: "400 m" },
    ],
    usageAreas: ["Ana/besleme hattı", "Tarımsal sulama sistemleri"],
    seoTitle: "16 mm Deliksiz 400 m Damlama Kör Borusu | Yalçın Isı",
    seoDescription:
      "16 mm çapında, 400 metre rulo, deliksiz damlama kör borusu teknik bilgileri ve teklif.",
  },
  {
    id: "16mm-20cm-400m-damlama-borusu",
    slug: "16-mm-20-cm-400-m-damlama-borusu",
    name: "16 mm / 20 cm / 400 m Damlama Borusu",
    category: "damlama-sulama-borulari",
    shortDescription: "16 mm çap, 20 cm damlatıcı aralığı, 400 m rulo.",
    description:
      "16 mm çapında, damlatıcılar arası 20 cm aralıkla üretilen, 400 metre rulo uzunluğunda damlama borusu.",
    images: ["/images/products/damlama/16mm-20cm-400m/01.jpg"],
    technicalSpecs: [
      { label: "Çap", value: "16 mm" },
      { label: "Damlatıcı Aralığı", value: "20 cm" },
      { label: "Rulo Uzunluğu", value: "400 m" },
    ],
    usageAreas: ["Sık dikim tarımsal sulama", "Sebze üretimi"],
    seoTitle: "16 mm / 20 cm / 400 m Damlama Borusu | Yalçın Isı",
    seoDescription:
      "16 mm çap, 20 cm damlatıcı aralığı, 400 m rulo damlama borusu teknik bilgileri ve teklif.",
  },
  {
    id: "16mm-25cm-400m-damlama-borusu",
    slug: "16-mm-25-cm-400-m-damlama-borusu",
    name: "16 mm / 25 cm / 400 m Damlama Borusu",
    category: "damlama-sulama-borulari",
    shortDescription: "16 mm çap, 25 cm damlatıcı aralığı, 400 m rulo.",
    description:
      "16 mm çapında, damlatıcılar arası 25 cm aralıkla üretilen, 400 metre rulo uzunluğunda damlama borusu.",
    images: ["/images/products/damlama/16mm-25cm-400m/01.jpg"],
    technicalSpecs: [
      { label: "Çap", value: "16 mm" },
      { label: "Damlatıcı Aralığı", value: "25 cm" },
      { label: "Rulo Uzunluğu", value: "400 m" },
    ],
    usageAreas: ["Tarımsal sulama", "Bahçe ve bağ sulaması"],
    seoTitle: "16 mm / 25 cm / 400 m Damlama Borusu | Yalçın Isı",
    seoDescription:
      "16 mm çap, 25 cm damlatıcı aralığı, 400 m rulo damlama borusu teknik bilgileri ve teklif.",
  },
  {
    id: "16mm-33cm-400m-damlama-borusu",
    slug: "16-mm-33-cm-400-m-damlama-borusu",
    name: "16 mm / 33 cm / 400 m Damlama Borusu",
    category: "damlama-sulama-borulari",
    shortDescription: "16 mm çap, 33 cm damlatıcı aralığı, 400 m rulo.",
    description:
      "16 mm çapında, damlatıcılar arası 33 cm aralıkla üretilen, 400 metre rulo uzunluğunda damlama borusu.",
    images: ["/images/products/damlama/16mm-33cm-400m/01.jpg"],
    technicalSpecs: [
      { label: "Çap", value: "16 mm" },
      { label: "Damlatıcı Aralığı", value: "33 cm" },
      { label: "Rulo Uzunluğu", value: "400 m" },
    ],
    usageAreas: ["Geniş aralıklı dikim", "Meyve bahçeleri"],
    seoTitle: "16 mm / 33 cm / 400 m Damlama Borusu | Yalçın Isı",
    seoDescription:
      "16 mm çap, 33 cm damlatıcı aralığı, 400 m rulo damlama borusu teknik bilgileri ve teklif.",
  },
  {
    id: "20mm-deliksiz-200m-kor-boru",
    slug: "20-mm-deliksiz-200-m-damlama-kor-borusu",
    name: "20 mm Deliksiz 200 m Damlama Kör Borusu",
    category: "damlama-sulama-borulari",
    shortDescription: "20 mm çapında deliksiz (kör) damlama borusu, 200 m rulo.",
    description:
      "Daha yüksek debi gereken hatlar için 20 mm çapında, 200 metre rulo uzunluğunda deliksiz damlama kör borusu.",
    images: ["/images/products/damlama/20mm-kor-200m/01.jpg"],
    technicalSpecs: [
      { label: "Çap", value: "20 mm" },
      { label: "Damlatıcı Aralığı", value: "Deliksiz (kör boru)" },
      { label: "Rulo Uzunluğu", value: "200 m" },
    ],
    usageAreas: ["Ana/besleme hattı", "Yüksek debili sulama sistemleri"],
    seoTitle: "20 mm Deliksiz 200 m Damlama Kör Borusu | Yalçın Isı",
    seoDescription:
      "20 mm çapında, 200 metre rulo, deliksiz damlama kör borusu teknik bilgileri ve teklif.",
  },
];

export const allProducts: Product[] = [
  ...pelletStoves,
  ...pelletFuel,
  ...solarProducts,
  ...windProducts,
  ...coilPipes,
  ...dripIrrigationPipes,
];

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return allProducts.filter((p) => p.category === category);
}

export function getFeaturedPelletStoves() {
  return pelletStoves.filter((p) => p.featured);
}

export { whatsappHref };
