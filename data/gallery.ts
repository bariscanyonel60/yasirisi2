export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: "pelet" | "gunes" | "ruzgar" | "sulama" | "kurumsal";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/marketing/header-banner.jpg",
    alt: "Yalçın Isı ürün gamı — pelet, güneş, rüzgâr ve boru",
    title: "Ürün gamı kompoziti",
    category: "kurumsal",
  },
  {
    src: "/images/marketing/header-banner-2.jpg",
    alt: "Güneş ve rüzgâr enerjisi manzarası",
    title: "Yenilenebilir enerji",
    category: "gunes",
  },
  {
    src: "/images/marketing/gunes-enerjisi-banner.jpg",
    alt: "Güneş kolektörü, depo ve panel sistemleri",
    title: "Güneş enerji sistemleri",
    category: "gunes",
  },
  {
    src: "/images/marketing/ruzgar-enerjisi-banner.jpg",
    alt: "Rüzgâr türbinleri ve güneş panelli konut",
    title: "Rüzgâr enerjisi",
    category: "ruzgar",
  },
  {
    src: "/images/marketing/pelet-yakit-banner.jpg",
    alt: "Pelet yakıt ve pelet sobası iç mekân",
    title: "Pelet yakıt",
    category: "pelet",
  },
  {
    src: "/images/marketing/pelet-sobalari-banner.jpg",
    alt: "YPS pelet sobası serisi",
    title: "Pelet sobaları",
    category: "pelet",
  },
  {
    src: "/images/marketing/pelet-sobalari-collage.jpg",
    alt: "YPS-07–10 pelet sobası modelleri",
    title: "YPS yeni modeller",
    category: "pelet",
  },
  {
    src: "/images/marketing/damlama-sulama-banner.jpg",
    alt: "Damlama sulama borusu ve kangal ruloları",
    title: "Damlama sulama",
    category: "sulama",
  },
  {
    src: "/images/categories/pelet-sobalari.jpg",
    alt: "Pelet sobası kategori görseli",
    title: "Pelet sobası vitrin",
    category: "pelet",
  },
  {
    src: "/images/categories/gunes-enerjisi.jpg",
    alt: "Güneş enerjisi kategori görseli",
    title: "Güneş enerjisi vitrin",
    category: "gunes",
  },
  {
    src: "/images/categories/ruzgar-enerjisi.jpg",
    alt: "Rüzgâr enerjisi kategori görseli",
    title: "Rüzgâr vitrin",
    category: "ruzgar",
  },
  {
    src: "/images/categories/damlama-sulama.jpg",
    alt: "Damlama sulama kategori görseli",
    title: "Sulama vitrin",
    category: "sulama",
  },
  {
    src: "/images/documents/sertifikalar.jpg",
    alt: "Yalçın Isı kalite ve teşekkür belgeleri",
    title: "Belgeler",
    category: "kurumsal",
  },
];

export const galleryFilters = [
  { id: "all", label: "Tümü" },
  { id: "pelet", label: "Pelet" },
  { id: "gunes", label: "Güneş" },
  { id: "ruzgar", label: "Rüzgâr" },
  { id: "sulama", label: "Sulama" },
  { id: "kurumsal", label: "Kurumsal" },
] as const;
