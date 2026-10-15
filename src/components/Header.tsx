import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ProductCategory } from '../types';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const productCategories: { label: string; cat: ProductCategory }[] = [
    { label: 'HPLC Consumables', cat: 'hplc-consumables' },
    { label: 'Laboratory Glassware', cat: 'laboratory-glassware' },
    { label: 'Filtration & Membranes', cat: 'filtration' },
    { label: 'Analytical & Scientific Instruments', cat: 'analytical-instruments' },
    { label: 'Surgical & Cleanroom Equipment', cat: 'surgical-cleanroom' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    handleNavClick('products');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo (Exact match to screenshot: "Molsynthbiochem") */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer"
          >
            <span className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-slate-900">
              Molsynthbiochem
            </span>
          </button>

          {/* Desktop Navigation Links (Exact match to screenshot: Home, About Us, Products v, Blogs, Contact Us) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#0066FF] transition-colors cursor-pointer py-1 ${
                activeSection === 'home' || activeSection === 'hero' ? 'text-[#0066FF] font-semibold' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#0066FF] transition-colors cursor-pointer py-1 ${
                activeSection === 'about' ? 'text-[#0066FF] font-semibold' : ''
              }`}
            >
              About Us
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className={`flex items-center gap-1.5 hover:text-[#0066FF] transition-colors cursor-pointer py-1 ${
                  activeSection === 'products' ? 'text-[#0066FF] font-semibold' : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full right-0 sm:left-0 w-64 bg-white border border-slate-150 rounded-xl shadow-xl py-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold border-b border-slate-100 mb-1">
                    Product Categories
                  </div>
                  {productCategories.map((item) => (
                    <button
                      key={item.cat}
                      onClick={() => handleCategoryClick(item.cat)}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/50 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => handleNavClick('products')}
                      className="w-full text-left px-4 py-1.5 text-xs font-semibold text-[#0066FF] hover:underline"
                    >
                      View All Products &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('blogs')}
              className={`hover:text-[#0066FF] transition-colors cursor-pointer py-1 ${
                activeSection === 'blogs' ? 'text-[#0066FF] font-semibold' : ''
              }`}
            >
              Blogs
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#0066FF] transition-colors cursor-pointer py-1 ${
                activeSection === 'contact' ? 'text-[#0066FF] font-semibold' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md border border-slate-200"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:text-[#0066FF]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:text-[#0066FF]"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('products')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:text-[#0066FF]"
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('blogs')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:text-[#0066FF]"
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:text-[#0066FF]"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};
