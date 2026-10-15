import React from 'react';
import { CheckCircle2, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const points = [
    'Wide range of quality products',
    'Reliable import and distribution network',
    'Consistent stock availability',
    'Timely and efficient deliveries',
    'Customer-focused service approach',
    'Guaranteed premium quality for reliable results',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Pill + Title matching Screenshot 2 */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
            ABOUT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Out More <span className="text-[#0066FF]">About Us</span>
          </h2>
        </div>

        {/* Two-Column Grid: Photo on Left, Content on Right (Exact layout from Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Team Office Meeting Photo matching Screenshot 2 */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
              <img
                src="https://molsynthbiochem.com/assets/website/img/about.jpg"
                alt="Molsynth Biochem team collaborating at meeting table by window"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.parentElement?.querySelector('.fallback-about');
                  if (fb) fb.classList.remove('hidden');
                }}
              />

              {/* Styled Fallback */}
              <div className="fallback-about hidden w-full h-[450px] bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Molsynth Biochem LLP</h3>
                    <p className="text-xs text-slate-400">Collaborative Team &amp; Operations</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Dedicated specialists managing procurement, quality verification, inventory management, and pan-India logistics.
                </p>
                <div className="text-xs font-mono text-cyan-400">
                  Navi Mumbai &middot; Dhule
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Copy & Why Choose Us from Screenshot 2 */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Molsynth Biochem LLP</strong> is a trusted importer and distributor committed to delivering high-quality products that meet the diverse requirements of industries across India. With a strong focus on quality, reliability, and customer satisfaction, we provide a comprehensive range of products sourced from reputed global and domestic manufacturers.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our integrated approach combines procurement, inventory management, logistics, sales, and customer support under one streamlined system. This enables us to maintain efficient operations, implement effective marketing strategies, and ensure consistent product availability for our customers.
            </p>

            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Why Choose Molsynth Biochem LLP?
              </h3>

              <div className="space-y-3">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
