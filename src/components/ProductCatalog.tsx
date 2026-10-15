import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORY_LABELS } from '../data/products';
import { Product, ProductCategory } from '../types';
import { Search, Plus, Eye, Check, SlidersHorizontal } from 'lucide-react';

interface ProductCatalogProps {
  onAddToQuote: (product: Product, quantity?: number) => void;
  onViewProduct: (product: Product) => void;
  quoteItemIds: string[];
  externalSelectedCategory?: ProductCategory;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToQuote,
  onViewProduct,
  quoteItemIds,
  externalSelectedCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    externalSelectedCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Sync if external category changes
  React.useEffect(() => {
    if (externalSelectedCategory) {
      setSelectedCategory(externalSelectedCategory);
    }
  }, [externalSelectedCategory]);

  const categories: ProductCategory[] = [
    'all',
    'hplc-consumables',
    'filtration',
    'laboratory-glassware',
    'analytical-instruments',
    'surgical-cleanroom',
  ];

  const getProductImage = (product: Product): string => {
    switch (product.category) {
      case 'hplc-consumables':
        return product.id.includes('amber')
          ? 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80'
          : 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80';
      case 'filtration':
        return 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80';
      case 'laboratory-glassware':
        return 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80';
      case 'analytical-instruments':
        return 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80';
      case 'surgical-cleanroom':
        return 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80';
      default:
        return 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80';
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.catalogNumber.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q);

      const matchStock = !onlyInStock || item.inStock;

      return matchCategory && matchSearch && matchStock;
    });
  }, [selectedCategory, searchQuery, onlyInStock]);

  return (
    <section id="products" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-[#0066FF] mb-3">
            PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Featured <span className="text-[#0066FF]">Products</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Comprehensive range of HPLC consumables, Class A laboratory glassware, syringe filtration membranes, and analytical equipment.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0066FF] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          {/* Search bar & quick filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by catalog SKU, product name, or specification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0066FF] border-slate-300 focus:ring-[#0066FF]"
                />
                <span className="font-medium">In-Stock Only</span>
              </label>
              <span className="text-xs text-slate-400 font-mono">
                ({filteredProducts.length} items)
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid with Photos */}
        {filteredProducts.length === 0 ? (
          <div className="mt-12 text-center py-16 border border-dashed border-slate-200 rounded-xl bg-slate-50">
            <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-slate-900">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setOnlyInStock(false);
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isAlreadyInQuote = quoteItemIds.includes(product.id);
              const imageUrl = getProductImage(product);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between border border-slate-200 rounded-2xl bg-white overflow-hidden hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Product Photo */}
                    <div 
                      className="relative h-44 overflow-hidden bg-slate-100 cursor-pointer"
                      onClick={() => onViewProduct(product)}
                    >
                      <img
                        src={imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-bold text-slate-900 shadow-xs">
                        {product.catalogNumber}
                      </div>
                      <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold">
                        Ready to Ship
                      </div>
                    </div>

                    <div className="p-5">
                      {/* Subcategory */}
                      <div className="text-xs text-[#0066FF] font-semibold mb-1">
                        {product.subCategory}
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onViewProduct(product)}
                        className="text-base font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors cursor-pointer line-clamp-2"
                      >
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Clean specs preview */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600 font-mono">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-sans">Material:</span>
                          <span className="font-semibold text-slate-800 truncate max-w-[170px]">
                            {product.material}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-sans">Packaging:</span>
                          <span className="font-semibold text-slate-800 truncate max-w-[170px]">
                            {product.packSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onViewProduct(product)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onAddToQuote(product, 1)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                        isAlreadyInQuote
                          ? 'bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200'
                          : 'bg-[#0066FF] text-white hover:bg-blue-700'
                      }`}
                    >
                      {isAlreadyInQuote ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>In Quote</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Quote</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
