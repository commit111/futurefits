import React from 'react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ItemPageProps {
  product: Product;
  onAddToCart: () => void;
  onBack: () => void;
}

const ItemPage: React.FC<ItemPageProps> = ({ product, onAddToCart, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/70 hover:text-white mb-12 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="aspect-square rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white">{product.name}</h1>
            <p className="text-4xl font-bold text-white">${product.price}</p>
          </div>

          <p className="text-white/70 text-lg leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={onAddToCart}
            className="flex items-center justify-center w-full gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            Add to Cart
          </button>

          <div className="pt-10 mt-10 border-t border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Product Details</h2>
            <ul className="space-y-4 text-white/70 text-lg">
              <li className="flex items-center">
                <span className="mr-3">•</span>
                Premium quality materials
              </li>
              <li className="flex items-center">
                <span className="mr-3">•</span>
                One size fits most
              </li>
              <li className="flex items-center">
                <span className="mr-3">•</span>
                Water-resistant finish
              </li>
              <li className="flex items-center">
                <span className="mr-3">•</span>
                30-day return policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;