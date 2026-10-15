import React from 'react';
import { Award, Target, Filter, Headphones } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'premium-quality',
      title: 'Premium Quality',
      description: 'Consistent quality for reliable results',
      iconUrl: 'https://img.icons8.com/nolan/64/warranty-card.png',
      fallbackIcon: Award,
      iconColor: 'text-purple-600',
    },
    {
      id: 'precision-fit',
      title: 'Precision Fit',
      description: 'Vials and caps engineered for perfect sealing',
      iconUrl: 'https://img.icons8.com/external-line-gradient-kendis-lasman/64/external-charts-7-chart-line-gradient-line-gradient-kendis-lasman.png',
      fallbackIcon: Target,
      iconColor: 'text-cyan-600',
    },
    {
      id: 'superior-filtration',
      title: 'Superior Filtration',
      description: 'Filters for clean, particle free samples',
      iconUrl: 'https://img.icons8.com/nolan/64/filter.png',
      fallbackIcon: Filter,
      iconColor: 'text-pink-600',
    },
    {
      id: 'expert-support',
      title: 'Expert Support',
      description: 'Dedicated support for your success',
      iconUrl: 'https://img.icons8.com/nolan/64/customer-support.png',
      fallbackIcon: Headphones,
      iconColor: 'text-[#0066FF]',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Pill + Title matching Screenshot 3 */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Our <span className="text-[#0066FF]">Services</span>
          </h2>
        </div>

        {/* 4 Cards Grid (Exact match to Screenshot 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const FallbackIcon = service.fallbackIcon;

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow group"
              >
                {/* Icon container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={service.iconUrl}
                    alt={service.title}
                    width={56}
                    height={56}
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.parentElement?.querySelector('.fallback-service-icon');
                      if (fb) fb.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-service-icon hidden">
                    <FallbackIcon className={`w-8 h-8 ${service.iconColor} stroke-[1.8]`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
