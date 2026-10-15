import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { SupplyChainHubs } from '../components/SupplyChainHubs';
import { ShieldCheck, Target, Filter, Headphones, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
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
            <span className="text-slate-900 font-semibold">Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-[#0066FF]">Services &amp; Capabilities</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Integrated analytical supply solutions designed to deliver consistent quality, guaranteed autosampler compatibility, and streamlined logistics.
          </p>
        </div>
      </div>

      {/* Primary Services Section matching Screenshot 3 */}
      <ServicesSection />

      {/* In-Depth Capability Breakdown */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
              EXCELLENCE IN EXECUTION
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Detailed Service Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Premium Quality */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 space-y-3">
              <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
                <h3>01. Premium Quality Assurance</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We distribute laboratory products meeting USP Type 1 Class A hydrolytic durability, DIN ISO 3585, and European Pharmacopoeia benchmarks. Every consignment includes verifiable Certificates of Analysis (CoA) to satisfy stringent FDA and WHO-GMP audit requirements.
              </p>
            </div>

            {/* 2. Precision Fit */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 space-y-3">
              <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
                <Target className="w-6 h-6 text-cyan-600" />
                <h3>02. Autosampler Precision Fit</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Vials and closures undergo 100% mechanical concentricity and neck thread inspection to ensure flawless operation with Agilent, Waters, Shimadzu, Thermo Scientific, and CTC PAL autosamplers, preventing needle bent incidents and sample queue interruptions.
              </p>
            </div>

            {/* 3. Superior Filtration */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 space-y-3">
              <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
                <Filter className="w-6 h-6 text-pink-600" />
                <h3>03. Superior Particle Filtration</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our syringe filters and membrane discs utilize medical-grade virgin polypropylene housings and ultrasonically welded construction with zero glues or plasticizers, eliminating chemical extractables and keeping chromatographic baseline noise below 0.005 AU.
              </p>
            </div>

            {/* 4. Expert Support */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 space-y-3">
              <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
                <Headphones className="w-6 h-6 text-[#0066FF]" />
                <h3>04. Dedicated Technical Support</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our experienced team assists analytical chemists and QA managers with chemical membrane compatibility reviews, custom sample request evaluation, tender specifications, and scheduled contract replenishments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Hub Pan-India Logistics */}
      <SupplyChainHubs />

      {/* Action CTA */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Have a Specific Project or Annual Contract Requirement?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Reach out to our customer support desk to request sample packs or customized corporate pricing.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-bold text-white bg-[#0066FF] hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Contact Support Desk
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Request a Quotation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
