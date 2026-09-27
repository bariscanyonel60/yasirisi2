export const site = {
  name: "Yalçın Isı",
  domain: "www.yalcinisi.com.tr",
  url: "https://www.yalcinisi.com.tr",
  phoneDisplay: "0544 261 92 05",
  phoneHref: "tel:+905442619205",
  whatsappNumber: "905442619205",
  instagram: "https://instagram.com/yalcinpeletsobasi",
  instagramHandle: "@yalcinpeletsobasi",
  email: "tokatyalcinisi@hotmail.com",
  /** Satış hatları (0544 261 92 04-05-06-07) + sabit hat */
  phones: [
    { display: "0544 261 92 04", href: "tel:+905442619204" },
    { display: "0544 261 92 05", href: "tel:+905442619205" },
    { display: "0544 261 92 06", href: "tel:+905442619206" },
    { display: "0544 261 92 07", href: "tel:+905442619207" },
    { display: "0541 201 46 82", href: "tel:+905412014682" },
    { display: "0356 214 51 10", href: "tel:+903562145110" },
  ],
  technicalService: [
    { display: "0541 784 72 44", href: "tel:+905417847244" },
    { display: "0543 541 52 41", href: "tel:+905435415241" },
  ],
  officeAddress: "Yeniyurt Mah. İsmail Altıngövde Cad. No:30 Merkez/Tokat",
  factoryAddress:
    "Bedestenlioğlu OSB 2. Kısım, 7. Cadde No:24, 60150 Merkez/Tokat",
  catalogPdf: "/katalog/yalcin-isi-2026-urun-katalogu.pdf",
  description:
    "Tokat pelet sobası, Tokat güneş enerjisi ve Tokat kangal boru: Yalçın Isı 1993'ten bu yana pelet yakıt, YPS pelet sobası, güneş paneli, rüzgâr enerjisi ve PE kangal boru üretir.",
  tagline: "Doğal ısının modern teknolojiyle buluştuğu nokta",
  city: "Tokat",
  region: "Tokat",
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** Menüyü aktif gösterecek ek path önekleri (ör. ürün detay sayfaları) */
  match?: string[];
  /** Açılır pencerenin altındaki "tümü" linki */
  footerLink?: { label: string; href: string };
};

const allProductsLink = { label: "Tüm ürünler", href: "/urunler" };

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/kurumsal",
    children: [
      {
        label: "Hakkımızda",
        href: "/kurumsal",
        description: "1993'ten bugüne üretim hikâyemiz",
      },
      {
        label: "Üretim",
        href: "/uretim",
        description: "OSB kampüsü ve üretim kapasitesi",
      },
      {
        label: "Projeler",
        href: "/projeler",
        description: "Yenilenebilir enerji ve sanayi projeleri",
      },
      {
        label: "Belgelerimiz",
        href: "/belgelerimiz",
        description: "Kalite ve teşekkür belgeleri",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Pelet, güneş ve üretim yazıları",
      },
      {
        label: "KVKK",
        href: "/kvkk",
        description: "Kişisel verilerin korunması",
      },
      {
        label: "Gizlilik Politikası",
        href: "/gizlilik-politikasi",
      },
      {
        label: "Çerez Politikası",
        href: "/cerez-politikasi",
      },
    ],
  },
  {
    label: "Pelet",
    href: "/urunler/kategori/pelet-sobalari",
    match: ["/urunler/yps-", "/urunler/pelet-yakit", "/tokat-pelet-soba"],
    footerLink: allProductsLink,
    children: [
      {
        label: "Pelet Sobaları",
        href: "/urunler/kategori/pelet-sobalari",
        description: "YPS-01 … YPS-10 iç ve dış mekân modelleri",
      },
      {
        label: "Pelet Yakıt",
        href: "/urunler/kategori/pelet-yakit",
        description: "Doğal çam talaşından çam pelet",
      },
      {
        label: "Tokat Pelet Sobası",
        href: "/tokat-pelet-soba",
        description: "Yerli üretim, keşif ve teklif",
      },
    ],
  },
  {
    label: "Enerji Sistemleri",
    href: "/urunler/kategori/gunes-enerji-sistemleri",
    match: [
      "/urunler/gunes",
      "/urunler/3-kw",
      "/urunler/6-2-kw",
      "/urunler/11-kw",
      "/urunler/ruzgar",
      "/tokat-gunes-enerjisi",
    ],
    footerLink: allProductsLink,
    children: [
      {
        label: "Güneş Enerji Sistemleri",
        href: "/urunler/kategori/gunes-enerji-sistemleri",
        description: "3 / 6,2 / 11 kW paketler, panel ve inverter",
      },
      {
        label: "Güneş Kolektör ve Vakum Tüplü",
        href: "/urunler/gunes-enerjisi-kolektor-sistemleri",
        description: "2 kolektörlü, 18–36 vakum tüplü sıcak su",
      },
      {
        label: "Rüzgâr Enerjisi",
        href: "/urunler/kategori/ruzgar-enerjisi",
        description: "100 kW RES deneyimi",
      },
      {
        label: "Tokat Güneş Enerjisi",
        href: "/tokat-gunes-enerjisi",
        description: "Keşif, kurulum ve teklif",
      },
    ],
  },
  {
    label: "Kangal Borular",
    href: "/urunler/kategori/kangal-borular",
    match: [
      "/urunler/pe-kangal",
      "/urunler/16-mm",
      "/urunler/20-mm",
      "/urunler/pe-kaplin",
      "/urunler/mandalli",
      "/urunler/damlama-sulama-ekipmanlari",
      "/tokat-kangal-boru",
    ],
    footerLink: allProductsLink,
    children: [
      {
        label: "PE Kangal Borular",
        href: "/urunler/kategori/kangal-borular",
        description: "Ø16–110 mm, 6 ve 10 ATÜ",
      },
      {
        label: "Damlama Sulama Boruları",
        href: "/urunler/kategori/damlama-sulama-borulari",
        description: "16 / 20 mm, delikli ve kör borular",
      },
      {
        label: "Sulama Ekipmanları",
        href: "/urunler/kategori/sulama-baglanti-parcalari",
        description: "Kaplin, mandallı boru, vana ve damlatıcı",
      },
      {
        label: "Tokat Kangal Boru",
        href: "/tokat-kangal-boru",
        description: "Yerli üretim ve teklif",
      },
    ],
  },
  {
    label: "Elektrik Panoları",
    href: "/urunler/kategori/elektrik-panolari",
    match: ["/urunler/sayacli", "/urunler/santiye"],
    footerLink: allProductsLink,
    children: [
      {
        label: "Sayaçlı Panolar",
        href: "/urunler/sayacli-elektrik-panolari",
        description: "2, 3, 4, 9 ve 16 sayaçlı",
      },
      {
        label: "Şantiye Panosu",
        href: "/urunler/santiye-panosu",
        description: "Sac karkas, toz boyalı",
      },
    ],
  },
  { label: "Galeri", href: "/galeri" },
  { label: "Katalog", href: "/katalog" },
  { label: "İletişim", href: "/iletisim" },
];

/** @deprecated footer / eski kullanımlar — navItems tercih edin */
export const navLinks = navItems.map(({ label, href }) => ({ label, href }));

export const corporateLinks = navItems.find((n) => n.label === "Kurumsal")
  ?.children ?? [];

/** Kurumsal menüde olmayan ekstra footer linkleri */
export const footerExtraLinks = [
  { label: "Galeri", href: "/galeri" },
];
