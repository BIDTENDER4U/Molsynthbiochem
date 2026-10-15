import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  snippet: string;
  content: string;
  imageUrl: string;
}

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'hplc-vials-guide',
      title: 'Selecting the Right HPLC Autosampler Vials: 9mm Screw vs Crimp Top',
      category: 'Chromatography Supplies',
      date: 'March 28, 2026',
      author: 'Technical Services Team',
      snippet: 'Learn how thread geometry, borosilicate expansion type, and bonded septa technology prevent volatile sample loss and needle jamming in modern autosamplers.',
      content: `In modern high-performance liquid chromatography (HPLC and UHPLC), autosampler vials are far more than passive liquid containers—they are precision components of the injection system. 

Key considerations when specifying autosampler vials:
1. Glass Hydrolytic Resistance: Always demand USP Type 1 Class A 33-expansion borosilicate glass. Lower grade soda-lime or Type 2 treated glass leaches sodium, potassium, and silicon ions into mobile phases, causing ghost peaks at low UV wavelengths (<220 nm).
2. Septa Bonding: Ultrasonically bonded PTFE/Silicone septa eliminate adhesive contaminations and guarantee zero septa push-through even during rapid multi-injection queue runs.
3. Light Sensitive Compounds: Amber vials conforming to USP <660> with <10% spectral transmittance safeguard photo-labile active pharmaceutical ingredients (APIs).`,
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'syringe-filter-compatibility',
      title: 'Membrane Selection Guide: Hydrophilic PTFE vs PVDF vs Nylon 66',
      category: 'Sample Preparation',
      date: 'March 14, 2026',
      author: 'Analytical Applications Desk',
      snippet: 'Avoid column fouling and non-specific protein binding with this comprehensive breakdown of solvent compatibility and extractable profiles.',
      content: `Filtration is the first line of defense protecting expensive HPLC and UHPLC analytical columns from particulate clogging.

1. Hydrophilic PTFE: The true universal membrane. Compatible with both aggressive organic solvents (THF, DMSO, MeCN) and aqueous buffers with no pre-wetting required.
2. PVDF: The ideal choice for biological samples, peptides, and proteins due to its exceptionally low protein-binding profile (<1.5 µg/cm²).
3. Nylon 66: Mechanically tough with natural hydrophilicity, well-suited for general aqueous and mixed mobile phase clarification at pH 3–12.`,
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'usp-660-glassware',
      title: 'Understanding USP <660> and ISO 1042 Standards for Class A Laboratory Glassware',
      category: 'Quality Assurance',
      date: 'February 22, 2026',
      author: 'Dr. V. Deshmukh',
      snippet: 'An overview of volumetric calibration tolerances, thermal expansion coefficients, and batch conformity certificates in regulated QC environments.',
      content: `Pharmaceutical QC laboratories operating under US FDA, WHO-GMP, and CDSCO audits require full traceability for all volumetric apparatus.

Class A glassware manufactured from Borosilicate 3.3 according to DIN EN ISO 1042 provides half the measurement tolerance of commercial Class B glassware. Every flask and cylinder supplied by Molsynth Biochem includes individual batch-specific calibration certificates, verified gravimetrically at 20°C.`,
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="blogs" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
            BLOGS &amp; INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest Industry <span className="text-[#0066FF]">Articles</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Technical guidance, regulatory compliance notes, and chromatography consumables best practices from our analytical science specialists.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-[#0066FF]">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-slate-100">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0066FF] mb-2">
                <span>{selectedPost.category}</span>
                <span>&middot;</span>
                <span className="text-slate-400 font-normal">{selectedPost.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {selectedPost.title}
              </h2>

              <div className="prose text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-3">
                {selectedPost.content}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Published by Molsynth Biochem Technical Desk</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
