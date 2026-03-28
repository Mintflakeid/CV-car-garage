import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ExternalLink } from 'lucide-react';

export function StoreButton() {
  const handleClick = () => {
    // In a real app, this would redirect to the actual store
    window.open('https://shopify.com', '_blank');
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleClick}
        className="relative w-full group"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="relative border border-black/10 rounded-2xl p-6 bg-white hover:border-black/20 transition-all duration-300">
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7BF2DA]/30" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7BF2DA]/30" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#7BF2DA]/30" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#7BF2DA]/30" />

          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            style={{ background: 'radial-gradient(circle at center, #7BF2DA15, transparent 70%)' }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center border border-[#7BF2DA]/40 bg-[#7BF2DA]/10"
              >
                <ShoppingBag className="w-6 h-6 text-[#7BF2DA]" />
              </div>

              {/* Text */}
              <div className="text-left">
                <div className="text-[9px] tracking-[0.15em] text-[#7BF2DA] uppercase mb-1">
                  STORE / COMMERCE
                </div>
                <div className="font-medium mb-0.5">Online Store</div>
                <div className="text-xs text-[#B3B3B3]">Shopify</div>
              </div>
            </div>

            {/* External link indicator */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] tracking-[0.15em] text-[#B3B3B3] uppercase">
                VISIT
              </span>
              <ExternalLink className="w-4 h-4 text-[#B3B3B3]" />
            </div>
          </div>

          {/* Micro label */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2">
            <span className="text-[8px] tracking-[0.2em] text-[#B3B3B3]/50 uppercase">
              REDIRECT
            </span>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
