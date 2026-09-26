# Yalçın Isı — Kurumsal Web Sitesi

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion ile
hazırlanmış kurumsal ve ürün odaklı web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` üzerinde çalışır.

## Klasör Yapısı

```
/app                 → sayfalar (App Router)
  /urunler            → ürün listeleme
  /urunler/kategori/[slug] → kategori sayfaları
  /urunler/[slug]     → ürün detay sayfaları (dinamik)
  /kurumsal, /uretim, /projeler, /belgelerimiz, /katalog, /iletisim
/components
  /layout             → Header, Footer
  /home               → ana sayfa bölümleri (Hero, Timeline, vb.)
  /products           → ürün kartı, teklif formu
  /ui                 → WhatsApp butonu vb. genel bileşenler
/data
  products.ts         → merkezi ürün veri modeli (TÜM ürünler burada yönetilir)
  categories.ts        → ürün kategorileri
  site.ts              → iletişim bilgileri, navigasyon linkleri
/types                → TypeScript tipleri (Product, ProductCategory, vb.)
```

## Yeni ürün ekleme

`data/products.ts` içindeki ilgili diziye (`pelletStoves`, `pelletFuel`,
`solarProducts`, `windProducts`, `coilPipes`, `dripIrrigationPipes`) yeni bir
`Product` nesnesi eklemeniz yeterlidir. Statik sayfalar (`generateStaticParams`)
ve sitemap otomatik olarak güncellenir.

## Eksik / Doğrulanması Gereken İçerikler (TODO)

- YPS-01 … YPS-06 pelet sobası görselleri eklendi; YPS teknik özellikler `TODO`
- Pelet yakıt, güneş PV, rüzgâr, kolektör vb. ürün fotoğrafları
- Ürün katalogları / PDF, sertifikalar, Google Maps, fabrika adresi
- Logo / favicon, teklif formu entegrasyonu
- KVKK metinleri (hukuki danışmanlık ile)

## SEO

- `app/layout.tsx` içinde Organization / LocalBusiness / WebSite JSON-LD
- Her ürün sayfasında Product + BreadcrumbList JSON-LD
  (`app/urunler/[slug]/page.tsx`)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` otomatik üretilir
- Next.js Metadata API ile her sayfada title/description/canonical

## Notlar

- Tasarım tokenleri `tailwind.config.ts` içinde: lacivert `#332885`,
  turuncu `#EF7C00`, beyaz (`navy` / `ember` / `paper`).
- WhatsApp butonu ve ürün bazlı otomatik mesajlar `data/products.ts` içindeki
  `whatsappHref()` fonksiyonu ile üretilir; telefon numarası `data/site.ts`
  içinde tanımlıdır.
