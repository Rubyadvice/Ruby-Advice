import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Heart,
  Sparkles,
  Compass,
  BookOpen,
  Search,
  Flag,
  CheckCircle2,
  AlertTriangle,
  Wind,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Award,
  Sun,
  Moon,
  ChevronRight,
  Bookmark,
  Check,
  X,
  Activity,
  Scale,
  HelpCircle,
  Download,
  Calendar,
  Clock,
  Gem,
  Library,
  Layers,
  Eye,
  UserCheck,
  TrendingUp,
  TrendingDown,
  Maximize2,
  Waves,
  Shuffle,
  Globe,
  UserCircle,
  Link,
  MessageSquare,
  Gift,
  Shield,
  Users,
  Smile,
  Zap,
  CheckCircle,
  List,
  User,
  Smartphone,
  Key,
  ArrowUp,
  Cpu,
  Flame
} from 'lucide-react';

// ============================================================================
// CUSTOM SVG ICONS 
// ============================================================================

function RubyGradientLogo({ darkMode, size = 44, className = '' }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[24%] flex items-center justify-center shadow-md transition-colors duration-500 select-none overflow-hidden ${
        darkMode
          ? 'bg-[#080724] border border-indigo-500/30 shadow-indigo-950/60'
          : 'bg-[#F5F4F0] border border-stone-200/90 shadow-stone-300/60'
      } ${className}`}
    >
      <svg viewBox="0 0 120 120" className="w-[82%] h-[82%] drop-shadow-sm" fill="none">
        <defs>
          <linearGradient id="leftLobeGrad" x1="15" y1="22" x2="60" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6E3AFF" />
            <stop offset="50%" stopColor="#4618F2" />
            <stop offset="100%" stopColor="#1B75FF" />
          </linearGradient>
          <linearGradient id="leftInnerFold" x1="32" y1="52" x2="60" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1222C9" />
            <stop offset="55%" stopColor="#3B10E6" />
            <stop offset="100%" stopColor="#4F7BFF" />
          </linearGradient>
          <linearGradient id="rightLobeGrad" x1="95" y1="22" x2="58" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF9E6D" />
            <stop offset="55%" stopColor="#FFAE82" />
            <stop offset="100%" stopColor="#FF6B8B" />
          </linearGradient>
          <linearGradient id="centerFoldGrad" x1="60" y1="36" x2="88" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EC407A" />
            <stop offset="100%" stopColor="#FF9482" />
          </linearGradient>
          <linearGradient id="bottomRibbonGrad" x1="48" y1="98" x2="94" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D81B9E" />
            <stop offset="45%" stopColor="#FF176B" />
            <stop offset="100%" stopColor="#E61556" />
          </linearGradient>
        </defs>
        <clipPath id="heartMasterClip">
          <path d="M60 102 C60 102 14 72 14 41 C14 23 28 14 42 14 C52 14 58 20 60 27 C62 20 68 14 78 14 C92 14 106 23 106 41 C106 72 60 102 60 102 Z" />
        </clipPath>
        <g clipPath="url(#heartMasterClip)">
          <path d="M10 10 H60 V106 H10 Z" fill="url(#leftLobeGrad)" />
          <path d="M60 10 H110 V106 H60 Z" fill="url(#rightLobeGrad)" />
          <path d="M60 27 C59 48 34 55 24 76 C36 90 50 99 60 102 Z" fill="url(#leftInnerFold)" />
          <path d="M60 27 C64 48 82 55 94 70 L60 95 Z" fill="url(#centerFoldGrad)" />
          <path d="M47 93 C56 72 86 52 94 70 C84 86 60 102 60 102 Z" fill="url(#bottomRibbonGrad)" />
        </g>
      </svg>
    </div>
  );
}

function TieredHeartIcon({ tier = 'bronze', darkMode, size = 140, className = '' }) {
  const tColors = {
    bronze: {
      glow: 'from-orange-700/25 via-amber-600/20 to-yellow-500/15',
      c1: '#994500', c2: '#CC6600', c3: '#4D2200', c4: '#261100', c5: '#803300', c6: '#BF5500', c7: '#E67300', c8: '#B35900', c9: '#663300', c10: '#E68A2E', c11: '#FFB366', c12: '#331A00',
      p1: '#803300', p2: '#994500', p3: '#4D2200', p4: '#BF5500', p5: '#E67300', p6: '#CC6600', p7: '#B35900', p8: '#663300', p9: '#FFCC99', p10: '#FFD9B3'
    },
    silver: {
      glow: 'from-slate-500/25 via-gray-400/20 to-zinc-300/15',
      c1: '#8A99A8', c2: '#637385', c3: '#333F4D', c4: '#1A222B', c5: '#4A5768', c6: '#7E8D9E', c7: '#B4C2D1', c8: '#8A99A8', c9: '#4A5768', c10: '#A2B2C2', c11: '#D1DEEB', c12: '#26313D',
      p1: '#637385', p2: '#7A8A9C', p3: '#333F4D', p4: '#8A99A8', p5: '#B4C2D1', p6: '#92A2B3', p7: '#A2B2C2', p8: '#4A5768', p9: '#E8F0F8', p10: '#F2F6FA'
    },
    gold: {
      glow: 'from-yellow-600/25 via-amber-500/20 to-yellow-400/15',
      c1: '#B8860B', c2: '#DAA520', c3: '#553C00', c4: '#332400', c5: '#805A00', c6: '#CC9900', c7: '#FFD700', c8: '#DAA520', c9: '#735300', c10: '#FFC125', c11: '#FFE066', c12: '#402E00',
      p1: '#997300', p2: '#B38600', p3: '#4D3900', p4: '#CC9900', p5: '#FFD700', p6: '#E6B800', p7: '#FFC125', p8: '#664C00', p9: '#FFF0B3', p10: '#FFF7D9'
    },
    diamond: {
      glow: 'from-sky-400/25 via-blue-300/20 to-cyan-200/15',
      c1: '#CDE4F0', c2: '#99C2D6', c3: '#4D7A94', c4: '#264559', c5: '#70A3BF', c6: '#B3D9EB', c7: '#F2FAFF', c8: '#B3D9EB', c9: '#6696B3', c10: '#D9F0FF', c11: '#FFFFFF', c12: '#33576E',
      p1: '#80B3CC', p2: '#99C2D6', p3: '#4D7A94', p4: '#B3D9EB', p5: '#F2FAFF', p6: '#CCE6F5', p7: '#D9F0FF', p8: '#6696B3', p9: '#FFFFFF', p10: '#FFFFFF'
    }
  };
  const c = tColors[tier] || tColors.bronze;

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[24%] flex items-center justify-center shadow-2xl transition-all duration-500 select-none overflow-hidden ${
        darkMode
          ? 'bg-[#06061A] border border-white/10 shadow-black/70'
          : 'bg-[#F7F5F0] border border-stone-200/90 shadow-stone-300/50'
      } ${className}`}
    >
      <div className={`absolute inset-3 rounded-full bg-gradient-to-tr ${c.glow} blur-xl pointer-events-none`} />
      <svg viewBox="0 0 160 160" className="w-[84%] h-[84%] relative z-10 drop-shadow-lg" fill="none">
        <defs>
          <linearGradient id={`leftCrown-${tier}`} x1="20" y1="22" x2="80" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.c1} />
            <stop offset="45%" stopColor={c.c2} />
            <stop offset="100%" stopColor={c.c3} />
          </linearGradient>
          <linearGradient id={`leftDeep-${tier}`} x1="35" y1="65" x2="80" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.c4} />
            <stop offset="60%" stopColor={c.c5} />
            <stop offset="100%" stopColor={c.c6} />
          </linearGradient>
          <linearGradient id={`rightCrown-${tier}`} x1="135" y1="24" x2="80" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.c7} />
            <stop offset="50%" stopColor={c.c8} />
            <stop offset="100%" stopColor={c.c9} />
          </linearGradient>
          <linearGradient id={`centerFacet-${tier}`} x1="80" y1="42" x2="118" y2="98" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.c8} />
            <stop offset="65%" stopColor={c.c10} />
            <stop offset="100%" stopColor={c.c11} />
          </linearGradient>
          <linearGradient id={`bottomPav-${tier}`} x1="65" y1="135" x2="125" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.c9} />
            <stop offset="50%" stopColor={c.c1} />
            <stop offset="100%" stopColor={c.c12} />
          </linearGradient>
          <clipPath id={`heartClip-${tier}`}>
            <path d="M80 138 C80 138 18 98 18 55 C18 30 37 18 56 18 C69 18 77 26 80 35 C83 26 91 18 104 18 C123 18 142 30 142 55 C142 98 80 138 80 138 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#heartClip-${tier})`}>
          <path d="M12 12 H80 V142 H12 Z" fill={`url(#leftCrown-${tier})`} />
          <path d="M80 12 H148 V142 H80 Z" fill={`url(#rightCrown-${tier})`} />
          <polygon points="18,45 42,22 65,38 48,68" fill={c.p1} opacity="0.7" />
          <polygon points="65,38 80,35 80,58 48,68" fill={c.p2} opacity="0.85" />
          <polygon points="18,45 48,68 32,96 16,72" fill={c.p3} />
          <path d="M80 35 C76 62 45 72 32 98 C48 116 66 128 80 138 Z" fill={`url(#leftDeep-${tier})`} />
          <polygon points="48,82 80,58 80,94 64,116" fill={c.p3} opacity="0.88" />
          <polygon points="32,98 48,82 64,116 55,124" fill={c.p4} opacity="0.85" />
          <path d="M80 35 C86 64 110 74 126 94 L80 126 Z" fill={`url(#centerFacet-${tier})`} />
          <polygon points="104,18 134,34 124,62 92,40" fill={c.p5} opacity="0.55" />
          <polygon points="134,34 142,58 126,94 124,62" fill={c.p6} opacity="0.75" />
          <path d="M64 124 C76 96 114 70 126 94 C112 116 80 138 80 138 Z" fill={`url(#bottomPav-${tier})`} />
          <polygon points="80,94 108,84 96,118 80,138" fill={c.p7} opacity="0.65" />
          <polygon points="80,94 80,138 64,124" fill={c.p8} opacity="0.85" />
          <path d="M80 35 V138 M80 35 C76 62 45 72 32 98 M80 35 C86 64 110 74 126 94 M64 124 C76 96 114 70 126 94" stroke={c.p9} strokeWidth="0.9" strokeOpacity="0.55" />
          <polygon points="34,26 48,20 42,33 28,38" fill="#FFFFFF" opacity="0.88" />
          <polygon points="116,23 130,33 123,39 110,27" fill="#FFFFFF" opacity="0.92" />
          <polygon points="80,82 88,89 80,95" fill={c.p10} opacity="0.7" />
        </g>
        <path d="M80 138 C80 138 18 98 18 55 C18 30 37 18 56 18 C69 18 77 26 80 35 C83 26 91 18 104 18 C123 18 142 30 142 55 C142 98 80 138 80 138 Z" stroke={c.p9} strokeWidth="1.2" strokeOpacity="0.45" />
      </svg>
    </div>
  );
}

function PersonaGemIcon({ type, size = 120, className = '' }) {
  const gems = {
    Passion: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={`drop-shadow-[0_0_15px_rgba(255,0,50,0.8)] ${className}`}>
        <defs>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4444" />
            <stop offset="50%" stopColor="#FF0000" />
            <stop offset="100%" stopColor="#880000" />
          </linearGradient>
          <linearGradient id="redGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="50,10 90,50 50,90 10,50" fill="url(#redGrad)" stroke="#FFAAAA" strokeWidth="1.5" />
        <polygon points="50,10 50,90 10,50" fill="url(#redGlint)" opacity="0.4" />
        <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    Vigilant: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={`drop-shadow-[0_0_15px_rgba(150,0,255,0.8)] ${className}`}>
        <defs>
          <linearGradient id="purpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B266FF" />
            <stop offset="50%" stopColor="#6600FF" />
            <stop offset="100%" stopColor="#330088" />
          </linearGradient>
          <linearGradient id="purpGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6600FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M20,20 Q50,10 80,20 V50 Q80,80 50,95 Q20,80 20,50 Z" fill="url(#purpGrad)" stroke="#DDAAFF" strokeWidth="1.5" />
        <path d="M20,20 Q50,10 50,10 V95 Q20,80 20,50 Z" fill="url(#purpGlint)" opacity="0.4" />
        <path d="M30,30 Q50,22 70,30 V50 Q70,72 50,83 Q30,72 30,50 Z" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    Empathy: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={`drop-shadow-[0_0_15px_rgba(0,150,255,0.8)] ${className}`}>
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66CCFF" />
            <stop offset="50%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#002288" />
          </linearGradient>
          <linearGradient id="blueGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M50,10 C50,10 15,55 15,70 A35,35 0 0,0 85,70 C85,55 50,10 50,10 Z" fill="url(#blueGrad)" stroke="#AAFFFF" strokeWidth="1.5" />
        <path d="M50,10 C50,10 15,55 15,70 A35,35 0 0,0 50,105 Z" fill="url(#blueGlint)" opacity="0.4" />
        <path d="M50,25 C50,25 28,60 28,70 A22,22 0 0,0 72,70 C72,60 50,25 50,25 Z" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    Purity: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={`drop-shadow-[0_0_15px_rgba(0,255,100,0.8)] ${className}`}>
        <defs>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66FF99" />
            <stop offset="50%" stopColor="#00CC44" />
            <stop offset="100%" stopColor="#005511" />
          </linearGradient>
          <linearGradient id="greenGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00CC44" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#greenGrad)" stroke="#AAFFAA" strokeWidth="1.5" />
        <path d="M50,10 A40,40 0 0,0 50,90 A40,40 0 0,0 50,10 Z" fill="url(#greenGlint)" opacity="0.4" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    Joy: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={`drop-shadow-[0_0_15px_rgba(255,200,0,0.8)] ${className}`}>
        <defs>
          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFF66" />
            <stop offset="50%" stopColor="#FFBB00" />
            <stop offset="100%" stopColor="#AA5500" />
          </linearGradient>
          <linearGradient id="yellowGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFBB00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="15" y="15" width="70" height="70" rx="16" fill="url(#yellowGrad)" stroke="#FFFFCC" strokeWidth="1.5" />
        <rect x="15" y="15" width="35" height="70" rx="16" fill="url(#yellowGlint)" opacity="0.4" />
        <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
      </svg>
    )
  };
  return gems[type] || null;
}

/**
 * Radiant Faceted Emerald Green Ruby Heart Icon (Replaces Green Flag)
 */
function RadiantGreenRubyIcon({ size = 64, className = '' }) {
  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      className={`drop-shadow-[0_0_16px_rgba(16,185,129,0.55)] select-none ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="emeraldCrownL" x1="18" y1="20" x2="80" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="45%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id="emeraldCrownR" x1="140" y1="22" x2="80" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#022C22" />
        </linearGradient>
        <linearGradient id="emeraldCenter" x1="45" y1="35" x2="115" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="55%" stopColor="#047857" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <clipPath id="greenRubyClip">
          <path d="M80 140 C80 140 16 98 16 54 C16 28 36 16 56 16 C69 16 77 25 80 35 C83 25 91 16 104 16 C124 16 144 28 144 54 C144 98 80 140 80 140 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#greenRubyClip)">
        <path d="M10 10 H80 V145 H10 Z" fill="url(#emeraldCrownL)" />
        <path d="M80 10 H150 V145 H80 Z" fill="url(#emeraldCrownR)" />
        <polygon points="80,35 116,58 80,104 44,58" fill="url(#emeraldCenter)" />
        <polygon points="16,54 48,22 80,35 44,58" fill="#34D399" opacity="0.65" />
        <polygon points="144,54 112,22 80,35 116,58" fill="#A7F3D0" opacity="0.7" />
        <polygon points="16,54 44,58 52,102 24,88" fill="#064E3B" opacity="0.85" />
        <polygon points="144,54 116,58 108,102 136,88" fill="#047857" opacity="0.85" />
        <polygon points="44,58 80,104 80,140 52,102" fill="#022C22" opacity="0.9" />
        <polygon points="116,58 80,104 80,140 108,102" fill="#065F46" opacity="0.9" />
        <path
          d="M80 35 V140 M44 58 L116 58 M48 22 L44 58 L52 102 L80 140 M112 22 L116 58 L108 102 L80 140"
          stroke="#D1FAE5"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <polygon points="36,26 52,19 46,34 30,36" fill="#FFFFFF" opacity="0.92" />
        <polygon points="114,24 130,32 122,40 108,30" fill="#FFFFFF" opacity="0.95" />
        <circle cx="80" cy="60" r="3" fill="#FFFFFF" opacity="0.85" />
      </g>
      <path
        d="M80 140 C80 140 16 98 16 54 C16 28 36 16 56 16 C69 16 77 25 80 35 C83 25 91 16 104 16 C124 16 144 28 144 54 C144 98 80 140 80 140 Z"
        stroke="#6EE7B7"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/**
 * Fractured Iridescent Obsidian Black Ruby Heart Icon (Replaces Red Flag)
 */
function FracturedBlackRubyIcon({ size = 64, className = '' }) {
  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      className={`drop-shadow-[0_0_16px_rgba(99,102,241,0.5)] select-none ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="obsidianL" x1="15" y1="18" x2="78" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="40%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="obsidianR" x1="142" y1="18" x2="82" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="45%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="prismaticRefraction" x1="20" y1="25" x2="140" y2="125" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="32%" stopColor="#F43F5E" />
          <stop offset="66%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>

      {/* Left Fractured Half */}
      <g>
        <path
          d="M77 139 C77 139 15 97 15 54 C15 28 35 16 55 16 C67 16 74 24 77 34 L73 53 L80 72 L72 95 L78 115 Z"
          fill="url(#obsidianL)"
          stroke="url(#prismaticRefraction)"
          strokeWidth="1.4"
        />
        <polygon points="15,54 46,20 77,34 44,62" fill="#1E293B" opacity="0.85" />
        <polygon points="44,62 73,53 72,95 48,98" fill="#090D16" opacity="0.95" />
        <path d="M22 44 L68 78 M46 20 L44 62 L48 98" stroke="url(#prismaticRefraction)" strokeWidth="1.2" strokeOpacity="0.75" />
        <polygon points="34,26 48,20 42,33 28,36" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Right Fractured Half */}
      <g>
        <path
          d="M83 139 C83 139 145 97 145 54 C145 28 125 16 105 16 C93 16 86 24 83 34 L79 53 L86 72 L78 95 L84 115 Z"
          fill="url(#obsidianR)"
          stroke="url(#prismaticRefraction)"
          strokeWidth="1.4"
        />
        <polygon points="145,54 114,20 83,34 116,62" fill="#334155" opacity="0.75" />
        <polygon points="116,62 86,72 78,95 112,98" fill="#0F172A" opacity="0.9" />
        <path d="M136 46 L88 82 M114 20 L116 62 L112 98" stroke="url(#prismaticRefraction)" strokeWidth="1.2" strokeOpacity="0.75" />
        <polygon points="114,24 130,32 122,40 108,29" fill="#FFFFFF" opacity="0.92" />
      </g>

      {/* Center Jagged Prismatic Fault Line */}
      <path
        d="M80 32 L75 53 L83 72 L75 95 L81 115 L80 140"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

// ============================================================================
// COMPLETE DOCUMENT DATA REPOSITORY
// ============================================================================

const TOP_20_ADVICE = [
  { rank: 1, title: "Practice Empathy, Validation, and Active Listening", description: "Prioritize understanding your partner's internal world and validating their feelings, even when you disagree, by listening deeply rather than immediately trying to fix their problems.", category: "Communication & Empathy", checkInQuestion: "Over the past week, how well did your partner listen deeply to your feelings and validate your internal world without immediately trying to 'fix' the problem?", relatedMistakeId: 1, recommendedBooks: ["Hold Me Tight: Seven Conversations for a Lifetime of Love", "The Seven Principles for Making Marriage Work", "Emotions Revealed: Recognizing Faces and Feelings to Improve Communication"] },
  { rank: 2, title: "Communicate Needs Openly", description: "Articulate your thoughts, feelings, and boundaries clearly and respectfully, ensuring your partner does not have to guess what you require to feel secure.", category: "Communication & Empathy", checkInQuestion: "How clearly and gracefully did your partner express their thoughts, needs, and boundaries without expecting mind-reading?", relatedMistakeId: 5, recommendedBooks: ["Crucial Conversations: Tools for Talking When Stakes Are High", "Attached: The New Science of Adult Attachment", "Models: Attract Women Through Honesty"] },
  { rank: 3, title: "Maintain Individual Purpose and Self-Worth", description: "Do not lose your identity in the romance; prioritizing your life's mission, personal growth, and self-esteem makes you a healthier and more attractive partner.", category: "Autonomy & Polarity", checkInQuestion: "How well did your partner maintain their own personal mission, hobbies, and grounded self-worth alongside your relationship?", relatedMistakeId: 4, recommendedBooks: ["The Way of the Superior Man", "Spinster: Making a Life of One's Own", "The Rational Male"] },
  { rank: 4, title: "Offer Selfless Love and Care", description: "True affection involves selfless giving, prioritizing the partner's well-being over personal ego, and exercising daily charity and compassion.", category: "Devotion & Warmth", checkInQuestion: "How consistently did your partner show selfless care, daily kindness, and put your well-being ahead of personal ego?", relatedMistakeId: 2, recommendedBooks: ["The Art of Loving", "The 5 Love Languages: The Secret to Love That Lasts", "Love at Goon Park: Harry Harlow and the Science of Affection"] },
  { rank: 5, title: "Foster Mutual Respect and Appreciation", description: "Cultivate admiration for your partner, praise their positive traits, and treat them with a high degree of dignity and honor.", category: "Devotion & Warmth", checkInQuestion: "How often did your partner express genuine appreciation, praise your efforts, and treat you with dignity and honor?", relatedMistakeId: 1, recommendedBooks: ["The Seven Principles for Making Marriage Work", "Fascinating Womanhood", "The Alabaster Girl"] },
  { rank: 6, title: "Set Clear Boundaries", description: "Establish what constitutes acceptable behavior, maintain your personal integrity, and be willing to walk away from mistreatment or abuse.", category: "Boundaries & Integrity", checkInQuestion: "How well were healthy boundaries respected and upheld with integrity between both of you this week?", relatedMistakeId: 3, recommendedBooks: ["Where You End and I Begin: How to Recognize and Set Healthy Boundaries", "Women Who Love Too Much: When You Keep Hoping and Trying for Him to Change", "He's Just Not That Into You: The No-Excuses Truth to Understanding Guys"] },
  { rank: 7, title: "Avoid Toxic Conflict Behaviors", description: "Eliminate defensiveness, contempt, harsh criticism, and blame during disagreements to prevent emotional flooding and relationship breakdown.", category: "Conflict & Repair", checkInQuestion: "During tense moments or disagreements this week, how well did your partner avoid blame, sarcasm, contempt, or stonewalling?", relatedMistakeId: 2, recommendedBooks: ["The Seven Principles for Making Marriage Work", "Crucial Conversations: Tools for Talking When Stakes Are High", "Hold Me Tight: Seven Conversations for a Lifetime of Love"] },
  { rank: 8, title: "Accept Your Partner Without Trying to Change Them", description: "Stop offering unsolicited advice or criticism aimed at molding your partner, and instead accept their inherent flaws and differences.", category: "Communication & Empathy", checkInQuestion: "How well did your partner accept you as you are this week, without offering unsolicited advice or treating you like an improvement project?", relatedMistakeId: 1, recommendedBooks: ["Fascinating Womanhood", "Women Who Love Too Much: When You Keep Hoping and Trying for Him to Change", "Getting the Love You Want: A Guide for Couples"] },
  { rank: 9, title: "Allow Traditional Masculine Pursuits", description: "Permit men to fulfill their drives to lead, pursue, and provide, which supports traditional relationship dynamics and fulfills evolutionary desires.", category: "Autonomy & Polarity", checkInQuestion: "How harmoniously did you both honor natural relationship polarity (e.g., allowing leadership, pursuit, protection, and receptive appreciation)?", relatedMistakeId: 1, recommendedBooks: ["Act Like a Lady, Think Like a Man", "The Rules: Time-Tested Secrets for Capturing the Heart of Mr. Right", "The Manual: What Women Want and How to Get It"] },
  { rank: 10, title: "Commit to Marital Fidelity", description: "Honor marriage vows, maintain sexual exclusivity, and treat the relationship as a sacred, enduring covenant rather than a temporary arrangement.", category: "Boundaries & Integrity", checkInQuestion: "How deeply did your partner make you feel that your bond is a sacred, exclusive, and enduring priority?", relatedMistakeId: 3, recommendedBooks: ["Marriage, a History: From Obedience to Intimacy or How Love Conquered Marriage", "One Perfect Day: The Selling of the American Wedding", "The Seven Principles for Making Marriage Work"] },
  { rank: 11, title: "Maintain Space and Mystery", description: "Avoid becoming overly predictable or constantly available; allowing for distance and independence fuels desire and prevents codependency.", category: "Autonomy & Polarity", checkInQuestion: "How well did you both balance closeness with healthy breathing room, independence, and romantic anticipation?", relatedMistakeId: 4, recommendedBooks: ["The Art of Seduction", "The Rules for Marriage: Time-Tested Secrets for Making Your Marriage Work", "The Way of the Superior Man"] },
  { rank: 12, title: "Respect Inherent Gender Differences", description: "Recognize that men and women often process stress, intimacy, and communication differently, such as men needing space and women needing verbal processing.", category: "Autonomy & Polarity", checkInQuestion: "How respectfully did your partner honor how you uniquely process stress (whether retreating to a quiet 'cave' or talking feelings through)?", relatedMistakeId: 1, recommendedBooks: ["Why Him? Why Her? Finding Real Love By Understanding Your Personality Type", "Act Like a Lady, Think Like a Man", "What Women Want: An Evidence-Based Guide to Realizing Your Mating Potential"] },
  { rank: 13, title: "Cultivate a Safe Emotional Environment", description: "Build a secure base where both partners feel completely safe to be vulnerable without fear of rejection, mockery, or retaliation.", category: "Conflict & Repair", checkInQuestion: "How emotionally safe did you feel being vulnerable with your partner this week, free from fear of mockery or judgment?", relatedMistakeId: 2, recommendedBooks: ["Hold Me Tight: Seven Conversations for a Lifetime of Love", "Wired to Connect: The Surprising Link Between Brain Science and Strong, Healthy Relationships", "Attached: The New Science of Adult Attachment"] },
  { rank: 14, title: "Forgive Offenses Readily", description: "Let go of past hurts, abandon transactional accounting, and offer grace when your partner makes mistakes.", category: "Conflict & Repair", checkInQuestion: "How readily did your partner offer grace and let go of minor mistakes without keeping a transactional 'tit-for-tat' scoreboard?", relatedMistakeId: 2, recommendedBooks: ["Getting the Love You Want: A Guide for Couples", "The Art of Loving", "Hold Me Tight: Seven Conversations for a Lifetime of Love"] },
  { rank: 15, title: "Continue Courtship Over the Long Term", description: "Treat long-term relationships with the same effort as early dating by speaking your partner's love language and planning ongoing romantic gestures.", category: "Devotion & Warmth", checkInQuestion: "How intentionally did your partner court you, plan quality moments, or speak your primary love language this week?", relatedMistakeId: 4, recommendedBooks: ["The 5 Love Languages: The Secret to Love That Lasts", "The Rules for Marriage: Time-Tested Secrets for Making Your Marriage Work", "The Art of Seduction"] },
  { rank: 16, title: "Build Deep Friendship and Shared Meaning", description: "Base your romance on a strong underlying friendship, common values, and unified life goals rather than just passion.", category: "Devotion & Warmth", checkInQuestion: "How connected did you feel as deep friends sharing common values and unified life goals this week?", relatedMistakeId: 5, recommendedBooks: ["The Seven Principles for Making Marriage Work", "Social Intelligence: The New Science of Human Relationships", "Marriage, a History: From Obedience to Intimacy or How Love Conquered Marriage"] },
  { rank: 17, title: "Compromise and Accept Influence", description: "Yield to your partner's perspectives and find synergistic 'middle way' solutions rather than insisting on always being right.", category: "Conflict & Repair", checkInQuestion: "How willing was your partner to accept your influence and find a cooperative 'middle way' instead of insisting on being right?", relatedMistakeId: 2, recommendedBooks: ["The Seven Principles for Making Marriage Work", "Crucial Conversations: Tools for Talking When Stakes Are High", "Getting the Love You Want: A Guide for Couples"] },
  { rank: 18, title: "Practice Good Manners and Self-Discipline", description: "Treat your partner with the same courtesy you would extend to a guest, maintaining your personal grooming and emotional self-mastery.", category: "Boundaries & Integrity", checkInQuestion: "How well did your partner practice everyday courtesy, self-care, and emotional self-mastery around you?", relatedMistakeId: 3, recommendedBooks: ["What Women Want: An Evidence-Based Guide to Realizing Your Mating Potential", "Emotions Revealed: Recognizing Faces and Feelings to Improve Communication", "The Rules for Marriage: Time-Tested Secrets for Making Your Marriage Work"] },
  { rank: 19, title: "Judge by Actions Over Words", description: "Evaluate a partner's true intentions and level of commitment based on their consistent behavior rather than their verbal promises or excuses.", category: "Boundaries & Integrity", checkInQuestion: "How reliably did your partner's concrete actions match their promises and words this week?", relatedMistakeId: 3, recommendedBooks: ["He's Just Not That Into You: The No-Excuses Truth to Understanding Guys", "Act Like a Lady, Think Like a Man", "Models: Attract Women Through Honesty"] },
  { rank: 20, title: "Keep Interactions Lighthearted and Humorous", description: "Utilize playfulness and humor to diffuse tension, remaining relaxed and avoiding taking minor relationship friction too seriously.", category: "Devotion & Warmth", checkInQuestion: "How often did your partner bring playfulness, warmth, and humor into your daily life to diffuse minor tension?", relatedMistakeId: 2, recommendedBooks: ["Modern Dating: A Field Guide", "The Alabaster Girl", "Social Intelligence: The New Science of Human Relationships"] }
];

const COMMON_MISTAKES = [
  { id: 1, title: "Trying to Change, 'Fix,' or Control Your Partner", mistake: "Partners frequently create friction by refusing to accept each other as they are. Women often form a 'home-improvement committee,' offering unsolicited advice and criticism that leaves men feeling broken, controlled, and unloved. Conversely, men often interrupt women to offer logical solutions when a woman simply wants to share her feelings and feel understood. Trying to save a partner from their fundamental flaws or molding them to an ideal standard is a destructive trap that leads to suffering.", fix: "Practice unconditional acceptance and empathy. Men should listen respectfully to a woman's feelings without attempting to fix her problems or getting angry. Women must restrain from offering unsolicited advice, trusting the man to figure things out on his own. Approach your partner with the premise of appreciating their inherent virtues rather than acting out of self-righteousness." },
  { id: 2, title: "Destructive Conflict Behaviors (Blame, Contempt, and Withdrawal)", mistake: "Engaging in mutual blame, character criticism, and contempt destroys the emotional haven of a relationship and makes resolving problems virtually impossible. When overwhelmed by conflict, partners often withdraw, stonewall, or give the silent treatment, which creates a dangerous 'dance' of distance and numbness. Using absolutist language or painting the partner as the sole source of frustration prevents reconciliation.", fix: "Soften your startup during disagreements, actively make and receive repair attempts, and learn to self-soothe to avoid emotional flooding. Use effective communication by focusing on your own needs and feelings rather than highlighting your partner's shortcomings or making accusations. Maintain basic concern for your partner's well-being even during disputes." },
  { id: 3, title: "Failing to Set Boundaries and Tolerating Poor Behavior", mistake: "Relationships often become unhealthy or one-sided due to overly rigid or porous boundaries. Individuals frequently make excuses for a partner's bad behavior, lack of commitment, or emotional unavailability instead of confronting the reality of the situation. Staying in a murky, undefined dynamic out of fear of losing the person only invites disrespect and heartbreak.", fix: "Discuss the 'rules of engagement' and establish clear expectations early in the relationship. Pay attention to a partner's actions rather than their words; if they are not following through or treating you with respect, be willing to walk away. Maintain your self-esteem and never sacrifice your own serenity to keep the peace in a dysfunctional dynamic." },
  { id: 4, title: "Losing Individual Identity and Smothering the Relationship (Neediness)", mistake: "Over-investing, abandoning personal goals, or making the relationship the sole focus of life creates neediness that extinguishes attraction. A man who prioritizes his romantic relationship over his highest life purpose or mission ultimately weakens himself and loses his partner's trust. Smothering a partner with excessive surveillance, constant communication, or a lack of physical and emotional space leads to boredom and a loss of mystery.", fix: "Maintain a fulfilling life, career, and social circle independent of your partner. Recognize that attraction thrives in space, so avoid being overly available or constantly demanding attention. Let the relationship be a complementary part of your life rather than its entirety, allowing natural longing to build." },
  { id: 5, title: "Expecting Mind-Reading and Avoiding Direct Communication", mistake: "Partners often set themselves up for disappointment by assuming the other person shares their exact communication style, emotional needs, or worldview. People avoid difficult, face-to-face conversations to keep the peace or act 'cool,' which suppresses true feelings and breeds passive-aggressive resentment.", fix: "Wear your heart on your sleeve and be completely honest and brave about your feelings. Clearly state your boundaries, expectations, and needs without assuming your partner can instinctively anticipate them. Hold each other accountable through direct, respectful dialogue to ensure both individuals feel emotionally secure and valued." }
];

const MALE_DOS_DONTS = [
  { doTitle: "Do prioritize your life's purpose", doDesc: "Maintain your personal mission and goals above the relationship to retain your masculine drive.", dontTitle: "Don't act needy", dontDesc: "Avoid over-investing early in a relationship or seeking constant validation." },
  { doTitle: "Do let her chase you", doDesc: "Allow the woman to come to you and express her interest to build her attraction.", dontTitle: "Don't over-communicate", dontDesc: "Do not bombard a woman with text messages or calls if she does not respond immediately." },
  { doTitle: "Do listen to her feelings", doDesc: "When a woman is upset, listen to her vent without immediately trying to offer logical solutions or fix her problems.", dontTitle: "Don't rely on pure logic", dontDesc: "Do not try to convince a woman to like you using rational arguments when her decisions are emotionally driven." },
  { doTitle: "Do remain centered", doDesc: "Maintain your emotional stability and remain unbothered when a woman tests your boundaries.", dontTitle: "Don't offer unsolicited advice", dontDesc: "Do not try to 'fix' her when she simply wants to be heard and understood." },
  { doTitle: "Do lead the interaction", doDesc: "Make definitive plans for dates and confidently direct the relationship.", dontTitle: "Don't lose your focus", dontDesc: "Do not prioritize the relationship over your own masculine drive, options, and freedom." },
  { doTitle: "Do utilize your 'cave'", doDesc: "Take time for yourself to process stress and solve problems independently.", dontTitle: "Don't become complacent", dontDesc: "Do not stop courting your partner or fall into lazy routines once you are in a committed relationship." },
  { doTitle: "Do project strength and independence", doDesc: "Assert your boundaries and avoid acting from a place of fear or insecurity.", dontTitle: "Don't buy early gifts", dontDesc: "Do not buy gifts early in the dating phase, as this can be perceived as a bribe for sex." },
  { doTitle: "Do treat highly attractive women normally", doDesc: "Treat beautiful women with the same grounded indifference as women you are not interested in.", dontTitle: "Don't be highly reactive", dontDesc: "Do not throw tantrums, become aggressive, or act jealous when faced with conflict." },
  { doTitle: "Do compliment her sincerely", doDesc: "Validate her by noticing and praising her appearance, such as her hair or new clothes.", dontTitle: "Don't unload all your emotional baggage", dontDesc: "Do not constantly dump your negative feelings and insecurities onto her." },
  { doTitle: "Do recognize her need for safety", doDesc: "Understand that women need to feel emotionally comfortable and safe before engaging intimately.", dontTitle: "Don't alter your identity", dontDesc: "Do not compromise your core beliefs or change your personality just to win a woman's approval." }
];

const FEMALE_DOS_DONTS = [
  { doTitle: "Do maintain your independence", doDesc: "Cultivate your own hobbies and social life rather than making a man the center of your universe.", dontTitle: "Don't chase a man", dontDesc: "Do not initiate calls, ask him out first, or try to force a relationship to progress." },
  { doTitle: "Do let the man take the lead", doDesc: "Allow him to pursue you, initiate calls, and arrange dates.", dontTitle: "Don't offer unsolicited advice", dontDesc: "Do not give a man unprompted instructions, as he will interpret it as criticism or an implication that he is broken." },
  { doTitle: "Do show appreciation", doDesc: "Trust in a man and validate his efforts to fulfill his need to feel capable and accepted.", dontTitle: "Don't try to change him", dontDesc: "Do not attempt to alter a man's habits, friends, or life choices." },
  { doTitle: "Do give him space", doDesc: "Allow a man to withdraw into his 'cave' when he is stressed, trusting that he will return when ready.", dontTitle: "Don't over-analyze perceived flaws", dontDesc: "Do not rely on a rigid checklist to dissect a man's shortcomings." },
  { doTitle: "Do set healthy boundaries", doDesc: "Be willing to walk away from relationships that are destructive or fail to meet your needs.", dontTitle: "Don't follow him into his 'cave'", dontDesc: "Do not demand that he talk about his problems or emotions before he is ready." },
  { doTitle: "Do accept him as he is", doDesc: "Appreciate your partner without treating him as a project to be fixed, trained, or improved.", dontTitle: "Don't take over masculine tasks", dontDesc: "Do not do heavy lifting or perform tasks that prevent a man from fulfilling his desire to protect and provide." },
  { doTitle: "Do express your needs directly", doDesc: "Communicate your desires gracefully rather than expecting a man to instinctively read your mind.", dontTitle: "Don't make excuses for poor behavior", dontDesc: "Do not rationalize a man consistently failing to call or follow through on plans." },
  { doTitle: "Do pace physical intimacy", doDesc: "Wait until you are in a steady, committed relationship before becoming sexually intimate.", dontTitle: "Don't overshare too soon", dontDesc: "Do not reveal your entire life story, past relationship trauma, or deep neuroses on the first few dates." },
  { doTitle: "Do maintain mystery", doDesc: "Keep early dates and phone calls relatively brief to build anticipation and avoid oversharing.", dontTitle: "Don't belittle his abilities", dontDesc: "Do not criticize a man's masculine skills or compete with him in ways that emasculate him." },
  { doTitle: "Do judge him by his actions", doDesc: "Recognize that if a man truly wants to see you, he will make the concrete effort to contact you.", dontTitle: "Don't settle for less", dontDesc: "Do not remain with a man who does not make you a priority or who treats you as merely an option." }
];

const FIVE_WS_DATA = {
  female: {
    label: "The Female Perspective: Choosing a Partner",
    subtitle: "Clarity, discernment, and emotional wisdom when selecting a life partner",
    items: [
      { type: "Who", question: "Who is actually right for me?", points: ["Daters should eliminate objective dealbreakers like age or height and prioritize subjective qualities such as kindness and maturity.", "According to the text 'Romance (Female Perspective)', marital success relies heavily on compromise, tolerance, and shared family goals.", "Pursuing a relentless high-chemistry spark often causes individuals to overlook severe incompatibilities and destructive partner traits."] },
      { type: "What", question: "What are their true intentions?", points: ["Avoidant partners frequently send mixed signals, demand unrealistic relationship ideals, and routinely ignore their partner's emotional well-being.", "A genuine man will explicitly answer difficult questions about his intentions and relationship goals up front without deflecting.", "If a partner consistently forgets to call or acts unreliably, their lack of effort is a clear indication of low romantic interest."] },
      { type: "Where", question: "Where do I find quality partners?", points: ["Instead of juggling endless online profiles, singles should expand their real-world social activities to include shared-interest groups.", "Attending local events, joining a gym, or utilizing professional matchmakers helps individuals find partners aligned with their values."] },
      { type: "When", question: "When should I commit or walk away?", points: ["Women should mandate a ninety-day probationary period to withhold physical intimacy and accurately evaluate a man's true character.", "To avoid settling, women must decisively end connections with partners who send ambiguous messages or refuse to offer commitment."] },
      { type: "Why", question: "Why do I repeat patterns?", points: ["Individuals often re-create the painful dynamics of their childhoods in adult relationships in an unconscious drive to gain mastery over them.", "Anxious individuals frequently confuse the adrenaline of an activated attachment system with true, passionate love."] },
      { type: "How", question: "How do I recover from rejection?", points: ["Heartbroken individuals can deactivate their attachment system by writing down the negative aspects of the failed relationship.", "Rejection serves as a highly effective screening mechanism to eliminate inappropriate partners who would not provide long-term fulfillment."] }
    ]
  },
  male: {
    label: "The Male Perspective: Generating Attraction",
    subtitle: "Authentic confidence, grounded leadership, and overcoming people-pleasing",
    items: [
      { type: "Who", question: "Who do I need to become?", points: ["Men must discard the paradigm that hiding their flaws and endlessly pleasing others will guarantee love and a problem-free life.", "True confidence is forged by embracing imperfections and living authentically without constantly seeking external validation.", "A man increases his intrinsic value by developing a broad social network that demonstrates generosity, leadership, and emotional stability."] },
      { type: "What", question: "What triggers attraction?", points: ["Women are drawn to men who exhibit unashamed vulnerability and grounded self-esteem rather than rehearsed pickup lines.", "Attraction grows rapidly when a man remains centered and unaffected by a woman's emotional tests or temporary withdrawals."] },
      { type: "Where", question: "Where do I find courage?", points: ["Men can overcome approach anxiety by seeking small, controllable social wins in local environments where they share common interests.", "Courage emerges organically from accepting that mistakes, rejections, and awkward moments are harmless components of the dating process."] },
      { type: "When", question: "When do I escalate?", points: ["Men must transition out of the platonic comfort stage quickly by initiating physical touch and expressing clear romantic intent.", "Proper pacing is critical; men should gently lead interactions and allow the woman space to pursue contact as her attraction builds."] },
      { type: "Why", question: "Why am I overly accommodating?", points: ["Overly accommodating behavior stems from toxic shame and the belief that one must purchase approval through constant self-sacrifice.", "This people-pleasing creates a covert contract where a man secretly expects love and intimacy in return for his suppressed boundaries."] },
      { type: "How", question: "How do I assert my needs?", points: ["Men must communicate their boundaries directly and be completely willing to walk away from women who do not reciprocate their investment.", "Asserting needs requires eliminating self-deprecation and adopting a confident mindset focused on continuous self-improvement."] }
    ]
  },
  relationship: {
    label: "The Relationship Perspective: Maintaining & Growing",
    subtitle: "Conscious partnership, emotional repair, and enduring shared meaning",
    items: [
      { type: "Who", question: "Who are we as a unified team?", points: ["A conscious partnership requires treating the partner as a separate, unique individual worthy of profound respect and acceptance.", "Couples must balance shared intimacy with independent activities, friendships, and physical space to maintain romantic polarity."] },
      { type: "What", question: "What is our conflict resolution style?", points: ["Healthy communication involves observing concrete actions, identifying associated feelings, stating underlying needs, and making positive requests.", "Partners must avoid blaming language and actively seek to understand the unmet needs hidden beneath their spouse's anger or withdrawal."] },
      { type: "Where", question: "Where is this partnership ultimately heading?", points: ["Long-term marital viability requires fundamental agreement on pragmatic issues such as finances, religion, and child-rearing.", "Partners must firmly align their expectations early to avoid the severe resentment that arises from entirely incompatible life goals."] },
      { type: "When", question: "When do we compromise?", points: ["Successful couples prioritize the relationship's primary purpose over individual egos, allowing differing needs to coexist through goodwill.", "Compromise requires acknowledging one's own childhood triggers and intentionally altering behavior to become a much safer partner."] },
      { type: "Why", question: "Why is the initial spark fading?", points: ["The illusion of romantic love naturally gives way to a power struggle as couples discover their partner cannot fulfill all childhood voids.", "Boredom occurs when partners stop actively engaging their emotional energy and begin taking the relationship's comfort for granted."] },
      { type: "How", question: "How do we repair emotional ruptures?", points: ["Couples repair damaged bonds by slowing down negative conversational cycles to safely reveal underlying emotions like fear and sadness.", "Rebuilding connection requires learning the partner's specific emotional love language and intentionally speaking it to refill their love tank."] }
    ]
  }
};

const FLAGS_DECK = [
  { id: "w-rf-1", gender: "Women", flagType: "red", trait: "'Crazy Promiscuous' Behavior", description: "Ashamed of desires, has few female friends, is secretive about her past, is uncomfortable with her body, or freaks out after sex." },
  { id: "w-rf-2", gender: "Women", flagType: "red", trait: "Insecurity & Neediness", description: "Highly needy, insecure, devious, or possesses low self-esteem." },
  { id: "w-rf-3", gender: "Women", flagType: "red", trait: "Poor Self-Care", description: "Neglects physical health, eats unhealthily, and does not exercise." },
  { id: "w-rf-4", gender: "Women", flagType: "red", trait: "The 'Blame Game' & Drama", description: "Constantly blames others, flakes on dates, projects insecurities, and has emotional meltdowns." },
  { id: "w-rf-5", gender: "Women", flagType: "red", trait: "Manipulative Tendencies", description: "Uses lying, jealousy, or her sexuality to manipulate or gain power over a partner." },
  { id: "w-gf-1", gender: "Women", flagType: "green", trait: "Mental Health & Positivity", description: "Cheerful, upbeat, avoids addictions or obsessions, and maintains a positive outlook." },
  { id: "w-gf-2", gender: "Women", flagType: "green", trait: "Intelligence & Capability", description: "Feeds her brain with new ideas, manages her life effectively, and gives consistently good advice." },
  { id: "w-gf-3", gender: "Women", flagType: "green", trait: "Willpower & Conscientiousness", description: "Highly conscientious, reliable, honest, orderly, and takes good care of her physical health." },
  { id: "w-gf-4", gender: "Women", flagType: "green", trait: "Tenderness & Empathy", description: "Displays real altruism, empathy, kindness, and compassion toward others." },
  { id: "w-gf-5", gender: "Women", flagType: "green", trait: "Social Proof", description: "Has good friends, is well-liked by others, and finds her place comfortably in new social settings." },
  { id: "w-gf-6", gender: "Women", flagType: "green", trait: "'Good Promiscuous' / Sex-Positive", description: "Quietly proud to be sex-positive, communicates openly about exes and safe sex, and is comfortable with her body." },
  { id: "w-gf-7", gender: "Women", flagType: "green", trait: "Femininity & Confidence", description: "Feminine, graceful, outgoing, funny, strong, and confident in herself." },
  { id: "m-rf-1", gender: "Men", flagType: "red", trait: "Transactional Attitudes", description: "Keeps a tit-for-tat accounting of who does what for whom and who owes more in the relationship." },
  { id: "m-rf-2", gender: "Men", flagType: "red", trait: "Control Freaks & Abusers", description: "Acts overly macho, gets extremely jealous, or is possessive and controlling." },
  { id: "m-rf-3", gender: "Men", flagType: "red", trait: "'Nice Guy' Syndrome", description: "Fundamentally dishonest by hiding mistakes, avoiding conflict, keeping secrets, and resorting to manipulation." },
  { id: "m-rf-4", gender: "Men", flagType: "red", trait: "Narcissism & Neediness", description: "Overly needy, exhibits stalker-like behavior, or overcompensates for insecurities through narcissism." },
  { id: "m-rf-5", gender: "Men", flagType: "red", trait: "Emotional Unavailability", description: "Emotionally distant, uncaring, highly unpredictable, or struggling with substance addictions." },
  { id: "m-rf-6", gender: "Men", flagType: "red", trait: "Lack of Commitment & Respect", description: "Disappears, cheats, breaks promises, or only wants to see a partner when drunk." },
  { id: "m-rf-7", gender: "Men", flagType: "red", trait: "The 'Four Horsemen' in Conflict", description: "Escalates arguments using criticism, contempt (like sarcasm and eye-rolling), defensiveness, and stonewalling." },
  { id: "m-rf-8", gender: "Men", flagType: "red", trait: "Chronic Avoidance", description: "Withdraws entirely into a 'cave' to avoid connection, repeatedly minimizing or invalidating his partner's feelings." },
  { id: "m-gf-1", gender: "Men", flagType: "green", trait: "The 'Tender Defender'", description: "Balances being empathic, altruistic, and generous with being assertive, protective, confident, and decisive." },
  { id: "m-gf-2", gender: "Men", flagType: "green", trait: "Overall Effectiveness", description: "Displays good physical and mental health, general intelligence, and the willpower to lead an effective life." },
  { id: "m-gf-3", gender: "Men", flagType: "green", trait: "Secure Attachment Style", description: "Communicates relationship issues well, naturally expresses his feelings, and avoids playing games." },
  { id: "m-gf-4", gender: "Men", flagType: "green", trait: "Comfort with Closeness", description: "Quick to forgive, values intimacy, and treats his partner like royalty." },
  { id: "m-gf-5", gender: "Men", flagType: "green", trait: "Emotional Intelligence", description: "Honors his wife, treats her with respect, and does not resist power-sharing or decision-making." },
  { id: "m-gf-6", gender: "Men", flagType: "green", trait: "Fulfilling Primary Needs", description: "Successfully fulfills a woman's primary needs by being caring, understanding, respectful, devoted, validating, and reassuring." },
  { id: "m-gf-7", gender: "Men", flagType: "green", trait: "Active Listening & Commitment", description: "Listens without judgment, prioritizes his partner's rights and wishes, and proudly commits to supporting her." },
  { id: "m-gf-8", gender: "Men", flagType: "green", trait: "Conflict Resolution Skills", description: "Actively searches for common ground during disagreements instead of stubbornly insisting on getting his own way." }
];

const CURATED_QUOTES = [
  { id: "q1", quote: "True empathy means stepping into your partner's internal world and validating their feelings—especially when you disagree—without rushing to fix the problem.", source: "Synthesis of Hold Me Tight (Sue Johnson) & The Seven Principles (John Gottman)", theme: "Empathy & Listening", notebook: "Relationships Notebook" },
  { id: "q2", quote: "Attraction thrives in breathing room. Let your relationship be a sacred complement to your life's mission, rather than the entirety of your identity.", source: "Synthesis of The Way of the Superior Man (David Deida) & Models (Mark Manson)", theme: "Purpose & Space", notebook: "Romance (Male Perspective)" },
  { id: "q3", quote: "Stop forming a 'home-improvement committee' or trying to solve every emotion with pure logic; unconditional acceptance is the soil where intimacy grows.", source: "Core Sentiment — Trying to Change, 'Fix,' or Control Your Partner", theme: "Unconditional Acceptance", notebook: "Relationship Dynamics" },
  { id: "q4", quote: "Anxious hearts often mistake the adrenaline of an activated attachment system and mixed signals for deep, passionate love.", source: "Synthesis of Attached (Amir Levine & Rachel Heller)", theme: "Attachment & Clarity", notebook: "Relationships Notebook" },
  { id: "q5", quote: "When conflict arises, soften your startup. Replace blame, sarcasm, and stonewalling with a gentle expression of your own underlying need.", source: "Synthesis of Crucial Conversations & John Gottman's Research", theme: "Conflict & Repair", notebook: "Relationships Notebook" },
  { id: "q6", quote: "A man's highest gift is grounded presence; a woman's highest gift is radiant appreciation and trust—together creating effortless polarity.", source: "Synthesis of Fascinating Womanhood & The Alabaster Girl", theme: "Polarity & Appreciation", notebook: "Romance Notebooks" },
  { id: "q7", quote: "Never sacrifice your serenity to keep the peace in an undefined dynamic. Judge commitment by consistent actions, never by promises or excuses.", source: "Synthesis of He's Just Not That Into You & Where You End and I Begin", theme: "Boundaries & Actions", notebook: "Romance (Female Perspective)" },
  { id: "q8", quote: "We often re-create the unfinished emotional patterns of our childhood in adult romance, hoping this time to finally gain mastery and healing.", source: "Synthesis of Getting the Love You Want (Harville Hendrix & Helen LaKelly Hunt)", theme: "Healing & Growth", notebook: "Relationships Notebook" },
  { id: "q9", quote: "The 'Tender Defender' balances deep altruism, empathy, and warmth with decisive leadership, protection, and emotional stability.", source: "Synthesis of What Women Want (Tucker Max & Geoffrey Miller)", theme: "Masculine Integration", notebook: "Romance (Male Perspective)" },
  { id: "q10", quote: "Treat your lifelong partner with the same courtesy you extend to a cherished guest, and court them with the same curiosity as your very first date.", source: "Synthesis of The 5 Love Languages (Gary Chapman) & The Art of Loving (Erich Fromm)", theme: "Ongoing Courtship", notebook: "Relationships Notebook" }
];

const REFERENCE_BOOKS = [
  { title: "The Seven Principles for Making Marriage Work", author: "John M. Gottman and Nan Silver", year: "1999", notebook: "Relationships Notebook", summary: "Revolutionary guide identifying specific behaviors that predict relationship success or failure.", takeaway: "Eliminate the Four Horsemen (criticism, contempt, defensiveness, stonewalling), build Love Maps, and accept influence.", icon: Heart },
  { title: "Getting the Love You Want: A Guide for Couples", author: "Harville Hendrix and Helen LaKelly Hunt", year: "1988", notebook: "Relationships Notebook", summary: "Examines how unconscious childhood wounds surface in romantic power struggles.", takeaway: "Understand unconscious childhood wounds (Imago) that resurface in power struggles and heal through intentional dialogue.", icon: Activity },
  { title: "Attached: The New Science of Adult Attachment", author: "Amir Levine and Rachel Heller", year: "2010", notebook: "Relationships Notebook", summary: "Explores how secure, anxious, and avoidant attachment styles dictate adult romance.", takeaway: "Distinguish anxious, avoidant, and secure attachment styles; stop confusing attachment anxiety with passion.", icon: Link },
  { title: "Hold Me Tight: Seven Conversations for a Lifetime of Love", author: "Sue Johnson", year: "2008", notebook: "Relationships Notebook", summary: "Groundbreaking EFT guide teaching couples to reveal vulnerable primary emotions.", takeaway: "Slow down negative cycles to uncover vulnerable primary emotions and cultivate a safe emotional haven.", icon: Users },
  { title: "Crucial Conversations: Tools for Talking When Stakes Are High", author: "Kerry Patterson, Joseph Grenny, Ron McMillan, and Al Switzler", year: "2002", notebook: "Relationships Notebook", summary: "Tactical tools for maintaining psychological safety during high-stakes emotional disagreements.", takeaway: "Maintain psychological safety and dialogue when emotions run strong and opinions differ.", icon: MessageSquare },
  { title: "The 5 Love Languages: The Secret to Love That Lasts", author: "Gary Chapman", year: "1992", notebook: "Relationships Notebook", summary: "Identifies the five primary ways people express and receive affection.", takeaway: "Intentionally speak your spouse's primary love language to keep their emotional love tank full over the long term.", icon: Gift },
  { title: "Where You End and I Begin: How to Recognize and Set Healthy Boundaries", author: "Anne Katherine", year: "1994", notebook: "Relationships Notebook", summary: "A foundational guide to protecting personal integrity by establishing clear boundaries.", takeaway: "Protect personal integrity by replacing porous or rigid walls with healthy, clear interpersonal boundaries.", icon: Shield },
  { title: "Love at Goon Park: Harry Harlow and the Science of Affection", author: "Deborah Blum", year: "2002", notebook: "Relationships Notebook", summary: "Demonstrates how touch, comfort, and safe connection are biological necessities.", takeaway: "Demonstrates how touch, comfort, and safe emotional connection are biological necessities.", icon: Heart },
  { title: "Marriage, a History: From Obedience to Intimacy or How Love Conquered Marriage", author: "Stephanie Coontz", year: "2005", notebook: "Relationships Notebook", summary: "Explores the shift from pragmatic alliances to deep friendship and emotional intimacy.", takeaway: "Explores the shift from pragmatic alliances to deep friendship and emotional intimacy.", icon: BookOpen },
  { title: "Emotions Revealed: Recognizing Faces and Feelings to Improve Communication", author: "Paul Ekman", year: "2003", notebook: "Relationships Notebook", summary: "Attune to subtle emotional expressions to foster empathy and self-mastery.", takeaway: "Attune to subtle emotional expressions and triggers to foster empathy and self-mastery.", icon: Smile },
  { title: "Social Intelligence: The New Science of Human Relationships", author: "Daniel Goleman", year: "2006", notebook: "Relationships Notebook", summary: "Shows how interpersonal attunement shapes our nervous system and relational harmony.", takeaway: "Shows how interpersonal attunement and empathy shape our nervous system and relational harmony.", icon: Globe },
  { title: "The Art of Loving", author: "Erich Fromm", year: "1956", notebook: "Relationships Notebook", summary: "Philosophical exploration framing love as an active art requiring discipline.", takeaway: "Frames love not merely as a fleeting feeling, but as a disciplined art of care, responsibility, respect, and knowledge.", icon: Award },
  { title: "Wired to Connect: The Surprising Link Between Brain Science and Strong, Healthy Relationships", author: "Amy Banks", year: "2015", notebook: "Relationships Notebook", summary: "Reveals the neural pathways for calm, acceptance, resonance, and energy in bonding.", takeaway: "Reveals the neural pathways for calm, acceptance, resonance, and energy in healthy bonding.", icon: Zap },
  { title: "The Rules: Time-Tested Secrets for Capturing the Heart of Mr. Right", author: "Ellen Fein and Sherrie Schneider", year: "1995", notebook: "Romance (Female Perspective)", summary: "Time-tested secrets for maintaining mystery and allowing the man to initiate pursuit.", takeaway: "Maintain mystery, cultivate an independent life, and allow the man to initiate pursuit.", icon: CheckCircle },
  { title: "The Rules for Marriage: Time-Tested Secrets for Making Your Marriage Work", author: "Ellen Fein and Sherrie Schneider", year: "2001", notebook: "Romance (Female Perspective)", summary: "Keeps expectations grace-filled while nurturing ongoing romance.", takeaway: "Keep expectations grace-filled, avoid nagging or unsolicited advice, and nurture ongoing romance.", icon: CheckCircle },
  { title: "He's Just Not That Into You: The No-Excuses Truth to Understanding Guys", author: "Greg Behrendt and Liz Tuccillo", year: "2004", notebook: "Romance (Female Perspective)", summary: "A tough-love guide to judging a partner by concrete actions rather than excuses.", takeaway: "Judge a partner by concrete actions rather than excuses; if a man wants to be with you, he makes the effort.", icon: X },
  { title: "Act Like a Lady, Think Like a Man", author: "Steve Harvey", year: "2009", notebook: "Romance (Female Perspective)", summary: "Understand masculine drives to profess, provide, and protect.", takeaway: "Understand masculine drives to profess, provide, and protect, while upholding clear standards.", icon: List },
  { title: "Fascinating Womanhood", author: "Helen Andelin", year: "1965", notebook: "Romance (Female Perspective)", summary: "Classic guide on expressing deep appreciation and honoring masculine leadership.", takeaway: "Accept a man as he is, express deep appreciation, and honor masculine leadership and capability.", icon: Sparkles },
  { title: "Women Who Love Too Much: When You Keep Hoping and Trying for Him to Change", author: "Robin Norwood", year: "1985", notebook: "Romance (Female Perspective)", summary: "Breaks the cycle of trying to rescue or mold emotionally unavailable partners.", takeaway: "Break the cycle of trying to rescue, fix, or mold emotionally unavailable partners.", icon: Activity },
  { title: "Why Him? Why Her? Finding Real Love By Understanding Your Personality Type", author: "Helen Fisher", year: "2009", notebook: "Romance (Female Perspective)", summary: "Understand biological temperament and neurochemistry in partner compatibility.", takeaway: "Understand biological temperament and neurochemistry in partner compatibility.", icon: Search },
  { title: "Spinster: Making a Life of One's Own", author: "Kate Bolick", year: "2015", notebook: "Romance (Female Perspective)", summary: "Cultivate autonomy, personal fulfillment, and wholeness rather than settling.", takeaway: "Cultivate autonomy, personal fulfillment, and wholeness rather than settling out of fear.", icon: User },
  { title: "Modern Dating: A Field Guide", author: "Chiara Atik", year: "2013", notebook: "Romance (Female Perspective)", summary: "Navigate contemporary courtship stages with humor, perspective, and self-awareness.", takeaway: "Navigate contemporary courtship stages with humor, perspective, and self-awareness.", icon: Smartphone },
  { title: "One Perfect Day: The Selling of the American Wedding", author: "Rebecca Mead", year: "2007", notebook: "Romance (Female Perspective)", summary: "Focus on the enduring substance of marriage rather than superficial spectacle.", takeaway: "Focus on the enduring substance of marriage rather than superficial spectacle.", icon: Gem },
  { title: "What Women Want: An Evidence-Based Guide to Realizing Your Mating Potential", author: "Tucker Max and Geoffrey Miller", year: "2015", notebook: "Romance (Male Perspective)", summary: "Embody the 'Tender Defender'—combining kindness and strength.", takeaway: "Embody the 'Tender Defender'—combining kindness and empathy with strength, health, and capability.", icon: Key },
  { title: "The Way of the Superior Man", author: "David Deida", year: "1997", notebook: "Romance (Male Perspective)", summary: "Spiritual guide for men on living with purpose while embracing polarity.", takeaway: "Prioritize your highest life purpose, remain centered during emotional storms, and embrace masculine-feminine polarity.", icon: ArrowUp },
  { title: "The Rational Male", author: "Rollo Tomassi", year: "2013", notebook: "Romance (Male Perspective)", summary: "Interrogates intersexual dynamics from an evolutionary psychology perspective.", takeaway: "Avoid neediness and pedestalizing; maintain personal mission, options, and grounded self-respect.", icon: Cpu },
  { title: "The Art of Seduction", author: "Robert Greene", year: "2001", notebook: "Romance (Male Perspective)", summary: "Cultivate mystery, anticipation, and emotional presence rather than routine.", takeaway: "Cultivate mystery, anticipation, and emotional presence rather than predictable routine.", icon: Flame },
  { title: "Models: Attract Women Through Honesty", author: "Mark Manson", year: "2011", notebook: "Romance (Male Perspective)", summary: "True confidence comes from unashamed vulnerability and honest self-expression.", takeaway: "True confidence comes from unashamed vulnerability, non-neediness, and honest self-expression.", icon: Eye },
  { title: "The Alabaster Girl", author: "Zan Perrion", year: "2014", notebook: "Romance (Male Perspective)", summary: "Celebrate feminine grace and appreciate women sincerely without hidden agendas.", takeaway: "Celebrate feminine grace and appreciate women sincerely without hidden agendas.", icon: Heart },
  { title: "The Manual: What Women Want and How to Get It", author: "W. Anton", year: "2007", notebook: "Romance (Male Perspective)", summary: "Lead interactions decisively and project calm, grounded self-assurance.", takeaway: "Lead interactions decisively and project calm, grounded self-assurance.", icon: Compass }
];

const BEHAVIOUR_QUIZ_QUESTIONS = [
  { id: "bq1", scenario: "When one of you is stressed and venting about a frustrating day, what usually happens?", dimension: "Empathy vs. Fixing", options: [{ label: "We interrupt with logical solutions or unsolicited instructions on what the other person 'should' have done.", lagScore: 3, points: 1, mistakeId: 1, priorityRanks: [1, 8, 12] }, { label: "We listen for a minute, but quickly change the subject or get impatient if the emotion lingers.", lagScore: 2, points: 3, mistakeId: 1, priorityRanks: [1, 13] }, { label: "We listen deeply, validate each other's feelings without judgment, and respect whether the other needs to vent or retreat to a quiet 'cave'.", lagScore: 0, points: 5, mistakeId: 1, priorityRanks: [1, 8, 12] }] },
  { id: "bq2", scenario: "How have disagreements or moments of friction begun over the past two weeks?", dimension: "Conflict Startup & Repair", options: [{ label: "With sharp blame, eye-rolling, sarcasm, or one person shutting down and giving the silent treatment.", lagScore: 3, points: 1, mistakeId: 2, priorityRanks: [7, 13, 17, 20] }, { label: "With defensiveness and keeping a 'tit-for-tat' scoreboard of who owes whom more effort.", lagScore: 2, points: 3, mistakeId: 2, priorityRanks: [7, 14, 17] }, { label: "With a gentle startup focused on our own feelings and needs, quick forgiveness, and humor to diffuse tension.", lagScore: 0, points: 5, mistakeId: 2, priorityRanks: [7, 14, 17, 20] }] },
  { id: "bq3", scenario: "When you have an emotional need or desire in the relationship, how is it communicated?", dimension: "Open Communication vs. Mind-Reading", options: [{ label: "I stay quiet to 'keep the peace' or hope my partner instinctively reads my mind—then feel resentful when they don't.", lagScore: 3, points: 1, mistakeId: 5, priorityRanks: [2, 13, 16] }, { label: "I drop subtle hints or wait until I'm frustrated to bring it up indirectly.", lagScore: 2, points: 3, mistakeId: 5, priorityRanks: [2, 5] }, { label: "I express my desires and boundaries openly, clearly, and gracefully without expecting mind-reading.", lagScore: 0, points: 5, mistakeId: 5, priorityRanks: [2, 6] }] },
  { id: "bq4", scenario: "How balanced is your personal identity, mission, and space alongside the relationship right now?", dimension: "Individual Purpose & Mystery", options: [{ label: "I have abandoned my hobbies/goals, over-communicate constantly, and feel anxious when my partner takes space.", lagScore: 3, points: 1, mistakeId: 4, priorityRanks: [3, 11, 15] }, { label: "We spend almost all our free time in predictable routines and have lost our sense of mystery and active courtship.", lagScore: 2, points: 3, mistakeId: 4, priorityRanks: [3, 11, 15] }, { label: "We each pursue our personal mission and friendships vibrantly, while actively courting each other.", lagScore: 0, points: 5, mistakeId: 4, priorityRanks: [3, 11, 15] }] },
  { id: "bq5", scenario: "When promises are made or boundaries are tested, how do you respond?", dimension: "Boundaries & Actions Over Words", options: [{ label: "I make excuses for broken promises, tolerate disrespectful behavior, and sacrifice my serenity to avoid conflict.", lagScore: 3, points: 1, mistakeId: 3, priorityRanks: [6, 10, 18, 19] }, { label: "I focus mostly on verbal reassurances even when my partner's consistent actions don't match.", lagScore: 2, points: 3, mistakeId: 3, priorityRanks: [6, 19] }, { label: "We hold clear, respectful boundaries and evaluate commitment by consistent, honorable actions.", lagScore: 0, points: 5, mistakeId: 3, priorityRanks: [6, 18, 19] }] },
  { id: "bq6", scenario: "How do you navigate leadership, appreciation, and selfless care in daily life?", dimension: "Appreciation & Polarity", options: [{ label: "We compete for control, criticize each other's skills, or neglect daily gestures of appreciation.", lagScore: 3, points: 1, mistakeId: 1, priorityRanks: [4, 5, 9] }, { label: "We get caught up in busyness and forget to praise each other's efforts or show selfless warmth.", lagScore: 2, points: 3, mistakeId: 1, priorityRanks: [4, 5] }, { label: "We practice daily charity, validate each other's capabilities, and honor natural masculine/feminine polarity.", lagScore: 0, points: 5, mistakeId: 1, priorityRanks: [4, 5, 9] }] }
];

const EMOTIONS_DECK = [
  { id: 1, number: "01", name: "Anger", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Feeling controlled, receiving unsolicited advice, or having competence questioned.", decrease: "Retreating to their 'cave' to problem-solve; feeling trusted to handle issues alone." }, womenFactors: { increase: "Having feelings invalidated, dismissed, or minimized; feeling unheard.", decrease: "Talking through problems; feeling understood and receiving empathetic listening." }, facialAndBody: "Tense muscles, grimaces, rolling eyes, looking disdainful. Elevated heart rate and sweating.", actionsGeneral: "Snapping, yelling, picking a fight, physical violence, or withdrawing physically/mentally.", menSpecifics: "Frequently use anger and aggression to mask more vulnerable feelings like fear, sadness, or inadequacy.", womenSpecifics: "May use concern and worry to mask anger, or feign confusion to avoid expressing irritation." },
  { id: 2, number: "02", name: "Disgust", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Perceived emasculation or partners displaying aggressive, overly masculine traits.", decrease: "Witnessing vulnerability, feminine charm, and supportive behavior." }, womenFactors: { increase: "Emotional unavailability or when men prioritize 'things' over relationships.", decrease: "Emotional presence, active listening, and shared intimacy." }, facialAndBody: "Wrinkled nose, curled upper lip, turning the body away.", actionsGeneral: "Rejecting proximity, mocking, criticizing, or pushing away physical affection.", menSpecifics: null, womenSpecifics: null },
  { id: 3, number: "03", name: "Fear", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "The prospect of sexual rejection, public humiliation, or failure to provide/protect.", decrease: "Using aggression or righteousness as a mask; achieving success and status." }, womenFactors: { increase: "Emotional abandonment, lack of security, or physical vulnerability.", decrease: "Consistent emotional reassurance and physical/emotional closeness." }, facialAndBody: "Pale face, dry mouth, trembling, holding breath, crossing arms and legs.", actionsGeneral: "Fleeing, freezing, avoiding eye contact, moving personal objects out of reach.", menSpecifics: "Often cover fear and uncertainty with righteousness, aggression, or a 'tough-guy' exterior.", womenSpecifics: "Often respond to fear of abandonment by 'tending and befriending' (reaching out for connection)." },
  { id: 4, number: "04", name: "Joy", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Achieving goals independently, solving problems, and feeling needed and appreciated.", decrease: "Failure to achieve goals or feeling useless." }, womenFactors: { increase: "Feeling cherished, respected, and emotionally connected through communication.", decrease: "Being ignored or having emotional needs neglected." }, facialAndBody: "Smiling, laughing, shining eyes.", actionsGeneral: "Clapping hands, jumping up and down, enthusiastic conversation, celebrating.", menSpecifics: "May express joy through physical relaxation, sharing accomplishments, or using sex/touch.", womenSpecifics: "Encouraged to show 'childlike joy' and excitement to appeal to men and reward their efforts." },
  { id: 5, number: "05", name: "Sadness", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Feeling unneeded, untrusted, or incapable of making a positive difference.", decrease: "Often masked by indifference or withdrawal; alleviated by feeling appreciated." }, womenFactors: { increase: "Sinking into the natural emotional 'well'; feeling unsupported or unloved.", decrease: "Talking about problems in detail; receiving non-judgmental empathy." }, facialAndBody: "Weeping, crying, downcast eyes, heavy limbs, slumping posture.", actionsGeneral: "Withdrawing from society, remaining stuck in the 'well', talking excessively.", menSpecifics: "Frequently use indifference, discouragement, or withdrawal as a way to avoid feeling sadness.", womenSpecifics: "More culturally permitted to cry and express sadness openly." },
  { id: 6, number: "06", name: "Surprise", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "When women react emotionally to logical solutions or pull away suddenly.", decrease: "Predictable, routine problem-solving." }, womenFactors: { increase: "When men naturally pull away (the 'rubber band' cycle) during moments of closeness.", decrease: "Consistent, rhythmic emotional connection." }, facialAndBody: "Raised eyebrows, wide-open eyes, slightly opened mouth.", actionsGeneral: "Pausing activity, seeking clarification, or experiencing temporary freeze.", menSpecifics: null, womenSpecifics: null },
  { id: 7, number: "07", name: "Trust", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "When partners accept them without trying to change, fix, or improve them.", decrease: "Receiving unsolicited advice or criticism." }, womenFactors: { increase: "When men listen attentively and provide reassurance of their commitment.", decrease: "Emotional distancing or invalidation of feelings." }, facialAndBody: "Relaxed facial features, direct eye contact, open posture.", actionsGeneral: "Sharing vulnerabilities, relying on a partner during stress.", menSpecifics: null, womenSpecifics: null },
  { id: 8, number: "08", name: "Anticipation", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "The prospect of conquering a challenge, achieving a goal, or sexual intimacy.", decrease: "Stagnation or lack of challenge." }, womenFactors: { increase: "Courtship suspense, emotional space, and unpredictability.", decrease: "Smothering behavior or lack of romantic effort." }, facialAndBody: "Lean-forward posture, focused gaze, heightened physical alertness.", actionsGeneral: "Preparing for action, building momentum, engaging in playful courtship rituals.", menSpecifics: null, womenSpecifics: null },
  { id: 9, number: "09", name: "Love", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "Receiving trust, acceptance, appreciation, admiration, and approval.", decrease: "Feeling nagged, distrusted, or inadequate." }, womenFactors: { increase: "Receiving caring, understanding, respect, devotion, and validation.", decrease: "Emotional suppression or feeling taken for granted." }, facialAndBody: "Softened features, warm smiles, prolonged eye contact.", actionsGeneral: "Physical touch, doing nice things, acts of provision/protection, active listening.", menSpecifics: null, womenSpecifics: null },
  { id: 10, number: "10", name: "Contempt", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "When a partner withdraws approval or belittles their masculine skills.", decrease: "Receiving genuine admiration for their efforts." }, womenFactors: { increase: "When men dismiss their emotional concerns as trivial or 'not a big deal.'", decrease: "Validating their emotional experiences." }, facialAndBody: "Sneering, glaring, one-sided lip smirk, turning away in revulsion.", actionsGeneral: "Mocking, making critical or belittling remarks.", menSpecifics: "Contempt is a primary method men use to escalate marital conflict.", womenSpecifics: null },
  { id: 11, number: "11", name: "Optimism", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "Career advancement, problem-solving success, and achieving high social status.", decrease: "Chronic failure or loss of financial/social standing." }, womenFactors: { increase: "Secure emotional connection and relationship stability.", decrease: "Unstable, chaotic, or relationally distant partnerships." }, facialAndBody: "Upright posture, bright eyes, smiling.", actionsGeneral: "Planning for the future, initiating new projects, encouraging others.", menSpecifics: null, womenSpecifics: null },
  { id: 12, number: "12", name: "Awe", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "Stimulated by the 'wonder-theme' (mystery, macabre, or supernatural elements).", decrease: "Over-familiarity or lack of mystique." }, womenFactors: { increase: "Witnessing unyielding masculine strength, decisiveness, or protective capability.", decrease: "Vacillating, submissive, or overly dependent male behavior." }, facialAndBody: "Wide eyes, slightly open mouth, stillness.", actionsGeneral: "Pausing, observing silently, expressing deep admiration.", menSpecifics: null, womenSpecifics: null },
  { id: 13, number: "13", name: "Disappointment", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "When efforts to provide solutions are met with female frustration or rejection.", decrease: "Appreciation for small efforts and gestures." }, womenFactors: { increase: "When men prioritize work or hobbies over intimacy or fail to listen.", decrease: "Receiving undivided attention and emotional support." }, facialAndBody: "Drooping shoulders, frowning, looking downward.", actionsGeneral: "Sinking into silence, sighing, or emotional withdrawal.", menSpecifics: null, womenSpecifics: null },
  { id: 14, number: "14", name: "Remorse", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "Realizing they failed to protect, provide for, or sexually satisfy their partner.", decrease: "Defensive justification or minimizing the mistake." }, womenFactors: { increase: "Feeling they have not been 'good enough' in caretaking or nurturing.", decrease: "Assuming the 'Fold' stance (taking blame) to avoid further conflict." }, facialAndBody: "Head in hands, averted eyes, downcast expression.", actionsGeneral: "Apologizing, over-compensating, attempting to make amends.", menSpecifics: null, womenSpecifics: null },
  { id: 15, number: "15", name: "Aggressiveness", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "Used as a defense mechanism to avoid feeling afraid, inadequate, or vulnerable.", decrease: "Achieving a sense of secure power and control." }, womenFactors: { increase: "Suppressed due to societal conditioning; often surfaces passively as resentment.", decrease: "Healthy emotional housecleaning and communication." }, facialAndBody: "Piercing glare, clenched fists, leaning forward aggressively.", actionsGeneral: "Charging forward, dominating conversations, physical posturing.", menSpecifics: null, womenSpecifics: null },
  { id: 16, number: "16", name: "Submission", part: "Part II: Combinatorial Emotions", shortPart: "Combinatorial", menFactors: { increase: "Avoided heavily, as it conflicts directly with the drive for status.", decrease: "Asserting dominance or focusing on competitive environments." }, womenFactors: { increase: "Employed as a survival mechanism to avoid arguments or abandonment.", decrease: "Developing high self-esteem and establishing boundaries." }, facialAndBody: "Lowered head, avoiding eye contact, shrinking posture.", actionsGeneral: "Conceding arguments, people-pleasing, compliance under pressure.", menSpecifics: null, womenSpecifics: null },
  { id: 17, number: "17", name: "Pride", part: "Part III: Self-Conscious Emotions", shortPart: "Self-Conscious", menFactors: { increase: "Highly sensitive; increased by success, status, and admiration.", decrease: "Deeply injured by humiliation, ridicule, or being excelled by a woman." }, womenFactors: { increase: "Feeling uniquely cherished, attractive, and relationally successful.", decrease: "Being neglected, ignored, or treated with indifference." }, facialAndBody: "Chest puffed out, chin up, smiling broadly.", actionsGeneral: "Boasting, flaunting status symbols, competing, taking charge.", menSpecifics: "Greatly favor public displays of pride regarding their job title, income, and physical competence.", womenSpecifics: null },
  { id: 18, number: "18", name: "Shame", part: "Part III: Self-Conscious Emotions", shortPart: "Self-Conscious", menFactors: { increase: "Perceived incompetence, weakness, emotional expression, or public failure.", decrease: "Projecting confidence or using anger to deflect vulnerability." }, womenFactors: { increase: "Prioritizing their own needs over the needs of others; asserting boundaries.", decrease: "Engaging in compulsive caretaking or people-pleasing." }, facialAndBody: "Blushing, sweating, looking away, head down.", actionsGeneral: "Hiding, acting out defensively, silencing oneself, nervously wringing hands.", menSpecifics: "Often use anger, self-righteousness, or withdrawal to avoid shame.", womenSpecifics: "Often adopt the 'Fold' stance or 'Fake' stance to avoid conflict embarrassment." },
  { id: 19, number: "19", name: "Guilt", part: "Part III: Self-Conscious Emotions", shortPart: "Self-Conscious", menFactors: { increase: "Pulling away from a partner, especially if conditioned to suppress masculine independence.", decrease: "Blaming others or using righteousness to justify actions." }, womenFactors: { increase: "Used as a cover to avoid feeling angry or afraid; feeling they must 'earn' happiness.", decrease: "Accepting self-worth and releasing the need to control others." }, facialAndBody: "Slumped shoulders, nervous fidgeting, avoiding eye contact.", actionsGeneral: "Self-blame, making excessive restitution, over-apologizing.", menSpecifics: null, womenSpecifics: null },
  { id: 20, number: "20", name: "Envy", part: "Part III: Self-Conscious Emotions", shortPart: "Self-Conscious", menFactors: { increase: "Triggered by other men's higher status, wealth, power, or competitive dominance.", decrease: "Achieving personal success and recognition." }, womenFactors: { increase: "Triggered by perceived deficits in their own relationship security or attractiveness.", decrease: "Feeling secure and validated by their partner." }, facialAndBody: "Narrowed eyes, watching others intently, strained smile.", actionsGeneral: "Complaining, gossiping, or working harder to out-compete a rival.", menSpecifics: null, womenSpecifics: null },
  { id: 21, number: "21", name: "Jealousy", part: "Part III: Self-Conscious Emotions", shortPart: "Self-Conscious", menFactors: { increase: "Threats to their exclusive status, territory, or competence in a relationship.", decrease: "Reassurance of their primary position and capability." }, womenFactors: { increase: "Emotional withdrawal, unpredictability, or attention shifting away.", decrease: "Consistent devotion, reassurance, and transparent communication." }, facialAndBody: "Tense jaw, glaring, defensive posture.", actionsGeneral: "Interrogating, tracking, trying to make partner jealous in return.", menSpecifics: null, womenSpecifics: null },
  { id: 22, number: "22", name: "Embarrassment", part: "Part III: Self-Conscious Emotions", shortPart: "Self-Conscious", menFactors: { increase: "Displaying vulnerability, emotional neediness, or lack of prowess.", decrease: "Maintaining a stoic facade or withdrawing into the 'cave'." }, womenFactors: { increase: "Societal judgment regarding reputation, appearance, or failure to appear accommodating.", decrease: "Aligning with expected social roles and maintaining relationship harmony." }, facialAndBody: "Blushing, nervous laughter, looking down, scratching the back of the neck.", actionsGeneral: "Changing the subject, stepping away, self-deprecating jokes.", menSpecifics: null, womenSpecifics: null }
];

const LOVE_TERMS_LEXICON = [
  { id: 'lt-1', term: "Ya'aburnee", origin: "Arabic", category: "Global & Untranslatable Words", definition: "The hope that you will outlive your loved one because living without them would be unbearable." },
  { id: 'lt-2', term: "Koi No Yokan", origin: "Japanese", category: "Global & Untranslatable Words", definition: "The unspoken realization upon first meeting someone that you are destined to fall in love." },
  { id: 'lt-3', term: "Mamihlapinatapai", origin: "Yaghan", category: "Global & Untranslatable Words", definition: "A silent look between two people who both desire an outcome but are unwilling to initiate it." },
  { id: 'lt-4', term: "Cafuné", origin: "Brazilian Portuguese", category: "Global & Untranslatable Words", definition: "The tender act of gently running your fingers through a loved one's hair." },
  { id: 'lt-5', term: "Saudade", origin: "Portuguese", category: "Global & Untranslatable Words", definition: "A melancholic longing for an absent loved one, knowing what you miss may never return." },
  { id: 'lt-6', term: "Forelsket", origin: "Norwegian", category: "Global & Untranslatable Words", definition: "The euphoric, intoxicating feeling experienced at the very beginning of falling in love." },
  { id: 'lt-7', term: "Retrouvailles", origin: "French", category: "Global & Untranslatable Words", definition: "The intense joy of reuniting with a loved one after a long separation." },
  { id: 'lt-8', term: "Cwtch", origin: "Welsh", category: "Global & Untranslatable Words", definition: "A warm, affectionate hug that acts as a safe sanctuary for the other person." },
  { id: 'lt-9', term: "Flechazo", origin: "Spanish", category: "Global & Untranslatable Words", definition: "Love at first sight, literally translating to an arrow strike from Cupid." },
  { id: 'lt-10', term: "Kilig", origin: "Tagalog", category: "Global & Untranslatable Words", definition: "The physical thrill and nervous excitement experienced during romantic encounters." },
  { id: 'lt-11', term: "Iktsuarpok", origin: "Inuit", category: "Global & Untranslatable Words", definition: "The restless anticipation of repeatedly checking if a loved one has arrived." },
  { id: 'lt-12', term: "Geborgenheit", origin: "German", category: "Global & Untranslatable Words", definition: "A state of complete physical and emotional safety and trust shared with a partner." },
  { id: 'lt-13', term: "Yuanfen", origin: "Chinese", category: "Global & Untranslatable Words", definition: "The invisible, predetermined destiny that dictates the intersection of two people's lives." },
  { id: 'lt-14', term: "Naz", origin: "Urdu", category: "Global & Untranslatable Words", definition: "The quiet pride and confidence that stems from knowing you are unconditionally loved." },
  { id: 'lt-15', term: "Dor", origin: "Romanian", category: "Global & Untranslatable Words", definition: "A deep, painful nostalgia and longing for a loved one who is far away." },
  { id: 'lt-16', term: "Onsra", origin: "Boro", category: "Global & Untranslatable Words", definition: "The bitter-sweet realization that a romance is fading and will not last." },
  { id: 'lt-17', term: "Viraha", origin: "Hindi", category: "Global & Untranslatable Words", definition: "The realization of the depth of your love, triggered specifically by being separated." },
  { id: 'lt-18', term: "Mo Chuisle", origin: "Irish", category: "Global & Untranslatable Words", definition: "Translating to 'my pulse,' an endearment meaning the person keeps your heart beating." },
  { id: 'lt-19', term: "Odnoliub", origin: "Russian", category: "Global & Untranslatable Words", definition: "A person who is capable of loving only one person throughout their entire lifetime." },
  { id: 'lt-20', term: "Gigil", origin: "Tagalog", category: "Global & Untranslatable Words", definition: "The urge to squeeze or pinch someone because they are unbearably cute or loved." },
  { id: 'lt-21', term: "Jeong", origin: "Korean", category: "Global & Untranslatable Words", definition: "A deep bond of attachment and loyalty that grows through shared experiences." },
  { id: 'lt-22', term: "Ishq", origin: "Arabic", category: "Global & Untranslatable Words", definition: "A true, intensely passionate, and consuming love that borders on madness." },
  { id: 'lt-23', term: "Zhi Yin", origin: "Chinese", category: "Global & Untranslatable Words", definition: "A true soulmate or confidante who intuitively understands your deepest thoughts." },
  { id: 'lt-24', term: "Viraag", origin: "Hindi", category: "Global & Untranslatable Words", definition: "The specific emotional pain and yearning caused by separation from a loved one." },
  { id: 'lt-25', term: "Tarab", origin: "Arabic", category: "Global & Untranslatable Words", definition: "A state of musically induced ecstasy linked to poetry about passionate love." },
  { id: 'lt-26', term: "Manabamâte", origin: "Rapa Nui", category: "Global & Untranslatable Words", definition: "The physical lack of appetite and insomnia suffered when first falling deeply in love." },
  { id: 'lt-27', term: "Toska", origin: "Russian", category: "Global & Untranslatable Words", definition: "A sensation of great spiritual anguish or aching of the soul for a lost love." },
  { id: 'lt-28', term: "Aistear", origin: "Irish", category: "Global & Untranslatable Words", definition: "A journey, frequently used to describe the shared path of a long-term relationship." },
  { id: 'lt-29', term: "Meraki", origin: "Greek", category: "Global & Untranslatable Words", definition: "Doing something with soul and absolute love; putting a piece of yourself into your actions." },
  { id: 'lt-30', term: "Liebeskummer", origin: "German", category: "Global & Untranslatable Words", definition: "Love grief, describing the deep physical and emotional ache of a broken heart." },
  { id: 'lt-31', term: "The Seven Greek Loves", origin: "Ancient Greece", category: "Historical & Literary Concepts", definition: "Ancient divisions of affection including Eros, Philia, Storge, Ludus, Pragma, Philautia, and Agape." },
  { id: 'lt-32', term: "Courtly Love", origin: "Medieval Europe", category: "Historical & Literary Concepts", definition: "A formalized medieval tradition of chivalrous and often unrequited devotion to aristocratic women." },
  { id: 'lt-33', term: "Red Thread of Fate", origin: "East Asian Mythology", category: "Historical & Literary Concepts", definition: "East Asian mythology asserting gods tie an unbreakable red cord between destined lovers." },
  { id: 'lt-34', term: "Platonic Love", origin: "Classical Philosophy", category: "Historical & Literary Concepts", definition: "An ascent of love moving past physical attraction toward a spiritual connection and shared truth." },
  { id: 'lt-35', term: "Liebestod", origin: "German Philosophy", category: "Historical & Literary Concepts", definition: "A concept of 'love death,' where ultimate spiritual consummation is achieved by dying together." },
  { id: 'lt-36', term: "Bovarism", origin: "Literary Theory", category: "Historical & Literary Concepts", definition: "An idealized and doomed approach to love rooted in romantic fantasies." },
  { id: 'lt-37', term: "L'Amour Fou", origin: "French Surrealism", category: "Historical & Literary Concepts", definition: "Mad love, an obsessive passion that defies logic and societal rules." },
  { id: 'lt-38', term: "The Green-Eyed Monster", origin: "Shakespeare", category: "Historical & Literary Concepts", definition: "Shakespeare's personification of romantic jealousy from Othello." },
  { id: 'lt-39', term: "Petrarchan Lover", origin: "Renaissance Literature", category: "Historical & Literary Concepts", definition: "A dramatic, melancholic literary archetype suffering immensely from unrequited love." },
  { id: 'lt-40', term: "Love Potion (Philtre)", origin: "Folklore", category: "Historical & Literary Concepts", definition: "A magical elixir believed to forcefully induce intense romantic obsession." },
  { id: 'lt-41', term: "Amour-propre", origin: "Rousseau", category: "Historical & Literary Concepts", definition: "Rousseau's concept of self-love that depends heavily on the validating opinion of others." },
  { id: 'lt-42', term: "The Sublime", origin: "Romanticism", category: "Historical & Literary Concepts", definition: "Experiencing love as an overwhelming, terrifying, and awe-inspiring force of nature." },
  { id: 'lt-43', term: "Chivalric Romance", origin: "Medieval Genre", category: "Historical & Literary Concepts", definition: "The medieval genre of wandering knights performing heroic deeds for a lady's honor." },
  { id: 'lt-44', term: "Fin'amor", origin: "Occitan Tradition", category: "Historical & Literary Concepts", definition: "The original Occitan term for courtly love, emphasizing nobility and devotion to an unattainable lady." },
  { id: 'lt-45', term: "The Ladder of Love", origin: "Plato's Symposium", category: "Historical & Literary Concepts", definition: "Plato's concept of progressing from physical attraction to loving the divine Form of Beauty." },
  { id: 'lt-46', term: "Romantic Agony", origin: "19th-Century Criticism", category: "Historical & Literary Concepts", definition: "The 19th-century literary belief that profound romance is inextricably linked to tragedy." },
  { id: 'lt-47', term: "Troubadour Poetry", origin: "11th-13th Century", category: "Historical & Literary Concepts", definition: "Lyric poetry establishing Western concepts of idealized romantic devotion." },
  { id: 'lt-48', term: "Epithalamium", origin: "Classical Poetry", category: "Historical & Literary Concepts", definition: "An ancient poetic form written specifically to celebrate a bride on her wedding day." },
  { id: 'lt-49', term: "Aubade", origin: "Medieval Poetry", category: "Historical & Literary Concepts", definition: "A poem or song dealing with the sorrow of two lovers who must part at sunrise." },
  { id: 'lt-50', term: "Sturm und Drang", origin: "German Movement", category: "Historical & Literary Concepts", definition: "An 18th-century German movement expressing extreme, violent romantic emotions." },
  { id: 'lt-51', term: "Courts of Love", origin: "Medieval Tribunals", category: "Historical & Literary Concepts", definition: "Apocryphal medieval tribunals of aristocratic women who judged romantic etiquette and lovers' quarrels." },
  { id: 'lt-52', term: "Sublunary Love", origin: "Metaphysical Poetry", category: "Historical & Literary Concepts", definition: "A purely physical, earthly love that cannot survive distance, contrasted against spiritual love." },
  { id: 'lt-53', term: "Limerence", origin: "English", category: "Unique English Words", definition: "An involuntary state of obsessive, all-consuming romantic infatuation." },
  { id: 'lt-54', term: "Redamancy", origin: "English", category: "Unique English Words", definition: "The act of loving someone deeply in return; a completely mutual love." },
  { id: 'lt-55', term: "Amaranthine", origin: "English", category: "Unique English Words", definition: "A love that is undying and eternally beautiful, named after a mythical unfading flower." },
  { id: 'lt-56', term: "Paramour", origin: "English", category: "Unique English Words", definition: "A lover, historically implying an illicit or secret partner." },
  { id: 'lt-57', term: "Aglet", origin: "English", category: "Unique English Words", definition: "The tip of a shoelace, playfully adapted to symbolize the tiny things holding a relationship together." },
  { id: 'lt-58', term: "Pulchritudinous", origin: "English", category: "Unique English Words", definition: "A highly elevated word meaning breathtakingly, physically beautiful." },
  { id: 'lt-59', term: "Mellifluous", origin: "English", category: "Unique English Words", definition: "A sweet and musical voice or tone, often used to describe a lover's whispers." },
  { id: 'lt-60', term: "Elysian", origin: "English", category: "Unique English Words", definition: "Blissful and divinely peaceful, derived from the mythological resting place of heroic souls." },
  { id: 'lt-61', term: "Serendipity", origin: "English", category: "Unique English Words", definition: "Finding a beautiful relationship entirely by chance and in an unexpected way." },
  { id: 'lt-62', term: "Enamor", origin: "English", category: "Unique English Words", definition: "To be filled with a profound feeling of love, capturing someone's complete affection." },
  { id: 'lt-63', term: "Amatory", origin: "English", category: "Unique English Words", definition: "Relating directly to or induced by romantic or sexual love." },
  { id: 'lt-64', term: "Blandishment", origin: "English", category: "Unique English Words", definition: "A flattering statement or gentle action used to coax or woo a lover." },
  { id: 'lt-65', term: "Coquetry", origin: "English", category: "Unique English Words", definition: "Playful, flirtatious behavior designed to attract romantic attention." },
  { id: 'lt-66', term: "Dalliance", origin: "English", category: "Unique English Words", definition: "A brief, casual romantic relationship without long-term commitment." },
  { id: 'lt-67', term: "Ensorcell", origin: "English", category: "Unique English Words", definition: "To enchant someone, frequently describing the bewitching nature of new love." },
  { id: 'lt-68', term: "Osculation", origin: "English", category: "Unique English Words", definition: "The formal or humorous scientific term for a kiss." },
  { id: 'lt-69', term: "Penchant", origin: "English", category: "Unique English Words", definition: "A strong, undeniable inclination or habitual liking for a specific person." },
  { id: 'lt-70', term: "Susurrus", origin: "English", category: "Unique English Words", definition: "A continuous whispering sound, often characterizing lovers' late-night conversations." },
  { id: 'lt-71', term: "Tryst", origin: "English", category: "Unique English Words", definition: "A private, secret romantic rendezvous between lovers." },
  { id: 'lt-72', term: "Uxorious", origin: "English", category: "Unique English Words", definition: "Showing an excessive, almost submissive, fondness for one's wife." },
  { id: 'lt-73', term: "Winsome", origin: "English", category: "Unique English Words", definition: "Romantically attractive in a sweet, innocent, or disarming way." },
  { id: 'lt-74', term: "Star-crossed", origin: "Idiom", category: "Metaphors & Idioms", definition: "Lovers whose relationship is thwarted by cosmic forces and bad luck." },
  { id: 'lt-75', term: "Anam Cara", origin: "Celtic Tradition", category: "Metaphors & Idioms", definition: "A Celtic 'soul friend' sharing a completely open and transparent spiritual bond." },
  { id: 'lt-76', term: "Carrying a torch", origin: "Idiom", category: "Metaphors & Idioms", definition: "Keeping an unrequited love alive, like holding a light in the dark." },
  { id: 'lt-77', term: "Twin flames", origin: "Modern Metaphor", category: "Metaphors & Idioms", definition: "A single soul split into two bodies, creating a magnetic reunion when they meet." },
  { id: 'lt-78', term: "Head over heels", origin: "Idiom", category: "Metaphors & Idioms", definition: "Completely and physically inverted by the overwhelming force of new love." },
  { id: 'lt-79', term: "Apple of my eye", origin: "Ancient Idiom", category: "Metaphors & Idioms", definition: "Referring to someone cherished above all others." },
  { id: 'lt-80', term: "Tie the knot", origin: "Celtic Tradition", category: "Metaphors & Idioms", definition: "Getting married, stemming from the Celtic tradition of handfasting with ribbons." },
  { id: 'lt-81', term: "Pop the question", origin: "Idiom", category: "Metaphors & Idioms", definition: "Proposing marriage, suddenly revealing a long-held intention." },
  { id: 'lt-82', term: "Heart in your mouth", origin: "Idiom", category: "Metaphors & Idioms", definition: "The intense physical anxiety experienced when approaching someone you love." },
  { id: 'lt-83', term: "Blinded by love", origin: "Metaphor", category: "Metaphors & Idioms", definition: "The phenomenon where intense affection hides the flaws in a partner." },
  { id: 'lt-84', term: "Puppy love", origin: "Idiom", category: "Metaphors & Idioms", definition: "An intense but relatively shallow romantic attachment typical of adolescence." },
  { id: 'lt-85', term: "Take my breath away", origin: "Idiom", category: "Metaphors & Idioms", definition: "A physical reaction to overwhelming beauty or sudden romantic realization." },
  { id: 'lt-86', term: "Fall for someone", origin: "Metaphor", category: "Metaphors & Idioms", definition: "A sudden, uncontrollable descent into romantic attraction." },
  { id: 'lt-87', term: "Carved in stone", origin: "Metaphor", category: "Metaphors & Idioms", definition: "A promise of love that is permanent and designed to last through the ages." },
  { id: 'lt-88', term: "A match made in heaven", origin: "Idiom", category: "Metaphors & Idioms", definition: "A relationship so perfectly aligned it feels divinely ordained." },
  { id: 'lt-89', term: "Written in the stars", origin: "Metaphor", category: "Metaphors & Idioms", definition: "The belief that two people's love was fated by cosmic forces before birth." },
  { id: 'lt-90', term: "To steal someone's heart", origin: "Idiom", category: "Metaphors & Idioms", definition: "To make someone suddenly lose emotional control and fall in love." },
  { id: 'lt-91', term: "Smitten", origin: "Idiom", category: "Metaphors & Idioms", definition: "Struck heavily, as if by a physical blow, by sudden infatuation." },
  { id: 'lt-92', term: "A flame that never dies", origin: "Metaphor", category: "Metaphors & Idioms", definition: "Enduring passion that survives despite time or hardship." },
  { id: 'lt-93', term: "Wearing your heart on your sleeve", origin: "Idiom", category: "Metaphors & Idioms", definition: "Making romantic feelings completely obvious and unprotected." },
  { id: 'lt-94', term: "To pitch woo", origin: "Antiquated Idiom", category: "Metaphors & Idioms", definition: "An antiquated idiom for actively courting or romantically pursuing someone." },
  { id: 'lt-95', term: "To be someone's anchor", origin: "Metaphor", category: "Metaphors & Idioms", definition: "Serving as the stabilizing, safe force in a loved one's chaotic life." },
  { id: 'lt-96', term: "To hold a candle to", origin: "Idiom", category: "Metaphors & Idioms", definition: "Declaring that no one else can compare in worth to your lover." },
  { id: 'lt-97', term: "Two peas in a pod", origin: "Idiom", category: "Metaphors & Idioms", definition: "Lovers who are deeply similar in thought and habit and virtually inseparable." },
  { id: 'lt-98', term: "Shah Jahan & Mumtaz Mahal", origin: "Historical Romance", category: "Famous Mythological & Historical Stories", definition: "An emperor who spent 22 years building the Taj Mahal as a monument to his pure grief." },
  { id: 'lt-99', term: "Orpheus & Eurydice", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "A musician who journeys to the Underworld for his bride, losing her by looking back too soon." },
  { id: 'lt-100', term: "The Butterfly Lovers", origin: "Chinese Folklore", category: "Famous Mythological & Historical Stories", definition: "Chinese tragic scholars denied a life together who reunite in death as butterflies." },
  { id: 'lt-101', term: "Pygmalion & Galatea", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "A sculptor who falls deeply in love with his own perfect ivory carving, brought to life." },
  { id: 'lt-102', term: "Lancelot & Guinevere", origin: "Arthurian Legend", category: "Famous Mythological & Historical Stories", definition: "The Arthurian tragedy where devotion between a knight and his Queen destroys Camelot." },
  { id: 'lt-103', term: "Cupid & Psyche", origin: "Roman Mythology", category: "Famous Mythological & Historical Stories", definition: "A mortal woman undergoes impossible trials to win back the god of love after betraying trust." },
  { id: 'lt-104', term: "Hero & Leander", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "Leander swims the treacherous Hellespont strait every night, guided by Hero's lamp." },
  { id: 'lt-105', term: "Heloise & Abelard", origin: "Historical Romance", category: "Famous Mythological & Historical Stories", definition: "A 12th-century affair ending in brutal separation but surviving through history's letters." },
  { id: 'lt-106', term: "Layla & Majnun", origin: "Arabic Folklore", category: "Famous Mythological & Historical Stories", definition: "A poet goes entirely mad after society forbids him from marrying his beloved Layla." },
  { id: 'lt-107', term: "Rama & Sita", origin: "The Ramayana", category: "Famous Mythological & Historical Stories", definition: "The Ramayana's central couple, serving as the mythological standard for devotion and purity." },
  { id: 'lt-108', term: "Paris & Helen of Troy", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "An elopement that launched a thousand ships and sparked a ten-year war." },
  { id: 'lt-109', term: "Tristan & Iseult", origin: "Celtic/Medieval Legend", category: "Famous Mythological & Historical Stories", definition: "A knight and princess accidentally consume a love potion, binding them in fatal passion." },
  { id: 'lt-110', term: "Orion & Artemis", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "The goddess of the hunt is tricked into fatally shooting Orion, placing him in the stars." },
  { id: 'lt-111', term: "Dante & Beatrice", origin: "Italian Literature", category: "Famous Mythological & Historical Stories", definition: "The ultimate unconsummated courtly love, inspiring Dante's Divine Comedy." },
  { id: 'lt-112', term: "Apollo & Daphne", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "Apollo obsessively chases Daphne, who transforms into a laurel tree to escape." },
  { id: 'lt-113', term: "Baucis & Philemon", origin: "Roman Mythology", category: "Famous Mythological & Historical Stories", definition: "An elderly couple transformed into intertwined trees at death so they never part." },
  { id: 'lt-114', term: "Antony & Cleopatra", origin: "Historical Romance", category: "Famous Mythological & Historical Stories", definition: "The political romance merging Rome and Egypt, ending in dramatic double suicide." },
  { id: 'lt-115', term: "Shakuntala & Dushyanta", origin: "Hindu Mythology", category: "Famous Mythological & Historical Stories", definition: "A cursed king forgets his wife, only remembering his love years later via a signet ring." },
  { id: 'lt-116', term: "Echo & Narcissus", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "Echo loves Narcissus, who falls fatally in love with his reflection, leaving Echo to fade." },
  { id: 'lt-117', term: "Hades & Persephone", origin: "Greek Mythology", category: "Famous Mythological & Historical Stories", definition: "A complex myth of abduction explaining the changing seasons based on Persephone's time." },
  { id: 'lt-118', term: "Diarmuid & Gráinne", origin: "Irish Mythology", category: "Famous Mythological & Historical Stories", definition: "An Irish princess forces a legendary warrior to elope, fleeing across the country." },
  { id: 'lt-119', term: "Pierre & Marie Curie", origin: "Historical Romance", category: "Famous Mythological & Historical Stories", definition: "A historical romance built on intellectual obsession and the joint discovery of radioactivity." },
  { id: 'lt-120', term: "Pyramus & Thisbe", origin: "Babylonian/Ovid", category: "Famous Mythological & Historical Stories", definition: "Star-crossed lovers communicating through a wall crack, inspiring Romeo and Juliet." }
];

const LEXICON_GRADIENT_PALETTES = [
  { name: "Electric Violet & Ruby Rose", darkBg: "linear-gradient(135deg, #0C0A24 0%, #1A0E36 50%, #2D0B2E 100%)", lightBg: "linear-gradient(135deg, #F8F6FC 0%, #F5ECF7 50%, #FCE8EE 100%)", orbA: "#6E3AFF", orbB: "#FF176B", wavePrimary: "rgba(110, 58, 255, 0.22)", waveSecondary: "rgba(255, 23, 107, 0.18)", accentBadgeDark: "bg-purple-500/20 text-purple-300 border-purple-500/30", accentBadgeLight: "bg-purple-100 text-purple-800 border-purple-200" },
  { name: "Cobalt Sapphire & Warm Coral", darkBg: "linear-gradient(135deg, #070D26 0%, #0F173D 50%, #2E1528 100%)", lightBg: "linear-gradient(135deg, #F2F5FE 0%, #EBF0FF 50%, #FAF0EC 100%)", orbA: "#1B75FF", orbB: "#FF9E6D", wavePrimary: "rgba(27, 117, 255, 0.22)", waveSecondary: "rgba(255, 158, 109, 0.18)", accentBadgeDark: "bg-blue-500/20 text-blue-300 border-blue-500/30", accentBadgeLight: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "Crimson Ruby & Amber Gold", darkBg: "linear-gradient(135deg, #1C060E 0%, #2E0B19 50%, #261706 100%)", lightBg: "linear-gradient(135deg, #FDF2F4 0%, #FCE8EE 100%, #FAF4E6 100%)", orbA: "#E3182D", orbB: "#F59E0B", wavePrimary: "rgba(227, 24, 45, 0.22)", waveSecondary: "rgba(245, 158, 11, 0.18)", accentBadgeDark: "bg-rose-500/20 text-rose-300 border-rose-500/30", accentBadgeLight: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "Deep Teal & Magenta Rose", darkBg: "linear-gradient(135deg, #061A19 0%, #0D2625 50%, #290D25 100%)", lightBg: "linear-gradient(135deg, #EDF7F6 0%, #E2F2F0 50%, #FCEAF4 100%)", orbA: "#0D9488", orbB: "#D81B9E", wavePrimary: "rgba(13, 148, 136, 0.22)", waveSecondary: "rgba(216, 27, 158, 0.18)", accentBadgeDark: "bg-teal-500/20 text-teal-300 border-teal-500/30", accentBadgeLight: "bg-teal-100 text-teal-800 border-teal-200" }
];

const PERSONA_QUESTIONS = [
  { id: 1, trait: "Anger", text: "When your partner frustrates you, you often react intrinsically by becoming passive-aggressive, simmering, or attempting to undermine their point." },
  { id: 2, trait: "Fear", text: "You frequently feel apprehensive or on edge, anxious that something bad is about to happen in your partnership without a clear trigger." },
  { id: 3, trait: "Sadness", text: "If you feel let down by your partner, your immediate intrinsic reaction is to ruminate on the issue, feel ashamed, or mourn the disconnect." },
  { id: 4, trait: "Enjoyment", text: "You generally maintain a cheerful, optimistic outlook, easily finding ways to laugh and experience enjoyment together even during stressful periods." },
  { id: 5, trait: "Disgust", text: "When a behavior of your partner violates your standards, you feel a sour, enduring sense of repulsion." },
  { id: 6, trait: "Fear", text: "During a high-stakes disagreement, your body's automatic response is to freeze, hesitate, or become consumed by worry." },
  { id: 7, trait: "Anger", text: "You possess a low threshold for frustration in the relationship, sometimes expressing hostility through demeaning words that cause psychological pain." },
  { id: 8, trait: "Enjoyment", text: "Following a wonderful date night, your intrinsic drive is to exclaim your happiness, savor the moment, and immediately seek more connection." },
  { id: 9, trait: "Fear", text: "You tend to approach the relationship as a timid person, actively avoiding risks and perceiving difficult conversations as too overwhelming to initiate." },
  { id: 10, trait: "Disgust", text: "When your partner introduces a dynamic you find toxic, your intrinsic reaction is to completely avoid, withdraw, or dehumanize them." },
  { id: 11, trait: "Enjoyment", text: "You often experience an elated mood, carrying a long-lasting, generalized good feeling about your shared life." },
  { id: 12, trait: "Sadness", text: "You sometimes hold a somber perspective, feeling dysphoric or blue, and operating under the assumption that making the relationship work will always be hard and difficult." },
  { id: 13, trait: "Anger", text: "If your partner crosses a boundary, your immediate intrinsic impulse is to dispute, quarrel, or suppress your true feelings entirely." },
  { id: 14, trait: "Fear", text: "When faced with an intimidating relationship problem, your intrinsic reaction is to either withdraw completely or experience an urge to scream and yell." },
  { id: 15, trait: "Disgust", text: "You sometimes view your partner's flaws through a lens of hyper-aversion, maintaining an inflated sense of self-worth that leaves you dissatisfied with their choices." }
];

const PERSONA_RESULTS = {
  Anger: { name: "Passion", iconName: "Passion", description: "To constructively process anger, focus on setting clear limits and being firm. Taking a time out, breathing deeply, and practicing patience can prevent destructive responses. You can also choose to reframe the situation, distract yourself, avoid the trigger, or deliberately remove the interference." },
  Fear: { name: "Vigilant", iconName: "Vigilant", description: "When fear is the primary reaction, intentional grounding techniques are highly effective. Practice being mindful and focusing on your breathing to stay present. You can also reframe the perceived threat or use distraction to break the cycle of anxiety and rumination." },
  Disgust: { name: "Purity", iconName: "Purity", description: "Managing disgust often requires establishing immediate physical or emotional boundaries. The suggested intentional actions are to actively withdraw from or avoid the trigger to prevent toxic dynamics from escalating." },
  Sadness: { name: "Empathy", iconName: "Empathy", description: "Processing sadness requires giving yourself space to recover. Constructive intentional actions include temporarily withdrawing to protect your energy or using healthy distraction to manage the intensity of disappointment." },
  Enjoyment: { name: "Joy", iconName: "Joy", description: "Because enjoyment naturally promotes social interaction and resilience, there are no intentional actions required to enact change. Allow your intrinsic responses to naturally maintain the state, savor the shared pleasure, and engage deeply." }
};

const TABLE_BOOKS_HOTSPOTS = [
  { id: 'tb-1', shortTitle: "Mating in Captivity", title: "Mating in Captivity: Unlocking Erotic Intelligence", author: "Esther Perel", year: "2006", notebook: "Relationships Notebook", summary: "Explores the paradox of domesticity and sexual desire, showing how emotional security and erotic passion often pull in opposite directions.", takeaway: "Maintain separateness and autonomy in long-term relationships to keep erotic desire alive." },
  { id: 'tb-2', shortTitle: "Attached", title: "Attached: The New Science of Adult Attachment", author: "Amir Levine and Rachel Heller", year: "2010", notebook: "Relationships Notebook", summary: "Identifies secure, anxious, and avoidant attachment styles in adult romantic relationships and how they dictate communication.", takeaway: "Understand your attachment style and communicate emotional needs clearly rather than testing your partner." },
  { id: 'tb-3', shortTitle: "Crucial Conversations", title: "Crucial Conversations: Tools for Talking When Stakes Are High", author: "Kerry Patterson et al.", year: "2002", notebook: "Relationships Notebook", summary: "Provides tactical tools for maintaining psychological safety and open dialogue during high-stakes emotional disagreements.", takeaway: "Keep the dialogue safe and focus on mutual purpose when opinions differ and emotions run high." },
  { id: 'tb-4', shortTitle: "Getting the Love You Want", title: "Getting the Love You Want: A Guide for Couples", author: "Harville Hendrix", year: "1988", notebook: "Relationships Notebook", summary: "Examines how unconscious childhood wounds (Imago) surface in romantic power struggles and how to heal through intentional dialogue.", takeaway: "Transform conflict into an opportunity for mutual childhood healing and conscious connection." },
  { id: 'tb-5', shortTitle: "Hold Me Tight", title: "Hold Me Tight: Seven Conversations for a Lifetime of Love", author: "Sue Johnson", year: "2008", notebook: "Relationships Notebook", summary: "Groundbreaking Emotionally Focused Therapy (EFT) guide teaching couples how to slow down negative cycles and reveal vulnerable primary emotions.", takeaway: "Uncover primary emotions like fear and sadness beneath anger to build a secure emotional haven." },
  { id: 'tb-6', shortTitle: "Men Are from Mars", title: "Men Are from Mars, Women Are from Venus", author: "John Gray", year: "1992", notebook: "Romance Notebooks", summary: "Explores how men and women process stress, communication, and emotional needs differently (e.g., men retreating to caves vs women talking).", takeaway: "Respect gender differences in stress processing without trying to change your partner." },
  { id: 'tb-7', shortTitle: "Nonviolent Communication", title: "Nonviolent Communication: A Language of Life", author: "Marshall B. Rosenberg", year: "2003", notebook: "Relationships Notebook", summary: "Teaches a compassionate framework for expressing feelings and needs clearly without blame, criticism, or judgment.", takeaway: "Observe objective actions, name feelings, state underlying needs, and make positive requests." },
  { id: 'tb-8', shortTitle: "The 5 Love Languages", title: "The 5 Love Languages: The Secret to Love That Lasts", author: "Gary Chapman", year: "1992", notebook: "Relationships Notebook", summary: "Identifies five primary ways people express and receive affection.", takeaway: "Intentionally speak your partner's primary love language to keep their emotional love tank full." },
  { id: 'tb-9', shortTitle: "The Art of Loving", title: "The Art of Loving", author: "Erich Fromm", year: "1956", notebook: "Relationships Notebook", summary: "Philosophical exploration framing love not as a fleeting feeling of falling, but as an active art requiring discipline.", takeaway: "True love is an active giving and nurturing of another's life rather than passive consumption." },
  { id: 'tb-10', shortTitle: "Atomic Attraction", title: "Atomic Attraction", author: "Christopher Canwell", year: "2017", notebook: "Romance (Male Perspective)", summary: "Breakdown of the scientific and evolutionary laws governing romantic attraction, desire, and polarity.", takeaway: "Attraction is governed by natural laws of polarity, mystery, and emotional stability." },
  { id: 'tb-11', shortTitle: "How to Be a 3% Man", title: "How to Be a 3% Man", author: "Corey Wayne", year: "2013", notebook: "Romance (Male Perspective)", summary: "Dating and relationship guide focusing on emotional centeredness, masculine leadership, and listening to women's feelings.", takeaway: "Lead with confidence, stay centered during emotional tests, and never act out of neediness." },
  { id: 'tb-12', shortTitle: "The Mystery Method", title: "The Mystery Method", author: "Mystery and Chris Odom", year: "2007", notebook: "Romance (Male Perspective)", summary: "Examines the evolutionary stages of human courtship, attraction phases, and social proof dynamics.", takeaway: "Understand courtship pacing and emotional framing during early social interactions." },
  { id: 'tb-13', shortTitle: "The Rational Male", title: "The Rational Male", author: "Rollo Tomassi", year: "2013", notebook: "Romance (Male Perspective)", summary: "Interrogates intersexual dynamics from an evolutionary psychology and red-pill perspective.", takeaway: "Maintain your personal mission, avoid pedestalizing, and never sacrifice your self-respect." },
  { id: 'tb-14', shortTitle: "The Game", title: "The Game: Penetrating the Secret Society of Pickup Artists", author: "Neil Strauss", year: "2005", notebook: "Romance (Male Perspective)", summary: "Memoir exploring the subterranean world of pickup artistry and the ultimate realization that inner game matters most.", takeaway: "True social confidence cannot be faked; it stems from self-acceptance and grounded character." },
  { id: 'tb-15', shortTitle: "The Case for Settling", title: "The Case for Settling for Mr. Good Enough", author: "Lori Gottlieb", year: "2010", notebook: "Romance (Female Perspective)", summary: "Challenges the relentless modern pursuit of a cinematic high-chemistry soulmate at the expense of long-term compatibility.", takeaway: "Prioritize character, kindness, and shared goals over fleeting chemistry sparks." },
  { id: 'tb-16', shortTitle: "The Way of the Superior Man", title: "The Way of the Superior Man", author: "David Deida", year: "1997", notebook: "Romance (Male Perspective)", summary: "Spiritual guide for men on living a life of purpose while embracing feminine-masculine polarity in relationships.", takeaway: "Prioritize your highest life purpose above the relationship to maintain the polarity that fuels desire." }
];

const THREE_EMOTION_DECK_CONFIGS = [
  { deckId: 'deck-basic', deckNumber: 'Deck I', partKey: 'Part I: Basic Emotions', badgeLabel: 'Part I', title: 'Part I: Basic Emotions', subtitle: '8 Foundational Evolutionary & Physiological Emotional States (#01 – #08)', cardRange: '#01 – #08 (8 Cards)', themeName: 'Faceted Ruby Crimson & Magenta', gradFrom: '#E3182D', gradTo: '#FF176B', glowColor: 'rgba(227, 24, 45, 0.22)', pillBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30', activeGrad: 'from-[#E3182D] to-[#FF176B]' },
  { deckId: 'deck-combinatorial', deckNumber: 'Deck II', partKey: 'Part II: Combinatorial Emotions', badgeLabel: 'Part II', title: 'Part II: Combinatorial Emotions', subtitle: '8 Relational & Dyadic Blends Shaping Attraction, Polarity & Conflict (#09 – #16)', cardRange: '#09 – #16 (8 Cards)', themeName: 'Electric Indigo & Cobalt Sapphire', gradFrom: '#5A28FF', gradTo: '#1B75FF', glowColor: 'rgba(90, 40, 255, 0.24)', pillBg: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30', activeGrad: 'from-[#5A28FF] to-[#1B75FF]' },
  { deckId: 'deck-self-conscious', deckNumber: 'Deck III', partKey: 'Part III: Self-Conscious Emotions', badgeLabel: 'Part III', title: 'Part III: Self-Conscious Emotions', subtitle: '6 Identity, Status, Ego & Vulnerability Emotions in Romance (#17 – #22)', cardRange: '#17 – #22 (6 Cards)', themeName: 'Warm Coral-Peach & Sunset Rose', gradFrom: '#FF9E6D', gradTo: '#FF176B', glowColor: 'rgba(255, 158, 109, 0.24)', pillBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30', activeGrad: 'from-[#FF9E6D] to-[#FF176B]' }
];

function EmotionCardCrestSVG({ gradFrom, gradTo, badgeLabel }) {
  return (
    <svg viewBox="0 0 64 64" className="w-11 h-11 drop-shadow-sm" fill="none">
      <defs>
        <linearGradient id={`crest-${badgeLabel}`} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradFrom} />
          <stop offset="100%" stopColor={gradTo} />
        </linearGradient>
      </defs>
      <polygon points="32,6 56,32 32,58 8,32" fill={`url(#crest-${badgeLabel})`} fillOpacity="0.18" stroke={`url(#crest-${badgeLabel})`} strokeWidth="1.75" />
      <polygon points="32,14 48,32 32,50 16,32" fill={`url(#crest-${badgeLabel})`} fillOpacity="0.35" />
      <path d="M32 6 L32 58 M8 32 L56 32 M20 19 L44 45 M44 19 L20 45" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.45" />
      <circle cx="32" cy="32" r="4.5" fill="#FFFFFF" fillOpacity="0.9" />
    </svg>
  );
}

function getRecommendedBooksForLaggingItems(laggingAdviceList) {
  const bookMap = new Map();
  laggingAdviceList.forEach(adviceItem => {
    (adviceItem.recommendedBooks || []).forEach(bookTitle => {
      const bookObj = REFERENCE_BOOKS.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());
      if (bookObj) {
        if (!bookMap.has(bookObj.title)) {
          bookMap.set(bookObj.title, {
            ...bookObj,
            addressedPrinciples: [`#${adviceItem.rank}: ${adviceItem.title}`]
          });
        } else {
          const existing = bookMap.get(bookObj.title);
          const tag = `#${adviceItem.rank}: ${adviceItem.title}`;
          if (!existing.addressedPrinciples.includes(tag)) {
            existing.addressedPrinciples.push(tag);
          }
        }
      }
    });
  });
  if (bookMap.size === 0) {
    return REFERENCE_BOOKS.slice(0, 3).map(b => ({
      ...b,
      addressedPrinciples: ["Continued Mastery & Deepening Intimacy"]
    }));
  }
  return Array.from(bookMap.values());
}

function TierCommemorativeGraphic({ score, tier, timestamp, darkMode, sourceLabel = "Weekly Spouse Harmony Check-In" }) {
  const formattedDate = useMemo(() => {
    return timestamp.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }, [timestamp]);
  const formattedTime = useMemo(() => {
    return timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }, [timestamp]);

  const tName = tier.charAt(0).toUpperCase() + tier.slice(1);
  let tierDesc = '';
  if (tier === 'diamond') tierDesc = `Exceptional. By achieving 90% or higher, you have unlocked the pristine Diamond Heart Emblem.`;
  else if (tier === 'gold') tierDesc = `Excellent. By achieving 80% or higher, you have unlocked the radiant Gold Heart Emblem.`;
  else if (tier === 'silver') tierDesc = `Strong. By achieving 60% or higher with multiple thriving areas, you have unlocked the Silver Heart Emblem.`;
  else tierDesc = `Reflective. Your current score unlocks the Bronze Heart Emblem. Focus on the targeted prescriptions to polish your partnership.`;

  const tStyles = {
    bronze: { bgDark: 'from-[#1A1005] via-[#2A1705] to-[#1A0A00]', bgLight: 'from-[#FFF8F0] via-[#FFECD9] to-[#FFE0C2]', border: 'border-orange-500/40', text: 'text-orange-500', shadow: 'shadow-orange-900/50' },
    silver: { bgDark: 'from-[#0A0D12] via-[#161C24] to-[#0A0D12]', bgLight: 'from-[#F0F4F8] via-[#E2E8F0] to-[#F0F4F8]', border: 'border-slate-400/40', text: 'text-slate-400', shadow: 'shadow-slate-900/50' },
    gold: { bgDark: 'from-[#1A1500] via-[#2A2200] to-[#1A1500]', bgLight: 'from-[#FFFAF0] via-[#FFF3D0] to-[#FFFAF0]', border: 'border-yellow-500/40', text: 'text-yellow-500', shadow: 'shadow-yellow-900/50' },
    diamond: { bgDark: 'from-[#00101A] via-[#001B2A] to-[#00101A]', bgLight: 'from-[#F0F9FF] via-[#E0F2FE] to-[#F0F9FF]', border: 'border-sky-300/40', text: 'text-sky-500', shadow: 'shadow-sky-900/50' }
  };
  const s = tStyles[tier];

  const handleDownloadGraphic = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080; canvas.height = 640;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 640);
    if (darkMode) { bgGrad.addColorStop(0, '#07061C'); bgGrad.addColorStop(0.5, '#130926'); bgGrad.addColorStop(1, '#24071B'); } 
    else { bgGrad.addColorStop(0, '#FAF8F5'); bgGrad.addColorStop(0.5, '#FFF5F5'); bgGrad.addColorStop(1, '#FDE8EE'); }
    ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, 1080, 640);
    ctx.strokeStyle = darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'; ctx.lineWidth = 4; ctx.strokeRect(28, 28, 1024, 584);
    ctx.save(); ctx.translate(120, 190); ctx.scale(1.65, 1.65);
    ctx.fillStyle = darkMode ? '#050517' : '#FFFFFF'; ctx.beginPath(); ctx.roundRect(0, 0, 160, 160, 38); ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(80, 138); ctx.bezierCurveTo(80, 138, 18, 98, 18, 55); ctx.bezierCurveTo(18, 30, 37, 18, 56, 18);
    ctx.bezierCurveTo(69, 18, 77, 26, 80, 35); ctx.bezierCurveTo(83, 26, 91, 18, 104, 18); ctx.bezierCurveTo(123, 18, 142, 30, 142, 55);
    ctx.bezierCurveTo(142, 98, 80, 138, 80, 138); ctx.closePath();
    const tGrad = ctx.createLinearGradient(18, 18, 142, 138);
    if (tier === 'diamond') { tGrad.addColorStop(0, '#99C2D6'); tGrad.addColorStop(0.5, '#D9F0FF'); tGrad.addColorStop(1, '#FFFFFF'); }
    else if (tier === 'gold') { tGrad.addColorStop(0, '#DAA520'); tGrad.addColorStop(0.5, '#FFC125'); tGrad.addColorStop(1, '#FFE066'); }
    else if (tier === 'silver') { tGrad.addColorStop(0, '#637385'); tGrad.addColorStop(0.5, '#A2B2C2'); tGrad.addColorStop(1, '#D1DEEB'); }
    else { tGrad.addColorStop(0, '#994500'); tGrad.addColorStop(0.5, '#E68A2E'); tGrad.addColorStop(1, '#FFB366'); }
    ctx.fillStyle = tGrad; ctx.fill(); ctx.restore();
    ctx.fillStyle = darkMode ? '#FFFFFF' : '#141229'; ctx.font = 'bold 20px sans-serif'; ctx.fillText(`RUBY HOME • ${tName.toUpperCase()} TIER SEAL`, 440, 145);
    ctx.fillStyle = darkMode ? '#FFFFFF' : '#141229'; ctx.font = 'bold 64px serif'; ctx.fillText(`${score}% Harmony Score`, 440, 230);
    ctx.fillStyle = darkMode ? '#E2E0F5' : '#4A4669'; ctx.font = '26px sans-serif'; ctx.fillText(sourceLabel, 440, 285);
    ctx.fillStyle = darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'; ctx.beginPath(); ctx.roundRect(440, 330, 540, 130, 22); ctx.fill();
    ctx.fillStyle = darkMode ? '#FFFFFF' : '#141229'; ctx.font = 'bold 22px sans-serif'; ctx.fillText(`DATE: ${formattedDate}`, 470, 382); ctx.fillText(`TIME: ${formattedTime}`, 470, 426);
    ctx.fillStyle = darkMode ? '#9D99BC' : '#6E6A8F'; ctx.font = 'italic 20px serif'; ctx.fillText('"Amor Fati — Love your fate, and nurture the bond you share."', 440, 525);
    const link = document.createElement('a'); link.download = `Ruby-Harmony-${tier}-${score}-${timestamp.toISOString().slice(0, 10)}.png`; link.href = canvas.toDataURL('image/png'); link.click();
  };

  return (
    <div className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-10 border-2 shadow-2xl transition-all duration-500 bg-gradient-to-br ${darkMode ? s.bgDark : s.bgLight} ${s.border} ${darkMode ? 'text-white' : 'text-slate-900'} ${s.shadow}`}>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          <div className="relative group shrink-0">
            <div className="absolute -inset-2 rounded-[28%] bg-white/20 opacity-50 blur-lg group-hover:opacity-80 transition duration-500" />
            <TieredHeartIcon tier={tier} darkMode={darkMode} size={156} />
            <div className={`mt-3 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest ${s.text}`}><Gem className="w-3.5 h-3.5" /> {tName} Tier</div>
          </div>
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-black/20 text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> {tName} Distinction
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              {score}% Harmony Score
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              {tierDesc}
            </p>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-center gap-3">
          <button onClick={handleDownloadGraphic} className="px-5 py-3 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/20 text-white font-semibold text-xs sm:text-sm shadow-lg transition flex items-center gap-2"><Download className="w-4 h-4" /> Download Result Graphic</button>
          <span className={`text-[11px] ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>Includes {tName} Icon + Stamp</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('sanctuary');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTableBook, setSelectedTableBook] = useState(null);

  // Weekly Check-In State
  const [checkInAnswers, setCheckInAnswers] = useState(() => {
    const initial = {};
    TOP_20_ADVICE.forEach(item => { initial[item.rank] = 0; });
    return initial;
  });
  const [checkInSubmitted, setCheckInSubmitted] = useState(false);
  const [checkInStep, setCheckInStep] = useState(0);
  const [checkInGradeTimestamp, setCheckInGradeTimestamp] = useState(() => new Date());

  // Quotes Explorer State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedQuotes, setSavedQuotes] = useState(['q1', 'q2']);

  // 5 W's / Dos & Donts State
  const [selectedPerspective, setSelectedPerspective] = useState('female');
  const [showDosDontsModal, setShowDosDontsModal] = useState(false);
  const [dosDontsGender, setDosDontsGender] = useState('male');

  // Behaviour Quiz State
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizGradeTimestamp, setQuizGradeTimestamp] = useState(() => new Date());

  // Flags Swipe State
  const [flagGenderFilter, setFlagGenderFilter] = useState('All');
  const [flagMode, setFlagMode] = useState('partner');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [swipeHistory, setSwipeHistory] = useState([]);
  const [lastSwipeReveal, setLastSwipeReveal] = useState(null);

  // Emotion Atlas Decks
  const [emotionDeckViewMode, setEmotionDeckViewMode] = useState('ALL_THREE');
  const [emotionSearchQuery, setEmotionSearchQuery] = useState('');
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);
  const [hoveredEmotionId, setHoveredEmotionId] = useState(null);

  // Lexicon Wave State
  const [lexiconCategoryFilter, setLexiconCategoryFilter] = useState('All');
  const [currentLexiconTerm, setCurrentLexiconTerm] = useState(() => LOVE_TERMS_LEXICON[0]);
  const [lexiconPaletteIndex, setLexiconPaletteIndex] = useState(0);
  const [waveTransitionState, setWaveTransitionState] = useState('idle');
  const [waveOriginCoords, setWaveOriginCoords] = useState({ x: 50, y: 50 });
  const [visitedLexiconIds, setVisitedLexiconIds] = useState(() => new Set([LOVE_TERMS_LEXICON[0].id]));
  const [savedLexiconIds, setSavedLexiconIds] = useState(['lt-1', 'lt-2', 'lt-54']);
  const waveTimeoutRef = useRef(null);

  // Emotional Persona Quiz State
  const [personaAnswers, setPersonaAnswers] = useState({});
  const [personaCompleted, setPersonaCompleted] = useState(false);
  const [personaStep, setPersonaStep] = useState(0);

  const filteredLexiconPool = useMemo(() => {
    if (lexiconCategoryFilter === 'All') return LOVE_TERMS_LEXICON;
    if (lexiconCategoryFilter === 'Saved') {
      const savedList = LOVE_TERMS_LEXICON.filter(t => savedLexiconIds.includes(t.id));
      return savedList.length > 0 ? savedList : LOVE_TERMS_LEXICON;
    }
    return LOVE_TERMS_LEXICON.filter(t => t.category === lexiconCategoryFilter);
  }, [lexiconCategoryFilter, savedLexiconIds]);

  const triggerNextRandomTermWave = (e, customCategoryPool = null) => {
    if (waveTransitionState === 'surging') return;

    if (e && e.currentTarget && typeof e.clientX === 'number') {
      const rect = e.currentTarget.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const relX = Math.max(10, Math.min(90, Math.round(((e.clientX - rect.left) / rect.width) * 100)));
        const relY = Math.max(10, Math.min(90, Math.round(((e.clientY - rect.top) / rect.height) * 100)));
        setWaveOriginCoords({ x: relX, y: relY });
      }
    } else {
      setWaveOriginCoords({ x: 50, y: 50 });
    }

    const pool = customCategoryPool || filteredLexiconPool;
    if (!pool || pool.length === 0) return;

    const unvisitedPool = pool.filter(item => !visitedLexiconIds.has(item.id) && item.id !== currentLexiconTerm?.id);
    const candidatePool = unvisitedPool.length > 0 ? unvisitedPool : pool.filter(item => item.id !== currentLexiconTerm?.id);
    const nextTerm = candidatePool.length > 0 ? candidatePool[Math.floor(Math.random() * candidatePool.length)] : pool[0];
    const nextPaletteIdx = (lexiconPaletteIndex + 1 + Math.floor(Math.random() * (LEXICON_GRADIENT_PALETTES.length - 1))) % LEXICON_GRADIENT_PALETTES.length;

    setWaveTransitionState('surging');
    if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current);

    waveTimeoutRef.current = setTimeout(() => {
      setCurrentLexiconTerm(nextTerm);
      setLexiconPaletteIndex(nextPaletteIdx);
      setVisitedLexiconIds(prev => {
        const updated = new Set(prev);
        updated.add(nextTerm.id);
        if (updated.size >= LOVE_TERMS_LEXICON.length) return new Set([nextTerm.id]);
        return updated;
      });
      setWaveTransitionState('settling');
      waveTimeoutRef.current = setTimeout(() => { setWaveTransitionState('idle'); }, 420);
    }, 310);
  };

  useEffect(() => {
    return () => { if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current); };
  }, []);

  const activeEmotionCard = useMemo(() => {
    if (!selectedEmotionId) return null;
    return EMOTIONS_DECK.find(e => e.id === selectedEmotionId) || null;
  }, [selectedEmotionId]);

  const activeDeckSiblings = useMemo(() => {
    if (!activeEmotionCard) return [];
    return EMOTIONS_DECK.filter(e => e.part === activeEmotionCard.part);
  }, [activeEmotionCard]);

  const activeDeckConfig = useMemo(() => {
    if (!activeEmotionCard) return null;
    return THREE_EMOTION_DECK_CONFIGS.find(d => d.partKey === activeEmotionCard.part) || THREE_EMOTION_DECK_CONFIGS[0];
  }, [activeEmotionCard]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedEmotionId !== null) setSelectedEmotionId(null);
        if (selectedTableBook !== null) setSelectedTableBook(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEmotionId, selectedTableBook]);

  const answeredCount = Object.values(checkInAnswers).filter(v => v > 0).length;
  const handleRateQuestion = (rank, rating) => setCheckInAnswers(prev => ({ ...prev, [rank]: rating }));

  const handleDemoFillCheckInHigh = () => {
    const demo = { 1: 5, 2: 4, 3: 5, 4: 5, 5: 4, 6: 4, 7: 2, 8: 3, 9: 5, 10: 5, 11: 4, 12: 3, 13: 5, 14: 4, 15: 2, 16: 5, 17: 4, 18: 4, 19: 5, 20: 4 };
    setCheckInAnswers(demo); setCheckInGradeTimestamp(new Date()); setCheckInSubmitted(true);
  };

  const handleDemoFillCheckInGrowth = () => {
    const demo = { 1: 2, 2: 2, 3: 4, 4: 3, 5: 3, 6: 2, 7: 2, 8: 2, 9: 3, 10: 5, 11: 2, 12: 3, 13: 3, 14: 3, 15: 2, 16: 4, 17: 3, 18: 4, 19: 3, 20: 3 };
    setCheckInAnswers(demo); setCheckInGradeTimestamp(new Date()); setCheckInSubmitted(true);
  };

  const handleResetCheckIn = () => {
    const reset = {}; TOP_20_ADVICE.forEach(item => { reset[item.rank] = 0; });
    setCheckInAnswers(reset); setCheckInSubmitted(false); setCheckInStep(0);
  };

  const checkInAnalysis = useMemo(() => {
    const ratedItems = TOP_20_ADVICE.filter(item => checkInAnswers[item.rank] > 0).map(item => ({
      ...item,
      score: checkInAnswers[item.rank]
    }));
    if (ratedItems.length === 0) return null;

    const totalPossible = ratedItems.length * 5;
    const totalEarned = ratedItems.reduce((acc, cur) => acc + cur.score, 0);
    const percentage = Math.round((totalEarned / totalPossible) * 100);

    const numFives = ratedItems.filter(i => i.score === 5).length;
    let tier = 'bronze';
    if (percentage >= 90) tier = 'diamond';
    else if (percentage >= 80) tier = 'gold';
    else if (percentage >= 60 && numFives >= 2) tier = 'silver';
    else tier = 'bronze';

    const goingGreat = ratedItems.filter(i => i.score >= 4).sort((a, b) => b.score - a.score || a.rank - b.rank);
    const needsImprovement = ratedItems.filter(i => i.score <= 3).sort((a, b) => a.score - b.score || a.rank - b.rank);

    const triggeredMistakeIds = [...new Set(needsImprovement.map(i => i.relatedMistakeId))];
    const remedies = COMMON_MISTAKES.filter(m => triggeredMistakeIds.includes(m.id));
    const recommendedBooks = getRecommendedBooksForLaggingItems(needsImprovement);

    return {
      percentage,
      tier,
      goingGreat,
      needsImprovement,
      remedies,
      recommendedBooks,
      ratedCount: ratedItems.length
    };
  }, [checkInAnswers]);

  const allSearchableItems = useMemo(() => {
    const items = [];
    CURATED_QUOTES.forEach(q => items.push({ id: q.id, category: 'quotes', badge: 'Mindful Quote', title: `"${q.quote}"`, subtitle: q.source, detail: `Theme: ${q.theme} • ${q.notebook}` }));
    TOP_20_ADVICE.forEach(a => items.push({ id: `adv-${a.rank}`, category: 'principles', badge: `Priority #${a.rank}`, title: a.title, subtitle: a.description, detail: `Pillar: ${a.category} • Recommended Texts: ${a.recommendedBooks.join(', ')}` }));
    MALE_DOS_DONTS.forEach((m, i) => items.push({ id: `m-do-${i}`, category: 'male', badge: "Male Perspective: Do & Don't", title: `✓ ${m.doTitle}  |  ✕ ${m.dontTitle}`, subtitle: `DO: ${m.doDesc}`, detail: `DON'T: ${m.dontDesc}` }));
    FEMALE_DOS_DONTS.forEach((f, i) => items.push({ id: `f-do-${i}`, category: 'female', badge: "Female Perspective: Do & Don't", title: `✓ ${f.doTitle}  |  ✕ ${f.dontTitle}`, subtitle: `DO: ${f.doDesc}`, detail: `DON'T: ${f.dontDesc}` }));
    COMMON_MISTAKES.forEach(cm => items.push({ id: `cm-${cm.id}`, category: 'mistakes', badge: `Mistake & Remedy #${cm.id}`, title: cm.title, subtitle: `The Mistake: ${cm.mistake}`, detail: `The Fix: ${cm.fix}` }));
    REFERENCE_BOOKS.forEach((b, i) => items.push({ id: `book-${i}`, category: 'books', badge: b.notebook, title: `${b.title} (${b.year})`, subtitle: `By ${b.author}`, detail: `Core Insight: ${b.takeaway}` }));
    EMOTIONS_DECK.forEach(em => items.push({ id: `emotion-${em.id}`, category: 'emotions', badge: `${em.part} (#${em.number})`, title: `${em.name} — Facial & Body: ${em.facialAndBody}`, subtitle: `Men (+): ${em.menFactors.increase} | Women (+): ${em.womenFactors.increase}`, detail: `Actions: ${em.actionsGeneral}` }));
    LOVE_TERMS_LEXICON.forEach(lt => items.push({ id: lt.id, category: 'loveterms', badge: `${lt.category} • ${lt.origin}`, title: lt.term, subtitle: lt.definition, detail: `Collection: ${lt.category} (${lt.origin})` }));
    return items;
  }, []);

  const filteredSearchItems = useMemo(() => {
    return allSearchableItems.filter(item => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCat;
      return matchesCat && (item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.detail.toLowerCase().includes(q) || item.badge.toLowerCase().includes(q));
    });
  }, [allSearchableItems, selectedCategory, searchQuery]);

  const quizResults = useMemo(() => {
    const answeredKeys = Object.keys(quizAnswers);
    if (answeredKeys.length === 0) return null;

    const laggingRanksSet = new Set();
    const strongRanksSet = new Set();
    const mistakeIdsSet = new Set();
    let earnedPoints = 0;
    const maxPoints = answeredKeys.length * 5;
    let numFives = 0;

    BEHAVIOUR_QUIZ_QUESTIONS.forEach(q => {
      const selectedOptionIdx = quizAnswers[q.id];
      if (selectedOptionIdx !== undefined) {
        const opt = q.options[selectedOptionIdx];
        earnedPoints += opt.points;
        if (opt.points === 5) numFives++;
        if (opt.lagScore >= 2) {
          opt.priorityRanks.forEach(r => laggingRanksSet.add(r));
          mistakeIdsSet.add(opt.mistakeId);
        } else {
          opt.priorityRanks.forEach(r => strongRanksSet.add(r));
        }
      }
    });

    const percentage = Math.round((earnedPoints / maxPoints) * 100);
    let tier = 'bronze';
    if (percentage >= 90) tier = 'diamond';
    else if (percentage >= 80) tier = 'gold';
    else if (percentage >= 60 && numFives >= 2) tier = 'silver';
    else tier = 'bronze';

    const targetedAdvice = TOP_20_ADVICE.filter(a => laggingRanksSet.has(a.rank)).sort((a, b) => a.rank - b.rank);
    const thrivingAdvice = TOP_20_ADVICE.filter(a => strongRanksSet.has(a.rank) && !laggingRanksSet.has(a.rank)).sort((a, b) => a.rank - b.rank);
    const targetedMistakes = COMMON_MISTAKES.filter(m => mistakeIdsSet.has(m.id));
    const recommendedBooks = getRecommendedBooksForLaggingItems(targetedAdvice);

    return {
      percentage,
      tier,
      targetedAdvice,
      thrivingAdvice,
      targetedMistakes,
      recommendedBooks
    };
  }, [quizAnswers]);

  const filteredFlagDeck = useMemo(() => {
    if (flagGenderFilter === 'All') return FLAGS_DECK;
    return FLAGS_DECK.filter(card => card.gender === flagGenderFilter);
  }, [flagGenderFilter]);

  const currentFlagCard = filteredFlagDeck[currentCardIndex] || null;

  const handleSwipeCard = (direction) => {
    if (!currentFlagCard) return;
    let partnerHasTrait = false; let guessedCorrectly = null;
    if (flagMode === 'partner') { partnerHasTrait = direction === 'right'; }
    else { const guessedType = direction === 'right' ? 'green' : 'red'; guessedCorrectly = guessedType === currentFlagCard.flagType; }
    const entry = { card: currentFlagCard, direction, partnerHasTrait, guessedCorrectly, mode: flagMode };
    setSwipeHistory(prev => [entry, ...prev]); setLastSwipeReveal(entry); setCurrentCardIndex(prev => prev + 1);
  };

  const resetFlagDeck = (newGender = flagGenderFilter) => {
    setFlagGenderFilter(newGender); setCurrentCardIndex(0); setSwipeHistory([]); setLastSwipeReveal(null);
  };

  const personaAnalysis = useMemo(() => {
    const answeredKeys = Object.keys(personaAnswers);
    if (answeredKeys.length === 0) return null;
    const scores = { Anger: { sum: 0, count: 0 }, Fear: { sum: 0, count: 0 }, Sadness: { sum: 0, count: 0 }, Enjoyment: { sum: 0, count: 0 }, Disgust: { sum: 0, count: 0 } };
    PERSONA_QUESTIONS.forEach(q => {
      const val = personaAnswers[q.id];
      if (val !== undefined) { scores[q.trait].sum += val; scores[q.trait].count += 1; }
    });
    let dominantTrait = 'Enjoyment'; let maxAvg = 0;
    Object.keys(scores).forEach(trait => {
      if (scores[trait].count > 0) {
        const avg = scores[trait].sum / scores[trait].count;
        if (avg > maxAvg) { maxAvg = avg; dominantTrait = trait; }
      }
    });
    return { dominantTrait, resultData: PERSONA_RESULTS[dominantTrait] };
  }, [personaAnswers]);

  const handleResetPersona = () => {
    setPersonaAnswers({}); setPersonaCompleted(false); setPersonaStep(0);
  };

  const navGroups = [
    {
      label: 'Home',
      icon: Sparkles,
      items: [
        { id: 'sanctuary', label: 'For You', icon: Sparkles, description: 'Return to your home sanctuary dashboard' }
      ]
    },
    {
      label: 'Assessments',
      icon: Activity,
      items: [
        { id: 'checkin', label: 'Weekly Check-In', icon: CheckCircle2, description: 'Rate your partnership harmony' },
        { id: 'quiz', label: 'Behaviour Quiz', icon: Activity, description: 'Diagnose relationship dynamics' },
        { id: 'persona', label: 'Emotional Persona', icon: UserCircle, description: 'Discover your archetype' }
      ]
    },
    {
      label: 'Library & Wisdom',
      icon: BookOpen,
      items: [
        { id: 'quotes', label: 'Quotes & Library', icon: BookOpen, description: 'Search curated relationship texts' },
        { id: 'fivews', label: 'Advice', icon: Compass, description: 'Explore male & female perspectives' },
        { id: 'lexicon', label: 'Lexicon of Love', icon: Waves, description: 'Discover untranslatable words' }
      ]
    },
    {
      label: 'Interactive Tools',
      icon: Gem,
      items: [
        { id: 'emotions', label: 'Emotion Atlas', icon: Layers, description: 'Explore 22 relational emotions' },
        { id: 'flags', label: 'Rubies', icon: Gem, description: 'Swipe green & black behavioural rubies' }
      ]
    }
  ];

  const themeSurface = darkMode ? 'bg-[#130F26]/90 border-indigo-500/25 text-stone-100 shadow-lg shadow-black/25' : 'bg-[#FFFFFF]/95 border-stone-200/90 text-slate-900 shadow-sm';
  const themeSubtleCard = darkMode ? 'bg-[#1A1536]/80 border-indigo-400/20 text-stone-200' : 'bg-[#F8F6F2] border-stone-200/80 text-slate-800';
  const themeMutedText = darkMode ? 'text-indigo-200/70' : 'text-slate-500';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 flex flex-col selection:bg-pink-500 selection:text-white ${darkMode ? 'bg-[#0A0818] text-stone-100' : 'bg-[#F8F6F2] text-[#141229]'}`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-32 -left-28 w-[30rem] h-[30rem] rounded-full blur-3xl transition-opacity duration-700 ${darkMode ? 'bg-[#5A28FF]/20' : 'bg-[#6E3AFF]/12'}`} />
        <div className={`absolute top-1/4 -right-32 w-[32rem] h-[32rem] rounded-full blur-3xl transition-opacity duration-700 ${darkMode ? 'bg-[#FF176B]/18' : 'bg-[#FF9E6D]/20'}`} />
        <div className={`absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full blur-3xl transition-opacity duration-700 ${darkMode ? 'bg-[#1B75FF]/16' : 'bg-[#FF176B]/12'}`} />
      </div>

      <header className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-colors duration-500 ${darkMode ? 'bg-[#08071E]/85 border-indigo-500/20' : 'bg-[#F6F5F0]/85 border-stone-200/90'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div onClick={() => setActiveTab('sanctuary')} className="flex items-center gap-3.5 cursor-pointer group">
            <RubyGradientLogo darkMode={darkMode} size={44} className="group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="text-xl font-serif font-bold tracking-tight bg-gradient-to-r from-[#6E3AFF] via-[#FF176B] to-[#FF9E6D] bg-clip-text text-transparent">Ruby Home</h1>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button onClick={() => setDarkMode(!darkMode)} title="Toggle Light Mode and Dark Mode" className={`group relative overflow-hidden px-4 py-2 rounded-full text-xs sm:text-sm font-serif italic font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 border shadow-md ${darkMode ? 'bg-gradient-to-r from-[#4618F2] via-[#D81B9E] to-[#FF7B54] text-white border-pink-400/40 shadow-pink-950/50 hover:brightness-110' : 'bg-gradient-to-r from-[#141229] via-[#3B10E6] to-[#D81B9E] text-white border-indigo-300 shadow-indigo-200 hover:brightness-110'}`}>
              {darkMode ? <Sun className="w-4 h-4 text-amber-200 transition-transform group-hover:rotate-45" /> : <Moon className="w-4 h-4 text-indigo-200 transition-transform group-hover:-rotate-12" />}
              <span>amor fati</span>
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-2">
          <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navGroups.map(group => {
              const GroupIcon = group.icon;
              const isActiveGroup = group.items.some(i => i.id === activeTab);
              
              return (
                <div key={group.label} className="relative group">
                  <button className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${isActiveGroup ? 'bg-gradient-to-r from-[#5A28FF] via-[#D81B9E] to-[#FF6B6B] text-white shadow-md' : darkMode ? 'text-indigo-200/80 hover:bg-indigo-950/70 hover:text-white' : 'text-slate-600 hover:bg-stone-200/70 hover:text-slate-900'}`}>
                    <GroupIcon className={`w-4 h-4 ${isActiveGroup ? 'text-amber-200' : 'text-pink-500'}`} /> {group.label}
                  </button>
                  
                  {/* Dropdown Menu Block */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className={`w-64 rounded-2xl border shadow-xl p-2 flex flex-col gap-1 ${darkMode ? 'bg-[#130F26]/95 border-indigo-500/20 backdrop-blur-xl' : 'bg-white border-stone-200 backdrop-blur-xl shadow-stone-200/50'}`}>
                      {group.items.map(item => {
                        const ItemIcon = item.icon;
                        const isItemActive = activeTab === item.id;
                        return (
                          <button 
                            key={item.id} 
                            onClick={() => setActiveTab(item.id)} 
                            className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-all ${isItemActive ? (darkMode ? 'bg-indigo-500/20 text-white' : 'bg-pink-50 text-slate-900') : (darkMode ? 'hover:bg-indigo-500/10 text-indigo-100/80 hover:text-white' : 'hover:bg-stone-100 text-slate-600 hover:text-slate-900')}`}
                          >
                            <div className={`mt-0.5 shrink-0 rounded-lg p-1.5 ${isItemActive ? 'bg-gradient-to-br from-[#5A28FF] to-[#FF176B] text-white shadow-sm' : (darkMode ? 'bg-indigo-950/50 text-pink-400' : 'bg-stone-100 text-pink-500')}`}>
                               <ItemIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{item.label}</div>
                              <div className={`text-[10px] leading-snug mt-0.5 ${darkMode ? 'text-indigo-300/60' : 'text-slate-500'}`}>{item.description}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'sanctuary' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* NEW: Dashboard Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Full Width / Prominent Weekly Check-in */}
              <div onClick={() => setActiveTab('checkin')} className={`cursor-pointer col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl p-6 border transition-all hover:-translate-y-1 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${themeSurface}`}>
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5A28FF] to-[#FF176B] text-white flex items-center justify-center shrink-0 shadow-lg"><CheckCircle2 className="w-7 h-7" /></div>
                    <div>
                      <h3 className="text-xl font-serif font-bold">Weekly Check-In</h3>
                      <p className={`text-sm mt-1 max-w-2xl ${themeMutedText}`}>Reflect on 20 core principles to calculate your Relationship Harmony Score. Achieve 70%+ to unlock the timestamped Ruby Seal and tailored book prescriptions.</p>
                    </div>
                 </div>
                 <span className="shrink-0 px-5 py-2.5 rounded-full bg-pink-500/10 text-pink-500 font-semibold text-sm flex items-center gap-2">Begin Reflection <ArrowRight className="w-4 h-4" /></span>
              </div>

              {/* Quotes Teaser */}
              <div onClick={() => setActiveTab('quotes')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><BookOpen className="w-5 h-5 text-amber-500" /><span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">Quotes & Library</span></div>
                  <p className={`text-sm font-serif italic leading-relaxed ${darkMode ? 'text-amber-100/90' : 'text-slate-700'}`}>"True empathy means stepping into your partner's internal world and validating their feelings..."</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-amber-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore Library <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>

              {/* Advice Teaser */}
              <div onClick={() => setActiveTab('fivews')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><Compass className="w-5 h-5 text-indigo-400" /><span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Advice</span></div>
                  <p className={`text-sm font-medium leading-relaxed ${themeMutedText}`}>Are you communicating your needs openly, or expecting mind-reading? Compare the Top 10 Dos & Don'ts.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read Advice <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>

              {/* Behaviour Quiz Teaser */}
              <div onClick={() => setActiveTab('quiz')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><Activity className="w-5 h-5 text-sky-400" /><span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">Behaviour Quiz</span></div>
                  <p className={`text-sm font-medium leading-relaxed ${themeMutedText}`}>Diagnose your relationship's current state and get prioritized book prescriptions for lagging areas.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Take Quiz <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>

              {/* Rubies Teaser */}
              <div onClick={() => setActiveTab('flags')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <RadiantGreenRubyIcon size={20} />
                      <FracturedBlackRubyIcon size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Rubies</span>
                  </div>
                  <p className={`text-sm font-medium leading-relaxed ${themeMutedText}`}>Trait: Transactional Attitudes. Is keeping a 'tit-for-tat' scoreboard a Fractured Black Ruby or Radiant Green Ruby?</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Swipe Rubies <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>

              {/* Emotion Atlas Teaser */}
              <div onClick={() => setActiveTab('emotions')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-fuchsia-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><Layers className="w-5 h-5 text-fuchsia-400" /><span className="text-[10px] uppercase font-bold text-fuchsia-400 tracking-wider">Emotion Atlas</span></div>
                  <p className={`text-sm font-medium leading-relaxed ${themeMutedText}`}>#02 Disgust: Triggered by emotional unavailability. See how 22 emotions shift masculine & feminine polarity.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-fuchsia-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">View Emotions <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>

              {/* Lexicon of Love Teaser */}
              <div onClick={() => setActiveTab('lexicon')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><Waves className="w-5 h-5 text-teal-400" /><span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">Lexicon of Love</span></div>
                  <p className={`text-sm font-medium leading-relaxed ${themeMutedText}`}>Ya'aburnee (Arabic): The hope that you will outlive your loved one. Discover 120 untranslatable words.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Learn Terms <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>

              {/* Emotional Persona Teaser */}
              <div onClick={() => setActiveTab('persona')} className={`group cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg ${themeSurface} flex flex-col justify-between h-full lg:col-span-2`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between"><UserCircle className="w-5 h-5 text-cyan-400" /><span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Emotional Persona</span></div>
                  <p className={`text-sm font-medium leading-relaxed ${themeMutedText}`}>Do you react with Passion, Vigilance, Empathy, Purity, or Joy? Complete the 15-question archetype quiz.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-500/10 text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Find Archetype <ArrowRight className="w-3.5 h-3.5" /></div>
              </div>
            </div>

            <div className={`rounded-[2.25rem] border p-6 sm:p-9 shadow-xl transition-all duration-500 mt-4 ${darkMode ? 'bg-[#130F26] border-indigo-500/30' : 'bg-white border-stone-200'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-indigo-500/15">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-pink-500">Books</span>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-400">{REFERENCE_BOOKS.length} Curated Volumes</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">Discover Insights</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {REFERENCE_BOOKS.map((book, idx) => {
                  const IconComponent = book.icon || BookOpen;
                  return (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedTableBook(book)} 
                      className={`group relative text-center aspect-[2/3] rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl ${
                        darkMode 
                          ? 'bg-[#14102C]/60 border-indigo-500/25 hover:border-pink-500/50 text-stone-100' 
                          : 'bg-white border-stone-200 hover:border-pink-400 text-slate-900'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full pt-2">
                        <IconComponent 
                          className={`w-12 h-12 transition-all duration-500 ${
                            darkMode 
                              ? 'text-indigo-400/30 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_15px_rgba(244,114,182,0.8)]' 
                              : 'text-slate-300 group-hover:text-pink-500 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]'
                          }`} 
                          strokeWidth={1.5} 
                        />
                      </div>
                      
                      <div className="relative z-10 space-y-1.5 mt-4">
                        <h4 className={`font-serif font-bold text-xs sm:text-sm leading-snug line-clamp-3 ${darkMode ? 'text-stone-200' : 'text-slate-800'}`}>
                          {book.title}
                        </h4>
                        <p className={`text-[9px] uppercase tracking-wider font-semibold ${darkMode ? 'text-indigo-300/60' : 'text-slate-500'}`}>
                          {book.author}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedTableBook && (
              <div onClick={() => setSelectedTableBook(null)} className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
                <div onClick={e => e.stopPropagation()} className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${darkMode ? 'bg-[#1A1245] border-indigo-500/40 text-stone-100' : 'bg-white border-stone-200 text-slate-900'}`}>
                  <button onClick={() => setSelectedTableBook(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition"><X className="w-5 h-5" /></button>
                  <div className="space-y-4">
                    <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-400">{selectedTableBook.notebook}</span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">{selectedTableBook.title} ({selectedTableBook.year})</h3>
                    <p className={`text-sm font-medium ${themeMutedText}`}>By {selectedTableBook.author}</p>
                    <div className={`p-4 rounded-2xl border text-sm leading-relaxed ${themeSubtleCard}`}>{selectedTableBook.summary}</div>
                    <div className="pt-4 border-t border-indigo-500/15">
                      <p className="text-sm font-semibold text-amber-500">Core Insight:</p>
                      <p className={`text-sm leading-relaxed mt-1 ${themeMutedText}`}>{selectedTableBook.takeaway}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'checkin' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${themeSurface}`}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /> Weekly Spouse & Partnership Reflection</div>
                <h2 className="text-2xl sm:text-3xl font-serif">Weekly Check-In</h2>
                <p className={`text-sm max-w-2xl ${themeMutedText}`}>Rate each of the 20 core relationship principles from 1 (Needs Nurturing) to 5 (Thriving). Achieve a Harmony Score of <strong>70% or higher</strong> to unlock the timestamped <strong>Ruby Gemstone Seal</strong>, plus tailored book recommendations for any lagging areas.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button onClick={handleDemoFillCheckInHigh} className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:brightness-110 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"><Gem className="w-3.5 h-3.5" /> Demo High Score (82%)</button>
                <button onClick={handleDemoFillCheckInGrowth} className={`px-4 py-2 rounded-full text-xs font-semibold transition flex items-center gap-1.5 border ${darkMode ? 'bg-indigo-950/90 text-amber-300 border-amber-400/30 hover:bg-indigo-900' : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'}`}><BookOpen className="w-3.5 h-3.5" /> Demo Growth Score (58%)</button>
                <button onClick={handleResetCheckIn} className={`px-3.5 py-2 rounded-full text-xs font-medium transition flex items-center gap-1.5 border ${darkMode ? 'bg-white/5 text-stone-300 border-white/10 hover:bg-white/10' : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'}`}><RotateCcw className="w-3.5 h-3.5" /> Reset</button>
              </div>
            </div>

            <div className={`rounded-2xl p-4 border flex flex-col sm:flex-row items-center justify-between gap-4 ${themeSurface}`}>
              <div className="w-full sm:w-2/3 space-y-1.5">
                <div className={`flex justify-between text-xs font-medium ${themeMutedText}`}><span>Reflection Progress: {answeredCount} of 20 Questions Answered</span><span>{Math.round((answeredCount / 20) * 100)}%</span></div>
                <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-indigo-950' : 'bg-stone-200'}`}>
                  <div className="h-full bg-gradient-to-r from-[#5A28FF] via-[#FF176B] to-[#FF9E6D] transition-all duration-500" style={{ width: `${(answeredCount / 20) * 100}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button onClick={() => setCheckInSubmitted(false)} className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${!checkInSubmitted ? 'bg-gradient-to-r from-[#5A28FF] to-[#D81B9E] text-white' : darkMode ? 'bg-white/5 text-stone-300 hover:bg-white/10' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>Questions ({answeredCount}/20)</button>
                <button onClick={() => { setCheckInGradeTimestamp(new Date()); setCheckInSubmitted(true); }} disabled={answeredCount === 0} className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${checkInSubmitted ? 'bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-sm' : answeredCount > 0 ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500/30' : 'opacity-40 cursor-not-allowed bg-stone-500/10'}`}>Grade & View Analysis <ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            {!checkInSubmitted ? (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3].map(stepIdx => (
                      <button key={stepIdx} onClick={() => setCheckInStep(stepIdx)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${checkInStep === stepIdx ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-sm' : darkMode ? 'bg-[#14123B] text-indigo-200 border border-indigo-500/30' : 'bg-white text-slate-600 border border-stone-200'}`}>Questions {stepIdx * 5 + 1}–{stepIdx * 5 + 5}</button>
                    ))}
                  </div>
                  <span className={`text-xs ${themeMutedText}`}>1 = Needs Nurturing • 3 = Steady • 5 = Thriving</span>
                </div>
                <div className="space-y-4">
                  {TOP_20_ADVICE.slice(checkInStep * 5, checkInStep * 5 + 5).map(item => {
                    const currentRating = checkInAnswers[item.rank];
                    return (
                      <div key={item.rank} className={`rounded-3xl p-6 border transition-all space-y-4 ${themeSurface}`}>
                        <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400">Priority #{item.rank} • {item.category}</span><span className="text-xs font-semibold text-pink-500">Principle: {item.title}</span></div>
                        <p className="text-base sm:text-lg font-medium leading-relaxed">{item.checkInQuestion}</p>
                        <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-1">
                          {[{ val: 1, label: '1 • Struggling' }, { val: 2, label: '2 • Needs Care' }, { val: 3, label: '3 • Balanced' }, { val: 4, label: '4 • Strong' }, { val: 5, label: '5 • Thriving' }].map(opt => {
                            const selected = currentRating === opt.val;
                            return (
                              <button key={opt.val} onClick={() => handleRateQuestion(item.rank, opt.val)} className={`py-2.5 px-2 rounded-2xl text-xs font-semibold border transition-all flex flex-col items-center justify-center gap-1 ${selected ? opt.val >= 4 ? 'bg-gradient-to-r from-[#5A28FF] to-[#1B75FF] text-white border-indigo-400 shadow-md' : opt.val === 3 ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-300 shadow-md' : 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-400 shadow-md' : darkMode ? 'bg-[#191645]/90 text-indigo-200 border-indigo-500/25 hover:bg-indigo-900/60' : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'}`}>
                                <span className="text-sm font-bold">{opt.val}</span><span className="hidden sm:inline text-[11px] opacity-90">{opt.label.split('• ')[1]}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <button onClick={() => setCheckInStep(prev => Math.max(0, prev - 1))} disabled={checkInStep === 0} className={`px-5 py-2.5 rounded-full border text-xs font-semibold disabled:opacity-40 flex items-center gap-2 ${themeSurface}`}><ArrowLeft className="w-4 h-4" /> Previous 5</button>
                  {checkInStep < 3 ? <button onClick={() => setCheckInStep(prev => Math.min(3, prev + 1))} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#D81B9E] text-white text-xs font-semibold flex items-center gap-2 shadow-md">Next 5 Questions <ArrowRight className="w-4 h-4" /></button> : <button onClick={() => { setCheckInGradeTimestamp(new Date()); setCheckInSubmitted(true); }} disabled={answeredCount === 0} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md disabled:opacity-40">Complete & Grade Check-In <Sparkles className="w-4 h-4" /></button>}
                </div>
              </div>
            ) : (
              /* Check-In Analysis Report View */
              checkInAnalysis && (
                <div className="space-y-8 animate-fadeIn">
                  <TierCommemorativeGraphic
                    score={checkInAnalysis.percentage}
                    tier={checkInAnalysis.tier}
                    timestamp={checkInGradeTimestamp}
                    darkMode={darkMode}
                    sourceLabel="20-Question Weekly Spouse Harmony Check-In"
                  />

                  {/* Two Column Breakdown: What is Going Great vs What Needs Improvement */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className={`rounded-3xl p-6 border space-y-4 ${themeSurface}`}>
                      <div className="flex items-center justify-between border-b border-indigo-500/15 pb-4">
                        <div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center"><Award className="w-5 h-5" /></div><div><h4 className="font-semibold">What is Going Great</h4><p className={`text-xs ${themeMutedText}`}>Pillars rated 4 or 5 this week</p></div></div><span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400">{checkInAnalysis.goingGreat.length} Pillars</span>
                      </div>
                      <div className="space-y-3 max-h-[26rem] overflow-y-auto pr-1">
                        {checkInAnalysis.goingGreat.map(item => (
                          <div key={item.rank} className={`p-4 rounded-2xl border space-y-1.5 ${themeSubtleCard}`}>
                            <div className="flex items-center justify-between"><span className="text-xs font-semibold text-emerald-400">Priority #{item.rank}: {item.title}</span><span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">{item.score}/5</span></div>
                            <p className={`text-xs leading-relaxed ${themeMutedText}`}>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`rounded-3xl p-6 border space-y-4 ${themeSurface}`}>
                      <div className="flex items-center justify-between border-b border-indigo-500/15 pb-4">
                        <div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center"><Sparkles className="w-5 h-5" /></div><div><h4 className="font-semibold">What Needs Improvement</h4><p className={`text-xs ${themeMutedText}`}>Ordered by Priority Importance</p></div></div><span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/15 text-rose-400">{checkInAnalysis.needsImprovement.length} Pillars</span>
                      </div>
                      <div className="space-y-3 max-h-[26rem] overflow-y-auto pr-1">
                        {checkInAnalysis.needsImprovement.map(item => (
                          <div key={item.rank} className={`p-4 rounded-2xl border space-y-2 ${themeSubtleCard}`}>
                            <div className="flex items-center justify-between"><span className="text-xs font-semibold text-rose-400">Priority #{item.rank}: {item.title}</span><span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300">{item.score}/5</span></div>
                            <p className="text-xs leading-relaxed"><strong>Actionable Focus:</strong> {item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border space-y-6 ${themeSurface}`}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full"><BookOpen className="w-3.5 h-3.5" /> Sentiments & Complete Reference Search</div>
                <h2 className="text-2xl sm:text-3xl font-serif">Quotes & Library</h2>
                <p className={`text-sm max-w-3xl ${themeMutedText}`}>Search across curated quotes embodying the document's core sentiment, or search directly inside the reference material itself.</p>
              </div>
              <div className="relative">
                <Search className="w-5 h-5 text-pink-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search for 'cave', 'Gottman', 'boundaries', 'attachment', 'contempt'..." className={`w-full pl-12 pr-24 py-3.5 rounded-2xl border text-sm focus:outline-none focus:border-pink-500 transition ${darkMode ? 'bg-[#0B0926] border-indigo-500/30 text-white placeholder-indigo-300/40' : 'bg-stone-50 border-stone-200 text-slate-900 placeholder-stone-400'}`} />
                {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-400">Clear</button>}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[{ id: 'all', label: `All Material (${allSearchableItems.length})` }, { id: 'quotes', label: `Quotes & Sentiments (${CURATED_QUOTES.length})` }, { id: 'principles', label: 'Top 20 Advice (20)' }, { id: 'emotions', label: '22 Emotions (22)' }, { id: 'male', label: 'Male Dos & Don\'ts (10)' }, { id: 'female', label: 'Female Dos & Don\'ts (10)' }, { id: 'mistakes', label: 'Common Mistakes (5)' }, { id: 'books', label: `30 Reference Books (${REFERENCE_BOOKS.length})` }].map(cat => (
                  <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${selectedCategory === cat.id ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-sm' : darkMode ? 'bg-white/5 text-indigo-200 hover:bg-white/10' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>{cat.label}</button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className={`flex items-center justify-between text-xs px-1 ${themeMutedText}`}><span>Showing {filteredSearchItems.length} matching wisdom entries</span>{searchQuery && <span>Filtered by: "{searchQuery}"</span>}</div>
              {filteredSearchItems.length === 0 ? (
                <div className={`rounded-3xl p-12 text-center border space-y-3 ${themeSurface}`}><p className="text-base">No entries matched "{searchQuery}".</p><button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs font-semibold">Reset Filters</button></div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSearchItems.map(item => (
                    <div key={item.id} className={`rounded-3xl p-6 border transition-all flex flex-col justify-between gap-3 ${themeSurface}`}>
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-400">{item.badge}</span>
                          {item.category === 'quotes' && (
                            <button onClick={() => setSavedQuotes(prev => prev.includes(item.id) ? prev.filter(i => i !== item.id) : [...prev, item.id])} className="text-amber-400 hover:scale-110 transition" title="Save Reflection">
                              <Bookmark className={`w-4 h-4 ${savedQuotes.includes(item.id) ? 'fill-amber-400' : ''}`} />
                            </button>
                          )}
                        </div>
                        <h3 className={`text-base font-semibold leading-snug ${item.category === 'quotes' ? 'font-serif italic text-lg' : ''}`}>{item.title}</h3>
                        <p className={`text-xs sm:text-sm leading-relaxed ${themeMutedText}`}>{item.subtitle}</p>
                      </div>
                      <div className="pt-3 border-t border-indigo-500/15 text-xs text-amber-400 font-medium leading-relaxed">{item.detail}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'fivews' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${themeSurface}`}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full"><Compass className="w-3.5 h-3.5" /> Perspective Compass</div>
                <h2 className="text-2xl sm:text-3xl font-serif">Advice</h2>
                <p className={`text-sm max-w-2xl ${themeMutedText}`}>Switch between the Female Perspective, the Male Perspective, and the Unified Relationship Perspective, or compare the Top 10 Dos & Don'ts side by side.</p>
              </div>
              <button onClick={() => setShowDosDontsModal(!showDosDontsModal)} className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs font-semibold transition flex items-center gap-2 shadow-md"><Scale className="w-4 h-4 text-amber-200" /> {showDosDontsModal ? 'Back to 5 W\'s & H Cards' : 'View Top 10 Dos & Don\'ts Table'}</button>
            </div>
            {!showDosDontsModal ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[{ id: 'female', title: 'The Female Perspective', sub: 'Choosing a Partner' }, { id: 'male', title: 'The Male Perspective', sub: 'Generating Attraction' }, { id: 'relationship', title: 'The Relationship Perspective', sub: 'Maintaining & Growing' }].map(tab => {
                    const active = selectedPerspective === tab.id;
                    return (
                      <button key={tab.id} onClick={() => setSelectedPerspective(tab.id)} className={`p-5 rounded-3xl border text-left transition-all ${active ? 'bg-gradient-to-r from-[#4618F2] via-[#D81B9E] to-[#FF6B6B] text-white border-transparent shadow-lg' : themeSurface}`}><div className="text-xs opacity-80 font-medium">{tab.sub}</div><div className="text-base font-semibold mt-0.5">{tab.title}</div></button>
                    );
                  })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {FIVE_WS_DATA[selectedPerspective].items.map(card => (
                    <div key={card.type} className={`rounded-3xl p-6 border flex flex-col justify-between space-y-4 ${themeSurface}`}>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/15 text-pink-400">{card.type}</span><HelpCircle className="w-4 h-4 text-indigo-400" /></div>
                        <h4 className="text-lg font-semibold">{card.question}</h4>
                        <ul className="space-y-2.5 pt-1">
                          {card.points.map((pt, i) => (<li key={i} className={`text-xs sm:text-sm leading-relaxed flex items-start gap-2 ${themeMutedText}`}><span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" /><span>{pt}</span></li>))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 flex-wrap">
                  <button onClick={() => setDosDontsGender('male')} className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${dosDontsGender === 'male' ? 'bg-gradient-to-r from-[#4618F2] to-[#1B75FF] text-white shadow-md' : themeSurface}`}>Top 10 Dos & Don'ts: The Male Perspective</button>
                  <button onClick={() => setDosDontsGender('female')} className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${dosDontsGender === 'female' ? 'bg-gradient-to-r from-[#D81B9E] to-[#FF6B6B] text-white shadow-md' : themeSurface}`}>Top 10 Dos & Don'ts: The Female Perspective</button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {(dosDontsGender === 'male' ? MALE_DOS_DONTS : FEMALE_DOS_DONTS).map((row, idx) => (
                    <div key={idx} className={`rounded-3xl p-5 border grid grid-cols-1 md:grid-cols-2 gap-4 ${themeSurface}`}>
                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-1"><div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm"><Check className="w-4 h-4 shrink-0" /><span>#{idx + 1} {row.doTitle}</span></div><p className={`text-xs sm:text-sm pl-6 leading-relaxed ${themeMutedText}`}>{row.doDesc}</p></div>
                      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/25 space-y-1"><div className="flex items-center gap-2 text-rose-400 font-semibold text-sm"><X className="w-4 h-4 shrink-0" /><span>#{idx + 1} {row.dontTitle}</span></div><p className={`text-xs sm:text-sm pl-6 leading-relaxed ${themeMutedText}`}>{row.dontDesc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${themeSurface}`}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full"><Activity className="w-3.5 h-3.5" /> Behavioural Diagnostic, Books & Ruby Score</div>
                <h2 className="text-2xl sm:text-3xl font-serif">Behaviour Quiz</h2>
                <p className={`text-sm max-w-2xl ${themeMutedText}`}>Reflect on how you and your partner have interacted recently. Grading calculates your Harmony Score and awards the Ruby Seal at ≥70%.</p>
              </div>
              {Object.keys(quizAnswers).length > 0 && (
                <button onClick={() => { setQuizAnswers({}); setQuizCompleted(false); }} className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5 shrink-0 ${themeSubtleCard}`}><RotateCcw className="w-3.5 h-3.5" /> Retake Quiz</button>
              )}
            </div>
            {!quizCompleted ? (
              <div className="space-y-5">
                {BEHAVIOUR_QUIZ_QUESTIONS.map((q, qIdx) => (
                  <div key={q.id} className={`rounded-3xl p-6 border space-y-4 ${themeSurface}`}>
                    <div className="flex items-center justify-between"><span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full">Scenario {qIdx + 1} of {BEHAVIOUR_QUIZ_QUESTIONS.length} • {q.dimension}</span></div>
                    <h3 className="text-base sm:text-lg font-semibold">{q.scenario}</h3>
                    <div className="space-y-2.5">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = quizAnswers[q.id] === oIdx;
                        return (
                          <button key={oIdx} onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: oIdx }))} className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${isSelected ? 'bg-gradient-to-r from-[#4618F2] to-[#D81B9E] text-white border-pink-400 shadow-md' : themeSubtleCard}`}>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? 'border-amber-300 bg-amber-300 text-indigo-950' : 'border-indigo-400/50'}`}>{isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}</div><span className="leading-relaxed">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="flex justify-end pt-2">
                  <button onClick={() => { setQuizGradeTimestamp(new Date()); setQuizCompleted(true); }} disabled={Object.keys(quizAnswers).length === 0} className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5A28FF] via-[#FF176B] to-[#FF9E6D] disabled:opacity-40 text-white font-semibold text-sm shadow-lg transition flex items-center gap-2">Grade Behaviour & Prescribe Books <Sparkles className="w-4 h-4" /></button>
                </div>
              </div>
            ) : (
              quizResults && (
                <div className="space-y-8 animate-fadeIn">
                  <TierCommemorativeGraphic
                    score={quizResults.percentage}
                    tier={quizResults.tier}
                    timestamp={quizGradeTimestamp}
                    darkMode={darkMode}
                    sourceLabel="Recent Relationship Behaviour Diagnostic"
                  />
                  {quizResults.targetedAdvice.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-400" /> Targeted Advice for Lagging Areas</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quizResults.targetedAdvice.map((adv, idx) => (
                          <div key={adv.rank} className={`rounded-3xl p-6 border space-y-2.5 ${themeSurface}`}>
                            <div className="flex items-center justify-between"><span className="px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 text-xs font-bold">Importance Rank #{adv.rank} of 20</span><span className={`text-xs ${themeMutedText}`}>Focus Priority #{idx + 1}</span></div>
                            <h5 className="text-base font-semibold">{adv.title}</h5>
                            <p className={`text-xs sm:text-sm leading-relaxed ${themeMutedText}`}>{adv.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {quizResults.recommendedBooks.length > 0 && (
                    <div className={`rounded-3xl p-6 sm:p-8 border space-y-5 ${themeSurface}`}>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-pink-500 flex items-center gap-1.5"><Library className="w-4 h-4" /> Targeted Literature</span>
                        <h4 className="text-xl font-serif mt-1">Recommended Books & Texts</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quizResults.recommendedBooks.map((book, idx) => (
                          <div key={idx} className={`rounded-2xl p-5 border flex flex-col justify-between gap-3 ${themeSubtleCard}`}>
                            <div className="space-y-2"><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">{book.notebook}</span><h5 className="font-semibold text-base">{book.title} ({book.year})</h5><p className={`text-xs ${themeMutedText}`}>By {book.author}</p><p className="text-xs leading-relaxed"><strong className="text-amber-400">Core Focus:</strong> {book.takeaway}</p></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}

        {activeTab === 'flags' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${themeSurface}`}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full"><Gem className="w-3.5 h-3.5" /> Interactive Ruby Behavioral Swipe Deck</div>
                <h2 className="text-2xl sm:text-3xl font-serif">Rubies</h2>
                <p className={`text-sm max-w-2xl ${themeMutedText}`}>Swipe <strong>Right</strong> if your partner exhibits this behavior or <strong>Left</strong> if they do not. Ruby immediately reveals whether the behavior is a fractured <strong>Black Ruby</strong> (Risky) or a radiant <strong>Green Ruby</strong> (Recommended).</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {['All', 'Women', 'Men'].map(g => (
                  <button key={g} onClick={() => resetFlagDeck(g)} className={`px-4 py-2 rounded-full text-xs font-semibold transition ${flagGenderFilter === g ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-sm' : themeSubtleCard}`}>{g === 'All' ? 'All 28 Rubies' : `${g}'s Rubies`}</button>
                ))}
                <button onClick={() => resetFlagDeck(flagGenderFilter)} className={`p-2 rounded-full border ${themeSubtleCard}`} title="Restart Deck"><RotateCcw className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col items-center">
                {currentFlagCard ? (
                  <div className="w-full max-w-lg space-y-5">
                    <div className={`flex items-center justify-between text-xs px-2 ${themeMutedText}`}><span>Card {currentCardIndex + 1} of {filteredFlagDeck.length} ({currentFlagCard.gender})</span><button onClick={() => setFlagMode(prev => prev === 'partner' ? 'intuition' : 'partner')} className="text-pink-400 underline font-semibold">Mode: {flagMode === 'partner' ? 'Partner Assessment' : 'Test Intuition'}</button></div>
                    <div className={`relative rounded-[2rem] p-8 sm:p-10 border-2 min-h-[20rem] flex flex-col justify-between text-center transition-all ${themeSurface}`}>
                      <div className="flex items-center justify-between"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400">{currentFlagCard.gender} Trait Indicator</span><span className={`text-xs ${themeMutedText}`}>Swipe Left or Right</span></div>
                      <div className="my-6 space-y-4"><p className={`text-xs uppercase tracking-widest font-semibold ${themeMutedText}`}>{flagMode === 'partner' ? 'Does your partner do this?' : 'Is this a Black Ruby or Green Ruby?'}</p><h3 className="text-xl sm:text-2xl font-serif leading-relaxed">"{currentFlagCard.description}"</h3></div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-indigo-500/15">
                        <button onClick={() => handleSwipeCard('left')} className={`py-3.5 px-4 rounded-2xl border font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${themeSubtleCard} hover:border-slate-400`}>
                          <ArrowLeft className="w-4 h-4" />
                          {flagMode === 'partner' ? "No, They Don't" : <span className="flex items-center gap-1.5"><FracturedBlackRubyIcon size={18} /> Black Ruby</span>}
                        </button>
                        <button onClick={() => handleSwipeCard('right')} className="py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:brightness-110 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md">
                          {flagMode === 'partner' ? "Yes, They Do" : <span className="flex items-center gap-1.5"><RadiantGreenRubyIcon size={18} /> Green Ruby</span>}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full rounded-3xl p-8 border text-center space-y-5 ${themeSurface}`}><div className="w-14 h-14 rounded-2xl bg-pink-500/15 text-pink-400 flex items-center justify-center mx-auto"><Award className="w-7 h-7" /></div><h3 className="text-2xl font-serif">You've Swiped Through All {filteredFlagDeck.length} Rubies!</h3><button onClick={() => resetFlagDeck(flagGenderFilter)} className="px-6 py-3 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs font-semibold transition">Swipe Again</button></div>
                )}
              </div>
              <div className="lg:col-span-5 space-y-5">
                {lastSwipeReveal ? (
                  <div className={`rounded-3xl p-6 border-2 shadow-xl transition-all space-y-4 ${lastSwipeReveal.card.flagType === 'green' ? 'bg-emerald-500/15 border-emerald-400/50 text-emerald-300' : darkMode ? 'bg-slate-900/90 border-indigo-400/40 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {lastSwipeReveal.card.flagType === 'green' ? (
                          <RadiantGreenRubyIcon size={58} />
                        ) : (
                          <FracturedBlackRubyIcon size={58} />
                        )}
                        <div>
                          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${lastSwipeReveal.card.flagType === 'green' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-white border border-indigo-400/40'}`}>
                            {lastSwipeReveal.card.flagType === 'green' ? 'GREEN RUBY • RECOMMENDED' : 'BLACK RUBY • RISKY'}
                          </span>
                          <div className="text-xs font-medium opacity-80 mt-1">
                            {lastSwipeReveal.mode === 'partner'
                              ? lastSwipeReveal.partnerHasTrait
                                ? 'You swiped: Partner DOES this'
                                : 'You swiped: Partner DOES NOT do this'
                              : lastSwipeReveal.guessedCorrectly
                              ? '✓ Spot On Intuition!'
                              : '✕ Surprising Insight'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Official Trait: {lastSwipeReveal.card.trait} ({lastSwipeReveal.card.gender})</h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-stone-200' : 'text-slate-700'}`}>"{lastSwipeReveal.card.description}"</p>
                  </div>
                ) : (
                  <div className={`rounded-3xl p-6 border text-center space-y-3 ${themeSurface}`}>
                    <div className="flex items-center justify-center gap-4">
                      <RadiantGreenRubyIcon size={48} />
                      <FracturedBlackRubyIcon size={48} />
                    </div>
                    <h4 className="text-sm font-semibold">Instant Ruby Reveal</h4>
                    <p className={`text-xs ${themeMutedText}`}>Swipe on any card to reveal whether the behavior is a Radiant Green Ruby or a Fractured Black Ruby.</p>
                  </div>
                )}

                <div className={`rounded-3xl p-6 border space-y-4 ${themeSurface}`}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">
                      Swiped Ruby History ({swipeHistory.length})
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold flex items-center gap-1.5">
                        <RadiantGreenRubyIcon size={14} /> {swipeHistory.filter(h => h.partnerHasTrait && h.card.flagType === 'green').length} Green
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-500/20 text-indigo-300 font-semibold flex items-center gap-1.5">
                        <FracturedBlackRubyIcon size={14} /> {swipeHistory.filter(h => h.partnerHasTrait && h.card.flagType === 'red').length} Black
                      </span>
                    </div>
                  </div>

                  {swipeHistory.length === 0 ? (
                    <p className={`text-xs py-4 text-center ${themeMutedText}`}>
                      Your swiped rubies will appear here in real time.
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {swipeHistory.map((item, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-2xl border flex items-center justify-between gap-3 text-xs ${themeSubtleCard}`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="shrink-0">
                              {item.card.flagType === 'green' ? (
                                <RadiantGreenRubyIcon size={24} />
                              ) : (
                                <FracturedBlackRubyIcon size={24} />
                              )}
                            </div>
                            <div className="min-w-0">
                              <span className="font-semibold block truncate">
                                {item.card.trait}
                              </span>
                              <p className={`line-clamp-1 ${themeMutedText}`}>{item.card.description}</p>
                            </div>
                          </div>
                          <span
                            className={`shrink-0 px-2.5 py-1 rounded-full font-semibold ${
                              item.partnerHasTrait
                                ? item.card.flagType === 'green'
                                  ? 'bg-emerald-500/20 text-emerald-300'
                                  : 'bg-slate-800 text-indigo-300 border border-indigo-400/30'
                                : 'bg-white/10 text-stone-400'
                            }`}
                          >
                            {item.partnerHasTrait ? 'Partner Does This' : 'Not Present'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'emotions' && (
          <div className="space-y-10 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border space-y-6 ${themeSurface}`}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full"><Layers className="w-3.5 h-3.5" /> Three Separate Radial Fanning Card Decks</div>
                  <h2 className="text-2xl sm:text-3xl font-serif">Emotion Atlas</h2>
                  <p className={`text-sm max-w-3xl ${themeMutedText}`}>Explore all 22 emotions organized into <strong>three separate radial fanning card decks</strong>. Click any card to bring it front and centre.</p>
                </div>
                <div className="relative w-full lg:w-72 shrink-0">
                  <Search className="w-4 h-4 text-pink-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input type="text" value={emotionSearchQuery} onChange={e => setEmotionSearchQuery(e.target.value)} placeholder="Filter emotions..." className={`w-full pl-10 pr-16 py-2.5 rounded-2xl border text-xs sm:text-sm focus:outline-none focus:border-pink-500 transition ${darkMode ? 'bg-[#0A0818] border-indigo-500/30 text-white placeholder-indigo-300/40' : 'bg-[#F8F6F2] border-stone-200 text-slate-900 placeholder-stone-400'}`} />
                  {emotionSearchQuery && <button onClick={() => setEmotionSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 font-semibold">Clear</button>}
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-indigo-500/15">
                <div className="flex flex-wrap items-center gap-2">
                  <button onClick={() => setEmotionDeckViewMode('ALL_THREE')} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${emotionDeckViewMode === 'ALL_THREE' ? 'bg-gradient-to-r from-[#E3182D] via-[#5A28FF] to-[#FF9E6D] text-white shadow-md' : themeSubtleCard}`}><Layers className="w-3.5 h-3.5" /> View All 3 Decks (22 Cards)</button>
                  {THREE_EMOTION_DECK_CONFIGS.map(deckCfg => {
                    const isFocused = emotionDeckViewMode === deckCfg.deckId;
                    return (
                      <button key={deckCfg.deckId} onClick={() => setEmotionDeckViewMode(deckCfg.deckId)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${isFocused ? `bg-gradient-to-r ${deckCfg.activeGrad} text-white shadow-md` : themeSubtleCard}`}><span className="font-mono text-[11px] opacity-85">{deckCfg.deckNumber}:</span><span>{deckCfg.title.replace('Part I: ', '').replace('Part II: ', '').replace('Part III: ', '')}</span></button>
                    );
                  })}
                </div>
                {activeEmotionCard && <button onClick={() => setSelectedEmotionId(null)} className="px-3.5 py-1.5 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/30 text-xs font-semibold flex items-center gap-1.5 hover:bg-pink-500/25 transition"><RotateCcw className="w-3.5 h-3.5" /> Close Front & Centre View ({activeEmotionCard.name})</button>}
              </div>
            </div>
            <div className="space-y-12">
              {THREE_EMOTION_DECK_CONFIGS.filter(deckCfg => emotionDeckViewMode === 'ALL_THREE' || emotionDeckViewMode === deckCfg.deckId).map(deckCfg => {
                const deckCards = EMOTIONS_DECK.filter(em => {
                  if (em.part !== deckCfg.partKey) return false;
                  const q = emotionSearchQuery.trim().toLowerCase();
                  if (!q) return true;
                  return em.name.toLowerCase().includes(q) || em.number.includes(q) || em.facialAndBody.toLowerCase().includes(q);
                });
                return (
                  <section key={deckCfg.deckId} id={deckCfg.deckId} className={`relative rounded-[2.5rem] border overflow-hidden transition-all duration-500 p-6 sm:p-10 space-y-6 ${darkMode ? 'bg-gradient-to-b from-[#110D29] via-[#151036] to-[#0B091E] border-indigo-500/30 shadow-2xl' : 'bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F3EFEA] border-stone-200/95 shadow-xl'}`}>
                    <div style={{ background: `radial-gradient(circle at 50% 60%, ${deckCfg.glowColor}, transparent 70%)` }} className="absolute inset-0 pointer-events-none" />
                    <div className="relative z-10 flex flex-col gap-4 border-b border-indigo-500/15 pb-5">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1.5"><div className="flex flex-wrap items-center gap-2.5"><span style={{ background: `linear-gradient(135deg, ${deckCfg.gradFrom}, ${deckCfg.gradTo})` }} className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-sm">{deckCfg.deckNumber} • {deckCfg.badgeLabel}</span><span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${deckCfg.pillBg}`}>{deckCfg.cardRange}</span></div><h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight pt-1">{deckCfg.title}</h3><p className={`text-xs sm:text-sm ${themeMutedText}`}>{deckCfg.subtitle}</p></div>
                      </div>
                    </div>
                    {deckCards.length === 0 ? (
                      <div className="relative z-10 py-14 text-center space-y-2"><p className={`text-sm ${themeMutedText}`}>No emotions match "{emotionSearchQuery}".</p></div>
                    ) : (
                      <div className="relative z-10 w-full h-[23rem] sm:h-[27rem] flex items-center justify-center pt-4 pb-8 overflow-visible">
                        {deckCards.map((card, index) => {
                          const total = deckCards.length; const mid = (total - 1) / 2; const offset = index - mid;
                          const maxArcAngle = total <= 6 ? 44 : 56; const angleStep = total > 1 ? maxArcAngle / (total - 1) : 0;
                          const rotationAngle = offset * angleStep; const xSpreadStep = total <= 6 ? 62 : 52;
                          const translateX = offset * xSpreadStep; const translateY = Math.pow(Math.abs(offset), 1.75) * 6.2;
                          const isHovered = hoveredEmotionId === card.id; const isSelected = selectedEmotionId === card.id;
                          const activeLiftY = isHovered || isSelected ? translateY - 42 : translateY;
                          const scaleVal = isHovered || isSelected ? 1.13 : 1; const zIndexVal = isSelected ? 60 : isHovered ? 55 : index + 1;
                          return (
                            <button key={card.id} onClick={() => setSelectedEmotionId(card.id)} onMouseEnter={() => setHoveredEmotionId(card.id)} onMouseLeave={() => setHoveredEmotionId(null)} style={{ transform: `translateX(${translateX}px) translateY(${activeLiftY}px) rotate(${rotationAngle}deg) scale(${scaleVal})`, transformOrigin: '50% 125%', zIndex: zIndexVal }} className={`group/card absolute w-36 sm:w-44 h-56 sm:h-64 rounded-[1.5rem] p-[2px] transition-all duration-300 ease-out cursor-pointer select-none shadow-2xl ${isHovered || isSelected ? 'shadow-pink-500/45 ring-2 ring-white/50' : 'shadow-black/45'}`}>
                              <div style={{ background: `linear-gradient(145deg, ${deckCfg.gradFrom}, ${deckCfg.gradTo})` }} className="w-full h-full rounded-[1.4rem] p-3.5 flex flex-col justify-between text-left relative overflow-hidden"><div className={`absolute inset-[2px] rounded-[1.3rem] transition-colors ${darkMode ? 'bg-[#0F0C29]/94' : 'bg-[#FFFDFB]/96'}`} /><div className="relative z-10 flex items-center justify-between w-full"><span style={{ background: `linear-gradient(135deg, ${deckCfg.gradFrom}, ${deckCfg.gradTo})` }} className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full text-white shadow-sm">#{card.number}</span><span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${deckCfg.pillBg}`}>{deckCfg.badgeLabel}</span></div><div className="relative z-10 my-auto text-center space-y-2.5 px-1"><div className="mx-auto flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300"><EmotionCardCrestSVG gradFrom={deckCfg.gradFrom} gradTo={deckCfg.gradTo} badgeLabel={`${deckCfg.badgeLabel}-${card.number}`} /></div><h4 className={`text-base sm:text-lg font-serif font-bold tracking-tight leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>{card.name}</h4><span className={`block text-[10px] uppercase tracking-widest ${themeMutedText}`}>{card.shortPart}</span></div><div className="relative z-10 flex items-center justify-between pt-2 border-t border-indigo-500/15 text-[10px] font-semibold"><span style={{ color: deckCfg.gradTo }} className="truncate">Front & Centre</span><Maximize2 style={{ color: deckCfg.gradTo }} className="w-3 h-3 shrink-0 opacity-85" /></div></div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
            {activeEmotionCard && activeDeckConfig && (
              <div onClick={() => setSelectedEmotionId(null)} className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
                <div onClick={e => e.stopPropagation()} style={{ background: `linear-gradient(135deg, ${activeDeckConfig.gradFrom}, #D81B9E, ${activeDeckConfig.gradTo})` }} className="relative w-full max-w-4xl rounded-[2.25rem] p-[2.5px] shadow-2xl my-auto"><div className={`w-full rounded-[2.15rem] p-5 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-[#0C0A24]/98 text-stone-100' : 'bg-[#FFFFFF]/98 text-slate-900'}`}><div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-500/20 pb-5"><div className="flex items-center gap-4"><div style={{ background: `linear-gradient(135deg, ${activeDeckConfig.gradFrom}, ${activeDeckConfig.gradTo})` }} className="w-14 h-14 rounded-2xl text-white font-mono font-bold text-xl flex items-center justify-center shadow-lg shrink-0">#{activeEmotionCard.number}</div><div><div className="flex flex-wrap items-center gap-2"><span style={{ background: `linear-gradient(135deg, ${activeDeckConfig.gradFrom}, ${activeDeckConfig.gradTo})` }} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full text-white">{activeDeckConfig.deckNumber} • {activeDeckConfig.badgeLabel}</span></div><h3 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight mt-0.5">{activeEmotionCard.name}</h3></div></div><button onClick={() => setSelectedEmotionId(null)} style={{ background: `linear-gradient(135deg, ${activeDeckConfig.gradFrom}, ${activeDeckConfig.gradTo})` }} className="px-4 py-2 rounded-full text-white text-xs font-semibold shadow-md hover:brightness-110 transition flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> Return Card to Fan</button></div><div className="grid grid-cols-1 md:grid-cols-2 gap-5"><div className={`rounded-2xl p-5 border space-y-3.5 ${themeSubtleCard}`}><div className="flex items-center justify-between border-b border-indigo-500/15 pb-2.5"><span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5"><UserCheck className="w-4 h-4" /> Factors (Men)</span></div><div className="space-y-2.5 text-xs sm:text-sm"><div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1"><div className="font-bold text-rose-400 text-xs uppercase tracking-wider">Increase</div><p className="leading-relaxed">{activeEmotionCard.menFactors.increase}</p></div><div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1"><div className="font-bold text-emerald-400 text-xs uppercase tracking-wider">Decrease</div><p className="leading-relaxed">{activeEmotionCard.menFactors.decrease}</p></div></div></div><div className={`rounded-2xl p-5 border space-y-3.5 ${themeSubtleCard}`}><div className="flex items-center justify-between border-b border-indigo-500/15 pb-2.5"><span className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5"><Heart className="w-4 h-4" /> Factors (Women)</span></div><div className="space-y-2.5 text-xs sm:text-sm"><div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1"><div className="font-bold text-rose-400 text-xs uppercase tracking-wider">Increase</div><p className="leading-relaxed">{activeEmotionCard.womenFactors.increase}</p></div><div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1"><div className="font-bold text-emerald-400 text-xs uppercase tracking-wider">Decrease</div><p className="leading-relaxed">{activeEmotionCard.womenFactors.decrease}</p></div></div></div></div></div></div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'lexicon' && (() => {
          const activePalette = LEXICON_GRADIENT_PALETTES[lexiconPaletteIndex] || LEXICON_GRADIENT_PALETTES[0];
          const isSaved = savedLexiconIds.includes(currentLexiconTerm.id);
          const lexiconCategories = [
            { id: 'All', label: 'All 120 Terms' },
            { id: 'Global & Untranslatable Words', label: 'Global & Untranslatable (30)' },
            { id: 'Historical & Literary Concepts', label: 'Historical & Literary (22)' },
            { id: 'Unique English Words', label: 'Unique English (21)' },
            { id: 'Metaphors & Idioms', label: 'Metaphors & Idioms (24)' },
            { id: 'Famous Mythological & Historical Stories', label: 'Myth & History Stories (23)' },
            { id: 'Saved', label: `Saved (${savedLexiconIds.length})` }
          ];

          return (
            <div className="space-y-6 animate-fadeIn">
              <style>{`
                @keyframes lexiconWaveSweep { 0% { transform: translateY(105%) scaleY(0.85); opacity: 0; } 45% { transform: translateY(-6%) scaleY(1.12); opacity: 0.95; } 100% { transform: translateY(-115%) scaleY(0.9); opacity: 0; } }
                @keyframes lexiconRippleExpand { 0% { transform: translate(-50%, -50%) scale(0.05); opacity: 0.75; } 65% { opacity: 0.35; } 100% { transform: translate(-50%, -50%) scale(3.6); opacity: 0; } }
                @keyframes lexiconFloatSlow { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(18px, -16px, 0) scale(1.06); } }
                .animate-lexicon-wave-1 { animation: lexiconWaveSweep 740ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .animate-lexicon-wave-2 { animation: lexiconWaveSweep 780ms 45ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .animate-lexicon-ripple { animation: lexiconRippleExpand 740ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-lexicon-orb { animation: lexiconFloatSlow 11s ease-in-out infinite; }
              `}</style>
              <div className={`rounded-3xl p-4 sm:p-5 border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${themeSurface}`}>
                <div className="flex flex-wrap items-center gap-1.5">
                  {lexiconCategories.map(cat => {
                    const isSelected = lexiconCategoryFilter === cat.id;
                    return (
                      <button key={cat.id} onClick={() => { setLexiconCategoryFilter(cat.id); const nextPool = cat.id === 'All' ? LOVE_TERMS_LEXICON : cat.id === 'Saved' ? LOVE_TERMS_LEXICON.filter(t => savedLexiconIds.includes(t.id)) : LOVE_TERMS_LEXICON.filter(t => t.category === cat.id); if (nextPool.length > 0 && !nextPool.some(t => t.id === currentLexiconTerm.id)) { triggerNextRandomTermWave(null, nextPool); } }} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${isSelected ? 'bg-gradient-to-r from-[#5A28FF] via-[#D81B9E] to-[#FF9E6D] text-white shadow-sm' : darkMode ? 'bg-white/5 text-indigo-200/85 hover:bg-white/10' : 'bg-stone-100 text-slate-700 hover:bg-stone-200'}`}>{cat.label}</button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-3 self-end lg:self-center shrink-0 text-xs">
                  <span className={themeMutedText}>Explored <strong>{visitedLexiconIds.size}</strong> of {LOVE_TERMS_LEXICON.length}</span>
                  <button onClick={e => triggerNextRandomTermWave(e)} className="px-4 py-1.5 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/30 font-semibold flex items-center gap-1.5 hover:bg-pink-500/25 transition"><Shuffle className="w-3.5 h-3.5" /> Random Wave</button>
                </div>
              </div>

              <div onClick={e => triggerNextRandomTermWave(e)} role="button" tabIndex={0} onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') { e.preventDefault(); triggerNextRandomTermWave(null); } }} style={{ background: darkMode ? activePalette.darkBg : activePalette.lightBg }} className={`relative w-full min-h-[34rem] sm:min-h-[38rem] rounded-[2.75rem] border overflow-hidden cursor-pointer select-none flex flex-col justify-between p-6 sm:p-12 md:p-16 transition-all duration-700 shadow-2xl ${darkMode ? 'border-white/15 shadow-black/60 text-white' : 'border-stone-300/80 shadow-stone-300/60 text-slate-900'}`}>
                <div style={{ background: `radial-gradient(circle, ${activePalette.orbA}3B 0%, transparent 70%)` }} className="animate-lexicon-orb absolute -top-28 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none" />
                <div style={{ background: `radial-gradient(circle, ${activePalette.orbB}3B 0%, transparent 70%)` }} className="animate-lexicon-orb absolute -bottom-28 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none" />
                {waveTransitionState !== 'idle' && (
                  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    <div style={{ left: `${waveOriginCoords.x}%`, top: `${waveOriginCoords.y}%`, background: `radial-gradient(circle, ${activePalette.orbA}55 0%, ${activePalette.orbB}35 45%, transparent 72%)` }} className="animate-lexicon-ripple absolute w-96 h-96 rounded-full" />
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="animate-lexicon-wave-1 absolute inset-0 w-full h-full"><path fill={activePalette.waveSecondary} d="M0,160 C320,40 520,280 860,140 C1120,30 1300,220 1440,120 L1440,600 L0,600 Z" /></svg>
                  </div>
                )}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border backdrop-blur-md ${darkMode ? activePalette.accentBadgeDark : activePalette.accentBadgeLight}`}>{currentLexiconTerm.category}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md flex items-center gap-1.5 ${darkMode ? 'bg-white/10 text-stone-200 border-white/15' : 'bg-white/75 text-slate-700 border-stone-300/80'}`}><Globe className="w-3.5 h-3.5 opacity-75" /> {currentLexiconTerm.origin}</span>
                  </div>
                  <button onClick={e => { e.stopPropagation(); setSavedLexiconIds(prev => prev.includes(currentLexiconTerm.id) ? prev.filter(id => id !== currentLexiconTerm.id) : [...prev, currentLexiconTerm.id]); }} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md transition flex items-center gap-1.5 ${isSaved ? 'bg-pink-500/25 text-pink-300 border-pink-400/50' : darkMode ? 'bg-white/10 text-stone-200 border-white/15 hover:bg-white/20' : 'bg-white/80 text-slate-700 border-stone-300 hover:bg-white'}`}><Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-pink-400' : ''}`} /><span>{isSaved ? 'Saved' : 'Save Term'}</span></button>
                </div>
                <div className={`relative z-10 my-auto max-w-3xl mx-auto text-center px-2 sm:px-6 space-y-6 transition-all duration-300 ${waveTransitionState === 'surging' ? 'opacity-0 translate-y-6 scale-95 blur-[2px]' : 'opacity-100 translate-y-0 scale-100 blur-0'}`}>
                  <div className="flex items-center justify-center gap-3 opacity-75"><span style={{ backgroundColor: activePalette.orbA }} className="w-10 h-[1.5px] rounded-full" /><Waves style={{ color: activePalette.orbB }} className="w-5 h-5" /><span style={{ backgroundColor: activePalette.orbA }} className="w-10 h-[1.5px] rounded-full" /></div>
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight leading-[1.12]">{currentLexiconTerm.term}</h2>
                  <div className={`text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold ${darkMode ? 'text-pink-200/80' : 'text-slate-600'}`}>{currentLexiconTerm.origin}</div>
                  <p className={`text-lg sm:text-2xl md:text-[1.65rem] font-serif leading-relaxed max-w-2xl mx-auto ${darkMode ? 'text-stone-100/95' : 'text-slate-800'}`}>“{currentLexiconTerm.definition}”</p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-current/10 text-xs">
                  <div className="flex items-center gap-2 opacity-80"><span style={{ background: `linear-gradient(135deg, ${activePalette.orbA}, ${activePalette.orbB})` }} className="w-3.5 h-3.5 rounded-full inline-block shadow-sm border border-white/40" /><span>{activePalette.name}</span></div>
                  <div className="flex items-center gap-2 font-semibold tracking-wide opacity-90"><Waves className="w-4 h-4 animate-pulse" /><span>Click anywhere on stage for wave transition to next random term</span></div>
                </div>
              </div>
            </div>
          );
        })()}

        {activeTab === 'persona' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${themeSurface}`}>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full"><UserCircle className="w-3.5 h-3.5" /> Self-Discovery Archetype</div>
                <h2 className="text-2xl sm:text-3xl font-serif">Emotional Persona</h2>
                <p className={`text-sm max-w-2xl ${themeMutedText}`}>Rate how accurately each statement describes your typical relationship behaviors to uncover your dominant emotional baseline and corresponding crystalline archetype.</p>
              </div>
              {Object.keys(personaAnswers).length > 0 && (
                <button onClick={handleResetPersona} className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5 shrink-0 ${themeSubtleCard}`}><RotateCcw className="w-3.5 h-3.5" /> Retake Quiz</button>
              )}
            </div>

            {!personaCompleted ? (
              <div className="space-y-5">
                {PERSONA_QUESTIONS.slice(personaStep * 5, personaStep * 5 + 5).map((q, idx) => (
                  <div key={q.id} className={`rounded-3xl p-6 border space-y-4 ${themeSurface}`}>
                    <div className="flex items-center justify-between"><span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">Question {personaStep * 5 + idx + 1} of 15</span></div>
                    <h3 className="text-base sm:text-lg font-semibold">{q.text}</h3>
                    <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-1">
                      {[{ val: 1, label: '1 • Strongly Disagree' }, { val: 2, label: '2 • Disagree' }, { val: 3, label: '3 • Neutral' }, { val: 4, label: '4 • Agree' }, { val: 5, label: '5 • Strongly Agree' }].map(opt => {
                        const selected = personaAnswers[q.id] === opt.val;
                        return (
                          <button key={opt.val} onClick={() => setPersonaAnswers(prev => ({ ...prev, [q.id]: opt.val }))} className={`py-2.5 px-2 rounded-2xl text-xs font-semibold border transition-all flex flex-col items-center justify-center gap-1 ${selected ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-cyan-400 shadow-md' : darkMode ? 'bg-[#191645]/90 text-indigo-200 border-indigo-500/25 hover:bg-indigo-900/60' : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'}`}>
                            <span className="text-sm font-bold">{opt.val}</span><span className="hidden sm:inline text-[11px] opacity-90 text-center">{opt.label.split('• ')[1]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <button onClick={() => setPersonaStep(prev => Math.max(0, prev - 1))} disabled={personaStep === 0} className={`px-5 py-2.5 rounded-full border text-xs font-semibold disabled:opacity-40 flex items-center gap-2 ${themeSurface}`}><ArrowLeft className="w-4 h-4" /> Previous</button>
                  {personaStep < 2 ? <button onClick={() => setPersonaStep(prev => Math.min(2, prev + 1))} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md">Next Questions <ArrowRight className="w-4 h-4" /></button> : <button onClick={() => setPersonaCompleted(true)} disabled={Object.keys(personaAnswers).length < 15} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] via-[#FF176B] to-[#FF9E6D] text-white text-xs font-semibold flex items-center gap-2 shadow-md disabled:opacity-40">Reveal My Persona <Sparkles className="w-4 h-4" /></button>}
                </div>
              </div>
            ) : (
              personaAnalysis && (
                <div className="space-y-8 animate-fadeIn">
                  <div className={`relative overflow-hidden rounded-[2.25rem] p-8 sm:p-12 border shadow-2xl transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-[#0A0B1A] via-[#101435] to-[#150B25] border-indigo-500/30' : 'bg-gradient-to-br from-[#FAF8FC] via-[#F3EDF8] to-[#FDF3F3] border-indigo-200'}`}>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                      <div className="flex-1 space-y-5 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm"><UserCircle className="w-3.5 h-3.5" /> Dominant Emotional Baseline</div>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight">{personaAnalysis.resultData.name} Archetype</h3>
                        <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-indigo-100/90' : 'text-slate-700'}`}>Your primary intrinsic reaction style leans towards <strong>{personaAnalysis.dominantTrait}</strong>.</p>
                        <div className={`mt-6 p-6 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-black/30 border-white/10' : 'bg-white/60 border-stone-200'}`}>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2">Recommended Management Strategy</h4>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-200' : 'text-slate-700'}`}>{personaAnalysis.resultData.description}</p>
                        </div>
                      </div>
                      <div className="shrink-0 animate-[lexiconFloatSlow_6s_ease-in-out_infinite]">
                        <PersonaGemIcon type={personaAnalysis.resultData.iconName} size={220} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </main>

      <footer className={`relative z-10 border-t py-5 px-4 sm:px-6 mt-12 transition-colors ${darkMode ? 'border-indigo-500/20 bg-[#08071E]/80 text-indigo-200/60' : 'border-stone-200 bg-white/70 text-slate-500'}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5"><RubyGradientLogo darkMode={darkMode} size={24} /><span className="font-semibold">Ruby Home</span></div>
          <div>20 Priority Principles • 22 Fanned Emotions • 28 Ruby Indicators • 30 Reference Texts • 120 Lexicon Terms • 5 Persona Archetypes</div>
        </div>
      </footer>
    </div>
  );
}