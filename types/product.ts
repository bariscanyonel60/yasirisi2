export type ProductCategorySlug =
  | "pelet-sobalari"
  | "pelet-yakit"
  | "gunes-enerji-sistemleri"
  | "ruzgar-enerjisi"
  | "kangal-borular"
  | "damlama-sulama-borulari";

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface ProductDocument {
  label: string;
  href: string; // TODO: replace with real PDF path when supplied
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategorySlug;
  shortDescription: string;
  description: string;
  images: string[]; // TODO: replace placeholders with real product photography
  technicalSpecs: TechnicalSpec[];
  documents?: ProductDocument[];
  usageAreas?: string[];
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
}

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  shortLabel: string;
  description: string;
  image: string;
}
