export type ProductCategory =
  | "organic-chemicals"
  | "inorganic-chemicals"
  | "solvents"
  | "reagents"
  | "analytical-standards"
  | "laboratory-glassware"
  | "lab-equipment"
  | "consumables";

export interface PackagingSize {
  id: string;
  size: string;
  unit: string;
  sku: string;
  price?: number;
}

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