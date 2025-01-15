export interface Product {
  id: string;
  name: string;
  casNumber: string;
  manufacturer: string;
  description: string;
  category: ProductCategory;
  subCategory?: string;
  purity?: string;
  grade?: string;
  packagingSizes: PackagingSize[];
  specifications?: string[];
  applications?: string[];
  msdsUrl: string;
  imageUrl?: string;
  inStock: boolean;
  featured?: boolean;
}

export interface PackagingSize {
  id: string;
  size: string;
  unit: string;
  sku: string;
  price?: number; // Optional if prices are quote-based
}

export type ProductCategory =
  | "organic-chemicals"
  | "inorganic-chemicals"
  | "solvents"
  | "reagents"
  | "analytical-standards"
  | "laboratory-glassware";

export interface ProductFilter {
  category?: ProductCategory;
  manufacturer?: string;
  inStock?: boolean;
  search?: string;
  grade?: string;
  purity?: string;
}

export interface ProductSort {
  field: "name" | "casNumber" | "manufacturer";
  direction: "asc" | "desc";
} 