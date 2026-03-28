import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-purple-700 text-white border border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/50",
    secondary: "bg-white/5 text-white border border-purple-500/30 hover:bg-white/10 hover:border-purple-500/50"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {/* Animated shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
    </motion.button>
  );
}
