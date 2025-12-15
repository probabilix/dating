// src/data/Services.ts

export interface ServiceTier {
  id: number;
  name: string;
  subheading: string;
  isAvailable: boolean;
  ctaText: string;
  ctaAction: 'Login' | 'Notify';
  features: string[];
  tag?: 'Popular' | 'Coming Soon';
  icon: string; // Tailwind icon class placeholder
}

// Data structure itself
const ServiceTier= [
  {
    id: 1,
    name: 'Chat Agent',
    subheading: 'Instant text advice and profile optimization.',
    isAvailable: true,
    ctaText: 'Start Trial & Login',
    ctaAction: 'Login',
    features: [
      'Real-time messaging advice on dating apps',
      'AI-driven profile analysis',
      'Access to 4 core AI personas',
    ],
    icon: 'text-primary-soft', 
  },
  {
    id: 2,
    name: 'Voice Agent',
    subheading: 'Real-time voice coaching and scenario practice.',
    isAvailable: true,
    ctaText: 'Start Trial & Login',
    ctaAction: 'Login',
    features: [
      'Everything in Chat Agent',
      'Unlimited voice conversation coaching',
      'Access to 12 expert AI personas',
      'Simulated date practice sessions',
    ],
    tag: 'Popular',
    icon: 'text-cta-vibrant',
  },
  {
    id: 3,
    name: 'Video Agent',
    subheading: 'Advanced video profile and behavioral analysis.',
    isAvailable: false,
    ctaText: 'Notify Me When Ready',
    ctaAction: 'Notify',
    features: [
      'Everything in Voice Agent',
      'Video profile optimization feedback',
      'AI-driven mock video date analysis',
      'Advanced non-verbal communication feedback',
    ],
    tag: 'Coming Soon',
    icon: 'text-gray-500',
  },
];