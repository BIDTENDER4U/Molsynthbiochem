import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onContactUs,
}) => {
  return (
    <section id="home" className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Exact Title from Screenshot 1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Welcome to <br />
            <span className="text-[#0066FF]">Molsynthbiochem</span>
          </h1>

          {/* Subtitle from Screenshot 1 */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            Delivering Advanced Analytical Solutions for the Pharmaceutical Industry.
          </p>

          {/* Value Checkpoints */}
          <div className="mt-8 space-y-3 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
              <span>Premier importer &amp; distributor of HPLC consumables, vials, and septa</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
              <span>High-grade laboratory glassware and precision syringe filtration membranes</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
              <span>Dual-hub warehousing in Navi Mumbai &amp; Dhule for prompt pan-India dispatch</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0066FF] hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactUs}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
