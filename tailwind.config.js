/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
'primary-soft': '#E6A4B4',
'secondary-cream': '#FAF2E8',
'neutral-light': '#FFF8F2',
'cta-vibrant': '#C5304B',
'luxury-gold': '#D4AF37',
'dark-background': '#0E0E0E',
'dark-surface': '#161616',
'dark-text': '#EDEDED',
},
},
},
plugins: [
    function({ addBase, theme }) {
        addBase({
            ':root': {
                // Must define RGB for semi-transparent strokes
                '--color-primary-soft-rgb': '230, 164, 180', // Match your #E6A4B4
                '--color-cta-vibrant-rgb': '197, 48, 75',    // Match your #C5304B
                
                // Define theme-aware variables
                '--color-background': theme('colors.secondary-cream'), 
                '--color-cta-vibrant': theme('colors.cta-vibrant'),
                '--color-primary-soft': theme('colors.primary-soft'),
                '--color-dark-text': theme('colors.gray.900'), // Use normal text color for light mode SVG text
            },
            '.dark': {
                '--color-background': theme('colors.dark-background'),
                '--color-cta-vibrant': theme('colors.primary-soft'), // Flipped colors in dark mode for contrast
                '--color-primary-soft': theme('colors.cta-vibrant'),
                '--color-dark-text': theme('colors.dark-text'), // Use light text color for dark mode SVG text
            },
        });
    },
  
],
};