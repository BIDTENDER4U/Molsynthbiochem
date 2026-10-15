import React from 'react';
import { ProductCatalog } from '../components/ProductCatalog';
import { Product, ProductCategory } from '../types';
import { Sliders, ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
  onAddToQuote: (product: Product, quantity?: number) => void;
  onViewProduct: (product: Product) => void;
  quoteItemIds: string[];
  initialCategory?: ProductCategory;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onAddToQuote,
  onViewProduct,
  quoteItemIds,
  initialCategory,
}) => {
  return (
    <div>
      {/* Page Header / Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">&gt;</span>
            <span className="text-slate-900 font-semibold">Products</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Product <span className="text-[#0066FF]">Portfolio</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Browse our comprehensive range of HPLC consumables, syringe filters, Class A borosilicate glassware, and laboratory analytical instruments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigate('matrix')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-cyan-600" />
                <span>Membrane Compatibility Tool</span>
              </button>

              <button
                onClick={() => onNavigate('coa')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verify Batch CoA</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog View */}
      <ProductCatalog
        onAddToQuote={onAddToQuote}
        onViewProduct={onViewProduct}
        quoteItemIds={quoteItemIds}
        externalSelectedCategory={initialCategory}
      />
    </div>
  );
};
