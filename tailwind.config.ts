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
    },
    keyframes: {
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
    },
    animation: {
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade:
        'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [],
}
export default config
