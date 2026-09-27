# AGENTS.md — Yalçın Isı

## Proje

Kurumsal web: Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion.
Firma: pelet yakıt, pelet sobası (YPS), güneş paneli / PV, güneş kolektör,
rüzgâr enerjisi; ayrıca PE kangal ve damlama sulama.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Dokunma yolları

| Ne | Nerede |
| --- | --- |
| Logo | `public/images/logo.png` (renkli), `logo-white.png` (koyu zemin) |
| Ürün ekle / düzenle | `data/products.ts` |
| Kategori | `data/categories.ts`, `types/product.ts` |
| 4 ana ürün grubu (Pelet / Enerji / Kangal / Pano) | `productGroups` (`data/categories.ts`) + navbar `navItems` (`data/site.ts`) |
| JSON-LD script | `components/seo/JsonLd.tsx` (doğrudan `dangerouslySetInnerHTML` yazma) |
| İletişim / nav | `data/site.ts` |
| Ürün görselleri | `public/images/products/<slug>/01.jpg` |
| Kategori görselleri | `public/images/categories/*.jpg` |
| Ana sayfa bölümleri | `components/home/*`, `app/page.tsx` |
| PDF katalog (web, sıkıştırılmış) | `public/katalog/yalcin-isi-2026-urun-katalogu.pdf` (`site.catalogPdf`) |
| Katalog orijinali (gitignore, deploy edilmez) | `katalog-kaynak/` |

Yeni ürün: ilgili diziye `Product` ekle; `images` path'ini dosyayla eşleştir.
`ProductImage` bilinen dosyaları gösterir — yeni görsel ekledikten sonra
`components/products/ProductImage.tsx` içindeki `KNOWN_IMAGES` setine path ekle.

## Marka renkleri

- Lacivert: `#14275E` / `#1D3475` (vurgu alanları; her section BG değil)
- Turuncu: `#F28C00`
- Zemin: `paper` `#FFF`, `mist` `#F7F8FA`
- Metin: `ink` `#172033`

Tokenlar: `tailwind.config.js` ve `app/globals.css` (`--brand-*`).
Utility: `.container-page`, `.section-pad`, `.btn-primary`, `.btn-secondary`, `.eyebrow`.
WhatsApp butonu marka dışı yeşil (`whatsapp-*`) kullanır.

## SEO (Tokat one-page stratejisi)

Birincil anahtar kelimeler: `tokat pelet soba`, `tokat güneş enerjisi`,
`tokat kangal boru`.

| Ne | Nerede |
| --- | --- |
| Keyword / FAQ / landing metinleri | `data/seo.ts` |
| JSON-LD yardımcıları | `lib/json-ld.ts` |
| Ana sayfa hub (H1 + yerel bölüm + SSS) | `app/page.tsx`, `components/home/LocalSeoSections.tsx`, `HomeFaq.tsx` |
| Yerel landing sayfaları | `/tokat-pelet-soba`, `/tokat-gunes-enerjisi`, `/tokat-kangal-boru` |
| Sitemap öncelikleri | `app/sitemap.ts` |

Yeni yerel landing: `localServices` dizisine ekle + `app/<slug>/page.tsx` aç.

## Deploy

Netlify / Vercel uyumlu Next.js. Env gerekmez (statik içerik + WhatsApp linkleri).

