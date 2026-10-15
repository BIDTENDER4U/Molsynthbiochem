import React from 'react';
import { Hero } from '../components/Hero';
import { Award, Target, Filter, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onExploreProducts,
  onContactUs,
}) => {
  const services = [
    {
      title: 'Premium Quality',
      description: 'Consistent quality for reliable results',
      iconUrl: 'https://img.icons8.com/nolan/64/warranty-card.png',
      fallbackIcon: Award,
      iconColor: 'text-purple-600',
    },
    {
      title: 'Precision Fit',
      description: 'Vials and caps engineered for perfect sealing',
      iconUrl: 'https://img.icons8.com/external-line-gradient-kendis-lasman/64/external-charts-7-chart-line-gradient-line-gradient-kendis-lasman.png',
      fallbackIcon: Target,
      iconColor: 'text-cyan-600',
    },
    {
      title: 'Superior Filtration',
      description: 'Filters for clean, particle free samples',
      iconUrl: 'https://img.icons8.com/nolan/64/filter.png',
      fallbackIcon: Filter,
      iconColor: 'text-pink-600',
    },
    {
      title: 'Expert Support',
      description: 'Dedicated support for your success',
      iconUrl: 'https://img.icons8.com/nolan/64/customer-support.png',
      fallbackIcon: Headphones,
      iconColor: 'text-[#0066FF]',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section matching Screenshot 1 */}
      <Hero
        onExploreProducts={onExploreProducts}
        onContactUs={onContactUs}
      />

      {/* About Us Teaser Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                <img
                  src="https://molsynthbiochem.com/assets/website/img/about.jpg"
                  alt="Molsynth Biochem team collaborating"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-2.5">
                  ABOUT US
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Your Reliable Partner in <span className="text-[#0066FF]">Analytical Solutions</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Molsynth Biochem LLP</strong> is an Indian importer and distributor committed to delivering high-quality products that meet the diverse requirements of industries across India. With a strong focus on quality, reliability, and customer satisfaction, we source from reputed global and domestic manufacturers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span>Wide range of quality products</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span>Reliable import &amp; distribution network</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span>Consistent stock availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <span>Timely &amp; efficient deliveries</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0066FF] hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview matching Screenshot 3 */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Check Our <span className="text-[#0066FF]">Services</span>
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              High-standard solutions engineered for pharmaceutical QC, formulation, and scientific labs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const FallbackIcon = service.fallbackIcon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-150 rounded-2xl p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow group"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 relative transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      width={52}
                      height={52}
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fb = e.currentTarget.parentElement?.querySelector('.fallback-home-service');
                        if (fb) fb.classList.remove('hidden');
                      }}
                    />
                    <div className="fallback-home-service hidden">
                      <FallbackIcon className={`w-8 h-8 ${service.iconColor} stroke-[1.8]`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] hover:text-blue-800 transition-colors cursor-pointer"
            >
              <span>Explore Detailed Service Capabilities &rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
