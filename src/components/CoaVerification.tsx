import React, { useState } from 'react';
import { COA_RECORDS } from '../data/coaData';
import { Search, ShieldCheck, Printer, Check, Copy } from 'lucide-react';

interface CoaVerificationProps {
  initialLotNumber?: string;
}

export const CoaVerification: React.FC<CoaVerificationProps> = ({ initialLotNumber }) => {
  const [lotInput, setLotInput] = useState(initialLotNumber || 'MS-2026-V9-0412');
  const [searchedLot, setSearchedLot] = useState(initialLotNumber || 'MS-2026-V9-0412');
  const [copied, setCopied] = useState(false);

  const activeRecord = COA_RECORDS[searchedLot] || COA_RECORDS['MS-2026-V9-0412'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = lotInput.trim().toUpperCase();
    if (COA_RECORDS[clean]) {
      setSearchedLot(clean);
    } else {
      // Default to closest or first record with notice
      setSearchedLot(clean);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Molsynth Biochem Verified CoA: Lot ${activeRecord?.lotNumber || searchedLot}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="coa" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-700 font-mono">
            Quality Assurance &amp; Compliance Portal
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Certificates of Analysis (CoA) Verification
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Ensure audit-readiness and compliance with international pharmacopeial standards. Search your consignment lot number to inspect or download official batch release documentation.
          </p>
        </div>

        {/* Search Bar & Sample Chips */}
        <div className="mt-8 max-w-2xl">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Lot Number (e.g. MS-2026-V9-0412)..."
                value={lotInput}
                onChange={(e) => setLotInput(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-mono uppercase bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            >
              Verify Lot
            </button>
          </form>

          {/* Quick Select Buttons */}
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-mono flex-wrap">
            <span>Quick Sample Lots:</span>
            {Object.keys(COA_RECORDS).map((lot) => (
              <button
                key={lot}
                type="button"
                onClick={() => {
                  setLotInput(lot);
                  setSearchedLot(lot);
                }}
                className={`px-2 py-0.5 rounded transition-colors underline cursor-pointer ${
                  searchedLot === lot ? 'text-cyan-700 font-bold' : 'hover:text-slate-900'
                }`}
              >
                {lot}
              </button>
            ))}
          </div>
        </div>

        {/* CoA Certificate Display Card (Document Simulation) */}
        {activeRecord ? (
          <div className="mt-8 border-2 border-slate-300 rounded-xl bg-white shadow-sm overflow-hidden max-w-4xl print:border-none print:shadow-none">
            {/* Certificate Header Bar */}
            <div className="bg-slate-900 text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Molsynth Biochem LLP · Quality Assurance Division
                </div>
                <h3 className="text-xl font-bold tracking-tight mt-1">
                  CERTIFICATE OF ANALYSIS (CoA)
                </h3>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Document ID: QA-COA-{activeRecord.lotNumber}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto print:hidden">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Certificate</span>
                </button>
              </div>
            </div>

            {/* Document Details Grid */}
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[11px] font-sans">Product Name:</span>
                  <span className="font-semibold text-slate-900 font-sans">{activeRecord.productName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-sans">Catalog SKU:</span>
                  <span className="font-semibold text-slate-900">{activeRecord.catalogNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-sans">Batch / Lot Number:</span>
                  <span className="font-bold text-cyan-700">{activeRecord.lotNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-sans">Manufacture Date:</span>
                  <span className="text-slate-800">{activeRecord.manufactureDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-sans">Testing Release Date:</span>
                  <span className="text-slate-800">{activeRecord.testDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-sans">Batch Release Status:</span>
                  <span className="text-emerald-700 font-bold inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activeRecord.releaseStatus} &amp; Conforming
                  </span>
                </div>
              </div>
            </div>

            {/* Test Results Table */}
            <div className="p-6 overflow-x-auto">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-3">
                Laboratory Test Parameters &amp; Observed Metrics
              </h4>
              <table className="w-full text-left text-xs divide-y divide-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold font-mono">
                    <th className="py-2.5 px-3">Test Parameter</th>
                    <th className="py-2.5 px-3">Pharmacopeial Specification</th>
                    <th className="py-2.5 px-3">Observed Result</th>
                    <th className="py-2.5 px-3 text-right">Evaluation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {activeRecord.tests.map((t, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                      <td className="py-2.5 px-3 font-medium text-slate-900 font-sans">
                        {t.parameter}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {t.specification}
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">
                        {t.result}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="text-emerald-700 font-bold">
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Regulatory Compliance & Storage Notes */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <span className="font-semibold text-slate-900 font-mono uppercase tracking-wider block mb-1.5">
                  Regulatory Conformance
                </span>
                <ul className="space-y-1 text-slate-600">
                  {activeRecord.regulatoryCompliance.map((std, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0"></span>
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold text-slate-900 font-mono uppercase tracking-wider block mb-1.5">
                  Storage Conditions &amp; Handling
                </span>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {activeRecord.storageConditions}
                </p>

                {/* Sign-off Stamps */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div>
                    <span className="block text-slate-400 font-sans">Tested By:</span>
                    <span className="font-semibold text-slate-800">{activeRecord.analyst}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400 font-sans">Approved by QA:</span>
                    <span className="font-semibold text-slate-800">{activeRecord.approvedBy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 p-8 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center max-w-xl">
            <h4 className="text-sm font-semibold text-slate-900">Batch Record Not Found in Instant Cache</h4>
            <p className="text-xs text-slate-500 mt-1">
              Lot "{searchedLot}" may belong to an archival production consignment. Please contact our QA documentation desk at <span className="text-cyan-700 font-mono">info@molsynthbiochem.com</span> or select one of the quick sample lots above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
