import React, { useState } from 'react';
import { QuoteItem, Product } from '../types';
import { X, Trash2, Plus, Minus, Send, FileCheck, ArrowRight, Printer } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
  onAddProduct: (product: Product, quantity?: number) => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
  onAddProduct,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [gstin, setGstin] = useState('');
  const [urgency, setUrgency] = useState('Immediate Dispatch');
  const [submittedRfq, setSubmittedRfq] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || items.length === 0) return;

    const rfqNumber = `RFQ-MS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRfq(rfqNumber);
  };

  const handleReset = () => {
    setSubmittedRfq(null);
    onClearQuote();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="font-semibold text-slate-900">Molsynth Biochem LLP</span>
              <span aria-hidden="true">·</span>
              <span>Commercial Quotation Desk</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">
              Request for Quotation (RFQ)
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          {submittedRfq ? (
            /* Submission Success & Proforma Summary */
            <div className="py-6 space-y-5 text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <FileCheck className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Quotation Request Logged</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Reference: <span className="font-mono font-bold text-cyan-700">{submittedRfq}</span>
                </p>
                <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
                  Your formal commercial quotation and delivery lead-time estimate has been transmitted to our sales and technical support desk at <span className="font-mono">info@molsynthbiochem.com</span>.
                </p>
              </div>

              {/* Summary Box */}
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Company:</span>
                  <span className="font-semibold text-slate-800">{company || name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact:</span>
                  <span className="text-slate-800">{name} ({phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="text-slate-800">{location || 'Pan-India'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Urgency:</span>
                  <span className="text-slate-800">{urgency}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 block mb-1">Requested Items ({items.length}):</span>
                  {items.map((it) => (
                    <div key={it.product.id} className="flex justify-between text-[11px] py-0.5">
                      <span className="truncate max-w-[240px]">{it.product.name}</span>
                      <span className="font-semibold text-slate-900">{it.quantity} pk</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Proforma Summary</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            /* Empty Basket State */
            <div className="py-12 text-center">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Plus className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Your Quote Basket is Empty</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Add products from the catalog or membrane matrix to receive customized institutional and bulk pricing.
              </p>

              <div className="mt-6 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase font-mono">
                  Quick Add Frequently Inquired Consumables:
                </div>
                <div className="flex flex-col gap-2 max-w-sm mx-auto text-left">
                  <button
                    onClick={() => onAddProduct(PRODUCTS[0], 2)}
                    className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-400 text-xs flex items-center justify-between bg-slate-50 hover:bg-white transition-colors"
                  >
                    <span className="font-medium text-slate-800 truncate">2.0 mL Clear 9mm Screw Vials (100pk)</span>
                    <span className="text-cyan-700 font-bold shrink-0 ml-2">+ Add</span>
                  </button>
                  <button
                    onClick={() => onAddProduct(PRODUCTS[5], 2)}
                    className="p-2.5 border border-slate-200 rounded-lg hover:border-slate-400 text-xs flex items-center justify-between bg-slate-50 hover:bg-white transition-colors"
                  >
                    <span className="font-medium text-slate-800 truncate">25mm 0.22µm Hydrophilic PTFE Filters</span>
                    <span className="text-cyan-700 font-bold shrink-0 ml-2">+ Add</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Items List & RFQ Form */
            <>
              {/* Product Items List */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>ITEMS IN QUOTE ({items.length})</span>
                  <button
                    onClick={onClearQuote}
                    className="text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="border border-slate-200 rounded-lg p-3 bg-white flex flex-col justify-between gap-2 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <span className="font-mono text-[11px] text-cyan-700 font-semibold block">
                            {item.product.catalogNumber}
                          </span>
                          <h4 className="font-bold text-slate-900 truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-slate-500 text-[11px]">
                            Pack: {item.product.packSize}
                          </span>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity & Notes */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="p-1 border border-slate-300 rounded hover:bg-slate-100 text-slate-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center font-mono font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 border border-slate-300 rounded hover:bg-slate-100 text-slate-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <span className="text-[11px] text-slate-500 ml-1">pack(s)</span>
                        </div>

                        {item.requestSample && (
                          <span className="text-[11px] font-mono font-medium text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">
                            Sample Requested
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Contact Form */}
              <form onSubmit={handleSubmit} className="pt-4 border-t border-slate-200 space-y-3.5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Recipient &amp; Delivery Details
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization / Lab *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sun Pharma R&D / Cipla QC"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Delivery City / State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hyderabad / Ahmedabad / Baddi"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Urgency Timeline
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900 bg-white"
                    >
                      <option value="Immediate Dispatch">Immediate Dispatch (24-48 hrs)</option>
                      <option value="Within 15 Days">Within 15 Days</option>
                      <option value="Annual / Quarterly Contract">Annual Contract Tender</option>
                      <option value="Sample Evaluation Only">Sample Evaluation First</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    GSTIN / Tax ID (Optional for GST Invoice Estimate)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 27AABCM1234F1Z5"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-mono uppercase border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Generate &amp; Transmit Quotation Request</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Drawer Footer Notice */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between font-mono">
          <span>Direct Desk: +91 9867363202</span>
          <span>info@molsynthbiochem.com</span>
        </div>
      </div>
    </div>
  );
};
