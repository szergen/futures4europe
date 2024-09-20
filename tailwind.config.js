/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1920px',
    },
    extend: {
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
      },
      colors: {
        'purple-site': '#8751BD',
        'blue-site': '#2859B6',
        'greyShade': '#2C2C2F',
        'greyLight': 'rgba(15, 19, 36, 0.6)',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade 3s ease-in-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Flowbite plugin
    function ({ addUtilities }) { // Custom utility function
      const newUtilities = {
        '.text-stroke-gray': {
          '-webkit-text-stroke-color': 'rgba(15, 19, 36, 0.6)',
          '-webkit-text-stroke-width': '0.5px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
    
};
