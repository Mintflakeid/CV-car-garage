import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Twitter, ChevronDown } from 'lucide-react';

interface SocialButtonProps {
  platform: 'instagram' | 'twitter';
}

const mockInstagramPosts = [
  'https://images.unsplash.com/photo-1579062270059-79a24d07d198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBhZXN0aGV0aWMlMjBtaW5pbWFsfGVufDF8fHx8MTc3NDQwMTcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzQ0MDE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1761870065047-f2da9429db23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc3NDM0Mjg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1613723984367-a9b7ee9052d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY2l0eSUyMGxpZ2h0cyUyMG5pZ2h0fGVufDF8fHx8MTc3NDQwMTcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1579062270059-79a24d07d198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBhZXN0aGV0aWMlMjBtaW5pbWFsfGVufDF8fHx8MTc3NDQwMTcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1614900195529-d57d0554cb86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwdXJiYW4lMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQ0MDE3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

const mockTwitterPosts = [
  { text: "New collection dropping soon 🔥 Techwear meets minimalism", likes: 234, retweets: 45 },
  { text: "Behind the scenes: Designing the future of urban fashion", likes: 567, retweets: 89 },
  { text: "Collaboration announcement coming this week. Stay tuned.", likes: 892, retweets: 234 },
  { text: "Function over form, but why not both?", likes: 445, retweets: 67 },
];

export function SocialButton({ platform }: SocialButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const config = {
    instagram: {
      icon: Instagram,
      label: 'Instagram',
      handle: '@karoshibrand',
      color: '#7BF2DA',
      systemLabel: 'VISUAL / FEED',
    },
    twitter: {
      icon: Twitter,
      label: 'X / Twitter',
      handle: '@KaroshiDrop',
      color: '#FFCB05',
      systemLabel: 'UPDATES / THREAD',
    },
  };

  const { icon: Icon, label, handle, color, systemLabel } = config[platform];

  return (
    <div className="relative">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-full group"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="relative border border-black/10 rounded-2xl p-6 bg-white hover:border-black/20 transition-all duration-300">
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l opacity-30" style={{ borderColor: color }} />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r opacity-30" style={{ borderColor: color }} />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l opacity-30" style={{ borderColor: color }} />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r opacity-30" style={{ borderColor: color }} />

          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            style={{ background: `radial-gradient(circle at center, ${color}15, transparent 70%)` }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center border"
                style={{ 
                  borderColor: `${color}40`,
                  backgroundColor: `${color}10`
                }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              {/* Text */}
              <div className="text-left">
                <div className="text-[9px] tracking-[0.15em] uppercase mb-1" style={{ color: `${color}` }}>
                  {systemLabel}
                </div>
                <div className="font-medium mb-0.5">{label}</div>
                <div className="text-xs text-[#B3B3B3]">{handle}</div>
              </div>
            </div>

            {/* Expand indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-[#B3B3B3]" />
            </motion.div>
          </div>

          {/* Micro label */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2">
            <span className="text-[8px] tracking-[0.2em] text-[#B3B3B3]/50 uppercase">
              EXPAND
            </span>
          </div>
        </div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 border border-black/10 rounded-2xl p-6 bg-white">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color }}>
                  RECENT / {platform === 'instagram' ? 'POSTS' : 'TWEETS'}
                </span>
                <div className="flex-1 h-[1px]" style={{ backgroundColor: `${color}20` }} />
              </div>

              {/* Content Grid/List */}
              {platform === 'instagram' ? (
                <div className="grid grid-cols-3 gap-2">
                  {mockInstagramPosts.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="aspect-square rounded-lg overflow-hidden border border-black/5 hover:border-[#7BF2DA]/50 transition-colors cursor-pointer"
                    >
                      <img src={img} alt={`Post ${idx + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {mockTwitterPosts.map((post, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border border-black/5 rounded-lg p-4 hover:border-[#FFCB05]/50 transition-colors cursor-pointer"
                    >
                      <p className="text-sm mb-2 leading-relaxed">{post.text}</p>
                      <div className="flex gap-4 text-xs text-[#B3B3B3]">
                        <span>{post.likes} likes</span>
                        <span>{post.retweets} retweets</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Footer label */}
              <div className="mt-4 pt-4 border-t border-black/5">
                <span className="text-[8px] tracking-[0.2em] text-[#B3B3B3] uppercase">
                  MOCK DATA / NOT LIVE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
