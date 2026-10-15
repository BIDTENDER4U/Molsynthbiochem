export type ProductCategory = 
  | 'all'
  | 'hplc-consumables'
  | 'filtration'
  | 'laboratory-glassware'
  | 'analytical-instruments'
  | 'surgical-cleanroom';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  catalogNumber: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  description: string;
  specifications: ProductSpec[];
  material: string;
  packSize: string;
  compatibility?: string;
  inStock: boolean;
  leadTime: string;
  features: string[];
  dimensions?: string;
  popularFor?: string;
  recommendedSeptaOrAccessory?: string;
  lotNumberSample?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
  requestSample?: boolean;
}

export interface CertificateOfAnalysis {
  lotNumber: string;
  catalogNumber: string;
  productName: string;
  manufactureDate: string;
  expiryDate: string;
  testDate: string;
  releaseStatus: 'Approved' | 'Certified';
  analyst: string;
  approvedBy: string;
  tests: {
    parameter: string;
    specification: string;
    result: string;
    status: 'Pass' | 'Conforms';
  }[];
  regulatoryCompliance: string[];
  storageConditions: string;
}

export interface SolventCompatibility {
  solvent: string;
  category: 'Aqueous' | 'Organic Polar' | 'Organic Non-Polar' | 'Strong Acid / Base';
  ptfeHydrophobic: 'Compatible' | 'Not Recommended' | 'Requires Pre-wetting';
  ptfeHydrophilic: 'Compatible' | 'Moderate' | 'Not Recommended';
  pvdf: 'Compatible' | 'Moderate' | 'Not Recommended';
  nylon: 'Compatible' | 'Moderate' | 'Not Recommended';
  pes: 'Compatible' | 'Moderate' | 'Not Recommended';
  mce: 'Compatible' | 'Moderate' | 'Not Recommended';
  notes: string;
}
