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
  /** İç SEO linkleri (opsiyonel) */
  relatedLinks?: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pe-kangal-boru-agirlik-tablosu-6-10-atu",
    title: "PE kangal boru ağırlık tablosu: 6 ATÜ ve 10 ATÜ",
    excerpt:
      "Ø16'dan Ø110 mm'ye kangal boru rulo ağırlıkları, rulo uzunlukları ve basınç sınıfı seçimi.",
    date: "2026-09-20",
    category: "Sulama",
    cover: "/images/categories/kangal-borular.jpg",
    content: [
      "PE kangal boru seçerken en sık sorulan iki soru basınç sınıfı (ATÜ) ve rulo ağırlığıdır. Ağırlık; hem et kalınlığı ve malzeme kalitesinin göstergesi hem de nakliye ve saha planlaması için temel veridir.",
      "Yalçın Isı 2026 kataloğuna göre 6 ATÜ kangal borularda 100 m rulo ağırlıkları yaklaşık olarak şöyledir: Ø16 mm 6–7 kg, Ø20 mm 11–14 kg, Ø25 mm 13–17 kg, Ø32 mm 20–23 kg, Ø40 mm 30–33 kg, Ø50 mm 39–42 kg, Ø63 mm 59–62 kg, Ø75 mm 79–83 kg. Ø90 ve Ø110 mm borular 50 m rulo halinde sunulur.",
      "10 ATÜ kangal borular daha kalın cidarlıdır: Ø16 mm 7–9 kg, Ø20 mm 14–17 kg, Ø25 mm 19–23 kg, Ø32 mm 29–33 kg, Ø40 mm 39–42 kg, Ø50 mm 59–62 kg, Ø63 mm 79–83 kg, Ø75 mm 99–105 kg (100 m); Ø90 mm 73–78 kg ve Ø110 mm 99–104 kg (50 m).",
      "Hangi sınıf? Damlama ve bahçe hatlarında genellikle 6 ATÜ yeterlidir. Motopomp çıkışı, uzun ana hatlar ve yüksek kot farkı olan arazilerde 10 ATÜ tercih edilmelidir.",
      "Tokat OSB'deki tesisimizde günlük 2.000 kg kangal boru üretim kapasitemiz bulunur. Tam tablo için ürün sayfalarımıza veya PDF kataloğa bakabilir, çap ve metraj bilgisiyle teklif isteyebilirsiniz.",
    ],
    seoTitle: "PE Kangal Boru Ağırlık Tablosu (6 ve 10 ATÜ) | Yalçın Isı",
    seoDescription:
      "PE kangal boru ağırlık tablosu: 6 ATÜ ve 10 ATÜ, Ø16–110 mm rulo ağırlıkları ve rulo uzunlukları. Tokat Yalçın Isı.",
    relatedLinks: [
      { label: "6 ATÜ kangal boru", href: "/urunler/pe-kangal-boru-6-atu" },
      { label: "10 ATÜ kangal boru", href: "/urunler/pe-kangal-boru-10-atu" },
      { label: "Tokat Kangal Boru", href: "/tokat-kangal-boru" },
    ],
  },
  {
    slug: "gunes-enerji-sistemi-kac-kw-secilmeli",
    title: "Güneş enerji sistemi kaç kW olmalı? 3, 6,2 ve 11 kW karşılaştırma",
    excerpt:
      "Panel sayısı, akü/lityum batarya ve inverter gücüne göre hazır güneş paketlerini doğru seçmek.",
    date: "2026-09-15",
    category: "Güneş",
    cover: "/images/products/gunes-kit-6-2kw/01.jpg",
    content: [
      "Tokat güneş enerjisi yatırımında ilk karar sistem gücüdür. Doğru kW; günlük tüketiminiz, gece kullanım ihtiyacınız ve şebeke kesintisi beklentinize göre belirlenir.",
      "3 kW sistem (2 panel): 2 güneş paneli (toplam 1 kW), 2 adet 12V 200Ah deep cycle akü ve 3 kW inverter. Bağ evi, küçük konut ve temel aydınlatma/elektronik yükleri için giriş seviyesidir.",
      "3 kW sistem (4 panel): aynı inverter gücünde 4 panel ve 4 akü ile daha fazla üretim ve depolama sağlar; gün içi tüketimi yüksek evler için uygundur.",
      "6,2 kW sistem: 5 panel, 51,2V 100Ah (5,12 kWh) lityum batarya ve 6,2 kW MPPT inverter. Lityum batarya uzun ömür ve derin deşarj avantajı sunar; ev ve iş yerleri için dengeli bir seçimdir.",
      "11 kW sistem: 16 panel, 2 adet 51,2V 100Ah lityum batarya ve 11 kW inverter. Yüksek tüketimli ev, çiftlik ve iş yerleri için güçlü bir çözümdür.",
      "Kesin seçim için çatı/arazi yönü, gölge ve tüketim profilini birlikte değerlendiriyoruz. Yalçın Isı ile keşif planlayabilir, paket detaylarını ürün sayfalarından inceleyebilirsiniz.",
    ],
    seoTitle: "Güneş Enerji Sistemi Kaç kW Olmalı? 3 / 6,2 / 11 kW | Yalçın Isı",
    seoDescription:
      "Tokat güneş enerjisi: 3 kW, 6,2 kW ve 11 kW güneş paketlerinin panel, batarya ve inverter karşılaştırması. Yalçın Isı.",
    relatedLinks: [
      { label: "6,2 kW sistem", href: "/urunler/6-2-kw-gunes-enerji-sistemi" },
      { label: "11 kW sistem", href: "/urunler/11-kw-gunes-enerji-sistemi" },
      { label: "Tokat Güneş Enerjisi", href: "/tokat-gunes-enerjisi" },
    ],
  },
  {
    slug: "tokat-pelet-sobasi-nasil-secilir",
    title: "Tokat'ta pelet sobası nasıl seçilir?",
    excerpt:
      "İç ve dış mekân, ısıtma ihtiyacı ve pelet yakıt tedariki — doğru YPS modelini seçerken dikkat edilecekler.",
    date: "2026-03-10",
    category: "Pelet",
    cover: "/images/categories/pelet-sobalari.jpg",
    content: [
      "Tokat pelet sobası seçiminde ilk adım kullanım alanını netleştirmektir: iç mekân (oturma odası, salon), dış mekân (teras, bahçe, kafe) veya ticari açık alan. Her senaryoda havalandırma, güvenlik mesafesi ve pelet yakıt depolama düzeni farklıdır.",
      "Isıtılacak alanın büyüklüğü ve yalıtım kalitesi, YPS model seçimini doğrudan etkiler. Yalçın Isı YPS serisi farklı formlarda pelet sobası sunar; keşif sırasında alan ölçüleri ve kullanım sıklığı birlikte değerlendirilir.",
      "Pelet yakıt tedarikinin sürekliliği, sobanın günlük kullanımını belirler. Yerli üretim avantajıyla pelet sobası ve pelet yakıt aynı noktadan planlanabilir; Tokat OSB üretim altyapısı stok ve teslimat için avantaj sağlar.",
      "Satış sonrası destek, yedek parça ve model güncellemeleri uzun vadeli maliyeti etkiler. Teklif sürecinde teknik bilgilendirme ve kurulum notlarını birlikte netleştirmenizi öneririz.",
      "Özetle: alan tipi → ısı ihtiyacı → yakıt lojistiği → yerel üretici desteği. Tokat pelet sobası aramanızda Yalçın Isı YPS modellerini inceleyebilir, iletişim formundan teklif isteyebilirsiniz.",
    ],
    seoTitle: "Tokat Pelet Sobası Nasıl Seçilir? | Yalçın Isı Blog",
    seoDescription:
      "Tokat pelet sobası seçim rehberi: iç/dış mekân, YPS modelleri, pelet yakıt ve yerli üretim desteği. Yalçın Isı.",
    relatedLinks: [
      { label: "Tokat Pelet Sobası", href: "/tokat-pelet-soba" },
      { label: "Pelet sobaları", href: "/urunler/kategori/pelet-sobalari" },
    ],
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
      "Tokat güneş enerjisi yatırımlarında hedef çoğu zaman öz tüketimi karşılamak, fatura yükünü azaltmak veya tarımsal sulama enerjisini desteklemektir. İlk adım, günlük/aylık elektrik veya sıcak su ihtiyacını kabaca tanımlamaktır.",
      "Fotovoltaik (PV) paneller elektrik üretir; güneş kolektörleri sıcak su için tercih edilir. Depo, inverter ve sistem bileşenleri birbirinden bağımsız değil — bütünleşik planlanmalıdır.",
      "Çatı veya arazi yönelimi, gölge riski ve montaj alanı fizibiliteyi belirler. Tokat ve çevresinde yerel keşif, doğru panel/kolektör kombinasyonunu seçmeye yardımcı olur.",
      "Yalçın Isı, Tokat güneş enerjisi projelerinde ürün gamı (panel, kolektör, depo, bileşen) ve saha deneyimini bir arada sunar. Teklif öncesi ihtiyaç analizi ile gereksiz kapasiteden kaçınılır.",
      "Detaylı ürünler için güneş enerji sistemleri kategorisini inceleyebilir; yerel bilgilendirme için Tokat güneş enerjisi sayfamıza bakabilirsiniz.",
    ],
    seoTitle: "Tokat Güneş Enerjisi Öz Tüketim | Yalçın Isı Blog",
    seoDescription:
      "Tokat güneş enerjisi öz tüketim rehberi: PV panel, kolektör, depo ve sistem bileşenleri. Yalçın Isı.",
    relatedLinks: [
      { label: "Tokat Güneş Enerjisi", href: "/tokat-gunes-enerjisi" },
      {
        label: "Güneş ürünleri",
        href: "/urunler/kategori/gunes-enerji-sistemleri",
      },
    ],
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
      "Tokat kangal boru ve damlama sulama hatlarında doğru seçim; su basıncı, bitki sırası ve tarla tipine bağlıdır. PE kangal boru farklı çaplarda ana ve dağıtım hatlarında kullanılır.",
      "Damlama sulama borularında damlatıcı aralığı (ör. 20, 25, 33 cm) bitki mesafesine göre seçilir. Kör (deliksiz) hatlar özel uygulamalarda tercih edilir; rulo uzunluğu saha lojistiğini etkiler.",
      "Et kalınlığı ve malzeme kalitesi, UV ve tarla koşullarında ömrü belirler. Yerli üretim, tedarik sürekliliği ve ölçü çeşitliliği açısından avantaj sağlar.",
      "Yalçın Isı, Tokat OSB'deki plastik üretim kapasitesiyle PE kangal ve damlama ürünlerini yerli olarak sunar. Teklif için tarla tipi ve ihtiyaç özetini iletmeniz yeterlidir.",
    ],
    seoTitle: "PE Kangal Boru ve Damlama Sulama | Yalçın Isı Blog",
    seoDescription:
      "Tokat kangal boru ve damlama sulama seçim notları: çap, rulo, damlatıcı. Yalçın Isı yerli üretim.",
    relatedLinks: [
      { label: "Tokat Kangal Boru", href: "/tokat-kangal-boru" },
      { label: "Kangal borular", href: "/urunler/kategori/kangal-borular" },
      {
        label: "Damlama sulama",
        href: "/urunler/kategori/damlama-sulama-borulari",
      },
    ],
  },
  {
    slug: "tokat-pelet-yakit-nereden-temin-edilir",
    title: "Tokat pelet yakıt: soba ile birlikte nasıl planlanır?",
    excerpt:
      "Pelet sobası kadar pelet yakıt tedariki de kritik — kalori, depolama ve yerli üretim avantajı.",
    date: "2026-04-02",
    category: "Pelet",
    cover: "/images/categories/pelet-yakit.jpg",
    content: [
      "Tokat pelet yakıt arayan kullanıcılar çoğu zaman pelet sobası ile aynı anda tedarik planı ister. Yakıtın nem oranı, kül oranı ve kalori değeri yanma verimini etkiler.",
      "Depolama alanı kuru ve havalandırılmış olmalıdır. Sezonluk tüketim tahmini, sipariş frekansını ve stok maliyetini belirler.",
      "Yalçın Isı, pelet sobası (YPS) ile pelet yakıtı bütünleşik değerlendirir; Tokat OSB üretim altyapısı yerli tedarik avantajı sunar.",
      "Pelet yakıt ürün sayfamızı inceleyebilir, pelet sobası seçimiyle birlikte teklif formundan talep oluşturabilirsiniz.",
    ],
    seoTitle: "Tokat Pelet Yakıt Tedariki | Yalçın Isı Blog",
    seoDescription:
      "Tokat pelet yakıt planlama: kalori, depolama, pelet sobası ile birlikte tedarik. Yalçın Isı.",
    relatedLinks: [
      { label: "Pelet yakıt", href: "/urunler/kategori/pelet-yakit" },
      { label: "Tokat Pelet Sobası", href: "/tokat-pelet-soba" },
    ],
  },
  {
    slug: "tokat-damlama-sulama-boru-secimi",
    title: "Tokat damlama sulama borusu seçerken nelere bakılır?",
    excerpt:
      "Damlatıcı aralığı, çap ve rulo — Tokat tarımında damlama hattı planlamanın pratik çerçevesi.",
    date: "2026-03-28",
    category: "Sulama",
    cover: "/images/categories/damlama-sulama.jpg",
    content: [
      "Tokat damlama sulama uygulamalarında damlatıcı aralığı bitki sırasına göre seçilir. Yanlış aralık hem su israfına hem de yetersiz sulamaya yol açabilir.",
      "Boru çapı ve et kalınlığı, hat uzunluğu ve basınç kaybıyla ilişkilidir. Ana hat ile damlama hattı birlikte düşünülmelidir; PE kangal boru ana dağıtımda sık kullanılır.",
      "Yalçın Isı, damlama sulama boruları ve PE kangal üretimiyle Tokat tarımına yerli ürün sunar. Teklif için ürün / tarla özetini paylaşmanız yeterlidir.",
    ],
    seoTitle: "Tokat Damlama Sulama Borusu Seçimi | Yalçın Isı Blog",
    seoDescription:
      "Tokat damlama sulama borusu seçimi: damlatıcı aralığı, çap, rulo. PE kangal ile birlikte planlama.",
    relatedLinks: [
      {
        label: "Damlama sulama boruları",
        href: "/urunler/kategori/damlama-sulama-borulari",
      },
      { label: "Tokat Kangal Boru", href: "/tokat-kangal-boru" },
    ],
  },
  {
    slug: "tokat-ruzgar-enerjisi-ve-yerli-uretim",
    title: "Tokat rüzgâr enerjisi ve yerli üretim deneyimi",
    excerpt:
      "OKA destekli RES yatırımı ve yenilenebilir enerji yaklaşımı — üretim kampüsünde kendi enerjisini üretmek.",
    date: "2026-03-05",
    category: "Enerji",
    cover: "/images/categories/ruzgar-enerjisi.jpg",
    content: [
      "Tokat rüzgâr enerjisi yatırımları, sanayi tesislerinin enerji maliyetini ve karbon ayak izini yönetmede giderek daha görünür hale geliyor. Yalçın Isı, fabrika bünyesinde 100 kW lisanssız RES deneyimine sahiptir.",
      "Yenilenebilir enerji; güneş paneli elektrik üretimi ile birlikte planlandığında öz tüketim hedeflerine daha tutarlı yaklaşılır. Yerel üretim firması olarak saha gerçeklerini ürün seçimine yansıtıyoruz.",
      "Rüzgâr enerjisi ürün ve bilgilendirme sayfalarımızdan başlayabilir; güneş ve pelet çözümleriyle birlikte bütünleşik teklif için iletişime geçebilirsiniz.",
    ],
    seoTitle: "Tokat Rüzgâr Enerjisi | Yalçın Isı Blog",
    seoDescription:
      "Tokat rüzgâr enerjisi ve yerli üretim: RES deneyimi, öz tüketim ve yenilenebilir yaklaşım. Yalçın Isı.",
    relatedLinks: [
      {
        label: "Rüzgâr enerjisi",
        href: "/urunler/kategori/ruzgar-enerjisi",
      },
      { label: "Tokat Güneş Enerjisi", href: "/tokat-gunes-enerjisi" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

/** Ana sayfa teaser için son yazılar */
export function getLatestBlogPosts(limit = 3) {
  return [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}
