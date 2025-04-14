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
        perceptionOrange: {
          300: '#EE761B',
        },
        unbBlue: {
          700: '#00244B',
          600: '#002A59',
          400: '#003A7A',
          200: '#014FA5',
        },
        unbGreen: {
          500: '#006e25',
          400: '#00822D',
          300: '#00AB3B',
        },
        unbBlack: {
          100: '#1D1D1D',
          75: '#5D5D5D',
          50: '#989898',
          25: '#D0D0D0',
          10: '#EEEEEE',
          5: '#F5F5F5',
          0: '#FFFFFF',
        },
      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        montserrat: ['var(--font-montserrat)'],
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        pulseOff: 'pulseOff 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        pulseOff2: 'pulseOff 2s cubic-bezier(0.4, 0, 0.6, 1) 0.2s infinite',
        pulseOff3: 'pulseOff 2s cubic-bezier(0.4, 0, 0.6, 1) 0.4s infinite',
        pulseOff4: 'pulseOff 2s cubic-bezier(0.4, 0, 0.6, 1) 0.6s infinite',
        isometricMove: 'isometricMove 4s ease-in-out infinite',
        isometricMoveReverse: 'isometricMoveReverse 4s ease-in-out infinite',
        isometricMoveVertical: 'isometricMoveVertical 2s ease-in-out infinite',
        pulseAndScale: 'pulseAndScale 4s ease-in-out infinite',
      },
      keyframes: {
        pulseOff: {
          '50%': {
            opacity: '.0',
          },
        },
        pulseAndScale: {
          '50%': {
            opacity: '.5',
            transform: 'scale(0.98)',
          },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        isometricMove: {
          '0%': { transform: 'translate(6px, -3px)' },
          '50%': { transform: 'translate(-6px, 3px)' },
          '100%': { transform: 'translate(6px, -3px)' },
        },
        isometricMoveReverse: {
          '0%': { transform: 'translate(-6px, 3px)' },
          '50%': { transform: 'translate(6px, -3px)' },
          '100%': { transform: 'translate(-6px, 3px)' },
        },
        isometricMoveVertical: {
          '0%': { transform: 'translate(0, 3px)' },
          '50%': { transform: 'translate(0, -3px)' },
          '100%': { transform: 'translate(0, 3px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
