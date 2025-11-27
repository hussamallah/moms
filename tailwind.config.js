/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',             // Primary Navy
        'primary-blue': '#0B5ED7',   // Primary Blue
        'light-gray-bg': '#F5F6F8',  // Light Gray BG
        'card-white': '#FFFFFF',     // Card White
        'border-gray': '#DDE1E7',    // Card Borders
        'text-dark': '#12212F',      // Main dark text
      },
      boxShadow: {
        card: '0px 1px 3px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '1.2', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
        'small': ['15px', { lineHeight: '1.4', fontWeight: '400' }],
        'button': ['17px', { lineHeight: '1.2', fontWeight: '500' }],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1100px'
        }
      }
    },
  },
  plugins: [],
}
