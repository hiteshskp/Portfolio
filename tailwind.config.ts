import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0A0A0F',
          primary: '#1A1A2E',
          secondary: '#16213E',
          accent: '#0F3460',
          highlight: '#E94560',
          star: '#FFD700',
          nebula: '#9D4EDD',
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0A0A0F, #1A1A2E)',
        'star-pattern': "url('/stars.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}

export default config 