// src/components/FAQSection.tsx
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq'; // Assuming this file exists and is correct

// Helper component for the Accordion Item
const AccordionItem: React.FC<{ item: typeof FAQ_ITEMS[0]; isActive: boolean; onToggle: () => void }> = ({ item, isActive, onToggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      
      {/* Question (Toggle Button) - Font size adjusted for mobile */}
      <button 
        className="flex justify-between items-center w-full py-4 sm:py-5 text-left font-sans text-base sm:text-lg font-semibold text-gray-900 dark:text-dark-text transition-colors duration-200 hover:text-cta-vibrant dark:hover:text-primary-soft"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span>{item.question}</span>
        <svg className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${isActive ? 'rotate-180 text-cta-vibrant' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {/* Answer (Collapsible Content) - Font size adjusted for mobile */}
      <div 
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isActive ? 'max-h-96' : 'max-h-0'}`}
        // Fallback for smooth height transition
        style={{ maxHeight: isActive ? '500px' : '0' }} 
      >
        <p className="font-sans pb-4 sm:pb-5 text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    // PADDING REDUCED FOR MOBILE COMPACTNESS
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-dark-surface transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading - Font size adjusted for mobile */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-dark-text mb-4">
          Common Questions, <span className="text-primary-soft">Clear Answers.</span>
        </h2>
        {/* Subheading - Font size and margin adjusted for mobile */}
        <p className="font-sans text-lg sm:text-xl text-gray-700 dark:text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto">
          We address the most important questions about privacy, technology, and success.
        </p>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto text-left">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem 
              key={item.id}
              item={item}
              isActive={item.id === activeIndex}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
        
        {/* Secondary CTA - Margin and font size adjusted for mobile */}
        <p className="font-sans mt-12 sm:mt-16 text-lg sm:text-xl text-gray-700 dark:text-gray-400">
            Need more detail? <span className="text-cta-vibrant font-semibold cursor-pointer hover:underline">Contact our support team.</span>
        </p>

      </div>
    </section>
  );
};

export default FAQSection;