// src/App.tsx
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion'; 
import AnimatedIntro from './components/AnimatedIntro'; 
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import FeaturedAdviceSection from './components/FeaturedAdviceSection'; 
import ServiceTiersSection from './components/ServiceTiersSection'; 
import TrustSection from './components/TrustSection'; 
import FAQSection from './components/FAQSection'; // <-- NEW: Imported FAQ Section
import Footer from './components/Footer'; // <-- NEW: Imported Footer

// ----------------------------------------------------
// Content Wrapper (Container for all main sections)
// ----------------------------------------------------
const ContentWrapper: React.FC = () => {
    return (
        <div className="App">
            <Header /> 
            
            <main>
                <HeroSection />

                {/* 1. Featured Advice/Testimonial Section (Motivational) */}
                <FeaturedAdviceSection /> 

                {/* 2. Service Tiers Showcase (Feature Promotion) */}
                <ServiceTiersSection /> 

                {/* 3. Data-Driven Trust and Authority Section */}
                <TrustSection />

                {/* 4. FAQ Section (Utility & Trust) */}
                <FAQSection /> 
            </main>
            
            {/* 5. Footer */}
            <Footer />
        </div>
    );
};


// ----------------------------------------------------
// Main Application Wrapper (Handles Intro Animation)
// ----------------------------------------------------
const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <AnimatedIntro onAnimationComplete={handleAnimationComplete} key="intro-screen" />
      ) : (
        <ContentWrapper key="main-app" />
      )}
    </AnimatePresence>
  );
};

export default App;