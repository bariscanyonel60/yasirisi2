import Image from "next/image";

type ProductImageProps = {
  src: string | undefined;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

/** public/images altındaki bilinen varlıklar */
const KNOWN_IMAGES = new Set([
  "/images/categories/pelet-sobalari.jpg",
  "/images/categories/gunes-enerjisi.jpg",
  "/images/categories/pelet-yakit.jpg",
  "/images/categories/ruzgar-enerjisi.jpg",
  "/images/categories/damlama-sulama.jpg",
  "/images/categories/kangal-borular.jpg",
  "/images/marketing/pelet-sobalari-banner.jpg",
  "/images/marketing/pelet-indoor.jpg",
  "/images/marketing/pelet-yakit-banner.jpg",
  "/images/marketing/yps-01-panel.jpg",
  "/images/marketing/yps-02-panel.jpg",
  "/images/marketing/header-banner.jpg",
  "/images/marketing/header-banner-2.jpg",
  "/images/marketing/gunes-enerjisi-banner.jpg",
  "/images/marketing/ruzgar-enerjisi-banner.jpg",
  "/images/marketing/damlama-sulama-banner.jpg",
  "/images/marketing/pelet-sobalari-collage.jpg",
  "/images/products/yps-01-pelet-sobasi/01.jpg",
  "/images/products/yps-01-pelet-sobasi/03.jpg",
  "/images/products/yps-02-pelet-sobasi/01.jpg",
  "/images/products/yps-02-pelet-sobasi/03.jpg",
  "/images/products/yps-03-pelet-sobasi/01.jpg",
  "/images/products/yps-03-pelet-sobasi/03.jpg",
  "/images/products/yps-04-pelet-sobasi/01.jpg",
  "/images/products/yps-04-pelet-sobasi/03.jpg",
  "/images/products/yps-05-pelet-sobasi/01.jpg",
  "/images/products/yps-06-pelet-sobasi/01.jpg",
  "/images/products/yps-07-pelet-sobasi/01.jpg",
  "/images/products/yps-07-pelet-sobasi/02.jpg",
  "/images/products/yps-08-pelet-sobasi/01.jpg",
  "/images/products/yps-08-pelet-sobasi/02.jpg",
  "/images/products/yps-09-pelet-sobasi/01.jpg",
  "/images/products/yps-09-pelet-sobasi/02.jpg",
  "/images/products/yps-10-pelet-sobasi/01.jpg",
  "/images/products/yps-10-pelet-sobasi/02.jpg",
  "/images/products/pelet-yakit/01.jpg",
  "/images/products/gunes-panel-pv/01.jpg",
  "/images/products/gunes-kolektor/01.jpg",
  "/images/products/gunes-depo/01.jpg",
  "/images/products/gunes-bilesen/01.jpg",
  "/images/products/ruzgar-enerjisi/01.jpg",
  "/images/products/damlama/16mm-kor-400m/01.jpg",
  "/images/products/damlama/16mm-20cm-400m/01.jpg",
  "/images/products/damlama/16mm-25cm-400m/01.jpg",
  "/images/products/damlama/16mm-33cm-400m/01.jpg",
  "/images/products/damlama/20mm-kor-200m/01.jpg",
  "/images/documents/sertifikalar.jpg",
  "/images/categories/sulama-baglanti.jpg",
  "/images/categories/elektrik-panolari.jpg",
  "/images/marketing/katalog-kapak.jpg",
  "/images/products/pelet-yakit/02.jpg",
  "/images/products/gunes-kolektor/02.jpg",
  "/images/products/gunes-kit-3kw-2panel/01.jpg",
  "/images/products/gunes-kit-3kw-4panel/01.jpg",
  "/images/products/gunes-kit-6-2kw/01.jpg",
  "/images/products/gunes-kit-11kw/01.jpg",
  "/images/products/kaplin-baglanti/01.jpg",
  "/images/products/mandalli-boru/01.jpg",
  "/images/products/mandalli-boru/02.jpg",
  "/images/products/sulama-ekipmanlari/01.jpg",
  "/images/products/elektrik-panolari/01.jpg",
  "/images/products/elektrik-panolari/02.jpg",
]);

export function hasKnownProductImage(src: string | undefined): boolean {
  return Boolean(src && KNOWN_IMAGES.has(src));
}

export function ProductImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  fit = "cover",
}: ProductImageProps) {
  const show = hasKnownProductImage(src);

  if (!show || !src) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-navy-900/5 text-steel-400 text-xs ${className}`}
      >
        Ürün Görseli
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}
