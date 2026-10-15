import React from 'react';
import { BlogSection } from '../components/BlogSection';

interface BlogsPageProps {
  onNavigate: (page: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate }) => {
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
            <span className="text-slate-900 font-semibold">Blogs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Insights &amp; <span className="text-[#0066FF]">Articles</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Practical knowledge for analytical chemists, quality control officers, and procurement specialists in the pharmaceutical industry.
          </p>
        </div>
      </div>

      {/* Main Blog Component */}
      <BlogSection />
    </div>
  );
};
