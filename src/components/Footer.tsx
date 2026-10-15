import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-white text-slate-900 font-bold text-xs flex items-center justify-center">
                MS
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Molsynth Biochem
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Molsynth Biochem LLP is an Indian importer and distributor of high-quality products for pharmaceutical, analytical, and healthcare laboratories.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              LLP Identification: Registered in Maharashtra, India
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-3">
              Product Portfolio
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  HPLC Autosampler Vials &amp; Closures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Syringe &amp; Membrane Filtration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Class A Borosilicate Glassware
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Analytical Instrumentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cleanroom &amp; Surgical Supplies
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Tools & Support */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-3">
              Technical Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('matrix')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Solvent Compatibility Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coa')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Certificates of Analysis (CoA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services &amp; Supply Chain
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blogs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Blogs &amp; Technical Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Office Locations
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors cursor-pointer text-left text-cyan-400"
                >
                  Commercial RFQ Basket
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Molsynth Biochem LLP
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-3">
              Office Locations
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <span className="text-slate-300 font-medium block">Corporation Office:</span>
                <span>Ulwe, Navi Mumbai - 410206</span>
              </div>
              <div>
                <span className="text-slate-300 font-medium block">Registered Office:</span>
                <span>Nakane Road, Dhule - 424002</span>
              </div>
              <div className="pt-2 font-mono">
                <a href="tel:+919867363202" className="text-cyan-400 hover:underline block">
                  +91 9867363202
                </a>
                <a href="tel:+919881191908" className="text-cyan-400 hover:underline block">
                  +91 9881191908
                </a>
                <a href="mailto:info@molsynthbiochem.com" className="text-slate-300 hover:underline block mt-1">
                  info@molsynthbiochem.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Molsynth Biochem LLP. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Compliant</span>
            <span aria-hidden="true">·</span>
            <span>USP &amp; EP Standards</span>
            <span aria-hidden="true">·</span>
            <span>molsynthbiochem.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
