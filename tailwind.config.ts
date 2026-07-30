import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: {
          DEFAULT: '#0F172A',
          hover: '#1E293B',
          glass: 'rgba(15, 23, 42, 0.65)',
        },
        flux: {
          purple: '#8B5CF6',
          blue: '#38BDF8',
          pink: '#EC4899',
          white: '#F8FAFC',
          gray: '#94A3B8',
          dark: '#050816',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora-mesh': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.25) 0%, rgba(56, 189, 248, 0.15) 35%, rgba(5, 8, 22, 0) 70%)',
        'glow-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 50%, #EC4899 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      animation: {
        'aurora-spin': 'auroraSpin 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        auroraSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
