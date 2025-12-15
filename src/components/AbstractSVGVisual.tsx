// src/components/AbstractSVGVisual.tsx
import React from 'react';
// ----------------------------------------------------------------------
// CRITICAL FIX: Import 'motion' explicitly for all motion tags to work
// ----------------------------------------------------------------------
import { motion, type Variants } from 'framer-motion'; 

const AbstractSVGVisual: React.FC = () => {
  // Framer Motion variants for subtle animation on mount
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0, originX: '50%', originY: '50%' },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10
      }
    }
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="w-full h-full max-w-lg transition-colors"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dynamic Background Blur (Theme Aware) */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="15" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* 1. Main Core (Data Center) */}
      <motion.circle
        cx="250"
        cy="250"
        r="30"
        fill="var(--color-cta-vibrant)" // Tailwind CSS variable placeholder for theming
        variants={circleVariants}
        style={{ filter: 'url(#glow)', fill: 'var(--color-cta-vibrant)' }}
      />

      {/* 2. Primary Orbiting Circles (Abstract Data Points) */}
      {[50, 80, 120].map((r, i) => (
        <motion.circle
          key={i}
          cx="250"
          cy="250"
          r={r}
          fill="none"
          stroke="var(--color-primary-soft)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          style={{ opacity: 0.5, stroke: `rgba(var(--color-primary-soft-rgb), 0.5)` }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* 3. Outer Interactive Circle */}
      <motion.circle
        cx="250"
        cy="250"
        r="180"
        fill="none"
        stroke="var(--color-cta-vibrant)"
        strokeWidth="1"
        strokeDasharray="10 5"
        style={{ opacity: 0.7, stroke: `rgba(var(--color-cta-vibrant-rgb), 0.7)` }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      
      {/* 4. Connection Lines (Random Data Pulses) */}
      <motion.line 
        x1="100" y1="100" x2="400" y2="400" 
        stroke="var(--color-primary-soft)" strokeWidth="2" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
      />
      
      {/* 5. Text Label */}
      <motion.text
        x="250"
        y="450"
        textAnchor="middle"
        fontSize="30"
        fill="var(--color-dark-text)" // Theme-aware text
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        AI Intelligence
      </motion.text>
    </motion.svg>
  );
};

export default AbstractSVGVisual;