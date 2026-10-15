import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { ShieldCheck, Truck, Globe, Award, MapPin, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <span className="text-slate-900 font-semibold">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-[#0066FF]">Molsynth Biochem LLP</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Learn more about our company mission, quality values, and integrated supply network serving India's pharmaceutical and analytical sectors.
          </p>
        </div>
      </div>

      {/* Primary About Section matching Screenshot 2 with photo */}
      <AboutSection />

      {/* Extended Corporate Pillars Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Our Vision, Mission &amp; Quality Mandate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="w-12 h-12 bg-blue-50 text-[#0066FF] rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be India's most dependable partner for laboratory analytical consumables and instruments, recognized for prompt delivery, unwavering product purity, and unmatched customer trust.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Standards</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every batch of HPLC vials, septa, and syringe filters is audited against USP &lt;660&gt;, EP, and ISO 1042 standards to guarantee zero chemical extractables and consistent wall concentricity.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Integrated Logistics</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Finished inventory is held at our Navi Mumbai Corporate Office and Dhule Branch Facility to eliminate supply chain disruptions and enable 24–48 hour pan-India express dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Address Row */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0066FF] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>CORPORATION OFFICE</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Navi Mumbai, Maharashtra</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aaramus Complex CHS, Flat No. 802-C, Plot No. 87, Sector-21, Ulwe, Navi Mumbai - 410206, Maharashtra, India.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono">
                Phone: +91 9867363202 · Email: info@molsynthbiochem.com
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0066FF] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>REGISTERED OFFICE</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dhule, Maharashtra</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Plot No. 2, Aadhar Nagar, Nakane Road, Dhule - 424002, Maharashtra, India.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono">
                Phone: +91 9881191908 · Direct Road Supply Axis
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#0066FF] hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Get in Touch with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
