/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comfortNavy: {
          50: '#f0f6fb',
          100: '#dceaf6',
          200: '#bcd9ee',
          300: '#8cc0e2',
          400: '#55a1d2',
          500: '#2d84bf',
          600: '#1e68a1',
          700: '#185483',
          800: '#17476c',
          900: '#0f2942', // Deep Lake Navy
          950: '#091b2c', // Midnight Authority
        },
        warmOrange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c', // Southern Heat Warmth & Emergency Action
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        coolCyan: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Cool Air Refresh
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        carrierBlue: '#0054a6',
        amberGold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
