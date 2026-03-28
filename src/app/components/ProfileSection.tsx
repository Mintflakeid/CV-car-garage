import React from 'react';

export function ProfileSection() {
  return (
    <div className="relative max-w-2xl mx-auto px-6 py-12">
      {/* Decorative grid overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-black" />
          ))}
        </div>
      </div>

      {/* Profile Picture */}
      <div className="relative flex justify-center mb-6">
        <div className="relative">
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#7BF2DA]" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#7BF2DA]" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#7BF2DA]" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#7BF2DA]" />
          
          <div className="w-32 h-32 rounded-full overflow-hidden border border-black/10 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1614900195529-d57d0554cb86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwdXJiYW4lMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQ0MDE3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Micro label */}
      <div className="flex justify-center items-center gap-2 mb-2">
        <div className="w-8 h-[1px] bg-[#B3B3B3]" />
        <span className="text-[10px] tracking-[0.15em] text-[#B3B3B3] uppercase">SYSTEM / ID</span>
        <div className="w-8 h-[1px] bg-[#B3B3B3]" />
      </div>

      {/* Username */}
      <h1 className="text-center text-3xl tracking-tight mb-1">
        Karoshi Drop
      </h1>

      {/* Handle */}
      <p className="text-center text-[#B3B3B3] mb-2">
        @KaroshiDrop
      </p>

      {/* Follows badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#7BF2DA]/30 bg-[#7BF2DA]/5 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7BF2DA]" />
          <span className="text-xs text-[#7BF2DA]">Follows you</span>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B3B3B3]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
          <div className="w-full h-full rotate-45 border border-[#B3B3B3]/30" />
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex items-start gap-2 mb-3">
          <span className="text-[9px] tracking-[0.15em] text-[#B3B3B3] uppercase mt-1">BIO</span>
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-center text-black/80">
              Futuristic streetwear enthusiast. Blending tech aesthetics with urban culture. 
              Curating digital experiences and physical fashion.
            </p>
          </div>
        </div>
      </div>

      {/* Barcode decoration */}
      <div className="flex justify-center gap-[2px] mb-4">
        {[3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 1, 3, 2].map((h, i) => (
          <div 
            key={i} 
            className="w-[2px] bg-black/20" 
            style={{ height: `${h * 4}px` }}
          />
        ))}
      </div>

      {/* System label */}
      <div className="text-center">
        <span className="text-[8px] tracking-[0.2em] text-[#B3B3B3] uppercase">
          MODULE / CONNECT / v2.6
        </span>
      </div>
    </div>
  );
}
