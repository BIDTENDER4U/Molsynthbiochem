import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { QuoteDrawer } from './components/QuoteDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { MatrixPage } from './pages/MatrixPage';
import { CoaPage } from './pages/CoaPage';
import { Product, QuoteItem, ProductCategory } from './types';

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [selectedCategoryFromNav, setSelectedCategoryFromNav] = useState<ProductCategory | undefined>();
  const [coaLotNumberToInspect, setCoaLotNumberToInspect] = useState<string | undefined>();

  // Synchronize with URL hash for browser back/forward and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && ['home', 'about', 'services', 'products', 'blogs', 'contact', 'matrix', 'coa'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Page navigation handler
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add product to quote basket
  const handleAddToQuote = (
    product: Product,
    quantity = 1,
    notes?: string,
    requestSample?: boolean
  ) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                notes: notes || item.notes,
                requestSample: requestSample ?? item.requestSample,
              }
            : item
        );
      }
      return [...prev, { product, quantity, notes, requestSample }];
    });
  };

  // Update item quantity
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Clear quote
  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleSelectCategoryFromNav = (category: ProductCategory) => {
    setSelectedCategoryFromNav(category);
    handleNavigate('products');
  };

  const handleInspectCoa = (lotNumber: string) => {
    setCoaLotNumberToInspect(lotNumber);
    handleNavigate('coa');
  };

  const totalQuoteUnits = quoteItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Top Contact & Social Bar matching Screenshot 1 */}
      <TopBar />

      {/* Main Header with page links & products dropdown */}
      <Header
        activeSection={currentPage}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategoryFromNav}
      />

      {/* Main Content Area: Renders the active dedicated page only */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onExploreProducts={() => handleNavigate('products')}
            onContactUs={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onAddToQuote={handleAddToQuote}
            onViewProduct={(product) => setActiveModalProduct(product)}
            quoteItemIds={quoteItems.map((item) => item.product.id)}
            initialCategory={selectedCategoryFromNav}
          />
        )}

        {currentPage === 'blogs' && (
          <BlogsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'matrix' && (
          <MatrixPage
            onNavigate={handleNavigate}
            onAddToQuote={handleAddToQuote}
            onViewProduct={(product) => setActiveModalProduct(product)}
          />
        )}

        {currentPage === 'coa' && (
          <CoaPage
            onNavigate={handleNavigate}
            initialLotNumber={coaLotNumberToInspect}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Global Product Specifications Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToQuote={handleAddToQuote}
        onInspectCoa={handleInspectCoa}
      />

      {/* Global Request for Quotation (RFQ) Drawer */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
        onAddProduct={handleAddToQuote}
      />
    </div>
  );
}
