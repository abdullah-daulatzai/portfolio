/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'custom-bounce': 'customBounce 1s ease-in-out infinite', // Add custom bounce animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        customBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Bounce distance
        },
      },
    },
  },
  plugins: [],
}
