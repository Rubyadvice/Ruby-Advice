import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Heart,
  Sparkles,
  Compass,
  BookOpen,
  CheckCircle2,
  X,
  Activity,
  Scale,
  Gem,
  Layers,
  Eye,
  Waves,
  UserCircle,
  Link,
  MessageSquare,
  Gift,
  Users,
  Smile,
  Award,
  Key,
  ArrowUp,
  Sun,
  Moon,
  ChevronDown,
  RotateCcw
} from 'lucide-react';

// ============================================================================
// 9 NEON FACETED GEMSTONE PALETTES (Click Gem to Cycle)
// ============================================================================

export const RUBY_GEM_PALETTES = [
  {
    id: 'gem-magenta',
    name: 'Magenta Ruby (Top-Left Default)',
    glow: 'rgba(255, 16, 128, 0.65)',
    borderGlow: '#FF1080',
    appBgDark: '#0D0518',
    appBgLight: '#FFF0F7',
    c1: '#FF40B0',
    c2: '#FF007F',
    c3: '#D00068',
    c4: '#750040',
    c5: '#3D0022',
    strokeColor: '#FFA3DF'
  },
  {
    id: 'gem-sapphire',
    name: 'Sapphire Cobalt (Top-Center)',
    glow: 'rgba(0, 110, 255, 0.65)',
    borderGlow: '#0066FF',
    appBgDark: '#040B1D',
    appBgLight: '#F0F6FF',
    c1: '#60A5FA',
    c2: '#0066FF',
    c3: '#0040C7',
    c4: '#002580',
    c5: '#001447',
    strokeColor: '#BAE6FD'
  },
  {
    id: 'gem-emerald',
    name: 'Neon Emerald (Top-Right)',
    glow: 'rgba(0, 235, 120, 0.65)',
    borderGlow: '#00E676',
    appBgDark: '#03140C',
    appBgLight: '#F0FDF4',
    c1: '#6EE7B7',
    c2: '#00E676',
    c3: '#059669',
    c4: '#047857',
    c5: '#022C22',
    strokeColor: '#D1FAE5'
  },
  {
    id: 'gem-crimson',
    name: 'Crimson Scarlet (Middle-Left)',
    glow: 'rgba(255, 20, 60, 0.65)',
    borderGlow: '#FF1744',
    appBgDark: '#170408',
    appBgLight: '#FFF1F2',
    c1: '#FDA4AF',
    c2: '#FF1744',
    c3: '#D50000',
    c4: '#880000',
    c5: '#450000',
    strokeColor: '#FFE4E6'
  },
  {
    id: 'gem-cyan',
    name: 'Aqua Cyan (Middle-Center)',
    glow: 'rgba(0, 230, 255, 0.65)',
    borderGlow: '#00E5FF',
    appBgDark: '#03151D',
    appBgLight: '#ECFEFF',
    c1: '#67E8F9',
    c2: '#00E5FF',
    c3: '#0891B2',
    c4: '#0E7490',
    c5: '#083344',
    strokeColor: '#CFFAFE'
  },
  {
    id: 'gem-amethyst',
    name: 'Amethyst Violet (Middle-Right)',
    glow: 'rgba(175, 80, 255, 0.65)',
    borderGlow: '#A855F7',
    appBgDark: '#120521',
    appBgLight: '#FAF5FF',
    c1: '#D8B4FE',
    c2: '#A855F7',
    c3: '#7E22CE',
    c4: '#581C87',
    c5: '#3B0764',
    strokeColor: '#F3E8FF'
  },
  {
    id: 'gem-gold',
    name: 'Champagne Gold (Bottom-Left)',
    glow: 'rgba(255, 185, 30, 0.65)',
    borderGlow: '#F59E0B',
    appBgDark: '#1A1104',
    appBgLight: '#FFFBEB',
    c1: '#FDE68A',
    c2: '#F59E0B',
    c3: '#B45309',
    c4: '#78350F',
    c5: '#451A03',
    strokeColor: '#FEF3C7'
  },
  {
    id: 'gem-diamond-ice',
    name: 'Platinum Ice Diamond (Bottom-Center)',
    glow: 'rgba(220, 235, 255, 0.65)',
    borderGlow: '#E2E8F0',
    appBgDark: '#0B0F19',
    appBgLight: '#F8FAFC',
    c1: '#FFFFFF',
    c2: '#E2E8F0',
    c3: '#94A3B8',
    c4: '#475569',
    c5: '#1E293B',
    strokeColor: '#FFFFFF'
  },
  {
    id: 'gem-rose-gold',
    name: 'Rose Coral (Bottom-Right)',
    glow: 'rgba(255, 120, 150, 0.65)',
    borderGlow: '#FB7185',
    appBgDark: '#18070F',
    appBgLight: '#FFF1F4',
    c1: '#FECDD3',
    c2: '#FB7185',
    c3: '#E11D48',
    c4: '#9F1239',
    c5: '#4C0519',
    strokeColor: '#FFE4E6'
  }
];

function FacetedRubyLogo({
  colorIndex = 0,
  darkMode,
  size = 44,
  onClick
}: {
  colorIndex?: number;
  darkMode?: boolean;
  size?: number;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const p = RUBY_GEM_PALETTES[colorIndex] || RUBY_GEM_PALETTES[0];

  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size }}
      title="Click to cycle ruby gem color!"
      className={`relative rounded-[24%] flex items-center justify-center cursor-pointer select-none overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 group shrink-0 ${
        darkMode ? 'border' : 'border shadow-sm'
      }`}
    >
      <div
        className="absolute inset-0 rounded-[24%] transition-colors duration-500"
        style={{
          backgroundColor: darkMode ? p.appBgDark : p.appBgLight,
          borderColor: p.borderGlow,
          boxShadow: `0 0 14px ${p.glow}`
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

function TieredHeartIcon({ tier = 'bronze', darkMode, size = 140 }: { tier?: string; darkMode?: boolean; size?: number }) {
  const tColors: Record<string, any> = {
    bronze: { glow: 'from-orange-700/25 via-amber-600/20 to-yellow-500/15', p1: '#803300', p2: '#994500', p3: '#4D2200', p4: '#BF5500', p5: '#E67300', p6: '#CC6600', p7: '#B35900', p8: '#663300', p9: '#FFCC99' },
    silver: { glow: 'from-slate-500/25 via-gray-400/20 to-zinc-300/15', p1: '#637385', p2: '#7A8A9C', p3: '#333F4D', p4: '#8A99A8', p5: '#B4C2D1', p6: '#92A2B3', p7: '#A2B2C2', p8: '#4A5768', p9: '#E8F0F8' },
    gold: { glow: 'from-yellow-600/25 via-amber-500/20 to-yellow-400/15', p1: '#997300', p2: '#B38600', p3: '#4D3900', p4: '#CC9900', p5: '#FFD700', p6: '#E6B800', p7: '#FFC125', p8: '#664C00', p9: '#FFF0B3' },
    diamond: { glow: 'from-sky-400/25 via-blue-300/20 to-cyan-200/15', p1: '#80B3CC', p2: '#99C2D6', p3: '#4D7A94', p4: '#B3D9EB', p5: '#F2FAFF', p6: '#CCE6F5', p7: '#D9F0FF', p8: '#6696B3', p9: '#FFFFFF' }
  };
  const c = tColors[tier] || tColors.bronze;

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[24%] flex items-center justify-center shadow-2xl transition-all duration-500 select-none overflow-hidden ${
        darkMode ? 'bg-[#06061A] border border-white/10 shadow-black/70' : 'bg-[#F7F5F0] border border-stone-200/90 shadow-stone-300/50'
      }`}
    >
      <div className={`absolute inset-3 rounded-full bg-gradient-to-tr ${c.glow} blur-xl pointer-events-none`} />
      <svg viewBox="0 0 160 160" className="w-[84%] h-[84%] relative z-10 drop-shadow-lg" fill="none">
        <defs>
          <clipPath id={`heartClip-${tier}`}>
            <path d="M80 138 C80 138 18 98 18 55 C18 30 37 18 56 18 C69 18 77 26 80 35 C83 26 91 18 104 18 C123 18 142 30 142 55 C142 98 80 138 80 138 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#heartClip-${tier})`}>
          <polygon points="18,45 42,22 65,38 48,68" fill={c.p1} opacity="0.7" />
          <polygon points="65,38 80,35 80,58 48,68" fill={c.p2} opacity="0.85" />
          <polygon points="18,45 48,68 32,96 16,72" fill={c.p3} />
          <polygon points="48,82 80,58 80,94 64,116" fill={c.p3} opacity="0.88" />
          <polygon points="32,98 48,82 64,116 55,124" fill={c.p4} opacity="0.85" />
          <polygon points="104,18 134,34 124,62 92,40" fill={c.p5} opacity="0.55" />
          <polygon points="134,34 142,58 126,94 124,62" fill={c.p6} opacity="0.75" />
          <polygon points="80,94 108,84 96,118 80,138" fill={c.p7} opacity="0.65" />
          <polygon points="80,94 80,138 64,124" fill={c.p8} opacity="0.85" />
          <polygon points="34,26 48,20 42,33 28,38" fill="#FFFFFF" opacity="0.88" />
          <polygon points="116,23 130,33 123,39 110,27" fill="#FFFFFF" opacity="0.92" />
        </g>
        <path d="M80 138 C80 138 18 98 18 55 C18 30 37 18 56 18 C69 18 77 26 80 35 C83 26 91 18 104 18 C123 18 142 30 142 55 C142 98 80 138 80 138 Z" stroke={c.p9} strokeWidth="1.2" strokeOpacity="0.45" />
      </svg>
    </div>
  );
}

function RadiantGreenRubyIcon({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} className="drop-shadow-[0_0_16px_rgba(16,185,129,0.55)] select-none shrink-0" fill="none">
      <defs>
        <linearGradient id="emeraldCrownL" x1="18" y1="20" x2="80" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="45%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <clipPath id="greenRubyClip">
          <path d="M80 140 C80 140 16 98 16 54 C16 28 36 16 56 16 C69 16 77 25 80 35 C83 25 91 16 104 16 C124 16 144 28 144 54 C144 98 80 140 80 140 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#greenRubyClip)">
        <path d="M10 10 H80 V145 H10 Z" fill="url(#emeraldCrownL)" />
        <path d="M80 10 H150 V145 H80 Z" fill="#059669" />
        <polygon points="80,35 116,58 80,104 44,58" fill="#34D399" />
      </g>
      <path d="M80 140 C80 140 16 98 16 54 C16 28 36 16 56 16 C69 16 77 25 80 35 C83 25 91 16 104 16 C124 16 144 28 144 54 C144 98 80 140 80 140 Z" stroke="#6EE7B7" strokeWidth="1.5" strokeOpacity="0.7" />
    </svg>
  );
}

function FracturedBlackRubyIcon({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} className="drop-shadow-[0_0_16px_rgba(99,102,241,0.5)] select-none shrink-0" fill="none">
      <path d="M77 139 C77 139 15 97 15 54 C15 28 35 16 55 16 C67 16 74 24 77 34 L73 53 L80 72 L72 95 L78 115 Z" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.4" />
      <path d="M83 139 C83 139 145 97 145 54 C145 28 125 16 105 16 C93 16 86 24 83 34 L79 53 L86 72 L78 95 L84 115 Z" fill="#1E293B" stroke="#F43F5E" strokeWidth="1.4" />
      <path d="M80 32 L75 53 L83 72 L75 95 L81 115 L80 140" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
}

function PersonaGemIcon({ type, size = 120 }: { type: string; size?: number }) {
  if (type === 'Passion') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_15px_rgba(255,0,50,0.65)]">
        <polygon points="50,10 90,50 50,90 10,50" fill="#FF1744" stroke="#FDA4AF" strokeWidth="2" />
        <polygon points="50,24 76,50 50,76 24,50" fill="#D50000" stroke="#FFE4E6" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 'Vigilant') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_15px_rgba(150,0,255,0.65)]">
        <path d="M20,20 Q50,10 80,20 V50 Q80,80 50,95 Q20,80 20,50 Z" fill="#7E22CE" stroke="#D8B4FE" strokeWidth="2" />
        <path d="M32,30 Q50,22 68,30 V50 Q68,72 50,83 Q32,72 32,50 Z" fill="#A855F7" stroke="#F3E8FF" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 'Empathy') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_15px_rgba(0,150,255,0.65)]">
        <path d="M50,10 C50,10 15,55 15,70 A35,35 0 0,0 85,70 C85,55 50,10 50,10 Z" fill="#0066FF" stroke="#BAE6FD" strokeWidth="2" />
        <path d="M50,28 C50,28 28,58 28,68 A22,22 0 0,0 72,68 C72,58 50,28 50,28 Z" fill="#38BDF8" stroke="#E0F2FE" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 'Purity') {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_15px_rgba(0,220,120,0.65)]">
        <circle cx="50" cy="50" r="38" fill="#059669" stroke="#6EE7B7" strokeWidth="2" />
        <circle cx="50" cy="50" r="24" fill="#10B981" stroke="#D1FAE5" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-[0_0_15px_rgba(245,158,11,0.65)]">
      <rect x="16" y="16" width="68" height="68" rx="16" fill="#D97706" stroke="#FDE68A" strokeWidth="2" />
      <rect x="28" y="28" width="44" height="44" rx="10" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="1" />
    </svg>
  );
}

// ============================================================================
// DATA REPOSITORIES
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

const FIVE_WS_DATA: Record<string, any> = {
  female: {
    label: "The Female Perspective: Choosing a Partner",
    subtitle: "Clarity, discernment, and emotional wisdom when selecting a life partner",
    items: [
      { type: "Who", question: "Who is actually right for me?", points: ["Eliminate shallow dealbreakers like height and prioritize emotional maturity, kindness, and fidelity.", "Shared long-term values trump temporary infatuation.", "Chasing an obsessive high-chemistry spark often blinds you to destructive behaviors."] },
      { type: "What", question: "What are their true intentions?", points: ["A partner with genuine intentions expresses goals transparently.", "Lack of effort, ambiguous signals, or unreliability indicate low romantic commitment.", "Actions always outshine verbal promises."] }
    ]
  },
  male: {
    label: "The Male Perspective: Generating Attraction",
    subtitle: "Authentic confidence, grounded leadership, and overcoming people-pleasing",
    items: [
      { type: "Who", question: "Who do I need to become?", points: ["Discard the people-pleasing paradigm; living with integrity and self-respect attracts authentic bonds.", "True confidence is forged by unashamed vulnerability rather than fabricated personas.", "Prioritize your highest life mission above constant validation."] },
      { type: "What", question: "What triggers attraction?", points: ["Women respond to emotional presence, grounded leadership, and calm stability during stressful moments.", "Maintain polarity and breathing room instead of smothering."] }
    ]
  },
  relationship: {
    label: "The Relationship Perspective: Maintaining & Growing",
    subtitle: "Conscious partnership, emotional repair, and enduring shared meaning",
    items: [
      { type: "Who", question: "Who are we as a unified team?", points: ["Treat your partner as an autonomous individual worthy of dignity and respect.", "Balance intimacy with personal hobbies and space to preserve polarity."] },
      { type: "What", question: "What is our conflict resolution style?", points: ["Replace harsh criticism with soft startups and gentle requests.", "Look beneath surface anger to address underlying attachment fears."] }
    ]
  }
};

const FLAGS_DECK = [
  { id: "w-rf-1", gender: "Women", flagType: "red", trait: "Insecurity & Neediness", description: "Highly needy, insecure, devious, or constantly seeking external validation." },
  { id: "w-gf-1", gender: "Women", flagType: "green", trait: "Mental Health & Positivity", description: "Cheerful, upbeat, avoids addictions, and maintains emotional stability and grace." },
  { id: "m-rf-1", gender: "Men", flagType: "red", trait: "Transactional Attitudes", description: "Keeps a tit-for-tat accounting of who does what and who owes more in the relationship." },
  { id: "m-gf-1", gender: "Men", flagType: "green", trait: "The 'Tender Defender'", description: "Balances being empathic and kind with being assertive, protective, and confident." },
  { id: "m-rf-2", gender: "Men", flagType: "red", trait: "The Four Horsemen in Conflict", description: "Escalates arguments using criticism, contempt (sarcasm, eye-rolling), defensiveness, and stonewalling." },
  { id: "w-gf-2", gender: "Women", flagType: "green", trait: "Tenderness & Empathy", description: "Displays real altruism, kindness, and deep active listening when a partner is vulnerable." }
];

const CURATED_QUOTES = [
  { id: "q1", quote: "True empathy means stepping into your partner's internal world and validating their feelings—especially when you disagree—without rushing to fix the problem.", source: "Synthesis of Hold Me Tight & The Seven Principles", theme: "Empathy & Listening", notebook: "Relationships Notebook" },
  { id: "q2", quote: "Attraction thrives in breathing room. Let your relationship be a sacred complement to your life's mission, rather than the entirety of your identity.", source: "Synthesis of The Way of the Superior Man & Models", theme: "Purpose & Space", notebook: "Romance (Male Perspective)" },
  { id: "q3", quote: "Stop forming a 'home-improvement committee' or trying to solve every emotion with pure logic; unconditional acceptance is the soil where intimacy grows.", source: "Core Principle — Non-Interference", theme: "Unconditional Acceptance", notebook: "Relationship Dynamics" },
  { id: "q4", quote: "Anxious hearts often mistake the adrenaline of an activated attachment system and mixed signals for deep, passionate love.", source: "Synthesis of Attached", theme: "Attachment & Clarity", notebook: "Relationships Notebook" }
];

const REFERENCE_BOOKS = [
  { title: "The Seven Principles for Making Marriage Work", author: "John M. Gottman and Nan Silver", year: "1999", notebook: "Relationships Notebook", summary: "Revolutionary guide identifying specific behaviors that predict relationship success or failure.", takeaway: "Eliminate the Four Horsemen (criticism, contempt, defensiveness, stonewalling), build Love Maps, and accept influence.", icon: Heart },
  { title: "Emotions Revealed: Recognizing Faces and Feelings to Improve Communication", author: "Paul Ekman", year: "2003", notebook: "Relationships Notebook", summary: "Attune to subtle emotional expressions to foster empathy and self-mastery.", takeaway: "Attune to subtle emotional expressions and involuntary micro-expressions to foster deep empathy and emotional self-mastery.", icon: Smile },
  { title: "Attached: The New Science of Adult Attachment", author: "Amir Levine and Rachel Heller", year: "2010", notebook: "Relationships Notebook", summary: "Explores how secure, anxious, and avoidant attachment styles dictate adult romance.", takeaway: "Distinguish anxious, avoidant, and secure attachment styles; stop confusing attachment anxiety with passion.", icon: Link },
  { title: "Hold Me Tight: Seven Conversations for a Lifetime of Love", author: "Sue Johnson", year: "2008", notebook: "Relationships Notebook", summary: "Groundbreaking EFT guide teaching couples to reveal vulnerable primary emotions.", takeaway: "Slow down negative cycles to uncover vulnerable primary emotions like fear and sadness beneath anger.", icon: Users },
  { title: "Crucial Conversations: Tools for Talking When Stakes Are High", author: "Kerry Patterson et al.", year: "2002", notebook: "Relationships Notebook", summary: "Tactical tools for maintaining psychological safety during high-stakes emotional disagreements.", takeaway: "Maintain psychological safety and dialogue when emotions run strong and opinions differ.", icon: MessageSquare },
  { title: "The 5 Love Languages: The Secret to Love That Lasts", author: "Gary Chapman", year: "1992", notebook: "Relationships Notebook", summary: "Identifies the five primary ways people express and receive affection.", takeaway: "Intentionally speak your spouse's primary love language to keep their emotional love tank full over the long term.", icon: Gift },
  { title: "The Way of the Superior Man", author: "David Deida", year: "1997", notebook: "Romance (Male Perspective)", summary: "Spiritual guide for men on living with purpose while embracing polarity.", takeaway: "Prioritize your highest life purpose, remain centered during emotional storms, and embrace masculine-feminine polarity.", icon: ArrowUp },
  { title: "Models: Attract Women Through Honesty", author: "Mark Manson", year: "2011", notebook: "Romance (Male Perspective)", summary: "True confidence comes from unashamed vulnerability and honest self-expression.", takeaway: "True confidence comes from unashamed vulnerability, non-neediness, and honest self-expression.", icon: Eye },
  { title: "The Art of Loving", author: "Erich Fromm", year: "1956", notebook: "Relationships Notebook", summary: "Philosophical exploration framing love as an active art requiring discipline.", takeaway: "Frames love not merely as a feeling, but as a disciplined craft of care, responsibility, respect, and knowledge.", icon: Award },
  { title: "What Women Want: An Evidence-Based Guide", author: "Tucker Max and Geoffrey Miller", year: "2015", notebook: "Romance (Male Perspective)", summary: "Embody the 'Tender Defender'—combining kindness and strength.", takeaway: "Embody the 'Tender Defender'—combining genuine kindness and empathy with assertiveness and health.", icon: Key }
];

const BEHAVIOUR_QUIZ_QUESTIONS = [
  { id: "bq1", scenario: "When one of you is stressed and venting about a frustrating day, what usually happens?", dimension: "Empathy vs. Fixing", options: [{ label: "We interrupt with logical solutions or unsolicited advice on what should have been done.", lagScore: 3, points: 1 }, { label: "We listen for a minute, but quickly get impatient or change the topic.", lagScore: 2, points: 3 }, { label: "We listen deeply and validate feelings without trying to fix them.", lagScore: 0, points: 5 }] },
  { id: "bq2", scenario: "How have disagreements begun over the past two weeks?", dimension: "Conflict Startup & Repair", options: [{ label: "With sharp blame, eye-rolling, sarcasm, or shutting down.", lagScore: 3, points: 1 }, { label: "With defensiveness and keeping a scoreboard of who owes more effort.", lagScore: 2, points: 3 }, { label: "With a gentle startup and quick mutual repair attempts.", lagScore: 0, points: 5 }] }
];

const EMOTIONS_DECK = [
  { id: 1, number: "01", name: "Anger", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Feeling controlled or competence questioned.", decrease: "Retreating to their 'cave' to solve issues alone." }, womenFactors: { increase: "Feelings invalidated or dismissed.", decrease: "Talking through problems and feeling heard." } },
  { id: 2, number: "02", name: "Disgust", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Perceived emasculation.", decrease: "Vulnerability and charm." }, womenFactors: { increase: "Emotional unavailability.", decrease: "Emotional presence and active listening." } },
  { id: 3, number: "03", name: "Fear", part: "Part I: Basic Emotions", shortPart: "Basic Emotion", menFactors: { increase: "Sexual rejection or failure to protect.", decrease: "Achieving status and competence." }, womenFactors: { increase: "Emotional abandonment.", decrease: "Consistent emotional reassurance." } }
];

const LOVE_TERMS_LEXICON = [
  { id: 'lt-1', term: "Ya'aburnee", origin: "Arabic", category: "Global & Untranslatable Words", definition: "The hope that you will outlive your loved one because living without them would be unbearable." },
  { id: 'lt-2', term: "Koi No Yokan", origin: "Japanese", category: "Global & Untranslatable Words", definition: "The unspoken realization upon first meeting someone that you are destined to fall in love." },
  { id: 'lt-3', term: "Cwtch", origin: "Welsh", category: "Global & Untranslatable Words", definition: "A warm, affectionate hug that acts as a safe sanctuary for the other person." },
  { id: 'lt-4', term: "Geborgenheit", origin: "German", category: "Global & Untranslatable Words", definition: "A state of complete physical and emotional safety and trust shared with a partner." }
];

const PERSONA_ARCHETYPES: Record<string, { title: string; subtitle: string; color: string; description: string; advice: string }> = {
  Passion: {
    title: "The Crimson Flame (Passion)",
    subtitle: "High Intensity • Direct • Fiercely Devoted",
    color: "text-rose-500",
    description: "You experience romance with vibrant intensity and immediacy. When friction arises, you prefer confronting it head-on rather than letting tension linger in silence.",
    advice: "Balance your fiery candor with soft startups and breathing room so your partner feels invited rather than overwhelmed."
  },
  Vigilant: {
    title: "The Amethyst Sentinel (Vigilance)",
    subtitle: "Perceptive • Protective • Deeply Attuned to Risk",
    color: "text-purple-500",
    description: "You possess a heightened radar for subtle shifts in tone, micro-expressions, and relationship security. You guard the bond against unspoken threats.",
    advice: "Practice self-soothing and transparent requests so hyper-vigilance transforms into grounded trust."
  },
  Empathy: {
    title: "The Sapphire Vessel (Empathy)",
    subtitle: "Compassionate • Resonant • Deeply Validating",
    color: "text-blue-500",
    description: "You naturally step into your partner's emotional world and absorb their joys and sorrows as your own, creating a sanctuary of deep validation.",
    advice: "Maintain clear personal boundaries so you can hold space for your partner without losing your own emotional center."
  },
  Purity: {
    title: "The Emerald Sanctuary (Purity & Integrity)",
    subtitle: "Principled • Honest • Uncompromisingly Loyal",
    color: "text-emerald-500",
    description: "You anchor relationships in sacred standards, mutual respect, and alignment between words and actions. Integrity is your highest love language.",
    advice: "Temper high standards with grace and readiness to forgive minor human imperfections."
  },
  Equilibrium: {
    title: "The Golden Anchor (Equilibrium)",
    subtitle: "Centered • Stoic • Harmonizing Presence",
    color: "text-amber-500",
    description: "You bring calm stability and perspective during emotional storms, acting as the steady, unshakeable center of the partnership.",
    advice: "Ensure your calm composure never reads as emotional distance—share your inner vulnerabilities openly."
  }
};

const PERSONA_QUESTIONS = [
  { id: 1, archetype: "Passion", text: "When tension arises in my relationship, I feel a strong urge to address it immediately and intensely rather than waiting." },
  { id: 2, archetype: "Passion", text: "I thrive on strong romantic polarity, spark, and bold expressions of desire and devotion." },
  { id: 3, archetype: "Vigilant", text: "I quickly notice subtle changes in my partner's tone, texting cadence, or facial expressions and wonder what changed." },
  { id: 4, archetype: "Vigilant", text: "I mentally prepare for potential relationship challenges in advance to protect my heart and our bond." },
  { id: 5, archetype: "Empathy", text: "When my partner is hurting or stressed, I physically and emotionally feel their weight as if it were my own." },
  { id: 6, archetype: "Empathy", text: "My first instinct when my partner vents is to validate their feelings deeply rather than lecture or debate." },
  { id: 7, archetype: "Purity", text: "Broken promises, small inconsistencies, or poor manners immediately erode my sense of romantic safety." },
  { id: 8, archetype: "Purity", text: "I view commitment as a sacred covenant built on uncompromising honesty, dignity, and mutual self-discipline." },
  { id: 9, archetype: "Equilibrium", text: "During heated disagreements, I naturally stay composed, grounded, and focused on finding a calm middle way." },
  { id: 10, archetype: "Equilibrium", text: "I easily maintain my personal mission, hobbies, and inner peace without feeling needy or smothering." }
];

// ============================================================================
// MAIN APPLICATION
// ============================================================================

export default function App() {
  const [activeTab, setActiveTab] = useState('sanctuary');
  const [darkMode, setDarkMode] = useState(false);
  const [rubyColorIndex, setRubyColorIndex] = useState(0);
  const [selectedTableBook, setSelectedTableBook] = useState<any>(null);

  // Relationships Dropdown State
  const [relDropdownOpen, setRelDropdownOpen] = useState(false);
  const [relDropdownPinned, setRelDropdownPinned] = useState(false);
  const relDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<any>(null);

  // Check-In State
  const [checkInAnswers, setCheckInAnswers] = useState<Record<number, number>>(() => {
    const init: Record<number, number> = {};
    TOP_20_ADVICE.forEach(a => { init[a.rank] = 0; });
    return init;
  });
  const [checkInSubmitted, setCheckInSubmitted] = useState(false);

  // Behaviour Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Rubies Swipe State
  const [flagIndex, setFlagIndex] = useState(0);

  // 5 W's Tab State
  const [fiveWsTab, setFiveWsTab] = useState('female');

  // Restored Emotional Persona Quiz State
  const [personaAnswers, setPersonaAnswers] = useState<Record<number, number>>({});
  const [personaSubmitted, setPersonaSubmitted] = useState(false);
  const [selectedArchetypePreview, setSelectedArchetypePreview] = useState<string>('Empathy');

  const isDark = darkMode;

  const cycleRandomRubyColor = (e?: React.MouseEvent) => {
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
    const themeColor = isDark ? '#08071E' : '#F6F5F0';
    let metaTag = document.querySelector('meta[name="theme-color"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', themeColor);
  }, [isDark]);

  // Outside click & Escape handler for Relationships dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (relDropdownRef.current && !relDropdownRef.current.contains(e.target as Node)) {
        setRelDropdownOpen(false);
        setRelDropdownPinned(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setRelDropdownOpen(false);
        setRelDropdownPinned(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleRelMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setRelDropdownOpen(true);
  };

  const handleRelMouseLeave = () => {
    if (relDropdownPinned) return;
    closeTimeoutRef.current = setTimeout(() => {
      setRelDropdownOpen(false);
    }, 250);
  };

  const handleRelClick = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setRelDropdownOpen(prev => {
      const next = !prev;
      setRelDropdownPinned(next);
      return next;
    });
  };

  // Dynamic teasers on page refresh
  const randomTeasers = useMemo(() => {
    const quote = CURATED_QUOTES[Math.floor(Math.random() * CURATED_QUOTES.length)];
    const advice = TOP_20_ADVICE[Math.floor(Math.random() * TOP_20_ADVICE.length)];
    const quiz = BEHAVIOUR_QUIZ_QUESTIONS[Math.floor(Math.random() * BEHAVIOUR_QUIZ_QUESTIONS.length)];
    const flag = FLAGS_DECK[Math.floor(Math.random() * FLAGS_DECK.length)];
    const emotion = EMOTIONS_DECK[Math.floor(Math.random() * EMOTIONS_DECK.length)];
    const term = LOVE_TERMS_LEXICON[Math.floor(Math.random() * LOVE_TERMS_LEXICON.length)];
    return { quote, advice, quiz, flag, emotion, term };
  }, []);

  const relationshipModules = [
    { id: 'checkin', label: 'Weekly Check-In', icon: CheckCircle2, description: '20-point partnership harmony scoring' },
    { id: 'quotes', label: 'Quotes & Library', icon: BookOpen, description: 'Curated wisdom & reference books' },
    { id: 'fivews', label: 'Advice', icon: Compass, description: "5 W's perspective compass & Dos and Don'ts" },
    { id: 'quiz', label: 'Behaviour Quiz', icon: Activity, description: 'Relationship diagnostic & book prescriptions' },
    { id: 'flags', label: 'Rubies', icon: Gem, description: 'Swipe Black & Green behavioral rubies' },
    { id: 'emotions', label: 'Emotion Atlas', icon: Layers, description: 'Relational emotions fanned in decks' },
    { id: 'lexicon', label: 'Lexicon of Love', icon: Waves, description: 'Global & untranslatable love terms' },
    { id: 'persona', label: 'Emotional Persona', icon: UserCircle, description: 'Discover your crystalline emotional archetype' }
  ];

  const isRelationshipModuleActive = relationshipModules.some(m => m.id === activeTab);
  const currentRelationshipModule = relationshipModules.find(m => m.id === activeTab);

  const themeSurface = isDark
    ? 'bg-[#130F26]/95 border-indigo-500/25 text-stone-100 shadow-lg'
    : 'bg-[#FFFFFF] border-stone-200/90 text-slate-900 shadow-sm';
  const themeSubtleCard = isDark
    ? 'bg-[#1A1536]/90 border-indigo-400/20 text-stone-200'
    : 'bg-[#F8F6F2] border-stone-200/80 text-slate-800';
  const themeMutedText = isDark ? 'text-indigo-200/70' : 'text-slate-500';

  // Check-In Harmony Score
  const checkInScore = useMemo(() => {
    const scores = Object.values(checkInAnswers).filter(s => s > 0);
    if (scores.length === 0) return 0;
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round((sum / (scores.length * 5)) * 100);
  }, [checkInAnswers]);

  // Compute Dominant Emotional Persona from Quiz Answers
  const computedPersona = useMemo(() => {
    const totals: Record<string, number> = {
      Passion: 0,
      Vigilant: 0,
      Empathy: 0,
      Purity: 0,
      Equilibrium: 0
    };
    PERSONA_QUESTIONS.forEach(q => {
      const val = personaAnswers[q.id] || 0;
      totals[q.archetype] = (totals[q.archetype] || 0) + val;
    });
    let topKey = 'Empathy';
    let maxScore = -1;
    Object.entries(totals).forEach(([k, v]) => {
      if (v > maxScore) {
        maxScore = v;
        topKey = k;
      }
    });
    return { topKey, totals };
  }, [personaAnswers]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 flex flex-col selection:bg-pink-500 selection:text-white ${isDark ? 'bg-[#0A0818] text-stone-100' : 'bg-[#F8F6F2] text-[#141229]'}`}>
      {/* Top Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-[#08071E]/95 border-indigo-500/20' : 'bg-[#F6F5F0]/95 border-stone-200/90'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5 select-none">
            <FacetedRubyLogo colorIndex={rubyColorIndex} darkMode={isDark} size={44} onClick={cycleRandomRubyColor} />
            <div onClick={() => setActiveTab('sanctuary')} className="cursor-pointer group">
              <h1 className={`text-lg sm:text-xl font-serif font-bold tracking-tight transition-colors ${isDark ? 'text-stone-400' : 'text-neutral-600'}`}>
                Ruby Home
              </h1>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Light and Dark Mode"
            className={`px-4 py-2 rounded-full text-xs font-serif italic font-medium flex items-center gap-2 border shadow-sm transition-all active:scale-95 ${
              isDark
                ? 'bg-gradient-to-r from-stone-800/90 via-indigo-950/80 to-stone-800/90 text-stone-200 border-white/15 hover:border-white/25'
                : 'bg-gradient-to-r from-stone-100 via-rose-50/70 to-indigo-50/70 text-stone-600 border-stone-200/90 hover:from-stone-200/70 hover:to-indigo-100/60'
            }`}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300/90" /> : <Moon className="w-3.5 h-3.5 text-stone-500" />}
            <span>amor fati</span>
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-2.5">
          <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2.5 relative">
            <button
              onClick={() => {
                setActiveTab('sanctuary');
                setRelDropdownOpen(false);
                setRelDropdownPinned(false);
              }}
              className={`min-h-[40px] flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'sanctuary'
                  ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                  : isDark
                  ? 'text-indigo-200/80 hover:bg-white/5'
                  : 'text-slate-600 hover:bg-stone-200/70'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>For You</span>
            </button>

            {/* Relationships Dropdown Container */}
            <div
              ref={relDropdownRef}
              onMouseEnter={handleRelMouseEnter}
              onMouseLeave={handleRelMouseLeave}
              className="relative"
            >
              <button
                type="button"
                onClick={handleRelClick}
                aria-expanded={relDropdownOpen}
                className={`min-h-[40px] flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isRelationshipModuleActive
                    ? 'bg-gradient-to-r from-[#5A28FF] via-[#D81B9E] to-[#FF6B6B] text-white shadow-md'
                    : isDark
                    ? 'text-indigo-200/80 hover:bg-white/5'
                    : 'text-slate-600 hover:bg-stone-200/70'
                }`}
              >
                <Heart className="w-4 h-4 text-amber-200 fill-amber-200" />
                <span>Relationships</span>
                {isRelationshipModuleActive && currentRelationshipModule && (
                  <span className="hidden md:inline-block text-[11px] opacity-95 px-2 py-0.5 rounded-full bg-black/20 font-normal">
                    • {currentRelationshipModule.label}
                  </span>
                )}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 opacity-85 ${relDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Solid Opaque Dropdown Menu */}
              {relDropdownOpen && (
                <div className="fixed inset-x-3 top-[112px] sm:absolute sm:inset-x-auto sm:left-0 sm:top-full pt-2.5 z-[100]">
                  <div
                    className={`w-full sm:w-[36rem] rounded-3xl border p-3.5 transition-all ${
                      isDark
                        ? 'bg-[#130F26] border-indigo-500/40 text-stone-100 shadow-[0_24px_60px_rgba(0,0,0,0.85)]'
                        : 'bg-[#FFFFFF] border-stone-200 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.18)]'
                    }`}
                  >
                    <div className={`flex items-center justify-between px-3 py-2 mb-1.5 border-b ${isDark ? 'border-indigo-500/20' : 'border-stone-200/80'}`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                        Relationships Hub • 8 Interactive Modules
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setRelDropdownOpen(false);
                          setRelDropdownPinned(false);
                        }}
                        className="sm:hidden p-1 rounded-full hover:bg-black/10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[65vh] overflow-y-auto">
                      {relationshipModules.map(module => {
                        const Icon = module.icon;
                        const isActive = activeTab === module.id;
                        return (
                          <button
                            key={module.id}
                            type="button"
                            onClick={() => {
                              setActiveTab(module.id);
                              setRelDropdownOpen(false);
                              setRelDropdownPinned(false);
                            }}
                            className={`w-full text-left flex items-start gap-3 p-2.5 rounded-2xl transition-all ${
                              isActive
                                ? isDark
                                  ? 'bg-indigo-500/30 border border-pink-400/50 text-white'
                                  : 'bg-pink-50 border border-pink-300 text-slate-900'
                                : isDark
                                ? 'hover:bg-white/5 text-indigo-100/90'
                                : 'hover:bg-stone-100 text-slate-700'
                            }`}
                          >
                            <div
                              className={`mt-0.5 shrink-0 rounded-xl p-2 ${
                                isActive
                                  ? 'bg-gradient-to-br from-[#5A28FF] to-[#FF176B] text-white shadow-sm'
                                  : isDark
                                  ? 'bg-[#1D1740] text-pink-400'
                                  : 'bg-stone-100 text-pink-500'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="font-semibold text-xs sm:text-sm truncate">{module.label}</div>
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
              )}
            </div>

            <button
              onClick={() => {
                setActiveTab('philosophy');
                setRelDropdownOpen(false);
                setRelDropdownPinned(false);
              }}
              className={`min-h-[40px] flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'philosophy'
                  ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                  : isDark
                  ? 'text-indigo-200/80 hover:bg-white/5'
                  : 'text-slate-600 hover:bg-stone-200/70'
              }`}
            >
              <Scale className="w-4 h-4 text-violet-400" />
              <span>Philosophy</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('religion');
                setRelDropdownOpen(false);
                setRelDropdownPinned(false);
              }}
              className={`min-h-[40px] flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'religion'
                  ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow-md'
                  : isDark
                  ? 'text-indigo-200/80 hover:bg-white/5'
                  : 'text-slate-600 hover:bg-stone-200/70'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Religion</span>
            </button>
          </nav>

          {isRelationshipModuleActive && (
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-1 no-scrollbar">
              {relationshipModules.map(m => {
                const Icon = m.icon;
                const active = activeTab === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveTab(m.id)}
                    className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      active
                        ? 'bg-pink-500 text-white shadow-sm'
                        : isDark
                        ? 'bg-white/5 text-indigo-200/80 hover:bg-white/10'
                        : 'bg-stone-200/75 text-slate-700 hover:bg-stone-300/70'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'sanctuary' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div onClick={() => setActiveTab('quotes')} className={`cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 ${themeSurface}`}>
                <span className="text-[10px] uppercase font-bold text-amber-500">Quotes & Library</span>
                <p className="text-sm font-serif italic mt-2 line-clamp-3">"{randomTeasers.quote.quote}"</p>
              </div>
              <div onClick={() => setActiveTab('fivews')} className={`cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 ${themeSurface}`}>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Advice Priority #{randomTeasers.advice.rank}</span>
                <p className="text-sm font-medium mt-2 line-clamp-3">{randomTeasers.advice.title}</p>
              </div>
              <div onClick={() => setActiveTab('flags')} className={`cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 ${themeSurface}`}>
                <span className="text-[10px] uppercase font-bold text-emerald-500">Rubies: {randomTeasers.flag.trait}</span>
                <p className="text-sm font-medium mt-2 line-clamp-3">"{randomTeasers.flag.description}"</p>
              </div>
              <div onClick={() => setActiveTab('checkin')} className={`cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 ${themeSurface}`}>
                <span className="text-[10px] uppercase font-bold text-pink-500">Weekly Check-In</span>
                <p className="text-sm font-medium mt-2 line-clamp-3">Reflect on the 20 relationship principles to unlock your Ruby Seal.</p>
              </div>
            </div>

            <div className={`rounded-[2.25rem] border p-5 sm:p-9 shadow-xl ${themeSurface}`}>
              <div className="mb-6 pb-4 border-b border-indigo-500/15">
                <span className="text-xs font-bold uppercase tracking-widest text-pink-500">Books</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">Discover Insights</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {REFERENCE_BOOKS.map((book, idx) => {
                  const Icon = book.icon || BookOpen;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedTableBook(book)}
                      className={`text-center aspect-[2/3] rounded-2xl p-4 border flex flex-col justify-between hover:-translate-y-1 transition-all ${
                        isDark ? 'bg-[#14102C]/60 border-indigo-500/25' : 'bg-white border-stone-200'
                      }`}
                    >
                      <div className="flex-1 flex items-center justify-center pt-2">
                        <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-pink-500" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-xs line-clamp-2">{book.title}</h4>
                        <p className={`text-[10px] uppercase line-clamp-1 ${themeMutedText}`}>{book.author}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedTableBook && (
              <div onClick={() => setSelectedTableBook(null)} className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
                <div
                  onClick={e => e.stopPropagation()}
                  className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl ${
                    isDark ? 'bg-[#1A1245] border-indigo-500/40 text-stone-100' : 'bg-white border-stone-200 text-slate-900'
                  }`}
                >
                  <button onClick={() => setSelectedTableBook(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10">
                    <X className="w-5 h-5" />
                  </button>
                  <div className="space-y-4">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-500">
                      {selectedTableBook.notebook}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug">
                      {selectedTableBook.title} ({selectedTableBook.year})
                    </h3>
                    <p className={`text-sm ${themeMutedText}`}>By {selectedTableBook.author}</p>
                    <div className={`p-5 rounded-2xl border space-y-1.5 ${themeSubtleCard}`}>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-500">Core Insight</p>
                      <p className="text-sm leading-relaxed font-medium">{selectedTableBook.takeaway}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Minimalist Dark Gradient Philosophy Tab */}
        {activeTab === 'philosophy' && (
          <div className="animate-fadeIn">
            <div className="w-full min-h-[68vh] rounded-[2.25rem] bg-gradient-to-br from-[#060512] via-[#110E2E] to-[#1E1B4B] border border-indigo-500/20 shadow-2xl" />
          </div>
        )}

        {/* Minimalist Dark Gradient Religion Tab */}
        {activeTab === 'religion' && (
          <div className="animate-fadeIn">
            <div className="w-full min-h-[68vh] rounded-[2.25rem] bg-gradient-to-br from-[#090514] via-[#1B0F30] to-[#2A1238] border border-purple-500/20 shadow-2xl" />
          </div>
        )}

        {/* Weekly Check-In Tab */}
        {activeTab === 'checkin' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <h2 className="text-2xl font-serif font-bold mb-2">Weekly Check-In</h2>
              <p className={`text-sm mb-6 ${themeMutedText}`}>
                Reflect on the 20 relationship principles over the past week. Rate each from 1 to 5.
              </p>

              {!checkInSubmitted ? (
                <div className="space-y-4">
                  {TOP_20_ADVICE.map(a => (
                    <div key={a.rank} className={`p-4 rounded-2xl border ${themeSubtleCard}`}>
                      <p className="text-sm font-semibold mb-3">
                        #{a.rank} {a.checkInQuestion}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5].map(rating => (
                          <button
                            key={rating}
                            onClick={() => setCheckInAnswers(prev => ({ ...prev, [a.rank]: rating }))}
                            className={`min-w-[42px] min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              checkInAnswers[a.rank] === rating
                                ? 'bg-pink-500 text-white shadow'
                                : isDark
                                ? 'bg-white/10 hover:bg-white/20'
                                : 'bg-stone-200/80 hover:bg-stone-300'
                            }`}
                          >
                            {rating}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setCheckInSubmitted(true)}
                    className="min-h-[44px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs sm:text-sm font-semibold shadow-md"
                  >
                    Calculate Harmony Score
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-4 py-6">
                  <div className="flex justify-center">
                    <TieredHeartIcon
                      tier={checkInScore >= 90 ? 'diamond' : checkInScore >= 75 ? 'gold' : checkInScore >= 60 ? 'silver' : 'bronze'}
                      darkMode={isDark}
                      size={130}
                    />
                  </div>
                  <h3 className="text-3xl font-serif font-bold">{checkInScore}% Harmony Score</h3>
                  <button
                    onClick={() => setCheckInSubmitted(false)}
                    className="min-h-[40px] px-5 py-2 rounded-full border text-xs font-semibold"
                  >
                    Retake Check-In
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quotes & Library Tab */}
        {activeTab === 'quotes' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <h2 className="text-2xl font-serif font-bold mb-4">Curated Wisdom & Quotes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CURATED_QUOTES.map(q => (
                  <div key={q.id} className={`p-5 rounded-2xl border space-y-3 ${themeSubtleCard}`}>
                    <p className="text-sm font-serif italic">"{q.quote}"</p>
                    <p className="text-xs text-pink-500 font-semibold">{q.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Advice Tab */}
        {activeTab === 'fivews' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <div className="flex flex-wrap gap-2 mb-6">
                {['female', 'male', 'relationship'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setFiveWsTab(tab)}
                    className={`min-h-[38px] px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                      fiveWsTab === tab
                        ? 'bg-pink-500 text-white shadow-sm'
                        : isDark
                        ? 'bg-white/10 text-stone-200'
                        : 'bg-stone-200/80 text-slate-700'
                    }`}
                  >
                    {tab} Perspective
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {FIVE_WS_DATA[fiveWsTab]?.items.map((item: any, idx: number) => (
                  <div key={idx} className={`p-5 rounded-2xl border ${themeSubtleCard}`}>
                    <span className="text-xs font-bold uppercase text-amber-500">{item.type}</span>
                    <h4 className="text-base font-semibold mt-1 mb-2">{item.question}</h4>
                    <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 opacity-90">
                      {item.points.map((pt: string, pIdx: number) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Behaviour Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <h2 className="text-2xl font-serif font-bold mb-4">Relationship Behaviour Diagnostic</h2>
              {!quizSubmitted ? (
                <div className="space-y-6">
                  {BEHAVIOUR_QUIZ_QUESTIONS.map(q => (
                    <div key={q.id} className={`p-5 rounded-2xl border ${themeSubtleCard}`}>
                      <h4 className="text-sm font-semibold mb-3">{q.scenario}</h4>
                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: opt.points }))}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all ${
                              quizAnswers[q.id] === opt.points
                                ? 'bg-pink-500 text-white border-pink-500'
                                : isDark
                                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                                : 'bg-white border-stone-200 hover:bg-stone-100'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="min-h-[44px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs sm:text-sm font-semibold"
                  >
                    Submit Diagnostic
                  </button>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-serif font-bold">Diagnostic Complete</h3>
                  <button onClick={() => setQuizSubmitted(false)} className="min-h-[40px] px-5 py-2 rounded-full border text-xs font-semibold">
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Rubies Swipe Tab */}
        {activeTab === 'flags' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border text-center ${themeSurface}`}>
              <h2 className="text-2xl font-serif font-bold mb-4">Rubies: Trait Deck</h2>
              {flagIndex < FLAGS_DECK.length ? (
                <div className="max-w-md mx-auto space-y-6">
                  <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${themeSubtleCard}`}>
                    <div className="flex justify-center mb-4">
                      {FLAGS_DECK[flagIndex].flagType === 'green' ? (
                        <RadiantGreenRubyIcon size={56} />
                      ) : (
                        <FracturedBlackRubyIcon size={56} />
                      )}
                    </div>
                    <span className="text-xs font-bold uppercase text-pink-500">
                      {FLAGS_DECK[flagIndex].gender} • {FLAGS_DECK[flagIndex].flagType === 'green' ? 'Radiant Green Ruby' : 'Fractured Black Ruby'}
                    </span>
                    <h3 className="text-lg font-bold mt-1">{FLAGS_DECK[flagIndex].trait}</h3>
                    <p className={`text-xs sm:text-sm mt-2 ${themeMutedText}`}>"{FLAGS_DECK[flagIndex].description}"</p>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setFlagIndex(prev => prev + 1)}
                      className={`min-h-[42px] px-5 py-2.5 rounded-full text-xs font-semibold ${
                        isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-stone-200 hover:bg-stone-300'
                      }`}
                    >
                      Pass
                    </button>
                    <button
                      onClick={() => setFlagIndex(prev => prev + 1)}
                      className="min-h-[42px] px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold shadow"
                    >
                      Acknowledge Trait
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-6 space-y-3">
                  <p className="text-sm font-semibold">You have completed all cards in this deck!</p>
                  <button
                    onClick={() => setFlagIndex(0)}
                    className="min-h-[40px] px-5 py-2 rounded-full bg-pink-500 text-white text-xs font-semibold"
                  >
                    Restart Deck
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Emotion Atlas Tab */}
        {activeTab === 'emotions' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <h2 className="text-2xl font-serif font-bold mb-4">Emotion Atlas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {EMOTIONS_DECK.map(e => (
                  <div key={e.id} className={`p-5 rounded-2xl border space-y-2 ${themeSubtleCard}`}>
                    <span className="text-xs font-bold text-pink-500">
                      #{e.number} {e.shortPart}
                    </span>
                    <h3 className="text-lg font-bold">{e.name}</h3>
                    <p className="text-xs">
                      <strong>Men:</strong> {e.menFactors.increase}
                    </p>
                    <p className="text-xs">
                      <strong>Women:</strong> {e.womenFactors.increase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lexicon of Love Tab */}
        {activeTab === 'lexicon' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <h2 className="text-2xl font-serif font-bold mb-4">Lexicon of Love</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LOVE_TERMS_LEXICON.map(term => (
                  <div key={term.id} className={`p-5 rounded-2xl border space-y-1.5 ${themeSubtleCard}`}>
                    <span className="text-xs font-bold uppercase text-amber-500">{term.origin}</span>
                    <h3 className="text-lg font-serif font-bold text-pink-500">{term.term}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-90">{term.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Emotional Persona Tab */}
        {activeTab === 'persona' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-500">5 Crystalline Archetypes</span>
                  <h2 className="text-2xl font-serif font-bold mt-0.5">Emotional Persona Explorer</h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(PERSONA_ARCHETYPES).map(key => (
                    <button
                      key={key}
                      onClick={() => setSelectedArchetypePreview(key)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        selectedArchetypePreview === key
                          ? 'bg-pink-500 text-white shadow-sm'
                          : isDark
                          ? 'bg-white/10 text-stone-200 hover:bg-white/15'
                          : 'bg-stone-200/80 text-slate-700 hover:bg-stone-300/80'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center gap-6 ${themeSubtleCard}`}>
                <div className="shrink-0">
                  <PersonaGemIcon type={selectedArchetypePreview} size={96} />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-75">
                    {PERSONA_ARCHETYPES[selectedArchetypePreview].subtitle}
                  </div>
                  <h3 className={`text-xl font-serif font-bold ${PERSONA_ARCHETYPES[selectedArchetypePreview].color}`}>
                    {PERSONA_ARCHETYPES[selectedArchetypePreview].title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {PERSONA_ARCHETYPES[selectedArchetypePreview].description}
                  </p>
                  <p className={`text-xs italic pt-1 ${themeMutedText}`}>
                    <strong>Growth Prescription:</strong> {PERSONA_ARCHETYPES[selectedArchetypePreview].advice}
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-3xl p-5 sm:p-8 border ${themeSurface}`}>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Interactive Diagnostic</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mt-0.5">Discover Your Primary Emotional Persona</h3>
                <p className={`text-xs sm:text-sm mt-1 ${themeMutedText}`}>
                  Rate how strongly each statement resonates with you from 1 (Rarely) to 5 (Deeply True).
                </p>
              </div>

              {!personaSubmitted ? (
                <div className="space-y-4">
                  {PERSONA_QUESTIONS.map((q, idx) => (
                    <div key={q.id} className={`p-4 sm:p-5 rounded-2xl border ${themeSubtleCard}`}>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-pink-500">
                          Question {idx + 1} • {q.archetype}
                        </span>
                      </div>
                      <p className="text-sm font-medium mb-3">{q.text}</p>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5].map(score => (
                          <button
                            key={score}
                            onClick={() => setPersonaAnswers(prev => ({ ...prev, [q.id]: score }))}
                            className={`min-w-[44px] min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              personaAnswers[q.id] === score
                                ? 'bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white shadow'
                                : isDark
                                ? 'bg-white/10 hover:bg-white/20'
                                : 'bg-white border border-stone-200 hover:bg-stone-100'
                            }`}
                          >
                            {score}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setPersonaSubmitted(true);
                        setSelectedArchetypePreview(computedPersona.topKey);
                      }}
                      className="min-h-[44px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5A28FF] to-[#FF176B] text-white text-xs sm:text-sm font-semibold shadow-md"
                    >
                      Reveal My Emotional Persona
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 space-y-5">
                  <div className="flex justify-center">
                    <PersonaGemIcon type={computedPersona.topKey} size={115} />
                  </div>
                  <div className="space-y-2 max-w-lg mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-pink-500">
                      Your Dominant Crystalline Archetype
                    </span>
                    <h4 className={`text-2xl sm:text-3xl font-serif font-bold ${PERSONA_ARCHETYPES[computedPersona.topKey].color}`}>
                      {PERSONA_ARCHETYPES[computedPersona.topKey].title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {PERSONA_ARCHETYPES[computedPersona.topKey].description}
                    </p>
                    <div className={`p-4 rounded-2xl border text-left mt-4 ${themeSubtleCard}`}>
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
                        Relational Balance Prescription
                      </div>
                      <p className="text-xs sm:text-sm">{PERSONA_ARCHETYPES[computedPersona.topKey].advice}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setPersonaSubmitted(false);
                      setPersonaAnswers({});
                    }}
                    className="inline-flex items-center gap-2 min-h-[40px] px-5 py-2 rounded-full border text-xs font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Assessment</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t py-5 px-4 sm:px-6 mt-12 transition-colors ${isDark ? 'border-indigo-500/20 bg-[#08071E]/80 text-indigo-200/60' : 'border-stone-200 bg-white/70 text-slate-500'}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <FacetedRubyLogo colorIndex={rubyColorIndex} darkMode={isDark} size={24} onClick={cycleRandomRubyColor} />
            <span className={`font-semibold ${isDark ? 'text-stone-400' : 'text-neutral-600'}`}>Ruby Home</span>
          </div>
          <div>20 Principles • Reference Library • Mobile & Desktop Ready</div>
        </div>
      </footer>
    </div>
  );
}
