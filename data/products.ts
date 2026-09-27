import { Product } from "@/types/product";

// NOTE: Teknik özellikleri doğrulanmamış ürünler için "TODO" değeri
// kullanılmıştır. Gerçek veriler sağlandığında bu alanlar güncellenmelidir.

const TODO = "TODO";

const CATALOG_PDF = "/katalog/yalcin-isi-2026-urun-katalogu.pdf";
const catalogDoc = [{ label: "2026 Ürün Kataloğu (PDF)", href: CATALOG_PDF }];

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
    documents: catalogDoc,
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
    shortDescription:
      "Doğal çam talaşından üretilen çam pelet — Tokat OSB'deki kendi tesisimizde.",
    description:
      "Doğanın enerjisi: Yalçın Isı çam pelet, doğal çam talaşından kendi pelet üretim tesisimizde üretilir. %100 doğal, yüksek yanma verimi, çevre dostu ve uzun süreli ısı sunar; YPS pelet sobalarıyla birlikte bütünleşik ısıtma sağlar. Torba ve palet bazlı tedarik için iletişime geçin.",
    images: [
      "/images/products/pelet-yakit/01.jpg",
      "/images/products/pelet-yakit/02.jpg",
    ],
    technicalSpecs: [
      { label: "Hammadde", value: "Doğal çam talaşı" },
      { label: "Üretim", value: "Kendi tesisimiz — Tokat OSB" },
      { label: "Kalori Değeri", value: TODO },
      { label: "Nem Oranı", value: TODO },
      { label: "Kül Oranı", value: TODO },
      { label: "Ambalaj", value: TODO },
    ],
    usageAreas: ["Pelet sobası yakıtı", "Konut ısıtma", "İşyeri ısıtma"],
    documents: catalogDoc,
    featured: true,
    seoTitle: "Tokat Çam Pelet Yakıt | Yalçın Isı",
    seoDescription:
      "Tokat çam pelet yakıt: doğal çam talaşından, %100 doğal, yüksek yanma verimli pelet. Yalçın Isı yerli üretim.",
  },
];

type SolarKit = {
  slug: string;
  name: string;
  power: string;
  panels: string;
  storage: string;
  inverter: string;
  image: string;
  summary: string;
};

const solarKits: SolarKit[] = [
  {
    slug: "3-kw-gunes-enerji-sistemi-2-panel",
    name: "3 kW Güneş Enerji Sistemi (2 Panel)",
    power: "3 kW inverter",
    panels: "2 adet güneş paneli (toplam 1 kW)",
    storage: "2 adet 12V 200Ah deep cycle akü",
    inverter: "1 adet 3 kW solar inverter",
    image: "/images/products/gunes-kit-3kw-2panel/01.jpg",
    summary: "Bağ evi ve küçük konutlar için giriş seviyesi off-grid set.",
  },
  {
    slug: "3-kw-gunes-enerji-sistemi-4-panel",
    name: "3 kW Güneş Enerji Sistemi (4 Panel)",
    power: "3 kW inverter",
    panels: "4 adet güneş paneli",
    storage: "4 adet akü",
    inverter: "1 adet 3 kW solar inverter",
    image: "/images/products/gunes-kit-3kw-4panel/01.jpg",
    summary: "Daha yüksek üretim ve depolama isteyen evler için 3 kW set.",
  },
  {
    slug: "6-2-kw-gunes-enerji-sistemi",
    name: "6,2 kW Güneş Enerji Sistemi",
    power: "6,2 kW MPPT inverter",
    panels: "5 adet güneş paneli",
    storage: "51,2V 100Ah lityum batarya (5,12 kWh)",
    inverter: "1 adet 6,2 kW MPPT inverter",
    image: "/images/products/gunes-kit-6-2kw/01.jpg",
    summary: "Lityum bataryalı, uzun ömürlü konut ve iş yeri sistemi.",
  },
  {
    slug: "11-kw-gunes-enerji-sistemi",
    name: "11 kW Güneş Enerji Sistemi",
    power: "11 kW inverter",
    panels: "16 adet güneş paneli",
    storage: "2 adet 51,2V 100Ah lityum batarya",
    inverter: "1 adet 11 kW inverter",
    image: "/images/products/gunes-kit-11kw/01.jpg",
    summary: "Yüksek tüketimli ev, çiftlik ve iş yerleri için güçlü sistem.",
  },
];

const solarKitProducts: Product[] = solarKits.map((kit) => ({
  id: kit.slug,
  slug: kit.slug,
  name: kit.name,
  category: "gunes-enerji-sistemleri" as const,
  shortDescription: kit.summary,
  description: `${kit.name}: ${kit.panels}, ${kit.storage} ve ${kit.inverter}. Temiz enerji, kesintisiz güç — kendi enerjinizi üretin. Tokat ve çevresinde keşif, kurulum ve teklif için Yalçın Isı ile iletişime geçin.`,
  images: [kit.image],
  technicalSpecs: [
    { label: "İnverter Gücü", value: kit.power },
    { label: "Güneş Paneli", value: kit.panels },
    { label: "Depolama", value: kit.storage },
    { label: "İnverter", value: kit.inverter },
  ],
  usageAreas: ["Konut", "Bağ evi", "İş yeri", "Kesintisiz güç"],
  documents: catalogDoc,
  featured: true,
  seoTitle: `${kit.name} | Tokat Güneş Enerjisi | Yalçın Isı`,
  seoDescription: `Tokat güneş enerjisi: ${kit.name} — ${kit.panels}, ${kit.storage}. Yalçın Isı keşif ve teklif.`,
}));

export const solarProducts: Product[] = [
  ...solarKitProducts,
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
    shortDescription:
      "2 kolektörlü ve 18 / 24 / 30 / 36 vakum tüplü güneş enerji sistemleri.",
    description:
      "Güneşin enerjisi daima sizinle: Yalçın Isı sıcak su güneş enerji sistemleri; 2 kolektörlü (düz kolektör) ve 18, 24, 30, 36 vakum tüplü modellerle konut ve tesis ihtiyacına göre seçilir. Yüksek verim, doğa dostu, uzun ömürlü ve ekonomik çözüm.",
    images: [
      "/images/products/gunes-kolektor/02.jpg",
      "/images/products/gunes-kolektor/01.jpg",
    ],
    technicalSpecs: [
      { label: "Düz Kolektörlü", value: "2 kolektörlü sistem" },
      { label: "Vakum Tüplü", value: "18 / 24 / 30 / 36 tüp" },
      { label: "Kullanım", value: "Sıcak su" },
    ],
    usageAreas: ["Konut sıcak su", "Tesis / otel", "Tarımsal tesis"],
    documents: catalogDoc,
    seoTitle: "Tokat Güneş Kolektör ve Vakum Tüplü Sistem | Yalçın Isı",
    seoDescription:
      "Tokat güneş enerjisi sıcak su: 2 kolektörlü ve 18-36 vakum tüplü sistemler. Yalçın Isı teklif.",
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

/** Katalog: "Kangal boru ve ağırlık tablosu" — [çap, rulo m, toplam ağırlık] */
const coilWeights6Atu: [string, number, string | null][] = [
  ["16", 100, "6–7 kg"],
  ["18", 100, "7–8 kg"],
  ["20", 100, "11–14 kg"],
  ["25", 100, "13–17 kg"],
  ["32", 100, "20–23 kg"],
  ["40", 100, "30–33 kg"],
  ["50", 100, "39–42 kg"],
  ["63", 100, "59–62 kg"],
  ["75", 100, "79–83 kg"],
  ["90", 50, null],
  ["110", 50, null],
];

const coilWeights10Atu: [string, number, string | null][] = [
  ["16", 100, "7–9 kg"],
  ["18", 100, "9–10 kg"],
  ["20", 100, "14–17 kg"],
  ["25", 100, "19–23 kg"],
  ["32", 100, "29–33 kg"],
  ["40", 100, "39–42 kg"],
  ["50", 100, "59–62 kg"],
  ["63", 100, "79–83 kg"],
  ["75", 100, "99–105 kg"],
  ["90", 50, "73–78 kg"],
  ["110", 50, "99–104 kg"],
];

function coilSpecs(rows: [string, number, string | null][]) {
  return rows.map(([dia, roll, weight]) => ({
    label: `Ø${dia} mm · ${roll} m rulo`,
    value: weight ?? "Teklifte bildirilir",
  }));
}

export const coilPipes: Product[] = [
  {
    id: "pe-kangal-boru",
    slug: "pe-kangal-boru",
    name: "PE Kangal Boru",
    category: "kangal-borular",
    shortDescription:
      "Ø16–110 mm, 6 ve 10 ATÜ basınç sınıfında PE kangal boru.",
    description:
      "Tokat OSB'deki tesisimizde günlük 2.000 kg kapasiteyle üretilen PE kangal borular; tarımsal sulama, içme/kullanma suyu hatları ve endüstriyel uygulamalar için Ø16'dan Ø110 mm'ye kadar, 6 ATÜ ve 10 ATÜ basınç sınıflarında sunulur. Ø16–75 mm 100 m, Ø90–110 mm 50 m rulo halinde teslim edilir.",
    images: ["/images/categories/kangal-borular.jpg"],
    technicalSpecs: [
      { label: "Çap Aralığı", value: "Ø16 – Ø110 mm" },
      { label: "Basınç Sınıfı", value: "6 ATÜ / 10 ATÜ" },
      { label: "Rulo Uzunluğu", value: "100 m (Ø16–75) · 50 m (Ø90–110)" },
      { label: "Üretim Kapasitesi", value: "Günlük 2.000 kg" },
    ],
    usageAreas: ["Tarımsal sulama", "Su hatları", "Endüstriyel kullanım"],
    documents: catalogDoc,
    featured: true,
    seoTitle: "Tokat PE Kangal Boru | 6 ve 10 ATÜ | Yalçın Isı",
    seoDescription:
      "Tokat kangal boru: Ø16–110 mm, 6 ve 10 ATÜ PE kangal boru, 100 m / 50 m rulo. Yalçın Isı yerli üretim.",
  },
  {
    id: "pe-kangal-boru-6-atu",
    slug: "pe-kangal-boru-6-atu",
    name: "PE Kangal Boru 6 ATÜ",
    category: "kangal-borular",
    shortDescription: "6 ATÜ PE kangal boru — çap ve ağırlık tablosu.",
    description:
      "6 ATÜ basınç sınıfı PE kangal boru; tarımsal sulama ve düşük/orta basınçlı hatlar için. Aşağıdaki tabloda çap, rulo uzunluğu ve rulo başına toplam ağırlık aralıkları yer alır.",
    images: ["/images/categories/kangal-borular.jpg"],
    technicalSpecs: coilSpecs(coilWeights6Atu),
    usageAreas: ["Tarımsal sulama", "Bahçe hatları"],
    documents: catalogDoc,
    seoTitle: "6 ATÜ PE Kangal Boru Ağırlık Tablosu | Yalçın Isı",
    seoDescription:
      "6 ATÜ PE kangal boru çap ve ağırlık tablosu: Ø16–110 mm, 100 m / 50 m rulo. Tokat Yalçın Isı.",
  },
  {
    id: "pe-kangal-boru-10-atu",
    slug: "pe-kangal-boru-10-atu",
    name: "PE Kangal Boru 10 ATÜ",
    category: "kangal-borular",
    shortDescription: "10 ATÜ PE kangal boru — çap ve ağırlık tablosu.",
    description:
      "10 ATÜ basınç sınıfı PE kangal boru; daha yüksek basınç gerektiren ana hatlar ve endüstriyel uygulamalar için. Tabloda çap, rulo uzunluğu ve rulo başına toplam ağırlık aralıkları yer alır.",
    images: ["/images/categories/kangal-borular.jpg"],
    technicalSpecs: coilSpecs(coilWeights10Atu),
    usageAreas: ["Ana su hattı", "Tarımsal sulama", "Endüstriyel kullanım"],
    documents: catalogDoc,
    seoTitle: "10 ATÜ PE Kangal Boru Ağırlık Tablosu | Yalçın Isı",
    seoDescription:
      "10 ATÜ PE kangal boru çap ve ağırlık tablosu: Ø16–110 mm, 100 m / 50 m rulo. Tokat Yalçın Isı.",
  },
];

export const irrigationFittings: Product[] = [
  {
    id: "kaplin-baglanti-parcalari",
    slug: "pe-kaplin-baglanti-parcalari",
    name: "PE Kaplin Bağlantı Parçaları",
    category: "sulama-baglanti-parcalari",
    shortDescription:
      "Manşon, dirsek, te, kör tapa, adaptör, redüksiyon ve küresel vana.",
    description:
      "PE borular için kaplin (sıkıştırmalı) bağlantı parçaları: kaplin manşon, dirsek, te, kör tapa, dişi/erkek adaptör, redüksiyon manşon/dirsek/te, metal yüzüklü dişi adaptör ve içten dişli küresel vana. Ø20'den Ø110 mm'ye kadar ölçüler; poşet içi adetler katalogda yer alır.",
    images: ["/images/products/kaplin-baglanti/01.jpg"],
    imageFit: "contain",
    technicalSpecs: [
      { label: "Çap Aralığı", value: "Ø20 – Ø110 mm" },
      {
        label: "Ürün Tipleri",
        value: "Manşon, dirsek, te, kör tapa, adaptör, redüksiyon",
      },
      { label: "Küresel Vana", value: '1/2" – 4" içten dişli' },
    ],
    usageAreas: ["PE kangal boru hatları", "Tarımsal sulama", "Su tesisatı"],
    documents: catalogDoc,
    seoTitle: "PE Kaplin Bağlantı Parçaları | Tokat | Yalçın Isı",
    seoDescription:
      "Tokat PE kaplin: manşon, dirsek, te, kör tapa, adaptör, redüksiyon ve küresel vana. Ø20–110 mm. Yalçın Isı.",
  },
  {
    id: "mandalli-boru-ve-ekleri",
    slug: "mandalli-boru-ve-ekleri",
    name: "Mandallı Boru ve Ekleri",
    category: "sulama-baglanti-parcalari",
    shortDescription: "63 / 75 / 90 / 110 mm mandallı boru, dirsek, te, istavroz.",
    description:
      "Yağmurlama ve yüzey sulama hatları için mandallı borular (63, 75, 90, 110 mm) ve mandallı ekler: dişi/erkek başlık, te, istavroz, dişi/erkek köprü, dirsek, abot, redüksiyon, hat vanası ve motor çıkış parçaları. Hızlı kurulum, sökülüp taşınabilir hatlar.",
    images: [
      "/images/products/mandalli-boru/01.jpg",
      "/images/products/mandalli-boru/02.jpg",
    ],
    technicalSpecs: [
      { label: "Boru Çapları", value: "63 / 75 / 90 / 110 mm" },
      {
        label: "Ekler",
        value: "Başlık, te, istavroz, köprü, dirsek, redüksiyon",
      },
    ],
    usageAreas: ["Yağmurlama sulama", "Tarla sulama", "Motopomp hatları"],
    documents: catalogDoc,
    seoTitle: "Mandallı Boru ve Ekleri | Tokat | Yalçın Isı",
    seoDescription:
      "Tokat mandallı boru: 63, 75, 90, 110 mm borular ve mandallı ekler. Yalçın Isı sulama ekipmanları.",
  },
  {
    id: "sulama-ekipmanlari",
    slug: "damlama-sulama-ekipmanlari",
    name: "Damlama Sulama Ekipmanları",
    category: "sulama-baglanti-parcalari",
    shortDescription:
      "Mini vanalar, damlatıcılar, sprinkler, ek parçalar ve aparatlar.",
    description:
      "Damlama ve mini sprink sistemleri için tamamlayıcı ekipmanlar: küresel mini vanalar, yassı boru vanaları, conta ve grommetler, boru delme aparatları, ayarlı/ayarsız damlatıcılar, mini sprinkler ve sisleme uçları, spagetti borular, ek ve dirsek nipelleri, kör tapalar ve boru askı elemanları.",
    images: ["/images/products/sulama-ekipmanlari/01.jpg"],
    imageFit: "contain",
    technicalSpecs: [
      { label: "Kapsam", value: "Vana, damlatıcı, sprink, ek parçası" },
      { label: "Ölçüler", value: "Ø16 / Ø17 / Ø20 hatlar" },
    ],
    usageAreas: ["Damlama sulama", "Sera", "Bahçe ve bağ"],
    documents: catalogDoc,
    seoTitle: "Damlama Sulama Ekipmanları | Tokat | Yalçın Isı",
    seoDescription:
      "Tokat damlama sulama ekipmanları: mini vana, damlatıcı, sprinkler ve bağlantı parçaları. Yalçın Isı.",
  },
];

export const electricalPanels: Product[] = [
  {
    id: "sayacli-elektrik-panolari",
    slug: "sayacli-elektrik-panolari",
    name: "Sayaçlı Elektrik Panoları",
    category: "elektrik-panolari",
    shortDescription: "2, 3, 4, 9 ve 16 sayaçlı pano seçenekleri.",
    description:
      "Konut, site ve iş merkezleri için sayaçlı elektrik panoları: 2, 3, 4, 9 (77,50 + 1 PRO) ve 16 (14 EKO + 2 PRO) sayaçlı tipler. Özel sac karkas, elektrostatik toz boya; güvenli, dayanıklı ve uzun ömürlü. Tokat OSB'de kendi tesisimizde üretilir.",
    images: [
      "/images/products/elektrik-panolari/02.jpg",
      "/images/products/elektrik-panolari/01.jpg",
    ],
    imageFit: "contain",
    technicalSpecs: [
      { label: "Sayaç Seçenekleri", value: "2 / 3 / 4 / 9 / 16" },
      { label: "Gövde", value: "Özel sac karkas" },
      { label: "Yüzey", value: "Elektrostatik toz boya" },
    ],
    usageAreas: ["Konut", "Apartman / site", "İş merkezi"],
    documents: catalogDoc,
    seoTitle: "Sayaçlı Elektrik Panosu | Tokat | Yalçın Isı",
    seoDescription:
      "Tokat sayaçlı elektrik panosu: 2, 3, 4, 9 ve 16 sayaçlı, sac karkas, toz boyalı pano imalatı. Yalçın Isı.",
  },
  {
    id: "santiye-panosu",
    slug: "santiye-panosu",
    name: "Şantiye Panosu",
    category: "elektrik-panolari",
    shortDescription: "İnşaat sahaları için dayanıklı şantiye elektrik panosu.",
    description:
      "İnşaat ve geçici saha elektriği için şantiye panosu; sac karkas gövde, elektrostatik toz boya ve kolay montaj. Yüksek güvenlik ve dış ortam koşullarına dayanıklı yapı.",
    images: [
      "/images/products/elektrik-panolari/01.jpg",
      "/images/products/elektrik-panolari/02.jpg",
    ],
    imageFit: "contain",
    technicalSpecs: [
      { label: "Gövde", value: "Özel sac karkas" },
      { label: "Yüzey", value: "Elektrostatik toz boya" },
      { label: "Kullanım", value: "Şantiye / geçici saha" },
    ],
    usageAreas: ["İnşaat sahası", "Geçici elektrik"],
    documents: catalogDoc,
    seoTitle: "Şantiye Panosu | Tokat Elektrik Pano İmalatı | Yalçın Isı",
    seoDescription:
      "Tokat şantiye panosu: sac karkas, toz boyalı, dayanıklı elektrik panosu imalatı. Yalçın Isı.",
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
  ...irrigationFittings,
  ...electricalPanels,
];

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return allProducts.filter((p) => p.category === category);
}

/** Kategoriler arasında sırayla seçer; her kategoriden en az bir ürün görünür */
export function getProductsAcrossCategories(
  categorySlugs: readonly string[],
  limit: number
) {
  const lists = categorySlugs.map((slug) => getProductsByCategory(slug));
  const picked: Product[] = [];
  for (let i = 0; picked.length < limit; i++) {
    const round = lists.map((list) => list[i]).filter(Boolean);
    if (round.length === 0) break;
    picked.push(...round);
  }
  return picked.slice(0, limit);
}

export function getFeaturedPelletStoves() {
  return pelletStoves.filter((p) => p.featured);
}

export { whatsappHref };
