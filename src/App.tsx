import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Heart,
  Sparkles,
  Compass,
  BookOpen,
  Search,
  CheckCircle2,
  AlertTriangle,
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
  Gem,
  Layers,
  Eye,
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
  Filter,
  Info
} from 'lucide-react';

// ============================================================================
// 9 NEON FACETED GEMSTONE PALETTES
// ============================================================================

export const RUBY_GEM_PALETTES = [
  {
    id: 'gem-magenta',
    name: 'Magenta Ruby',
    tagline: 'High-voltage romance & raw vital passion',
    glow: 'rgba(255, 16, 128, 0.65)',
    borderGlow: '#FF1080',
    appBgDark: '#0D0518',
    appBgLight: '#FFF0F7',
    primaryGrad: 'from-[#5A28FF] via-[#FF176B] to-[#FF8A00]',
    c1: '#FF40B0',
    c2: '#FF007F',
    c3: '#D00068',
    c4: '#750040',
    c5: '#3D0022',
    strokeColor: '#FFA3DF'
  },
  {
    id: 'gem-sapphire',
    name: 'Sapphire Cobalt',
    tagline: 'Deep psychological safety & emotional fidelity',
    glow: 'rgba(0, 110, 255, 0.65)',
    borderGlow: '#0066FF',
    appBgDark: '#040B1D',
    appBgLight: '#F0F6FF',
    primaryGrad: 'from-[#0052D4] via-[#4364F7] to-[#6FB1FC]',
    c1: '#60A5FA',
    c2: '#0066FF',
    c3: '#0040C7',
    c4: '#002580',
    c5: '#001447',
    strokeColor: '#BAE6FD'
  },
  {
    id: 'gem-emerald',
    name: 'Neon Emerald',
    tagline: 'Vitality, healthy boundaries & renewed growth',
    glow: 'rgba(0, 235, 120, 0.65)',
    borderGlow: '#00E676',
    appBgDark: '#03140C',
    appBgLight: '#F0FDF4',
    primaryGrad: 'from-[#0575E6] via-[#00F260] to-[#10B981]',
    c1: '#6EE7B7',
    c2: '#00E676',
    c3: '#059669',
    c4: '#047857',
    c5: '#022C22',
    strokeColor: '#D1FAE5'
  },
  {
    id: 'gem-crimson',
    name: 'Crimson Scarlet',
    tagline: 'Visceral polarity, desire & masculine drive',
    glow: 'rgba(255, 20, 60, 0.65)',
    borderGlow: '#FF1744',
    appBgDark: '#170408',
    appBgLight: '#FFF1F2',
    primaryGrad: 'from-[#93291E] via-[#ED213A] to-[#FF6B6B]',
    c1: '#FDA4AF',
    c2: '#FF1744',
    c3: '#D50000',
    c4: '#880000',
    c5: '#450000',
    strokeColor: '#FFE4E6'
  },
  {
    id: 'gem-cyan',
    name: 'Aqua Cyan',
    tagline: 'Crystal clarity, transparent dialogue & calm truth',
    glow: 'rgba(0, 230, 255, 0.65)',
    borderGlow: '#00E5FF',
    appBgDark: '#03151D',
    appBgLight: '#ECFEFF',
    primaryGrad: 'from-[#1CB5E0] via-[#000851] to-[#00F2FE]',
    c1: '#67E8F9',
    c2: '#00E5FF',
    c3: '#0891B2',
    c4: '#0E7490',
    c5: '#083344',
    strokeColor: '#CFFAFE'
  },
  {
    id: 'gem-amethyst',
    name: 'Amethyst Violet',
    tagline: 'Spiritual reverence, self-worth & conscious love',
    glow: 'rgba(175, 80, 255, 0.65)',
    borderGlow: '#A855F7',
    appBgDark: '#120521',
    appBgLight: '#FAF5FF',
    primaryGrad: 'from-[#7F00FF] via-[#E100FF] to-[#8E2DE2]',
    c1: '#D8B4FE',
    c2: '#A855F7',
    c3: '#7E22CE',
    c4: '#581C87',
    c5: '#3B0764',
    strokeColor: '#F3E8FF'
  },
  {
    id: 'gem-gold',
    name: 'Champagne Gold',
    tagline: 'Enduring honor, marital legacy & timeless devotion',
    glow: 'rgba(255, 185, 30, 0.65)',
    borderGlow: '#F59E0B',
    appBgDark: '#1A1104',
    appBgLight: '#FFFBEB',
    primaryGrad: 'from-[#FF8008] via-[#FFC837] to-[#F59E0B]',
    c1: '#FDE68A',
    c2: '#F59E0B',
    c3: '#B45309',
    c4: '#78350F',
    c5: '#451A03',
    strokeColor: '#FEF3C7'
  },
  {
    id: 'gem-diamond-ice',
    name: 'Platinum Ice Diamond',
    tagline: 'Unshakable objectivity & clear discernment',
    glow: 'rgba(220, 235, 255, 0.65)',
    borderGlow: '#CBD5E1',
    appBgDark: '#0B0F19',
    appBgLight: '#F8FAFC',
    primaryGrad: 'from-[#64748B] via-[#94A3B8] to-[#E2E8F0]',
    c1: '#FFFFFF',
    c2: '#E2E8F0',
    c3: '#94A3B8',
    c4: '#475569',
    c5: '#1E293B',
    strokeColor: '#FFFFFF'
  },
  {
    id: 'gem-rose-gold',
    name: 'Rose Coral',
    tagline: 'Tender vulnerability, active warmth & gentle repair',
    glow: 'rgba(255, 120, 150, 0.65)',
    borderGlow: '#FB7185',
    appBgDark: '#18070F',
    appBgLight: '#FFF1F4',
    primaryGrad: 'from-[#F857A6] via-[#FF5858] to-[#FF8A80]',
    c1: '#FECDD3',
    c2: '#FB7185',
    c3: '#E11D48',
    c4: '#9F1239',
    c5: '#4C0519',
    strokeColor: '#FFE4E6'
  }
];

// ============================================================================
// SVG ARTWORK COMPONENTS
// ============================================================================

function FacetedRubyLogo({ colorIndex = 0, darkMode, size = 44, onClick }) {
  const p = RUBY_GEM_PALETTES[colorIndex] || RUBY_GEM_PALETTES[0];

  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size }}
      title="Click to cycle ruby gem color!"
      className={`relative rounded-[24%] flex items-center justify-center cursor-pointer select-none overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 group ${
        darkMode ? 'border' : 'border shadow-md'
      }`}
    >
      <div
        className="absolute inset-0 rounded-[24%] transition-colors duration-500"
        style={{
          backgroundColor: darkMode ? p.appBgDark : p.appBgLight,
          borderColor: p.borderGlow,
          boxShadow: `0 0 16px ${p.glow}`
        }}
      />
      <div
        className="absolute inset-2 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none"
        style={{ background: `radial-gradient(circle, ${p.c2}88 0%, ${p.c4}22 65%, transparent 80%)` }}
      />
      <svg viewBox="0 0 100 100" className="w-[84%] h-[84%] relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-105" fill="none">
        <defs>
          <linearGradient id={`facetGradCenter-${p.id}`} x1="50" y1="23" x2="50" y2="87" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={p.c1} />
            <stop offset="35%" stopColor={p.c2} />
            <stop offset="80%" stopColor={p.c3} />
            <stop offset="100%" stopColor={p.c4} />
          <linearGradient id="leftLobeGrad" x1="15" y1="22" x2="60" y2="95" gradientUnits="userSpaceOnUse">
            <s// ... existing code ...

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Applies a strict light, monochrome color palette
    <div className="min-h-screen bg-white text-slate-900 grayscale selection:bg-slate-300">
      <TopNavigation />
      <main className="max-w-4xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
} offset="0%" stopColor="#6E3AFF" />
            <stop offset="50%" stopColor="#4618F2" />
            <stop offset="100%" stopColor="#1B75FF" />
          </linearGradient>
          <linearGradient id="leftInnerFold" x1="32" y1="52" x2="60" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1222C9" />
            <stop offset="55%" stopColor="#3B10E6" />
            <stop offset="100%" stopColor="#4F7BFF" />
          </linearGradient>
          <linearGradient id={`facetGradL-${p.id}`} x1="14" y1="39" x2="50" y2="87" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={p.c2} />
            <stop offset="60%" stopColor={p.c4} />
            <stop offset="100%" stopColor={p.c5} />
          </linearGradient>
          <linearGradient id={`facetGradR-${p.id}`} x1="86" y1="39" x2="50" y2="87" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={p.c1} />
            <stop offset="50%" stopColor={p.c3} />
            <stop offset="100%" stopColor={p.c5} />
          </linearGradient>
        </defs>

        <polygon points="14,39 26,39 50,87" fill={p.c5} opacity="0.95" />
        <polygon points="26,39 38,39 50,87" fill={p.c4} opacity="0.9" />
        <polygon points="38,39 50,39 50,87" fill={`url(#facetGradL-${p.id})`} />
        <polygon points="50,39 62,39 50,87" fill={`url(#facetGradCenter-${p.id})`} />
        <polygon points="62,39 74,39 50,87" fill={p.c3} opacity="0.85" />
        <polygon points="74,39 86,39 50,87" fill={`url(#facetGradR-${p.id})`} />

        <polygon points="14,39 30,23 38,39" fill={p.c4} opacity="0.85" />
        <polygon points="38,23 62,23 50,39" fill={`url(#facetGradCenter-${p.id})`} opacity="0.95" />
        <polygon points="30,23 38,23 50,39 38,39" fill={p.c2} opacity="0.8" />
        <polygon points="62,23 70,23 62,39 50,39" fill={p.c1} opacity="0.85" />
        <polygon points="86,39 70,23 62,39" fill={p.c3} opacity="0.85" />

        <path
          d="M30,23 L70,23 L86,39 L50,87 L14,39 Z M14,39 L86,39 M30,23 L38,39 L50,87 M70,23 L62,39 L50,87 M38,23 L50,39 L50,87 M62,23 L50,39 M26,39 L50,87 M74,39 L50,87"
          stroke={p.strokeColor}
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.85"
        />
        <line x1="30" y1="23" x2="70" y2="23" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.9" />
        <circle cx="50" cy="23" r="2.2" fill="#FFFFFF" />
        <circle cx="50" cy="87" r="1.8" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

function TieredHeartIcon({ tier = 'bronze', darkMode, size = 140 }) {
  const tColors = {
    bronze: { label: 'Bronze Bond', glow: 'from-orange-700/30 via-amber-600/20 to-yellow-500/10', p1: '#803300', p2: '#994500', p3: '#4D2200', p4: '#BF5500', p5: '#E67300', p6: '#CC6600', p7: '#B35900', p8: '#663300', p9: '#FFCC99' },
    silver: { label: 'Silver Concord', glow: 'from-slate-500/30 via-gray-400/20 to-zinc-300/10', p1: '#637385', p2: '#7A8A9C', p3: '#333F4D', p4: '#8A99A8', p5: '#B4C2D1', p6: '#92A2B3', p7: '#A2B2C2', p8: '#4A5768', p9: '#E8F0F8' },
    gold: { label: 'Golden Sovereign', glow: 'from-yellow-600/30 via-amber-500/20 to-yellow-400/15', p1: '#997300', p2: '#B38600', p3: '#4D3900', p4: '#CC9900', p5: '#FFD700', p6: '#E6B800', p7: '#FFC125', p8: '#664C00', p9: '#FFF0B3' },
    diamond: { label: 'Diamond Resonator', glow: 'from-sky-400/35 via-blue-300/25 to-cyan-200/20', p1: '#80B3CC', p2: '#99C2D6', p3: '#4D7A94', p4: '#B3D9EB', p5: '#F2FAFF', p6: '#CCE6F5', p7: '#D9F0FF', p8: '#6696B3', p9: '#FFFFFF' }
  };
  const c = tColors[tier] || tColors.bronze;

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[28%] flex items-center justify-center shadow-2xl transition-all duration-500 select-none overflow-hidden ${
        darkMode ? 'bg-[#06061A] border border-white/10 shadow-black/80' : 'bg-[#F7F5F0] border border-stone-200 shadow-stone-300/50'
      }`}
    >
      <div className={`absolute inset-2 rounded-full bg-gradient-to-tr ${c.glow} blur-xl pointer-events-none`} />
      <svg viewBox="0 0 160 160" className="w-[84%] h-[84%] relative z-10 drop-shadow-xl" fill="none">
        <defs>
          <clipPath id={`heartClip-${tier}`}>
            <path d="M80 138 C80 138 18 98 18 55 C18 30 37 18 56 18 C69 18 77 26 80 35 C83 26 91 18 104 18 C123 18 142 30 142 55 C142 98 80 138 80 138 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#heartClip-${tier})`}>
          <polygon points="18,45 42,22 65,38 48,68" fill={c.p1} opacity="0.75" />
          <polygon points="65,38 80,35 80,58 48,68" fill={c.p2} opacity="0.9" />
          <polygon points="18,45 48,68 32,96 16,72" fill={c.p3} />
          <polygon points="48,82 80,58 80,94 64,116" fill={c.p3} opacity="0.88" />
          <polygon points="32,98 48,82 64,116 55,124" fill={c.p4} opacity="0.85" />
          <polygon points="104,18 134,34 124,62 92,40" fill={c.p5} opacity="0.65" />
          <polygon points="134,34 142,58 126,94 124,62" fill={c.p6} opacity="0.8" />
          <polygon points="80,94 108,84 96,118 80,138" fill={c.p7} opacity="0.75" />
          <polygon points="80,94 80,138 64,124" fill={c.p8} opacity="0.88" />
          <polygon points="34,26 48,20 42,33 28,38" fill="#FFFFFF" opacity="0.9" />
          <polygon points="116,23 130,33 123,39 110,27" fill="#FFFFFF" opacity="0.95" />
        </g>
        <path d="M80 138 C80 138 18 98 18 55 C18 30 37 18 56 18 C69 18 77 26 80 35 C83 26 91 18 104 18 C123 18 142 30 142 55 C142 98 80 138 80 138 Z" stroke={c.p9} strokeWidth="1.4" strokeOpacity="0.55" />
      </svg>
    </div>
  );
}

function RadiantGreenRubyIcon({ size = 56 }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} className="drop-shadow-[0_0_18px_rgba(16,185,129,0.65)] select-none shrink-0" fill="none">
      <defs>
        <linearGradient id="emeraldGradL" x1="18" y1="20" x2="80" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="40%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <clipPath id="greenRubyClip">
          <path d="M80 140 C80 140 16 98 16 54 C16 28 36 16 56 16 C69 16 77 25 80 35 C83 25 91 16 104 16 C124 16 144 28 144 54 C144 98 80 140 80 140 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#greenRubyClip)">
        <path d="M10 10 H80 V145 H10 Z" fill="url(#emeraldGradL)" />
        <path d="M80 10 H150 V145 H80 Z" fill="#047857" />
        <polygon points="80,35 116,58 80,104 44,58" fill="#34D399" opacity="0.9" />
        <polygon points="80,35 56,16 80,16" fill="#D1FAE5" opacity="0.8" />
        <polygon points="80,35 104,16 80,16" fill="#ECFDF5" opacity="0.95" />
      </g>
      <path d="M80 140 C80 140 16 98 16 54 C16 28 36 16 56 16 C69 16 77 25 80 35 C83 25 91 16 104 16 C124 16 144 28 144 54 C144 98 80 140 80 140 Z" stroke="#6EE7B7" strokeWidth="1.6" strokeOpacity="0.85" />
    </svg>
  );
}

function FracturedBlackRubyIcon({ size = 56 }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} className="drop-shadow-[0_0_18px_rgba(244,63,94,0.55)] select-none shrink-0" fill="none">
      <defs>
        <linearGradient id="blackRubyGrad" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="60%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>
      <path d="M77 139 C77 139 15 97 15 54 C15 28 35 16 55 16 C67 16 74 24 77 34 L73 53 L80 72 L72 95 L78 115 Z" fill="url(#blackRubyGrad)" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M83 139 C83 139 145 97 145 54 C145 28 125 16 105 16 C93 16 86 24 83 34 L79 53 L86 72 L78 95 L84 115 Z" fill="#090D16" stroke="#F43F5E" strokeWidth="1.4" />
      <path d="M80 32 L75 53 L83 72 L75 95 L81 115 L80 140" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
}

function PersonaGemIcon({ type, size = 110 }) {
  if (type === 'Passion') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_20px_rgba(255,23,107,0.8)]">
        <polygon points="50,8 92,50 50,92 8,50" fill="url(#pGrad)" stroke="#FFB3D1" strokeWidth="1.5" />
        <polygon points="50,22 78,50 50,78 22,50" fill="#FF176B" opacity="0.9" />
        <line x1="50" y1="8" x2="50" y2="92" stroke="#FFF" strokeWidth="1" opacity="0.7" />
        <defs>
          <linearGradient id="pGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4081" />
            <stop offset="100%" stopColor="#880E4F" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (type === 'Vigilant') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
        <path d="M20,18 Q50,6 80,18 V50 Q80,82 50,96 Q20,82 20,50 Z" fill="#7E22CE" stroke="#E9D5FF" strokeWidth="1.6" />
        <path d="M32,30 Q50,22 68,30 V50 Q68,72 50,82 Q32,72 32,50 Z" fill="#A855F7" opacity="0.85" />
      </svg>
    );
  }
  if (type === 'Empathy') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_20px_rgba(14,165,233,0.8)]">
        <path d="M50,10 C50,10 14,54 14,70 A36,36 0 0,0 86,70 C86,54 50,10 50,10 Z" fill="#0284C7" stroke="#BAE6FD" strokeWidth="1.5" />
        <path d="M50,26 C50,26 26,58 26,70 A24,24 0 0,0 74,70 C74,58 50,26 50,26 Z" fill="#38BDF8" opacity="0.9" />
      </svg>
    );
  }
  if (type === 'Purity') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
        <circle cx="50" cy="50" r="42" fill="#059669" stroke="#A7F3D0" strokeWidth="1.6" />
        <circle cx="50" cy="50" r="28" fill="#10B981" />
        <circle cx="50" cy="50" r="14" fill="#6EE7B7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]">
      <rect x="14" y="14" width="72" height="72" rx="18" transform="rotate(45 50 50)" fill="#D97706" stroke="#FDE68A" strokeWidth="1.6" />
      <rect x="25" y="25" width="50" height="50" rx="12" transform="rotate(45 50 50)" fill="#F59E0B" />
    </svg>
  );
}

// ============================================================================
// DATA: 30 REFERENCE TEXTS WITH RICH METADATA
// ============================================================================

const REFERENCE_BOOKS = [
  {
    id: 'b1',
    title: 'The Seven Principles for Making Marriage Work',
    author: 'John M. Gottman & Nan Silver',
    year: '1999',
    category: 'Gottman Dynamics',
    notebook: 'Relationships Notebook',
    icon: Heart,
    summary: 'Decades of longitudinal observation identifying micro-behaviors that mathematically predict relationship longevity versus collapse.',
    takeaway: 'Eliminate the Four Horsemen (criticism, contempt, defensiveness, stonewalling), build deep Love Maps, and readily accept mutual influence.',
    actionItem: 'Institute a 20-minute daily stress-reducing conversation with zero problem-solving.'
  },
  {
    id: 'b2',
    title: 'Attached: The New Science of Adult Attachment',
    author: 'Amir Levine & Rachel Heller',
    year: '2010',
    category: 'Attachment Theory',
    notebook: 'Relationships Notebook',
    icon: Link,
    summary: 'A clinical roadmap detailing anxious, avoidant, and secure attachment styles and how early conditioning impacts romantic safety.',
    takeaway: 'Never mistake the hyper-arousal of an anxious-avoidant trap for genuine romance. Demand transparent, timely reassurance.',
    actionItem: 'State boundary requirements directly within 24 hours of feeling slighted.'
  },
  {
    id: 'b3',
    title: 'Hold Me Tight: Seven Conversations for a Lifetime of Love',
    author: 'Dr. Sue Johnson',
    year: '2008',
    category: 'Emotionally Focused Therapy',
    notebook: 'Relationships Notebook',
    icon: Users,
    summary: 'Groundbreaking guide to Emotionally Focused Therapy (EFT) that reveals attachment panic masquerading as cold indifference or anger.',
    takeaway: 'Disclose your primary vulnerable emotion (fear, shame, sadness) instead of reacting through protective secondary protest anger.',
    actionItem: 'When triggering arguments start, pause and state: "I feel vulnerable, not angry; I need to know you hear me."'
  },
  {
    id: 'b4',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson, Joseph Grenny et al.',
    year: '2002',
    category: 'High-Stakes Dialogue',
    notebook: 'Relationships Notebook',
    icon: MessageSquare,
    summary: 'Psychological strategies for mastering moments when stakes are high, opinions vary, and emotions run strong.',
    takeaway: 'When safety disappears, people resort to silence or violence. Restore shared purpose and mutual respect before debating facts.',
    actionItem: 'Employ the STATE framework: Share your facts, Tell your story, Ask for their paths.'
  },
  {
    id: 'b5',
    title: 'The 5 Love Languages: The Secret to Love That Lasts',
    author: 'Gary Chapman',
    year: '1992',
    category: 'Emotional Communication',
    notebook: 'Relationships Notebook',
    icon: Gift,
    summary: 'Framework showing partners rarely share identical emotional communication vectors, causing unintentional starvation of intimacy.',
    takeaway: 'Identify and deliberately speak your partner’s native emotional language rather than projecting your own preferences onto them.',
    actionItem: 'Score your partner’s love tank every Sunday evening on a 1-to-10 scale.'
  },
  {
    id: 'b6',
    title: 'The Way of the Superior Man',
    author: 'David Deida',
    year: '1997',
    category: 'Masculine Polarity',
    notebook: 'Romance (Male Perspective)',
    icon: Compass,
    summary: 'Philosophical treatise on grounding masculine mission and holding serene emotional presence during turbulent feminine testing.',
    takeaway: 'Never abandon your life purpose for relationship appeasement; authentic devotion is born from unwavering integrity and non-neediness.',
    actionItem: 'Dedicate one uninterruptible hour daily to your primary creative mission.'
  },
  {
    id: 'b7',
    title: 'Models: Attract Women Through Honesty',
    author: 'Mark Manson',
    year: '2011',
    category: 'Vulnerability & Integrity',
    notebook: 'Romance (Male Perspective)',
    icon: Eye,
    summary: 'Reframes romantic attraction from manipulative pickup tactics into radical non-neediness and courageous emotional transparency.',
    takeaway: 'Vulnerability is the truest marker of strength. Rejection is merely a mutual incompatibility filter, not a reflection of self-worth.',
    actionItem: 'Express genuine romantic feelings with zero expectation of guaranteed reciprocity.'
  },
  {
    id: 'b8',
    title: 'The Art of Loving',
    author: 'Erich Fromm',
    year: '1956',
    category: 'Philosophical Ethics',
    notebook: 'Relationships Notebook',
    icon: Award,
    summary: 'Seminal psychoanalytic essay demonstrating love is an active, disciplined art requiring care, responsibility, respect, and knowledge.',
    takeaway: 'Immature love declares "I love you because I need you." Mature love understands "I need you because I love you."',
    actionItem: 'Practice deliberate unconditional care toward your partner without a scorecard.'
  },
  {
    id: 'b9',
    title: 'What Women Want: An Evidence-Based Guide',
    author: 'Tucker Max & Geoffrey Miller',
    year: '2015',
    category: 'Evolutionary Psychology',
    notebook: 'Romance (Male Perspective)',
    icon: Shield,
    summary: 'Evolutionary psychological audit explaining women crave the "Tender Defender"—high protective capability combined with profound kindness.',
    takeaway: 'Cultivate balance between physical/mental competence and empathetic generosity. Signaling reliable character outweighs superficial bravado.',
    actionItem: 'Perform an unprompted act of emotional protection or domestic burden-lifting today.'
  },
  {
    id: 'b10',
    title: 'Emotions Revealed: Recognizing Faces and Feelings',
    author: 'Paul Ekman',
    year: '2003',
    category: 'Micro-Expressions',
    notebook: 'Relationships Notebook',
    icon: Smile,
    summary: 'Groundbreaking research into universal facial micro-expressions that disclose concealed emotional states before speech occurs.',
    takeaway: 'Contempt (asymmetrical lip curl) is toxic in marriage. Notice micro-expressions early to de-escalate before physiological flooding.',
    actionItem: 'Observe your partner’s involuntary micro-responses during gentle discussions.'
  },
  {
    id: 'b11',
    title: 'Getting the Love You Want: A Guide for Couples',
    author: 'Harville Hendrix & Helen LaKelly Hunt',
    year: '1988',
    category: 'Imago Therapy',
    notebook: 'Relationships Notebook',
    icon: Sparkles,
    summary: 'Introduces Imago Relationship Therapy, illustrating how we subconsciously select partners who mirror our childhood emotional wounds.',
    takeaway: 'Transform the unconscious power struggle into conscious healing through Imago Dialogue: Mirroring, Validation, and Empathy.',
    actionItem: 'Practice a 15-minute Imago Mirroring session without rebuttal or defense.'
  },
  {
    id: 'b12',
    title: 'He’s Just Not That Into You',
    author: 'Greg Behrendt & Liz Tuccillo',
    year: '2004',
    category: 'Clarity & Discernment',
    notebook: 'Romance (Female Perspective)',
    icon: Zap,
    summary: 'Direct behavioral reality-check stripping away romantic self-deception and rationalizations for lukewarm partner investment.',
    takeaway: 'When someone genuinely values you, their actions leave no ambiguity. Mixed signals represent a definitive decision: no.',
    actionItem: 'Stop making excuses for chronic unresponsiveness or canceled plans.'
  },
  {
    id: 'b13',
    title: 'Act Like a Lady, Think Like a Man',
    author: 'Steve Harvey',
    year: '2009',
    category: 'Masculine Psychology',
    notebook: 'Romance (Female Perspective)',
    icon: UserCircle,
    summary: 'Practical handbook deciphering the three core masculine drives: who he is, what he does, and how much he makes.',
    takeaway: 'Men demonstrate love through three distinct verbs: Proclaim, Provide, and Protect. Acknowledge this blueprint to inspire loyalty.',
    actionItem: 'Vocalize specific appreciation for your partner’s protective or providing efforts.'
  },
  {
    id: 'b14',
    title: 'The Rules: Time-Tested Secrets for Capturing Mr. Right',
    author: 'Ellen Fein & Sherrie Schneider',
    year: '1995',
    category: 'Dating Boundaries',
    notebook: 'Romance (Female Perspective)',
    icon: Scale,
    summary: 'Controversial classic codifying the psychology of romantic pacing, scarcity, and self-restraint in early courtship.',
    takeaway: 'Do not chase, smother, or surrender autonomy. Allowing pursuit creates healthy breathing room and deepens romantic investment.',
    actionItem: 'Wait for intentional initiation and maintain your own vibrant social schedule.'
  },
  {
    id: 'b15',
    title: 'Women Who Love Too Much',
    author: 'Robin Norwood',
    year: '1985',
    category: 'Codependency & Healing',
    notebook: 'Romance (Female Perspective)',
    icon: Heart,
    summary: 'A clinical exploration of romantic addiction where loving becomes equating worth with suffering and changing an emotionally unavailable partner.',
    takeaway: 'Cease treating relationships as rescue missions. True intimacy requires two whole adults, not a savior and a rehabilitation patient.',
    actionItem: 'Identify and drop one urge to manage or reform your partner’s personal flaws.'
  },
  {
    id: 'b16',
    title: 'Where You End and I Begin: Setting Healthy Boundaries',
    author: 'Anne Katherine',
    year: '1991',
    category: 'Boundary Architecture',
    notebook: 'Relationships Notebook',
    icon: Shield,
    summary: 'Foundational guide outlining the physical, emotional, and psychological perimeter fences required to preserve intimacy without loss of self.',
    takeaway: 'Boundaries are not punitive walls; they are the architectural blueprints that make authentic closeness safe.',
    actionItem: 'Write out your non-negotiables regarding communication respect.'
  },
  {
    id: 'b17',
    title: 'The Art of Seduction',
    author: 'Robert Greene',
    year: '2001',
    category: 'Psychological Magnetism',
    notebook: 'Romance (Male Perspective)',
    icon: FlameIcon,
    summary: 'Historical and psychological dissection of human allure, anticipation, tension, and the archetypes of magnetic attraction.',
    takeaway: 'Familiarity kills desire. Preservation of personal mystery, surprise, and romantic staging keeps long-term bonds electrifying.',
    actionItem: 'Plan an unexpected date night with details kept completely secret.'
  },
  {
    id: 'b18',
    title: 'Fascinating Womanhood',
    author: 'Helen Andelin',
    year: '1963',
    category: 'Traditional Dynamics',
    notebook: 'Romance (Female Perspective)',
    icon: Sparkles,
    summary: 'Traditional relationship philosophy focused on unconditional admiration, soft receptive energy, and inspiring masculine devotion.',
    takeaway: 'A man’s deepest vulnerability is his perceived capability. Authentic admiration of his character releases profound protectiveness.',
    actionItem: 'Praise a specific character trait of your partner in front of others.'
  },
  {
    id: 'b19',
    title: 'The Rational Male',
    author: 'Rollo Tomassi',
    year: '2013',
    category: 'Evolutionary Dynamics',
    notebook: 'Romance (Male Perspective)',
    icon: Activity,
    summary: 'Analytical study examining intersexual dynamics, hypergamy, sexual market value, and maintaining emotional autonomy.',
    takeaway: 'Internalized self-worth and purpose are paramount. Desperation and supplication destroy respect faster than any conflict.',
    actionItem: 'Audit whether your validation comes from internal achievement or partner mood.'
  },
  {
    id: 'b20',
    title: 'Why Him? Why Her? Finding Real Love',
    author: 'Dr. Helen Fisher',
    year: '2009',
    category: 'Neurobiology of Love',
    notebook: 'Relationships Notebook',
    icon: Layers,
    summary: 'Neurobiological research identifying four hormonal personality profiles: Explorer (dopamine), Builder (serotonin), Director (testosterone), Negotiator (estrogen).',
    takeaway: 'Biological chemistry shapes how we process conflict, risk, and vulnerability. Adapt your tone to your partner’s neural type.',
    actionItem: 'Identify your partner’s dominant neuro-profile to better anticipate reactions.'
  },
  {
    id: 'b21',
    title: 'Social Intelligence: The New Science of Human Relationships',
    author: 'Daniel Goleman',
    year: '2006',
    category: 'Interpersonal Neuroscience',
    notebook: 'Relationships Notebook',
    icon: Waves,
    summary: 'Reveals how brains are wired to link directly through mirror neurons, creating an involuntary physiological feedback loop between partners.',
    takeaway: 'Your physiological calm literally calms your partner’s nervous system. Self-regulation precedes co-regulation.',
    actionItem: 'Take five slow, deep diaphragmatic breaths during the first minute of friction.'
  },
  {
    id: 'b22',
    title: 'Wired for Love: How Understanding Your Brain Can Help You Defuse Conflict',
    author: 'Dr. Stan Tatkin',
    year: '2012',
    category: 'Psychobiology of Attachment',
    notebook: 'Relationships Notebook',
    icon: Zap,
    summary: 'Introduces the concept of the couple bubble—a protective psychological pact prioritizing mutual safety above all outside forces.',
    takeaway: 'Never throw your partner under the bus in public. Maintain the couple bubble as an impenetrable fortress of loyalty.',
    actionItem: 'Renew an explicit verbal pact to defend each other in social settings.'
  },
  {
    id: 'b23',
    title: 'The All-or-Nothing Marriage',
    author: 'Eli J. Finkel',
    year: '2017',
    category: 'Modern Marital Science',
    notebook: 'Relationships Notebook',
    icon: CheckCircle,
    summary: 'Traces how modern marriage has shifted up Maslow’s hierarchy of needs, demanding high self-actualization along with basic stability.',
    takeaway: 'High-altitude marriages require intentional oxygen. Calibrate your expectations or invest equivalent time and energy into the climb.',
    actionItem: 'Engage in a joint novel learning experience once every month.'
  },
  {
    id: 'b24',
    title: 'Modern Romance: An Investigation',
    author: 'Aziz Ansari & Eric Klinenberg',
    year: '2015',
    category: 'Sociological Insights',
    notebook: 'Relationships Notebook',
    icon: Globe,
    summary: 'A sociological deep-dive into digital era dating, paralysis of choice, and the paradox of seeking soulmates on glass screens.',
    takeaway: 'Abundance of options produces decision paralysis and disposable attitudes. Deep fulfillment requires conscious constraint and dedication.',
    actionItem: 'Delete dating distractions and commit fully to cultivating your current connection.'
  },
  {
    id: 'b25',
    title: 'Eight Dates: Essential Conversations for a Lifetime of Love',
    author: 'John & Julie Gottman, Doug & Rachel Abrams',
    year: '2019',
    category: 'Conversational Frameworks',
    notebook: 'Relationships Notebook',
    icon: BookOpen,
    summary: 'Structured discussion prompts covering Trust, Conflict, Sex, Money, Family, Fun, Growth, and Dreams.',
    takeaway: 'Curiosity is the antidote to relationship erosion. Continue discovering your partner as if they were a constantly expanding book.',
    actionItem: 'Schedule a two-hour open-ended conversation focused purely on future dreams.'
  },
  {
    id: 'b26',
    title: 'Love & War in Intimate Relationships',
    author: 'Marion Solomon & Stan Tatkin',
    year: '2011',
    category: 'Neurobiology of Conflict',
    notebook: 'Relationships Notebook',
    icon: Scale,
    summary: 'How early relational trauma triggers fight-or-flight loops between lovers, disabling prefrontal cortex logic in seconds.',
    takeaway: 'Logic does not soothe a hijacked primitive amygdala. Soothe the nervous system through gaze, touch, and gentle vocal tone before debating.',
    actionItem: 'Use open posture and soft eyes before launching into any sensitive inquiry.'
  },
  {
    id: 'b27',
    title: 'No More Mr. Nice Guy',
    author: 'Dr. Robert A. Glover',
    year: '2000',
    category: 'Assertiveness & Integrity',
    notebook: 'Romance (Male Perspective)',
    icon: Shield,
    summary: 'Exposes the destructive syndrome of covert contracts, passive-aggression, and disguised dishonesty born from fear of disapproval.',
    takeaway: 'Drop all covert contracts: expecting reward for unspoken favors. State your desires openly with zero resentment.',
    actionItem: 'Say "no" directly to a request you would otherwise accept out of guilt.'
  },
  {
    id: 'b28',
    title: 'Mating in Captivity: Unlocking Erotic Intelligence',
    author: 'Esther Perel',
    year: '2006',
    category: 'Erotic Polarity & Autonomy',
    notebook: 'Relationships Notebook',
    icon: FlameIcon,
    summary: 'Examines the tension between security and desire, demonstrating how closeness and mystery must coexist to preserve passionate fire.',
    takeaway: 'Erotic desire requires distance and otherness. You cannot desire what you already completely possess and smother.',
    actionItem: 'Spend a weekend on separate self-enriching activities to generate fresh longing.'
  },
  {
    id: 'b29',
    title: 'Nonviolent Communication: A Language of Life',
    author: 'Marshall B. Rosenberg',
    year: '1999',
    category: 'Compassionate Dialogue',
    notebook: 'Relationships Notebook',
    icon: Smile,
    summary: 'Four-stage model (Observation, Feeling, Need, Request) that removes blame, diagnosis, and emotional blackmail from human speech.',
    takeaway: 'All violence and sarcasm are tragic expressions of unmet universal human needs. Speak feelings and concrete requests, never character judgements.',
    actionItem: 'Formulate requests using the exact format: "When I see [X], I feel [Y] because I need [Z]. Would you be willing to [Action]?"'
  },
  {
    id: 'b30',
    title: 'The Relationship Cure: A 5 Step Guide to Strengthening Your Marriage',
    author: 'John M. Gottman',
    year: '2001',
    category: 'Bids for Connection',
    notebook: 'Relationships Notebook',
    icon: CheckCircle2,
    summary: 'Details how micro-moments—emotional "bids for connection"—compound daily into either profound romantic capital or catastrophic deficits.',
    takeaway: 'Turning toward your partner’s mundane bids (a glance, a sigh, a comment on the news) builds an emotional bank account that survives crises.',
    actionItem: 'Acknowledge and turn toward 100% of your partner’s small conversational bids today.'
  }
];

function FlameIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

// ============================================================================
// DATA: 20 RELATIONSHIP PRINCIPLES FOR WEEKLY CHECK-IN
// ============================================================================

const TOP_20_ADVICE = [
  { rank: 1, title: "Practice Empathy, Validation, and Active Listening", category: "Communication & Empathy", question: "How well did your partner listen deeply and validate your feelings without immediately trying to 'fix' problems?", bookRef: "The Seven Principles & Hold Me Tight" },
  { rank: 2, title: "Communicate Needs Openly Without Expecting Mind-Reading", category: "Communication & Empathy", question: "How clearly and gracefully did you both express boundaries and desires without passive-aggressive testing?", bookRef: "Crucial Conversations & Attached" },
  { rank: 3, title: "Maintain Individual Purpose, Sovereignty, and Self-Worth", category: "Autonomy & Polarity", question: "How well was individual purpose, creative mission, and personal dignity maintained alongside romance?", bookRef: "The Way of the Superior Man & Models" },
  { rank: 4, title: "Offer Selfless Love, Care, and Daily Kindness", category: "Devotion & Warmth", question: "How consistently was selfless compassion shown, putting partner well-being ahead of personal ego?", bookRef: "The Art of Loving & 5 Love Languages" },
  { rank: 5, title: "Foster Mutual Respect and High Appreciation", category: "Devotion & Warmth", question: "How frequently were sincere compliments, admiration, and honoring gestures spoken between you?", bookRef: "The Seven Principles" },
  { rank: 6, title: "Set Firm Boundaries and Never Tolerate Abuse", category: "Boundaries & Integrity", question: "How reliably were healthy personal boundaries honored without guilt or fear of abandonment?", bookRef: "Where You End and I Begin" },
  { rank: 7, title: "Eliminate Toxic Conflict (Criticism, Contempt, Stonewalling)", category: "Conflict & Repair", question: "During moments of tension, how well did both of you prevent sarcasm, eye-rolling, and cold silent treatment?", bookRef: "The Seven Principles" },
  { rank: 8, title: "Accept Your Partner Without Trying to Remodel Them", category: "Communication & Empathy", question: "How well was the urge to give unsolicited corrective advice or run a 'home-improvement committee' resisted?", bookRef: "Women Who Love Too Much" },
  { rank: 9, title: "Honor Natural Dynamic Polarity and Leadership", category: "Autonomy & Polarity", question: "How harmoniously were masculine initiative and feminine receptive appreciation allowed to flourish?", bookRef: "The Way of the Superior Man" },
  { rank: 10, title: "Uphold Uncompromising Marital Fidelity and Devotion", category: "Boundaries & Integrity", question: "How deeply did your partner reinforce sacred, transparent, and exclusive commitment?", bookRef: "Wired for Love" },
  { rank: 11, title: "Preserve Healthy Space, Mystery, and Longing", category: "Autonomy & Polarity", question: "Was healthy breathing room maintained so romantic anticipation and desire had room to breathe?", bookRef: "Mating in Captivity" },
  { rank: 12, title: "Respect Inherent Differences in Stress Processing", category: "Autonomy & Polarity", question: "Did you honor each other’s stress rhythms (retreating to recharge vs. verbal processing)?", bookRef: "Why Him? Why Her?" },
  { rank: 13, title: "Cultivate an Unshakable Safe Emotional Sanctuary", category: "Conflict & Repair", question: "How safe did you feel being vulnerable with zero fear of ridicule, weaponized secrets, or rejection?", bookRef: "Hold Me Tight" },
  { rank: 14, title: "Forgive Offenses Readily and Discard Transactional Scorecards", category: "Conflict & Repair", question: "Were minor missteps forgiven with grace instead of being tallied in a tit-for-tat ledger?", bookRef: "Getting the Love You Want" },
  { rank: 15, title: "Continue Courtship and Romance Over the Long Term", category: "Devotion & Warmth", question: "How intentionally was romance, playfulness, and dedicated quality time prioritized this week?", bookRef: "The 5 Love Languages" },
  { rank: 16, title: "Build Deep Friendship and a Shared Vision", category: "Devotion & Warmth", question: "How strongly did you feel unified as best friends building a meaningful shared life goal?", bookRef: "Eight Dates" },
  { rank: 17, title: "Compromise and Graciously Accept Influence", category: "Conflict & Repair", question: "Was there willing openness to yield to your partner's viewpoint and craft a cooperative middle path?", bookRef: "The Seven Principles" },
  { rank: 18, title: "Practice Everyday Courtesy and Self-Mastery", category: "Boundaries & Integrity", question: "Was considerate etiquette, grooming, and emotional self-control extended to one another?", bookRef: "What Women Want" },
  { rank: 19, title: "Judge Intentions by Concrete Actions Over Mere Words", category: "Boundaries & Integrity", question: "Did words and promises consistently translate into reliable, accountable real-world actions?", bookRef: "He's Just Not That Into You" },
  { rank: 20, title: "Infuse Daily Life with Playfulness, Warmth, and Humor", category: "Devotion & Warmth", question: "How easily did humor and lighthearted affection break tense spells and restore warmth?", bookRef: "The Relationship Cure" }
];

// ============================================================================
// DATA: QUOTES & LIBRARY
// ============================================================================

const CURATED_QUOTES = [
  { id: 'q1', quote: "True empathy means stepping into your partner's internal world and validating their feelings—especially when you disagree—without rushing to fix the problem.", source: "Synthesis of Hold Me Tight & The Seven Principles", theme: "Empathy & Listening", category: "Communication" },
  { id: 'q2', quote: "Attraction thrives in breathing room. Let your relationship be a sacred complement to your life's mission, rather than the entirety of your identity.", source: "Synthesis of The Way of the Superior Man & Models", theme: "Purpose & Space", category: "Polarity" },
  { id: 'q3', quote: "Stop forming a 'home-improvement committee' or trying to solve raw emotion with pure logic; unconditional acceptance is the fertile soil where true intimacy grows.", source: "Core Principle — Non-Interference", theme: "Unconditional Acceptance", category: "Acceptance" },
  { id: 'q4', quote: "Anxious hearts often mistake the adrenaline spikes of an activated attachment system and unpredictable mixed signals for deep, passionate love.", source: "Synthesis of Attached", theme: "Attachment & Clarity", category: "Attachment" },
  { id: 'q5', quote: "The Four Horsemen—Criticism, Contempt, Defensiveness, and Stonewalling—are not communication styles. They are slow poison for the marital nervous system.", source: "John Gottman, Ph.D.", theme: "Conflict Hygiene", category: "Conflict" },
  { id: 'q6', quote: "Love does not happen to us; love is an active, ongoing art of care, responsibility, reverence, and continuous understanding.", source: "Erich Fromm, The Art of Loving", theme: "Enduring Dedication", category: "Philosophy" }
];

// ============================================================================
// DATA: 5 W's COMPASS & DOS AND DON'TS
// ============================================================================

const FIVE_WS_DATA = {
  female: {
    label: "Female Perspective: Choosing with Clarity",
    subtitle: "Discernment, screening for genuine commitment, and honoring the feminine core",
    items: [
      { type: "Who", question: "Who is truly worthy of your devotion?", points: ["Screen for emotional maturity, unprovoked kindness, and proven fidelity above superficial charisma.", "Beware the charismatic charmer who rushes intimacy before demonstrating character stability.", "A high-value partner demonstrates stability under pressure and cherishes your peace."] },
      { type: "What", question: "What are their true intentions?", points: ["A man serious about you makes definitive plans, introduces you proudly, and integrates you into his world.", "Do not make excuses for ambiguous effort or silence. Actions reveal real priority.", "Words cost nothing; consistent devotion across seasons is the only valid currency."] },
      { type: "When", question: "When should intimacy deepen?", points: ["Pace emotional and physical milestones until reliable safety and commitment are demonstrated.", "Never barter physical intimacy in the hope of purchasing emotional security.", "Allow time to strip away temporary courting masks."] },
      { type: "Where", question: "Where do you draw non-negotiable boundaries?", points: ["Set firm boundaries against disrespect, covert flirting, or stonewalling immediately.", "Be willing to walk away; boundary enforcement requires the willingness to let go of mistreatment.", "A partner who loves you will respect boundaries with gratitude, not guilt."] },
      { type: "Why", question: "Why prioritize mutual respect over chemistry?", points: ["Adrenaline surges from inconsistent lovers activate addictive attachment traps, not authentic love.", "Peaceful, calm affection is the hallmark of enduring, lifelong union.", "The highest romance feels safe, grounded, and free of anxious panic."] }
    ],
    dosAndDonts: [
      { do: "Cultivate your own passions, career, and female friendships", dont: "Make any man the sole epicenter of your emotional survival" },
      { do: "Accept genuine courtship and acknowledge his practical support", dont: "Give unsolicited advice that makes him feel managed or criticized" },
      { do: "State your emotional needs directly with soft vulnerability", dont: "Expect mind-reading or drop passive-aggressive hints" },
      { do: "Give him space to retreat to his cave when he is under stress", dont: "Follow him into his cave demanding immediate verbal catharsis" }
    ]
  },
  male: {
    label: "Male Perspective: Magnetic Grounding",
    subtitle: "Masculine purpose, sovereign leadership, and the power of emotional presence",
    items: [
      { type: "Who", question: "Who do you need to become?", points: ["Develop yourself into a 'Tender Defender'—competent, physically grounded, yet deeply empathetic.", "Discard the people-pleasing 'Nice Guy' paradigm; lead with unvarnished honesty.", "Live with such internal integrity that you never need validation from external approval."] },
      { type: "What", question: "What triggers lasting attraction?", points: ["Women respond to unshakeable emotional presence and calm stability during turbulent storms.", "Take initiative: make clear plans for dates with decisive, thoughtful conviction.", "Maintain masculine polarity: do not smother her with incessant anxious check-ins."] },
      { type: "When", question: "When she is emotional, how should you respond?", points: ["Listen without immediately jumping into logical problem-solving or unsolicited repairs.", "Hold space: provide physical and emotional safety for her feelings to fully express.", "Never tell an upset woman she is being irrational; validate the emotional experience first."] },
      { type: "Where", question: "Where should your primary life anchor reside?", points: ["Anchor yourself first in your life's purpose, creative mission, and personal standards.", "A man without a sovereign mission becomes needy, reactive, and easily uncentered.", "When your mission is clear, your relationship becomes an inspiring oasis, not a cage."] },
      { type: "Why", question: "Why is vulnerability the supreme form of courage?", points: ["Suppressing feelings behind stoic armor leads to explosive resentment or cold detachment.", "Communicating your boundary or affection without fear of rejection is true alpha strength.", "Authentic confidence is comfortable being seen exactly as you are."] }
    ],
    dosAndDonts: [
      { do: "Hold unwavering emotional calm when she expresses volatile moods", dont: "React with defensiveness, cold stonewalling, or intellectual debates" },
      { do: "Listen attentively and validate her experience before proposing fixes", dont: "Interrupt her vents with immediate analytical solutions" },
      { do: "Lead interactions decisively and plan thoughtful courtship rituals", dont: "Ask 'I don't know, what do you want to do?' every weekend" },
      { do: "Maintain your creative mission, physical vitality, and discipline", dont: "Become complacent, sloppy, or dependent on her for direction" }
    ]
  },
  relationship: {
    label: "Conscious Union: Enduring Partnership",
    subtitle: "Team cohesion, conflict de-escalation, and nurturing long-term passion",
    items: [
      { type: "Who", question: "Who are we as an interdependent team?", points: ["View yourselves as collaborative partners facing the problem together, never adversaries.", "Protect the 'couple bubble' from outside interference, toxic in-laws, or public humiliation.", "Honor each other’s personal growth, even when paths evolve into new interests."] },
      { type: "What", question: "What constitutes healthy disagreement?", points: ["Use gentle startups: complain about specific behavior, never criticize identity.", "Accept repair attempts quickly, even in the middle of a tense dispute.", "Keep a 5-to-1 ratio of positive to negative interactions during conflicts."] },
      { type: "When", question: "When physiological flooding occurs, what is required?", points: ["When heart rates exceed 100 BPM, logic shuts down; call an immediate 20-minute timeout.", "During the break, practice self-soothing rather than rehearsing internal grievances.", "Return to dialogue with lowered adrenaline and open curiosity."] },
      { type: "Where", question: "Where do we build shared ritual meaning?", points: ["Establish daily and weekly rituals: morning coffee, evening check-ins, and anniversary getaways.", "Create shared family myths, traditions, and philanthropic endeavors.", "A relationship without sacred shared rituals slowly dissolves into domestic logistics."] },
      { type: "Why", question: "Why must intimacy balance closeness and mystery?", points: ["Smothering togetherness erodes erotic tension; healthy distance rekindles curiosity.", "Support each other’s independent adventures so you have fresh stories to share.", "Love seeks closeness; desire demands a bridge to cross."] }
    ],
    dosAndDonts: [
      { do: "Begin complaints gently focusing on feelings and requests", dont: "Launch attacks starting with 'You always' or 'You never'" },
      { do: "Acknowledge every small bid for connection with warmth", dont: "Ignore your partner’s sighs, glances, or conversational prompts" },
      { do: "Accept your partner's influence and find synergistic compromises", dont: "Insist on winning disputes at the expense of your partner's dignity" },
      { do: "Practice unprompted forgiveness and let minor transgressions go", dont: "Keep a permanent ledger of past mistakes to weaponize in arguments" }
    ]
  }
};

// ============================================================================
// DATA: BEHAVIOUR DIAGNOSTIC QUIZ
// ============================================================================

const BEHAVIOUR_QUIZ_QUESTIONS = [
  {
    id: 'bq1',
    dimension: 'Empathy vs. Solutioneering',
    scenario: "Your partner comes home exhausted, visibly stressed, venting angrily about their boss or a difficult situation. How do you respond?",
    options: [
      { text: "I immediately cut in with logical solutions and tell them what they should have done differently.", score: 1, diagnosis: "Solutioneering Trap", prescription: "The Seven Principles for Making Marriage Work" },
      { text: "I listen half-heartedly while glancing at my phone, hoping the vent ends quickly.", score: 2, diagnosis: "Disengagement Hazard", prescription: "The Relationship Cure" },
      { text: "I step into their world, put away distractions, and say: 'That sounds exhausting; I completely understand why you feel that way.'", score: 5, diagnosis: "Deep Empathic Presence", prescription: "Hold Me Tight" }
    ]
  },
  {
    id: 'bq2',
    dimension: 'Conflict Startup & Tone',
    scenario: "You notice something has been left undone in the household that you've discussed multiple times. How do you raise the issue?",
    options: [
      { text: "I roll my eyes and say: 'Must I do everything myself? You always neglect what matters.'", score: 1, diagnosis: "Contempt & Harsh Startup", prescription: "Crucial Conversations" },
      { text: "I say nothing, simmer internally, and give the cold shoulder for the next two days.", score: 2, diagnosis: "Passive-Aggressive Stonewalling", prescription: "Attached" },
      { text: "I use a soft startup: 'I feel overwhelmed when tasks pile up. Would you be willing to tackle this with me tonight?'", score: 5, diagnosis: "Masterful Repair Startup", prescription: "Nonviolent Communication" }
    ]
  },
  {
    id: 'bq3',
    dimension: 'Autonomy vs. Enmeshment',
    scenario: "Your partner expresses a strong desire to take up an intensive personal hobby or weekend retreat on their own. How do you feel?",
    options: [
      { text: "I feel threatened and secretly manipulate them with guilt to keep them at home.", score: 1, diagnosis: "Anxious Enmeshment", prescription: "Women Who Love Too Much" },
      { text: "I act indifferently and secretly pull away emotionally to punish them.", score: 2, diagnosis: "Avoidant Withdrawal", prescription: "The Way of the Superior Man" },
      { text: "I enthusiastically champion their individual growth, recognizing that space keeps desire vibrant.", score: 5, diagnosis: "Sovereign Polar Interdependence", prescription: "Mating in Captivity" }
    ]
  },
  {
    id: 'bq4',
    dimension: 'Scorekeeping vs. Grace',
    scenario: "Your partner forgets an errand they promised to run for you earlier today. What happens internally?",
    options: [
      { text: "I add it to my mental scoreboard and immediately remind them of mistakes they made three months ago.", score: 1, diagnosis: "Transactional Hostility", prescription: "Getting the Love You Want" },
      { text: "I sigh loudly and make sarcastic jabs about how unreliable they are.", score: 2, diagnosis: "Corrosive Needling", prescription: "The Seven Principles for Making Marriage Work" },
      { text: "I extend grace, realize they are human and stressed, and offer a gentle, warm reminder without judgment.", score: 5, diagnosis: "Unconditional Generosity", prescription: "The Art of Loving" }
    ]
  }
];

// ============================================================================
// DATA: RUBIES (TRAIT DECK)
// ============================================================================

const FLAGS_DECK = [
  {
    id: 'f1',
    flagType: 'green',
    gender: 'Universal',
    trait: "The Soft Repair Initiator",
    description: "In the middle of friction, they pause, take a deep breath, and say: 'I don't like fighting with you. Let me try saying that more gently.'",
    whyItMatters: "De-escalates physiological flooding in under 30 seconds and preserves long-term marital safety."
  },
  {
    id: 'f2',
    flagType: 'red',
    gender: 'Universal',
    trait: "Contempt & Eye-Rolling",
    description: "Weaponizes sarcasm, sneers, or rolls their eyes during disagreements to signal moral or intellectual superiority.",
    whyItMatters: "Dr. Gottman’s #1 predictor of divorce; directly erodes the recipient’s immune and cardiovascular health."
  },
  {
    id: 'f3',
    flagType: 'green',
    gender: 'Masculine',
    trait: "The Tender Defender",
    description: "Possesses strong competence and physical assertiveness, but uses that power entirely to protect, honor, and cherish his partner.",
    whyItMatters: "Provides visceral primal security, allowing the feminine nervous system to fully relax and open."
  },
  {
    id: 'f4',
    flagType: 'red',
    gender: 'Masculine',
    trait: "Covert Contracts & 'Nice Guy' Passive Aggression",
    description: "Does favors with unspoken expectations, then becomes bitter and resentful when mind-reading does not occur.",
    whyItMatters: "Destroys trust through hidden dishonesty; true generosity is delivered with zero covert conditions."
  },
  {
    id: 'f5',
    flagType: 'green',
    gender: 'Feminine',
    trait: "Unconditional Receptive Appreciation",
    description: "Praises his genuine efforts and leadership, making him feel capable, honored, and deeply respected in his home.",
    whyItMatters: "Inspires fierce loyalty and unlocks a man’s instinctive desire to provide and safeguard the bond."
  },
  {
    id: 'f6',
    flagType: 'red',
    gender: 'Feminine',
    trait: "The 'Home-Improvement Committee'",
    description: "Constantly offers unsolicited critiques, attempting to remodel his habits, posture, clothing, or ambitions.",
    whyItMatters: "Emasculates motivation; a partner treated like a misbehaved child will eventually withdraw or rebel."
  }
];

// ============================================================================
// DATA: EMOTION ATLAS
// ============================================================================

const EMOTIONS_DECK = [
  {
    id: 1,
    number: "01",
    name: "Anger & Protest Rage",
    part: "Part I: Core Defensive Responses",
    trigger: "Triggered by boundary violations, perceived control, or thwarted agency.",
    menFactors: { increase: "Feeling micromanaged, emasculated, or having competence openly questioned.", decrease: "Solitary time in his 'cave' to regain composure and autonomy." },
    womenFactors: { increase: "Feelings dismissed as 'irrational' or encountering cold stonewalling.", decrease: "Attentive listening, eye contact, and emotional validation." },
    microSign: "Eyebrows pulled down and together, glaring eyes, narrowed lips."
  },
  {
    id: 2,
    number: "02",
    name: "Disgust & Sarcasm",
    part: "Part I: Core Defensive Responses",
    trigger: "Triggered by moral betrayal, perceived weakness, or persistent boundary trampling.",
    menFactors: { increase: "Perceived manipulation or chronic victimhood.", decrease: "Clear, unapologetic integrity and radical self-responsibility." },
    womenFactors: { increase: "Lack of hygiene, unreliability, or cowardice under pressure.", decrease: "Demonstrated reliability and protective competence." },
    microSign: "Upper lip raised, nose wrinkled, asymmetric sneer."
  },
  {
    id: 3,
    number: "03",
    name: "Attachment Fear & Panic",
    part: "Part II: Attachment Vulnerabilities",
    trigger: "Triggered by fear of abandonment, rejection, or irrecoverable loss of connection.",
    menFactors: { increase: "Threat of losing his family, sexual rejection, or catastrophic public shame.", decrease: "Affectionate touch and explicit verbal reassurance of loyalty." },
    womenFactors: { increase: "Emotional unavailability, unreturned calls, or ambiguous romantic status.", decrease: "Consistent presence, prompt updates, and unwavering transparency." },
    microSign: "Eyebrows raised and pulled together, upper eyelids raised, tense mouth."
  },
  {
    id: 4,
    number: "04",
    name: "Tender Reverence (Awe)",
    part: "Part III: Transcendent Bonding",
    trigger: "Triggered by witnessing profound moral beauty, courage, or selfless sacrifice.",
    menFactors: { increase: "Seeing his partner radiate grace, gratitude, and steadfast loyalty.", decrease: "Cynicism, nitpicking, and ungrateful entitlement." },
    womenFactors: { increase: "Witnessing her partner protect others or master a formidable crisis with calm dignity.", decrease: "Whining, helplessness, or petulance." },
    microSign: "Softened gaze, head slightly tilted, relaxed facial musculature, open chest."
  }
];

// ============================================================================
// DATA: LEXICON OF LOVE (UNTRANSLATABLE TERMS)
// ============================================================================

const LOVE_TERMS_LEXICON = [
  { id: 'lt-1', term: "Ya'aburnee", origin: "Arabic (يا تقبرني)", category: "Deep Devotion", phonetics: "yah-ah-boor-nee", definition: "Literally 'you bury me.' The profound hope that one will die before their beloved because living in a world without them is unbearable." },
  { id: 'lt-2', term: "Koi No Yokan", origin: "Japanese (恋の予感)", category: "Romantic Intuition", phonetics: "koy-no-yo-kahn", definition: "The intuitive certainty upon first meeting someone that the two of you are destined to inevitably fall deeply in love." },
  { id: 'lt-3', term: "Geborgenheit", origin: "German", category: "Sanctuary & Safety", phonetics: "geh-BOR-gen-hite", definition: "A transcendent state of complete emotional and physical security, feeling protected from all worldly perils within a partner's embrace." },
  { id: 'lt-4', term: "Cwtch", origin: "Welsh", category: "Physical Warmth", phonetics: "kutch", definition: "More than a mere hug: an affectionate embrace that forms a sacred, safe cubbyhole where no fear can enter." },
  { id: 'lt-5', term: "Mamihlapinatapai", origin: "Yaghan (Tierra del Fuego)", category: "Unspoken Desire", phonetics: "mah-mee-lah-pee-nah-tah-pie", definition: "A meaningful, silent look shared by two people who desire to initiate something romantic, but neither will take the first step." },
  { id: 'lt-6', term: "Gezelligheid", origin: "Dutch", category: "Shared Warmth", phonetics: "heh-ZEL-ih-hite", definition: "A cozy, convivial, heart-warming sense of togetherness and belonging celebrated in the company of loved ones." },
  { id: 'lt-7', term: "Forelsket", origin: "Norwegian", category: "Early Euphoria", phonetics: "for-el-sket", definition: "The euphoric, breathless, intoxicating sensation of newly falling in love before reality introduces complications." },
  { id: 'lt-8', term: "Retrouvailles", origin: "French", category: "Reconnection", phonetics: "ruh-troo-vye", definition: "The exquisite joy of reuniting with a beloved soul after a long, painful period of separation." }
];

// ============================================================================
// DATA: EMOTIONAL PERSONA ARCHETYPES
// ============================================================================

const PERSONA_ARCHETYPES = [
  {
    type: 'Empathy',
    title: 'The Resonant Empath',
    gemColor: 'Aqua Cyan',
    signature: 'Intuitive Attunement & Tender Mirroring',
    motto: "I hear what remains unspoken in your silence.",
    strengths: ['Immediate emotional attunement', 'Profound active listening', 'Natural de-escalation of anger'],
    blindspots: ['Absorbing partner stress as your own', 'Boundary erosion', 'Resentment from over-giving'],
    recommendation: 'Practice clear personal energetic perimeters. Read "Where You End and I Begin" by Anne Katherine.'
  },
  {
    type: 'Passion',
    title: 'The Vibrant Flame',
    gemColor: 'Magenta Ruby',
    signature: 'Raw Vitality, Magnetism & Expressive Depth',
    motto: "Love is an exhilarating adventure to be felt with every nerve.",
    strengths: ['Ignites erotic polarity', 'Deep romantic staging', 'Courageous self-expression'],
    blindspots: ['Craving dramatic adrenaline highs', 'Mistaking attachment anxiety for chemistry', 'Impulsiveness'],
    recommendation: 'Anchor emotional excitement in calm, consistent daily commitments. Read "Mating in Captivity" by Esther Perel.'
  },
  {
    type: 'Vigilant',
    title: 'The Sovereign Guardian',
    gemColor: 'Amethyst Violet',
    signature: 'High Discernment, Integrity & Boundary Protection',
    motto: "A fortress without gates is no sanctuary.",
    strengths: ['Clear moral boundaries', 'Reliable protection of the home', 'Zero tolerance for abuse'],
    blindspots: ['Over-defensiveness', 'Difficulty relaxing into soft vulnerability', 'Skeptical hyper-vigilance'],
    recommendation: 'Practice leaning back and allowing repair attempts to penetrate your armor. Read "Hold Me Tight" by Dr. Sue Johnson.'
  },
  {
    type: 'Purity',
    title: 'The Serene Anchor',
    gemColor: 'Neon Emerald',
    signature: 'Grounded Stability, Grace & Unconditional Care',
    motto: "True devotion is steady, patient, and free of vanity.",
    strengths: ['Unwavering emotional calm', 'Forgiving of minor missteps', 'Consistent daily service'],
    blindspots: ['Conflict avoidance', 'Repressing valid desires to maintain peace', 'Tolerating unequal effort'],
    recommendation: 'Express discontent promptly with assertiveness before it turns to silence. Read "No More Mr. Nice Guy" by Dr. Robert Glover.'
  },
  {
    type: 'Wisdom',
    title: 'The Conscious Architect',
    gemColor: 'Champagne Gold',
    signature: 'Strategic Synergy, Shared Legacy & Enduring Meaning',
    motto: "We are building an enduring cathedral, stone by stone.",
    strengths: ['Long-term family vision', 'Emotional self-mastery', 'Constructive problem solving'],
    blindspots: ['Over-intellectualizing feelings', 'Treating romance like a project', 'Stifling spontaneous joy'],
    recommendation: 'Permit messiness and playful silliness without requiring a purpose. Read "The Relationship Cure" by John Gottman.'
  }
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [activeTab, setActiveTab] = useState('sanctuary');
  const [darkMode, setDarkMode] = useState(true);
  const [rubyColorIndex, setRubyColorIndex] = useState(0);

  // Modal State for 30-Book Grid
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookSearch, setBookSearch] = useState('');
  const [bookCategoryFilter, setBookCategoryFilter] = useState('All');

  // Check-In State
  const [checkInAnswers, setCheckInAnswers] = useState(() => {
    const init = {};
    TOP_20_ADVICE.forEach(a => { init[a.rank] = 0; });
    return init;
  });
  const [checkInSubmitted, setCheckInSubmitted] = useState(false);

  // Quotes Filter State
  const [quoteSearch, setQuoteSearch] = useState('');
  const [selectedQuoteTheme, setSelectedQuoteTheme] = useState('All');
  const [favoriteQuotes, setFavoriteQuotes] = useState(['q1']);

  // 5 W's Tab & View State
  const [fiveWsPerspective, setFiveWsPerspective] = useState('female');
  const [fiveWsView, setFiveWsView] = useState('compass'); // 'compass' | 'dos'

  // Quiz Diagnostic State
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Rubies Swipe State
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [acknowledgedFlags, setAcknowledgedFlags] = useState([]);

  // Emotion Atlas State
  const [selectedEmotionId, setSelectedEmotionId] = useState(1);

  // Lexicon Search State
  const [lexiconSearch, setLexiconSearch] = useState('');

  // Persona State
  const [selectedPersonaType, setSelectedPersonaType] = useState('Passion');

  // Theme Sync: 'For You' is locked to light mode; Relationships respects amor fati switch
  const isRelationshipActive = activeTab !== 'sanctuary';
  const isDark = isRelationshipActive && darkMode;

  // Active gemstone palette
  const activePalette = RUBY_GEM_PALETTES[rubyColorIndex] || RUBY_GEM_PALETTES[0];

  const cycleRandomRubyColor = (e) => {
    if (e) e.stopPropagation();
    setRubyColorIndex(prev => {
      let next = Math.floor(Math.random() * RUBY_GEM_PALETTES.length);
      while (next === prev && RUBY_GEM_PALETTES.length > 1) {
        next = Math.floor(Math.random() * RUBY_GEM_PALETTES.length);
      }
      return next;
    });
  };

  // Safari Header Theme Sync
  useEffect(() => {
    const themeColor = isDark ? activePalette.appBgDark : '#F8F6F2';
    let metaTag = document.querySelector('meta[name="theme-color"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', themeColor);
  }, [isDark, activePalette]);

  // Teasers on page render
  const teasers = useMemo(() => {
    const quote = CURATED_QUOTES[0];
    const advice = TOP_20_ADVICE[0];
    const flag = FLAGS_DECK[0];
    const term = LOVE_TERMS_LEXICON[0];
    return { quote, advice, flag, term };
  }, []);

  const relationshipModules = [
    { id: 'checkin', label: 'Weekly Check-In', icon: CheckCircle2, description: '20-point partnership harmony scoring' },
    { id: 'quotes', label: 'Quotes & Library', icon: BookOpen, description: 'Curated wisdom & 30 reference volumes' },
    { id: 'fivews', label: 'Advice Compass', icon: Compass, description: "5 W's perspective & Dos and Don'ts" },
    { id: 'quiz', label: 'Behaviour Quiz', icon: Activity, description: 'Diagnostic test & book prescriptions' },
    { id: 'flags', label: 'Rubies Trait Deck', icon: Gem, description: 'Green & black behavioral rubies' },
    { id: 'emotions', label: 'Emotion Atlas', icon: Layers, description: 'Masculine & feminine triggers & calming' },
    { id: 'lexicon', label: 'Lexicon of Love', icon: Waves, description: 'Global untranslatable relationship terms' },
    { id: 'persona', label: 'Emotional Persona', icon: UserCircle, description: 'Discover your crystalline emotional archetype' }
  ];

  const currentModule = relationshipModules.find(m => m.id === activeTab);

  // Dynamic Card Styles
  const themeSurface = isDark
    ? 'bg-[#120F24]/90 border-indigo-500/20 text-stone-100 shadow-xl shadow-black/40'
    : 'bg-[#FFFFFF]/95 border-stone-200/90 text-slate-900 shadow-sm';
  const themeSubtleCard = isDark
    ? 'bg-[#181333]/85 border-indigo-400/15 text-stone-200'
    : 'bg-[#F9F7F2] border-stone-200/80 text-slate-800';
  const themeMutedText = isDark ? 'text-indigo-200/70' : 'text-slate-500';

  // Check-In Harmony Score Calculation
  const checkInMetrics = useMemo(() => {
    const answeredEntries = Object.entries(checkInAnswers).filter(([_, score]) => score > 0);
    const count = answeredEntries.length;
    if (count === 0) return { score: 0, count: 0, tier: 'bronze' };
    const total = answeredEntries.reduce((acc, [_, s]) => acc + s, 0);
    const maxPossible = count * 5;
    const pct = Math.round((total / maxPossible) * 100);

    let tier = 'bronze';
    if (pct >= 85) tier = 'diamond';
    else if (pct >= 70) tier = 'gold';
    else if (pct >= 50) tier = 'silver';

    return { score: pct, count, tier };
  }, [checkInAnswers]);

  // Quiz Result Calculation
  const quizMetrics = useMemo(() => {
    const answered = Object.values(quizAnswers);
    if (answered.length === 0) return { totalScore: 0, maxScore: 0, pct: 0 };
    const totalScore = answered.reduce((acc, curr) => acc + curr.score, 0);
    const maxScore = BEHAVIOUR_QUIZ_QUESTIONS.length * 5;
    const pct = Math.round((totalScore / maxScore) * 100);
    return { totalScore, maxScore, pct };
  }, [quizAnswers]);

  // Book Filter Calculation
  const bookCategories = useMemo(() => {
    const cats = new Set(REFERENCE_BOOKS.map(b => b.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredBooks = useMemo(() => {
    return REFERENCE_BOOKS.filter(book => {
      const matchSearch =
        book.title.toLowerCase().includes(bookSearch.toLowerCase()) ||
        book.author.toLowerCase().includes(bookSearch.toLowerCase()) ||
        book.takeaway.toLowerCase().includes(bookSearch.toLowerCase());
      const matchCategory = bookCategoryFilter === 'All' || book.category === bookCategoryFilter;
      return matchSearch && matchCategory;
    });
  }, [bookSearch, bookCategoryFilter]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 flex flex-col selection:bg-pink-500 selection:text-white ${
        isDark ? 'text-stone-100' : 'text-[#141229]'
      }`}
      style={{
        backgroundColor: isDark ? activePalette.appBgDark : '#F8F6F2'
      }}
    >
      {/* ================================================================ */}
      {/* HEADER & NAVIGATION BAR                                          */}
      {/* ================================================================ */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-500 ${
          isDark ? 'bg-[#08071E]/85 border-indigo-500/20 shadow-md' : 'bg-[#F6F5F0]/90 border-stone-200/90 shadow-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3.5 select-none">
            <FacetedRubyLogo
              colorIndex={rubyColorIndex}
              darkMode={isDark}
              size={48}
              onClick={cycleRandomRubyColor}
            />
            <div
              onClick={() => setActiveTab('sanctuary')}
              className="cursor-pointer group flex flex-col"
              title="Return to Sanctuary Dashboard"
            >
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight bg-gradient-to-r from-[#6E3AFF] via-[#FF176B] to-[#FF9E6D] bg-clip-text text-transparent">
                  Ruby Home
                </h1>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-semibold border transition-all"
                  style={{
                    color: activePalette.borderGlow,
                    borderColor: `${activePalette.borderGlow}55`,
                    backgroundColor: `${activePalette.borderGlow}15`
                  }}
                >
                  {activePalette.name.split(' ')[0]}
                </span>
              </div>
              <p className={`text-[11px] leading-tight ${themeMutedText}`}>
                {activePalette.tagline}
              </p>
            </div>
          </div>

          {/* Controls: Palette Cycler & amor fati Switch */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={cycleRandomRubyColor}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border transition-all ${
                isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-stone-200' : 'bg-white border-stone-200 hover:bg-stone-100 text-slate-700'
              }`}
              title="Cycle Gem Color Palette"
            >
              <Shuffle className="w-3.5 h-3.5 text-pink-500" />
              <span className="hidden sm:inline">Palette</span>
            </button>

            {/* amor fati mode toggle: only active when inside relationship tabs */}
            {isRelationshipActive && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                title="Toggle Light and Dark Mode"
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif italic font-semibold flex items-center gap-2 border shadow-md transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-[#4618F2] via-[#D81B9E] to-[#FF7B54] text-white border-pink-400/40'
                    : 'bg-gradient-to-r from-[#141229] via-[#3B10E6] to-[#D81B9E] text-white border-indigo-300'
                }`}
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-200" /> : <Moon className="w-3.5 h-3.5 text-indigo-200" />}
                <span>amor fati</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-2.5">
          <nav className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
            {/* Sanctuary Tab */}
            <button
              onClick={() => setActiveTab('sanctuary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === 'sanctuary'
                  ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                  : isDark
                  ? 'text-indigo-200/80 hover:bg-white/5'
                  : 'text-slate-600 hover:bg-stone-200/70'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>For You (Sanctuary)</span>
            </button>

            {/* Consolidated Relationships Hub with Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  isRelationshipActive
                    ? 'bg-gradient-to-r from-[#5A28FF] via-[#D81B9E] to-[#FF6B6B] text-white shadow-md'
                    : isDark
                    ? 'text-indigo-200/80 hover:bg-white/5'
                    : 'text-slate-600 hover:bg-stone-200/70'
                }`}
              >
                <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Relationships</span>
                {isRelationshipActive && currentModule && (
                  <span className="hidden sm:inline-block text-[11px] opacity-90 px-2 py-0.5 rounded-full bg-black/25 font-normal">
                    • {currentModule.label}
                  </span>
                )}
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 opacity-75" />
              </button>

              {/* Mega Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div
                  className={`w-[22rem] sm:w-[38rem] rounded-3xl border shadow-2xl p-3.5 backdrop-blur-2xl ${
                    isDark ? 'bg-[#120F24]/95 border-indigo-500/30 text-stone-100' : 'bg-white/95 border-stone-200 text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between px-3 py-2 mb-1.5 border-b border-indigo-500/15">
                    <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                      Relationships Diagnostic Suite
                    </span>
                    <span className={`text-[11px] ${themeMutedText}`}>8 Core Modules</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {relationshipModules.map(module => {
                      const Icon = module.icon;
                      const isActive = activeTab === module.id;
                      return (
                        <button
                          key={module.id}
                          onClick={() => setActiveTab(module.id)}
                          className={`w-full text-left flex items-start gap-3 p-2.5 rounded-2xl transition-all ${
                            isActive
                              ? isDark
                                ? 'bg-indigo-500/25 border border-pink-400/40 text-white'
                                : 'bg-pink-50 border border-pink-300 text-slate-900'
                              : isDark
                              ? 'hover:bg-white/5 text-indigo-100/80'
                              : 'hover:bg-stone-100 text-slate-700'
                          }`}
                        >
                          <div
                            className={`mt-0.5 shrink-0 rounded-xl p-2 ${
                              isActive
                                ? 'bg-gradient-to-br from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                                : isDark
                                ? 'bg-[#1D1740] text-pink-400'
                                : 'bg-stone-100 text-pink-500'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-xs sm:text-sm">{module.label}</div>
                            <div className={`text-[11px] leading-snug mt-0.5 line-clamp-1 ${themeMutedText}`}>
                              {module.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* ================================================================ */}
      {/* MAIN CONTAINER CONTENT                                           */}
      {/* ================================================================ */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* ================================================================ */}
        {/* TAB 1: SANCTUARY ("FOR YOU" - CRISP LIGHT PALETTE)               */}
        {/* ================================================================ */}
        {activeTab === 'sanctuary' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Hero Welcome Banner */}
            <div
              className="rounded-[2.5rem] p-7 sm:p-10 border relative overflow-hidden shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF1F6 0%, #FFFFFF 50%, #F5F3FF 100%)',
                borderColor: '#FFD3E2'
              }}
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sanctuary of Conscious Union</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  Where wisdom meets relational sovereignty.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Synthesizing decades of clinical research across Gottman dynamics, Emotionally Focused Therapy, attachment neuroscience, and masculine-feminine polarity into daily actionable diagnostics.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveTab('checkin')}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs sm:text-sm font-semibold shadow-md hover:opacity-95 transition-all flex items-center gap-2"
                  >
                    <span>Begin Weekly Check-In</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-stone-50 transition-all flex items-center gap-2"
                  >
                    <span>Take Behaviour Quiz</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Teaser Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Teaser 1: Quotes */}
              <div
                onClick={() => setActiveTab('quotes')}
                className="cursor-pointer rounded-3xl p-5 border bg-white border-stone-200 hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pink-600">Curated Wisdom</span>
                  <BookOpen className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xs font-serif italic text-slate-800 line-clamp-3">
                  "{teasers.quote.quote}"
                </p>
                <div className="mt-3 text-[11px] text-pink-600 font-semibold flex items-center gap-1">
                  <span>Explore library</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Teaser 2: Advice */}
              <div
                onClick={() => setActiveTab('fivews')}
                className="cursor-pointer rounded-3xl p-5 border bg-white border-stone-200 hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600">Priority #{teasers.advice.rank}</span>
                  <Compass className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{teasers.advice.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{teasers.advice.question}</p>
                <div className="mt-3 text-[11px] text-indigo-600 font-semibold flex items-center gap-1">
                  <span>Open 5 W's Compass</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Teaser 3: Rubies */}
              <div
                onClick={() => setActiveTab('flags')}
                className="cursor-pointer rounded-3xl p-5 border bg-white border-stone-200 hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600">Rubies Trait</span>
                  <Gem className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">{teasers.flag.trait}</h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">"{teasers.flag.description}"</p>
                <div className="mt-3 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span>Swipe trait cards</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Teaser 4: Check-In Status */}
              <div
                onClick={() => setActiveTab('checkin')}
                className="cursor-pointer rounded-3xl p-5 border bg-white border-stone-200 hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600">Harmony Status</span>
                  <CheckCircle2 className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  {checkInMetrics.count > 0 ? `${checkInMetrics.score}% Harmony Score` : 'Check-In Awaiting'}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  {checkInMetrics.count > 0 ? `${checkInMetrics.count} of 20 answered` : 'Evaluate your bond across 20 core pillars'}
                </p>
                <div className="mt-3 text-[11px] text-amber-600 font-semibold flex items-center gap-1">
                  <span>View seal progress</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Discover Insights 30-Book Grid */}
            <div className="rounded-[2.5rem] border border-stone-200 bg-white p-6 sm:p-9 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-600">The 30-Text Canon</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mt-0.5">Discover Insights & Takeaways</h3>
                  <p className="text-xs text-slate-500 mt-1">Select any volume to inspect its clinical summary and daily actionable homework.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search 30 books..."
                      value={bookSearch}
                      onChange={e => setBookSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-full border border-stone-300 text-xs text-slate-800 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Book Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
                {bookCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setBookCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      bookCategoryFilter === cat
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* 30-Book Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredBooks.map(book => {
                  const BookIcon = book.icon || BookOpen;
                  return (
                    <button
                      key={book.id}
                      onClick={() => setSelectedBook(book)}
                      className="group text-left aspect-[2/3] rounded-2xl p-4 border border-stone-200 bg-gradient-to-b from-stone-50 to-white hover:border-pink-300 hover:shadow-lg hover:-translate-y-1.5 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase font-bold text-pink-600 tracking-wider line-clamp-1">{book.category}</span>
                        <span className="text-[10px] text-slate-400">{book.year}</span>
                      </div>
                      <div className="my-auto flex flex-col items-center text-center px-1">
                        <div className="p-3 rounded-2xl bg-pink-50 text-pink-600 mb-2 group-hover:scale-110 transition-transform">
                          <BookIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-serif font-bold text-xs text-slate-900 line-clamp-2 leading-tight">
                          {book.title}
                        </h4>
                      </div>
                      <div className="pt-2 border-t border-stone-100">
                        <p className="text-[10px] text-slate-500 line-clamp-1 font-medium">{book.author}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Book Detail Modal */}
            {selectedBook && (
              <div
                onClick={() => setSelectedBook(null)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <div
                  onClick={e => e.stopPropagation()}
                  className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-white border border-stone-200 text-slate-900 shadow-2xl space-y-5 animate-fadeIn"
                >
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
                        {selectedBook.category}
                      </span>
                      <span className="text-xs text-slate-400">{selectedBook.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 leading-snug">
                      {selectedBook.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600">By {selectedBook.author}</p>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed text-slate-600">
                    <p>{selectedBook.summary}</p>
                    
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                      <p className="font-bold uppercase tracking-wider text-[10px] text-amber-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Core Relational Takeaway</span>
                      </p>
                      <p className="font-medium text-slate-800">{selectedBook.takeaway}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                      <p className="font-bold uppercase tracking-wider text-[10px] text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Daily Actionable Exercise</span>
                      </p>
                      <p className="font-medium text-slate-800">{selectedBook.actionItem}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 1: WEEKLY CHECK-IN (HARMONY SCORING & TIERED HEART SEAL)  */}
        {/* ================================================================ */}
        {activeTab === 'checkin' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Card */}
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                    Module 01 • Partnership Diagnostic
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                    20-Point Weekly Harmony Check-In
                  </h2>
                  <p className={`text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed ${themeMutedText}`}>
                    Rate your shared partnership experience over the past 7 days across the 20 cardinal relationship principles. Complete all items to reveal your crystalline seal tier.
                  </p>
                </div>
                <div className="text-right sm:border-l sm:pl-6 border-indigo-500/20 shrink-0">
                  <div className="text-2xl font-serif font-bold text-pink-500">
                    {checkInMetrics.score}%
                  </div>
                  <div className={`text-[11px] ${themeMutedText}`}>
                    {checkInMetrics.count} of 20 Answered
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-black/10 mt-6 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] transition-all duration-300"
                  style={{ width: `${(checkInMetrics.count / 20) * 100}%` }}
                />
              </div>
            </div>

            {/* Check-In Questions List */}
            {!checkInSubmitted ? (
              <div className="space-y-4">
                {TOP_20_ADVICE.map(principle => {
                  const currentVal = checkInAnswers[principle.rank] || 0;
                  return (
                    <div
                      key={principle.rank}
                      className={`p-5 rounded-2xl border transition-all ${themeSubtleCard}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400">
                              #{principle.rank}
                            </span>
                            <span className={`text-[11px] font-semibold ${themeMutedText}`}>
                              {principle.category}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-stone-100">{principle.title}</h4>
                          <p className={`text-xs leading-relaxed ${themeMutedText}`}>
                            {principle.question}
                          </p>
                        </div>
                        <span className={`text-[10px] italic ${themeMutedText} shrink-0`}>
                          Ref: {principle.bookRef}
                        </span>
                      </div>

                      {/* 1-5 Rating Selector */}
                      <div className="flex items-center gap-2 pt-1">
                        <span className={`text-[11px] font-medium mr-1 ${themeMutedText}`}>Rating:</span>
                        {[1, 2, 3, 4, 5].map(rating => (
                          <button
                            key={rating}
                            onClick={() => setCheckInAnswers(prev => ({ ...prev, [principle.rank]: rating }))}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              currentVal === rating
                                ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md scale-105'
                                : isDark
                                ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                                : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                            }`}
                          >
                            {rating}
                          </button>
                        ))}
                        <span className={`text-[10px] ml-2 ${themeMutedText}`}>
                          {currentVal === 5 ? 'Exemplary' : currentVal === 1 ? 'Needs Repair' : ''}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setCheckInSubmitted(true)}
                    disabled={checkInMetrics.count === 0}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5A28FF] via-[#FF176B] to-[#FF8A00] text-white text-sm font-semibold shadow-xl hover:opacity-95 disabled:opacity-50 transition-all flex items-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>Calculate Harmony Seal</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Harmony Seal Tier Reveal Card */
              <div className={`rounded-3xl p-8 sm:p-12 border text-center space-y-6 ${themeSurface}`}>
                <div className="flex justify-center">
                  <TieredHeartIcon tier={checkInMetrics.tier} darkMode={isDark} size={150} />
                </div>
                <div className="max-w-md mx-auto space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-pink-500">
                    Calculated Result
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold">
                    {checkInMetrics.score}% Harmony Score
                  </h3>
                  <p className="text-sm font-medium capitalize text-amber-400">
                    {checkInMetrics.tier} Seal Achieved
                  </p>
                  <p className={`text-xs leading-relaxed pt-2 ${themeMutedText}`}>
                    {checkInMetrics.tier === 'diamond'
                      ? 'Exceptional partnership resonance. High emotional attunement, clear boundaries, and healthy conflict de-escalation are consistently demonstrated.'
                      : checkInMetrics.tier === 'gold'
                      ? 'Solid foundation of devotion and mutual honor. A few areas of emotional repair and non-interference can elevate your dynamic further.'
                      : checkInMetrics.tier === 'silver'
                      ? 'Moderate harmony with emerging friction. Consider revisiting boundaries, reducing unsolicited advice, and establishing gentle conflict startups.'
                      : 'Vital repair is needed. Focus on eliminating the Four Horsemen, prioritizing active listening, and creating emotional safety.'}
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => setCheckInSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-indigo-400/30 text-xs font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Adjust Ratings</span>
                  </button>
                  <button
                    onClick={() => {
                      const cleared = {};
                      TOP_20_ADVICE.forEach(a => { cleared[a.rank] = 0; });
                      setCheckInAnswers(cleared);
                      setCheckInSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-pink-500 text-white text-xs font-semibold shadow hover:bg-pink-600 transition-all"
                  >
                    Reset Check-In
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 2: CURATED QUOTES & LIBRARY                               */}
        {/* ================================================================ */}
        {activeTab === 'quotes' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                    Module 02 • Wisdom Archive
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                    Curated Quotes & Guiding Axioms
                  </h2>
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search quotes..."
                    value={quoteSearch}
                    onChange={e => setQuoteSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-full border border-indigo-400/20 text-xs bg-white/5 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
              </div>

              {/* Quote Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CURATED_QUOTES.filter(q =>
                  q.quote.toLowerCase().includes(quoteSearch.toLowerCase()) ||
                  q.source.toLowerCase().includes(quoteSearch.toLowerCase())
                ).map(q => {
                  const isFav = favoriteQuotes.includes(q.id);
                  return (
                    <div
                      key={q.id}
                      className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${themeSubtleCard}`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400">
                            {q.theme}
                          </span>
                          <button
                            onClick={() => {
                              if (isFav) setFavoriteQuotes(prev => prev.filter(x => x !== q.id));
                              else setFavoriteQuotes(prev => [...prev, q.id]);
                            }}
                            className="p-1 rounded-full hover:bg-white/10"
                            title="Bookmark Quote"
                          >
                            <Bookmark className={`w-4 h-4 ${isFav ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
                          </button>
                        </div>
                        <p className="text-sm font-serif italic leading-relaxed">
                          "{q.quote}"
                        </p>
                      </div>
                      <div className="pt-3 border-t border-indigo-500/10 flex items-center justify-between text-xs">
                        <span className="text-pink-500 font-semibold">{q.source}</span>
                        <span className={`text-[10px] ${themeMutedText}`}>{q.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 3: ADVICE COMPASS & DOS AND DON'TS                        */}
        {/* ================================================================ */}
        {activeTab === 'fivews' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                    Module 03 • Perspective Compass
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                    The 5 W’s & Behavioral Guidelines
                  </h2>
                </div>

                {/* Perspective Selector */}
                <div className="flex items-center gap-2">
                  {['female', 'male', 'relationship'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setFiveWsPerspective(tab)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                        fiveWsPerspective === tab
                          ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                          : isDark
                          ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                          : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Switcher: Compass vs Dos/Don'ts */}
              <div className="flex items-center gap-2 mb-6 border-b border-indigo-500/15 pb-3">
                <button
                  onClick={() => setFiveWsView('compass')}
                  className={`text-xs font-bold pb-1 transition-all ${
                    fiveWsView === 'compass'
                      ? 'text-pink-500 border-b-2 border-pink-500'
                      : `${themeMutedText} hover:text-stone-200`
                  }`}
                >
                  The 5 W’s Inquiry
                </button>
                <button
                  onClick={() => setFiveWsView('dos')}
                  className={`text-xs font-bold pb-1 transition-all ${
                    fiveWsView === 'dos'
                      ? 'text-pink-500 border-b-2 border-pink-500'
                      : `${themeMutedText} hover:text-stone-200`
                  }`}
                >
                  Dos and Don’ts Blueprint
                </button>
              </div>

              {/* View 1: 5 W's Items */}
              {fiveWsView === 'compass' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-serif font-bold">
                      {FIVE_WS_DATA[fiveWsPerspective]?.label}
                    </h3>
                    <p className={`text-xs mt-0.5 ${themeMutedText}`}>
                      {FIVE_WS_DATA[fiveWsPerspective]?.subtitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FIVE_WS_DATA[fiveWsPerspective]?.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border space-y-2.5 ${themeSubtleCard}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-pink-500/15 text-pink-400 font-bold text-xs flex items-center justify-center">
                            {item.type}
                          </span>
                          <h4 className="text-sm font-semibold">{item.question}</h4>
                        </div>
                        <ul className="space-y-1.5 pl-2">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs leading-relaxed flex items-start gap-2">
                              <span className="text-pink-500 font-bold">•</span>
                              <span className="opacity-90">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2: Dos and Don'ts */}
              {fiveWsView === 'dos' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FIVE_WS_DATA[fiveWsPerspective]?.dosAndDonts.map((row, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border space-y-3 ${themeSubtleCard}`}
                    >
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Do
                        </span>
                        <p className="text-xs font-medium text-emerald-300">{row.do}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
                          <X className="w-3.5 h-3.5" /> Don't
                        </span>
                        <p className="text-xs font-medium text-rose-300">{row.dont}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 4: BEHAVIOUR DIAGNOSTIC QUIZ                              */}
        {/* ================================================================ */}
        {activeTab === 'quiz' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                  Module 04 • Diagnostic Test
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                  Relationship Behaviour Diagnostic
                </h2>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${themeMutedText}`}>
                  Explore concrete scenarios to uncover behavioral patterns and receive recommended literature prescriptions.
                </p>
              </div>

              {!quizSubmitted ? (
                <div className="space-y-6">
                  {BEHAVIOUR_QUIZ_QUESTIONS.map(q => {
                    const selected = quizAnswers[q.id];
                    return (
                      <div
                        key={q.id}
                        className={`p-6 rounded-2xl border space-y-3 ${themeSubtleCard}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                            {q.dimension}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-stone-100">{q.scenario}</h4>
                        <div className="space-y-2 pt-1">
                          {q.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: opt }))}
                              className={`w-full text-left p-3.5 rounded-xl border text-xs leading-relaxed transition-all ${
                                selected?.text === opt.text
                                  ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white border-pink-400 font-semibold shadow-md'
                                  : isDark
                                  ? 'bg-white/5 border-white/5 hover:bg-white/10 text-stone-200'
                                  : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-slate-700'
                              }`}
                            >
                              {opt.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                  <div className="pt-2 flex justify-center">
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      disabled={Object.keys(quizAnswers).length < BEHAVIOUR_QUIZ_QUESTIONS.length}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-sm font-semibold shadow-md disabled:opacity-40 transition-all"
                    >
                      Analyze Diagnostic Results
                    </button>
                  </div>
                </div>
              ) : (
                /* Diagnostic Report */
                <div className="space-y-6">
                  <div className={`p-6 rounded-2xl border text-center space-y-3 ${themeSubtleCard}`}>
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-2xl font-serif font-bold">
                      Diagnostic Profile: {quizMetrics.pct}% Resilience
                    </h3>
                    <p className={`text-xs max-w-lg mx-auto leading-relaxed ${themeMutedText}`}>
                      Below are tailored clinical book prescriptions based on your responses to individual scenarios.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {BEHAVIOUR_QUIZ_QUESTIONS.map(q => {
                      const ans = quizAnswers[q.id];
                      return (
                        <div
                          key={q.id}
                          className={`p-5 rounded-2xl border space-y-2 ${themeSubtleCard}`}
                        >
                          <span className="text-[10px] font-bold uppercase text-pink-400">
                            {q.dimension}
                          </span>
                          <h4 className="text-sm font-bold">{ans.diagnosis}</h4>
                          <p className={`text-xs ${themeMutedText}`}>Selected: "{ans.text}"</p>
                          <div className="pt-2 border-t border-indigo-500/10 text-xs flex items-center justify-between">
                            <span className="font-semibold text-amber-400">Prescribed Reading:</span>
                            <span className="italic">{ans.prescription}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="px-6 py-2.5 rounded-full border border-indigo-400/30 text-xs font-semibold hover:bg-white/5 transition-all"
                    >
                      Retake Behaviour Diagnostic
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 5: RUBIES (TRAIT DECK)                                    */}
        {/* ================================================================ */}
        {activeTab === 'flags' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border text-center ${themeSurface}`}>
              <div className="max-w-md mx-auto mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                  Module 05 • Rubies Trait Deck
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                  Green & Black Behavioral Rubies
                </h2>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${themeMutedText}`}>
                  Evaluate relational habits. Radiant green rubies indicate psychological safety; fractured black rubies signal corrosive hazards.
                </p>
              </div>

              {currentFlagIndex < FLAGS_DECK.length ? (
                <div className="max-w-md mx-auto space-y-6">
                  {/* Trait Card */}
                  <div
                    className={`p-8 rounded-3xl border shadow-xl transition-all duration-300 ${themeSubtleCard}`}
                  >
                    <div className="flex justify-center mb-4">
                      {FLAGS_DECK[currentFlagIndex].flagType === 'green' ? (
                        <RadiantGreenRubyIcon size={64} />
                      ) : (
                        <FracturedBlackRubyIcon size={64} />
                      )}
                    </div>
                    <div className="space-y-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          FLAGS_DECK[currentFlagIndex].flagType === 'green'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {FLAGS_DECK[currentFlagIndex].flagType.toUpperCase()} RUBY • {FLAGS_DECK[currentFlagIndex].gender}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-stone-100">
                        {FLAGS_DECK[currentFlagIndex].trait}
                      </h3>
                      <p className={`text-xs leading-relaxed ${themeMutedText}`}>
                        "{FLAGS_DECK[currentFlagIndex].description}"
                      </p>
                      <div className="pt-3 border-t border-indigo-500/10 text-[11px] leading-relaxed text-left text-amber-300">
                        <strong>Why it matters:</strong> {FLAGS_DECK[currentFlagIndex].whyItMatters}
                      </div>
                    </div>
                  </div>

                  {/* Swipe / Action Buttons */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setCurrentFlagIndex(prev => prev + 1)}
                      className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-stone-300 transition-all"
                    >
                      Pass Card
                    </button>
                    <button
                      onClick={() => {
                        setAcknowledgedFlags(prev => [...prev, FLAGS_DECK[currentFlagIndex].id]);
                        setCurrentFlagIndex(prev => prev + 1);
                      }}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold shadow hover:opacity-95 transition-all flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Acknowledge & Save</span>
                    </button>
                  </div>
                  <p className={`text-[11px] ${themeMutedText}`}>
                    Card {currentFlagIndex + 1} of {FLAGS_DECK.length}
                  </p>
                </div>
              ) : (
                <div className="py-8 space-y-4 max-w-sm mx-auto">
                  <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-400 inline-block">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">Deck Completed</h3>
                  <p className={`text-xs ${themeMutedText}`}>
                    You acknowledged {acknowledgedFlags.length} traits in this run. Review them anytime to maintain relational clarity.
                  </p>
                  <button
                    onClick={() => {
                      setCurrentFlagIndex(0);
                      setAcknowledgedFlags([]);
                    }}
                    className="px-6 py-2.5 rounded-full bg-pink-500 text-white text-xs font-semibold shadow"
                  >
                    Restart Deck
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 6: EMOTION ATLAS                                          */}
        {/* ================================================================ */}
        {activeTab === 'emotions' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                  Module 06 • Atlas of Heart & Mind
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                  Relational Emotion Atlas
                </h2>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${themeMutedText}`}>
                  Examine how fundamental emotional currents trigger masculine and feminine nervous systems differently, along with concrete soothing actions.
                </p>
              </div>

              {/* Emotion Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
                {EMOTIONS_DECK.map(e => (
                  <button
                    key={e.id}
                    onClick={() => setSelectedEmotionId(e.id)}
                    className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedEmotionId === e.id
                        ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                        : isDark
                        ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                        : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                    }`}
                  >
                    #{e.number} {e.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Selected Emotion Deep Dive */}
              {(() => {
                const emotion = EMOTIONS_DECK.find(e => e.id === selectedEmotionId) || EMOTIONS_DECK[0];
                return (
                  <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${themeSubtleCard}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-500/15 pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                          {emotion.part}
                        </span>
                        <h3 className="text-2xl font-serif font-bold mt-0.5">{emotion.name}</h3>
                      </div>
                      <span className={`text-xs ${themeMutedText}`}>
                        Micro-cue: <em>{emotion.microSign}</em>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-stone-200">
                      {emotion.trigger}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Masculine Dynamic */}
                      <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                        <span className="text-[11px] font-bold uppercase text-blue-400 tracking-wider">
                          Masculine Processing
                        </span>
                        <div className="text-xs space-y-1 leading-relaxed">
                          <p><strong className="text-rose-400">Escalated by:</strong> {emotion.menFactors.increase}</p>
                          <p><strong className="text-emerald-400">Calmed by:</strong> {emotion.menFactors.decrease}</p>
                        </div>
                      </div>

                      {/* Feminine Dynamic */}
                      <div className="p-5 rounded-2xl bg-pink-500/10 border border-pink-500/20 space-y-2">
                        <span className="text-[11px] font-bold uppercase text-pink-400 tracking-wider">
                          Feminine Processing
                        </span>
                        <div className="text-xs space-y-1 leading-relaxed">
                          <p><strong className="text-rose-400">Escalated by:</strong> {emotion.womenFactors.increase}</p>
                          <p><strong className="text-emerald-400">Calmed by:</strong> {emotion.womenFactors.decrease}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 7: LEXICON OF LOVE                                        */}
        {/* ================================================================ */}
        {activeTab === 'lexicon' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                    Module 07 • Cross-Cultural Linguistics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                    Lexicon of Love
                  </h2>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${themeMutedText}`}>
                    Untranslatable words from around the globe capturing nuanced states of intimacy and devotion.
                  </p>
                </div>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={lexiconSearch}
                    onChange={e => setLexiconSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-full border border-indigo-400/20 text-xs bg-white/5 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
              </div>

              {/* Terms Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LOVE_TERMS_LEXICON.filter(t =>
                  t.term.toLowerCase().includes(lexiconSearch.toLowerCase()) ||
                  t.origin.toLowerCase().includes(lexiconSearch.toLowerCase()) ||
                  t.definition.toLowerCase().includes(lexiconSearch.toLowerCase())
                ).map(item => (
                  <div
                    key={item.id}
                    className={`p-6 rounded-3xl border space-y-2.5 ${themeSubtleCard}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        {item.origin}
                      </span>
                      <span className={`text-[10px] italic ${themeMutedText}`}>
                        /{item.phonetics}/
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-pink-400">
                      {item.term}
                    </h3>
                    <p className="text-xs leading-relaxed text-stone-200">
                      {item.definition}
                    </p>
                    <div className="pt-2 border-t border-indigo-500/10">
                      <span className="text-[10px] font-semibold text-indigo-300">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* MODULE 8: EMOTIONAL PERSONA ARCHETYPES                           */}
        {/* ================================================================ */}
        {activeTab === 'persona' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-6 sm:p-8 border ${themeSurface}`}>
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                  Module 08 • Personality Archetypes
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">
                  Discover Your Crystalline Archetype
                </h2>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${themeMutedText}`}>
                  Select your relational archetype to view your crystal geometry, signature strengths, vulnerabilities, and recommended practices.
                </p>
              </div>

              {/* Archetype Selector Tabs */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
                {PERSONA_ARCHETYPES.map(p => (
                  <button
                    key={p.type}
                    onClick={() => setSelectedPersonaType(p.type)}
                    className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                      selectedPersonaType === p.type
                        ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                        : isDark
                        ? 'bg-white/5 hover:bg-white/10 text-stone-300'
                        : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                    }`}
                  >
                    {p.title.split(' ')[1] || p.type}
                  </button>
                ))}
              </div>

              {/* Detailed Archetype Display */}
              {(() => {
                const persona = PERSONA_ARCHETYPES.find(p => p.type === selectedPersonaType) || PERSONA_ARCHETYPES[0];
                return (
                  <div className={`p-8 rounded-3xl border space-y-6 ${themeSubtleCard}`}>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="shrink-0 p-4 rounded-3xl bg-black/20 border border-white/5 flex items-center justify-center">
                        <PersonaGemIcon type={persona.type} size={110} />
                      </div>
                      <div className="text-center sm:text-left space-y-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
                          {persona.gemColor} Facet
                        </span>
                        <h3 className="text-2xl font-serif font-bold">{persona.title}</h3>
                        <p className={`text-xs italic font-serif ${themeMutedText}`}>
                          "{persona.motto}"
                        </p>
                        <p className="text-xs text-amber-300 font-medium pt-1">
                          Signature: {persona.signature}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          Cardinal Strengths
                        </span>
                        <ul className="text-xs space-y-1 text-stone-200">
                          {persona.strengths.map((s, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-emerald-400 font-bold">✓</span> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                          Vulnerabilities & Blindspots
                        </span>
                        <ul className="text-xs space-y-1 text-stone-200">
                          {persona.blindspots.map((b, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-rose-400 font-bold">⚠</span> {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                        Growth Prescription
                      </span>
                      <p className="text-xs leading-relaxed text-stone-200 font-medium">
                        {persona.recommendation}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </main>

      {/* ================================================================ */}
      {/* FOOTER                                                           */}
      {/* ================================================================ */}
      <footer
        className={`border-t py-6 px-4 sm:px-6 mt-12 transition-colors ${
          isDark
            ? 'border-indigo-500/20 bg-[#08071E]/90 text-indigo-200/60'
            : 'border-stone-200 bg-white/80 text-slate-500'
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <FacetedRubyLogo
              colorIndex={rubyColorIndex}
              darkMode={isDark}
              size={26}
              onClick={cycleRandomRubyColor}
            />
            <span className="font-semibold text-stone-200">Ruby Home</span>
            <span className="opacity-50">•</span>
            <span>Conscious Union & Relationship Sanctuary</span>
          </div>
          <div className="text-[11px] opacity-75">
            20 Principles • 30 Reference Texts • Dynamic Safari Header Theme Sync
          </div>
        </div>
      </footer>
    </div>
  );
}