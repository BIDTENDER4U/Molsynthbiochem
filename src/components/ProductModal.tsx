import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShieldCheck, FileText, ShoppingBag, Plus, Minus } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity: number, notes?: string, requestSample?: boolean) => void;
  onInspectCoa: (lotNumber: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  onInspectCoa,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [requestSample, setRequestSample] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToQuote(product, quantity, notes, requestSample);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
              <span className="font-semibold text-slate-900">{product.catalogNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{product.subCategory}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-medium">Verified USP / ISO Quality</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Overview text */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-1">
              Description &amp; Intended Use
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-2">
              Performance Attributes
            </h3>
            <div className="space-y-1.5">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-2">
              Technical Specifications
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
              <table className="w-full divide-y divide-slate-200">
                <tbody className="divide-y divide-slate-100">
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-3.5 py-2 font-medium text-slate-500 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-3.5 py-2 text-slate-900 font-mono">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-3.5 py-2 font-medium text-slate-500">Standard Packaging</td>
                    <td className="px-3.5 py-2 text-slate-900 font-mono">{product.packSize}</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 font-medium text-slate-500">Standard Lead Time</td>
                    <td className="px-3.5 py-2 text-slate-900 font-mono">{product.leadTime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CoA Batch Link */}
          {product.lotNumberSample && (
            <div className="p-3 bg-cyan-50/50 border border-cyan-200 rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0" />
                <span className="text-slate-700">
                  Batch traceability certified: <span className="font-mono font-semibold text-slate-900">{product.lotNumberSample}</span>
                </span>
              </div>
              <button
                onClick={() => {
                  onInspectCoa(product.lotNumberSample!);
                  onClose();
                }}
                className="font-medium text-cyan-700 hover:text-cyan-900 underline flex items-center gap-1 cursor-pointer shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Batch CoA</span>
              </button>
            </div>
          )}

          {/* Quotation Request Parameters */}
          <div className="pt-4 border-t border-slate-200 space-y-4">
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-900">
              Add to Formal Quotation (RFQ)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Packs / Units Required
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-slate-300 rounded-md hover:bg-slate-100 text-slate-600"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center py-1.5 text-xs font-mono font-bold border border-slate-300 rounded-md focus:ring-1 focus:ring-slate-900"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-slate-300 rounded-md hover:bg-slate-100 text-slate-600"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-slate-500">pack(s)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Sample Request
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    checked={requestSample}
                    onChange={(e) => setRequestSample(e.target.checked)}
                    className="w-4 h-4 rounded text-slate-900 border-slate-300"
                  />
                  <span>Include trial sample pack for QC testing</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Custom Specifications or Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Specify needle gauge, custom packaging, or annual tender volume..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>

          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer shadow-sm ${
              addedNotice
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {addedNotice ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Quote Basket!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity} Pack(s) to RFQ Basket</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
