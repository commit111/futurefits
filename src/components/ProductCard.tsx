import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  return (
    <div 
      className="group relative backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-white/70 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;