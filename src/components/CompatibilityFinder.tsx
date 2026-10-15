import React, { useState } from 'react';
import { COMPATIBILITY_MATRIX } from '../data/compatibilityMatrix';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, HelpCircle } from 'lucide-react';

interface CompatibilityFinderProps {
  onAddToQuote: (product: Product, quantity?: number) => void;
  onViewProduct: (product: Product) => void;
}

export const CompatibilityFinder: React.FC<CompatibilityFinderProps> = ({
  onAddToQuote,
  onViewProduct,
}) => {
  const [selectedSolventName, setSelectedSolventName] = useState<string>(
    'Acetonitrile (HPLC Grade)'
  );
  const [sampleType, setSampleType] = useState<'chemical' | 'biological' | 'aggressive'>('chemical');
  const [targetPoreSize, setTargetPoreSize] = useState<'0.22' | '0.45'>('0.22');

  const selectedMatrix = COMPATIBILITY_MATRIX.find(
    (item) => item.solvent === selectedSolventName
  ) || COMPATIBILITY_MATRIX[0];

  // Map to suggested Molsynth Biochem filter product
  const getRecommendedProduct = (): Product => {
    if (selectedSolventName.includes('THF') || selectedSolventName.includes('Dichloromethane') || sampleType === 'aggressive') {
      return PRODUCTS.find(p => p.id === 'ms-filter-ptfe-hydrophilic') || PRODUCTS[5];
    }
    if (selectedSolventName.includes('Protein') || sampleType === 'biological') {
      return PRODUCTS.find(p => p.id === 'ms-filter-pvdf-045') || PRODUCTS[6];
    }
    if (targetPoreSize === '0.22') {
      return PRODUCTS.find(p => p.id === 'ms-filter-ptfe-hydrophilic') || PRODUCTS[5];
    }
    return PRODUCTS.find(p => p.id === 'ms-filter-nylon-022') || PRODUCTS[7];
  };

  const recommendedProduct = getRecommendedProduct();

  const renderBadge = (status: 'Compatible' | 'Moderate' | 'Not Recommended' | 'Requires Pre-wetting') => {
    switch (status) {
      case 'Compatible':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Compatible
          </span>
        );
      case 'Moderate':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Limited Resistance
          </span>
        );
      case 'Requires Pre-wetting':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            Pre-wet Required
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            Not Recommended
          </span>
        );
    }
  };

  return (
    <section id="matrix" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-700 font-mono">
            Analytical Method Support
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Syringe Filter &amp; Solvent Chemical Compatibility Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Selecting the appropriate membrane prevents column fouling, premature back-pressure surges, and chemical extraction artifacts. Query our verified lab compatibility database below.
          </p>
        </div>

        {/* Interactive Matrix Workspace */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Selection Console */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 font-mono">
              01. Select Analytical Parameters
            </h3>

            <div className="space-y-5">
              {/* Solvent Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Mobile Phase / Sample Solvent
                </label>
                <select
                  value={selectedSolventName}
                  onChange={(e) => setSelectedSolventName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
                  {COMPATIBILITY_MATRIX.map((item) => (
                    <option key={item.solvent} value={item.solvent}>
                      {item.solvent} ({item.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sample Matrix Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Sample Nature
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSampleType('chemical')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      sampleType === 'chemical'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Chemical / API
                  </button>
                  <button
                    onClick={() => setSampleType('biological')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      sampleType === 'biological'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Proteins / Bio
                  </button>
                  <button
                    onClick={() => setSampleType('aggressive')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      sampleType === 'aggressive'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Aggressive Acid
                  </button>
                </div>
              </div>

              {/* Pore Size */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Target Particle Retention (Pore Size)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTargetPoreSize('0.22')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      targetPoreSize === '0.22'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    0.22 µm (UHPLC / Sub-2µm)
                  </button>
                  <button
                    onClick={() => setTargetPoreSize('0.45')}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      targetPoreSize === '0.45'
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    0.45 µm (Standard HPLC)
                  </button>
                </div>
              </div>

              {/* Technical Chemist Note */}
              <div className="p-3 bg-cyan-50/70 border border-cyan-200 rounded-lg text-xs text-slate-700">
                <span className="font-semibold text-cyan-900 block mb-0.5">Application Guidance:</span>
                {selectedMatrix.notes}
              </div>
            </div>
          </div>

          {/* Right: Compatibility Assessment & Product Match */}
          <div className="lg:col-span-7 space-y-6">
            {/* Membrane Matrix Cards */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 font-mono">
                02. Membrane Evaluation for: {selectedMatrix.solvent}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">Hydrophilic PTFE</div>
                    <div className="text-slate-500 text-[11px]">Universal Organic &amp; Aqueous</div>
                  </div>
                  <div>{renderBadge(selectedMatrix.ptfeHydrophilic)}</div>
                </div>

                <div className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">PVDF (Low Binding)</div>
                    <div className="text-slate-500 text-[11px]">Biologics &amp; Mild Eluents</div>
                  </div>
                  <div>{renderBadge(selectedMatrix.pvdf)}</div>
                </div>

                <div className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">Nylon 66</div>
                    <div className="text-slate-500 text-[11px]">General HPLC Mobile Phases</div>
                  </div>
                  <div>{renderBadge(selectedMatrix.nylon)}</div>
                </div>

                <div className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">PES (Polyethersulfone)</div>
                    <div className="text-slate-500 text-[11px]">High Flow Rate Aqueous</div>
                  </div>
                  <div>{renderBadge(selectedMatrix.pes)}</div>
                </div>

                <div className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">Hydrophobic PTFE</div>
                    <div className="text-slate-500 text-[11px]">Gas Venting &amp; Non-polar</div>
                  </div>
                  <div>{renderBadge(selectedMatrix.ptfeHydrophobic)}</div>
                </div>

                <div className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">MCE (Cellulose)</div>
                    <div className="text-slate-500 text-[11px]">Microbiological Testing</div>
                  </div>
                  <div>{renderBadge(selectedMatrix.mce)}</div>
                </div>
              </div>
            </div>

            {/* Direct Recommended Molsynth Product Banner */}
            <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs uppercase font-mono tracking-wider text-cyan-400">
                  Recommended Molsynth Biochem Consumable
                </span>
                <span className="text-xs font-mono text-slate-400">
                  CAT #: {recommendedProduct.catalogNumber}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">
                {recommendedProduct.name}
              </h4>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {recommendedProduct.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-300 font-mono">
                  <span>Pack: {recommendedProduct.packSize}</span>
                  <span className="mx-2 text-slate-600">·</span>
                  <span className="text-emerald-400">In Stock</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewProduct(recommendedProduct)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onAddToQuote(recommendedProduct, 1)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Add to Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
