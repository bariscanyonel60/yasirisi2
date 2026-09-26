export const site = {
  name: "Yalçın Isı",
  domain: "www.yalcinisi.com.tr",
  url: "https://www.yalcinisi.com.tr",
  phoneDisplay: "0544 261 92 05",
  phoneHref: "tel:+905442619205",
  whatsappNumber: "905442619205",
  instagram: "https://instagram.com/yalcinpeletsobasi",
  instagramHandle: "@yalcinpeletsobasi",
  officeAddress: "Yeniyurt Mah. İsmail Altıngövde Cad. No:30 Merkez/Tokat",
  // TODO: OSB parsel / açık adres satırı eklenecek
  factoryAddress: "Tokat Organize Sanayi Bölgesi",
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
  /** Ürünler: kategori mega menü */
  mega?: "products";
  children?: NavChild[];
};

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
  { label: "Ürünler", href: "/urunler", mega: "products" },
  { label: "Enerji", href: "/#enerji" },
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
