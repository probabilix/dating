// src/components/ServiceTiersSection.tsx
import React from 'react';

// Define the interface locally for self-containment
interface ServiceTier {
    id: number;
    name: string; 
    subheading: string;
    isAvailable: boolean;
    ctaText: string; 
    ctaAction: 'Login' | 'Notify';
    features: string[];
    tag?: 'Popular' | 'Coming Soon';
    iconColor: string; // Tailwind color class for the icon background
}

// HARDCODED DATA: Focus shifted to feature benefit and attraction
const SERVICE_TIER_DETAILS: ServiceTier[] = [
    {
        id: 1,
        name: 'Chat Consultant',
        subheading: 'Uncover the perfect response for every text instantly.',
        isAvailable: true,
        // ACTION: Suggests immediate value unlock
        ctaText: 'Unlock Insight',
        ctaAction: 'Login',
        features: [
            'Real-time messaging guidance on dating',
            'AI-driven profile assessment',
            'Access to core AI knowledge base',
        ],
        iconColor: 'bg-primary-soft', 
    },
    {
        id: 2,
        name: 'Voice Advisor',
        subheading: 'Practice dates and gain confidence with simulated audio coaching.',
        isAvailable: true,
        // ACTION: Suggests starting the high-value activity
        ctaText: 'Start Coaching',
        ctaAction: 'Login',
        features: [
            'Everything in Chat Consultant',
            'Unlimited audio conversation feedback',
            'Access to 12 expert AI personas',
            'Simulated date practice sessions',
        ],
        tag: 'Popular',
        iconColor: 'bg-cta-vibrant',
    },
    {
        id: 3,
        name: 'Video Consultant',
        subheading: 'Revolutionary analysis of your on-screen presence and body language.',
        isAvailable: false,
        // ACTION: Simple notification request, zero cost language
        ctaText: 'Notify Me',
        ctaAction: 'Notify',
        features: [
            'Everything in Voice Advisor',
            'Video profile optimization feedback',
            'AI-driven mock video date analysis',
        ],
        tag: 'Coming Soon',
        iconColor: 'bg-gray-500',
    },
];


// Helper component for an individual Service Card
const ServiceCard: React.FC<{ tier: ServiceTier }> = ({ tier }) => {
  const isPopular = tier.tag === 'Popular';
  const isComingSoon = tier.tag === 'Coming Soon';

  // Base styling for the card
  const cardClasses = `
    relative p-8 rounded-3xl shadow-xl transition-all duration-500 
    h-full flex flex-col justify-between transform-gpu
    bg-white dark:bg-dark-surface
    border-4 ${isPopular ? 'border-cta-vibrant' : 'border-gray-100 dark:border-gray-700'}
    ${isComingSoon ? 'opacity-70 hover:opacity-100' : 'hover:shadow-2xl'} 
  `;

  // Determine button colors and behavior
  const buttonClasses = isComingSoon 
    ? 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-not-allowed'
    : 'bg-cta-vibrant text-white hover:bg-opacity-90 shadow-lg';
    
  // Icon Placeholder (Elegant text initials)
  const IconPlaceholder = ({ colorClass, name }: { colorClass: string, name: string }) => (
      <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center text-white font-serif text-xl font-bold mb-4`}>
          {name.charAt(0)}
      </div>
  );


  return (
    <div className={cardClasses}>
      
      {/* Tag */}
      {tier.tag && (
        <span className={`absolute top-0 right-0 py-1 px-4 text-xs font-bold rounded-tr-3xl rounded-bl-lg font-sans
                        ${isPopular ? 'bg-cta-vibrant text-white' : 'bg-primary-soft text-gray-900'}`}>
          {tier.tag}
        </span>
      )}

      {/* Header */}
      <div>
        <IconPlaceholder colorClass={tier.iconColor} name={tier.name} />

        {/* Card Title uses premium Serif font */}
        <h3 className="font-serif text-3xl font-extrabold text-gray-900 dark:text-dark-text mb-2">
          {tier.name}
        </h3>
        {/* Subheading uses Sans font - FOCUS ON BENEFIT */}
        <p className={`font-sans text-base font-semibold mb-6 ${isComingSoon ? 'text-gray-500' : 'text-gray-700 dark:text-gray-400'}`}>
          {tier.subheading}
        </p>
        
        {/* Features List uses Sans font */}
        <ul className="space-y-3 mb-10 font-sans text-sm text-gray-700 dark:text-gray-400">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${isComingSoon ? 'text-gray-400' : 'text-primary-soft'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button - Non-transactional, focus on action/join */}
      <button 
        className={`w-full py-3 text-lg font-bold rounded-full font-sans transition-all duration-300 ${buttonClasses}`}
        onClick={() => alert(isComingSoon ? `You clicked: ${tier.ctaText}` : `Redirecting to Login/Join for ${tier.name}`)}
        disabled={isComingSoon}
      >
        {tier.ctaText}
      </button>

    </div>
  );
};

const ServiceTiersSection: React.FC = () => {
  return (
    <section id="service-tiers" className="py-20 md:py-32 bg-secondary-cream dark:bg-dark-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading uses Serif font - FOCUS ON MECHANICS/ADVANTAGE */}
        <h2 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
          The Science of Your <span className="text-cta-vibrant">Dating Advantage</span>
        </h2>
        {/* Body text uses Sans font */}
        <p className="font-sans text-xl text-gray-700 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
          Choose the layer of AI intelligence that will maximize your success and confidence starting today.
        </p>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_TIER_DETAILS.map((tier) => (
            <ServiceCard key={tier.id} tier={tier} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServiceTiersSection;