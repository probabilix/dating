// src/components/AnimatedIntro.tsx

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedIntroProps {
  onAnimationComplete: () => void;
}

/* ---------- PREMIUM EASING ---------- */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT_CIRC: [number, number, number, number] = [0.85, 0, 0.15, 1];

/* ---------- MASTER CONTAINER ---------- */
const masterVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    transition: { duration: 0.5, ease: EASE_IN_OUT_CIRC },
  },
};

/* ---------- LOGO WRAPPER ---------- */
const logoVariants: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
      staggerChildren: 0.035,
      delayChildren: 0.25,
    },
  },
};

/* ---------- LETTER REVEAL ---------- */
const letterVariants: Variants = {
  initial: {
    opacity: 0,
    y: 32,
    rotateX: 55,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.75,
      ease: EASE_OUT_EXPO,
    },
  },
};

/* ---------- EXTENSION (.io) ---------- */
const extensionVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.2,
      ease: EASE_OUT_EXPO,
    },
  },
};

/* ---------- GLOW (SINGLE PULSE) ---------- */
const glowVariants: Variants = {
  animate: {
    opacity: [0, 0.35, 0],
    transition: {
      duration: 1.6,
      delay: 0.9,
      ease: 'easeInOut',
    },
  },
};

const AnimatedIntro: React.FC<AnimatedIntroProps> = ({ onAnimationComplete }) => {
  const brandName = 'DatingAdvice';

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#FAF2E8' }}
      variants={masterVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={onAnimationComplete}
      aria-hidden="true"
    >
      {/* Subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50/60 to-primary-soft/10" />

      {/* Logo container */}
      <motion.div
        className="relative perspective-[1000px] transform-gpu"
        variants={logoVariants}
      >
        {/* Glow halo */}
        <motion.div
          className="absolute -inset-10 rounded-full bg-gradient-to-r from-cta-vibrant/20 to-primary-soft/20 blur-3xl"
          variants={glowVariants}
          animate="animate"
        />

        {/* Text */}
        <div className="relative flex items-baseline">
          <h1 className="flex font-extrabold tracking-tight text-cta-vibrant">
            {brandName.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block text-5xl sm:text-7xl md:text-8xl transform-gpu"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.span
            variants={extensionVariants}
            className="ml-2 font-extrabold text-primary-soft text-5xl sm:text-7xl md:text-8xl"
          >
            .io
          </motion.span>
        </div>

        {/* Underline sweep */}
        <motion.div
          className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-cta-vibrant to-transparent"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: 1.4,
            delay: 1.4,
            ease: EASE_OUT_EXPO,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIntro;
