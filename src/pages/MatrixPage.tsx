import React from 'react';
import { CompatibilityFinder } from '../components/CompatibilityFinder';
import { Product } from '../types';

interface MatrixPageProps {
  onNavigate: (page: string) => void;
  onAddToQuote: (product: Product, quantity?: number) => void;
  onViewProduct: (product: Product) => void;
}

export const MatrixPage: React.FC<MatrixPageProps> = ({
  onNavigate,
  onAddToQuote,
  onViewProduct,
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
            <button
              onClick={() => onNavigate('products')}
              className="hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Products
            </button>
            <span aria-hidden="true">&gt;</span>
            <span className="text-slate-900 font-semibold">Membrane Matrix</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solvent &amp; Membrane <span className="text-[#0066FF]">Compatibility Matrix</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Verify chemical resistance across Hydrophilic PTFE, PVDF, Nylon 66, PES, and MCE syringe filters for your specific mobile phase or analyte.
          </p>
        </div>
      </div>

      {/* Main Matrix Tool */}
      <CompatibilityFinder
        onAddToQuote={onAddToQuote}
        onViewProduct={onViewProduct}
      />
    </div>
  );
};
