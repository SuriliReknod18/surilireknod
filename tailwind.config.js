/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./preview.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816', // Deep midnight navy canvas
          900: '#0A0F2C', // Secondary dark navy
          850: '#0F163D', // Elevated card surface
          800: '#172254', // Border & highlight surface
          700: '#233276',
          600: '#32479E',
        },
        electric: {
          violet: '#8B5CF6',
          violetDark: '#6D28D9',
          violetLight: '#C4B5FD',
        },
        neon: {
          cyan: '#06B6D4',
          cyanLight: '#22D3EE',
          cyanBright: '#67E8F9',
        },
        soft: {
          pink: '#EC4899',
          pinkLight: '#F472B6',
          pinkGlow: '#FBCFE8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-pink': '0 0 35px -5px rgba(236, 72, 153, 0.3)',
        'glow-multi': '0 0 45px -8px rgba(139, 92, 246, 0.25), 0 0 25px -4px rgba(6, 182, 212, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
