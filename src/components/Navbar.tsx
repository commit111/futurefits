import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onCartClick,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <nav className="sticky top-0 backdrop-blur-lg bg-white/10 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">FutureCaps</h1>
            
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search hats..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/50" />
              </div>
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-blue-400 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;