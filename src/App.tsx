import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { products } from './data/products';
import CartModal from './components/CartModal';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemPage from './components/ItemPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<typeof products>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  const addToCart = (product: (typeof products)[0]) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      <Navbar 
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="container mx-auto px-4 py-8 flex-grow">
        {selectedProduct ? (
          <ItemPage 
            product={selectedProduct}
            onAddToCart={() => addToCart(selectedProduct)}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <>
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              Future Fits: Premium Headwear
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => addToCart(product)}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;