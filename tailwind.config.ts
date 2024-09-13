import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation:{
        'animation-opacity': 'opacity 0.5s'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fafafa',
      black: '#0a0a0b',
      primary: {
        100: '#dcf0fa',
        200: '#b9e0f6',
        300: '#96d1f1',
        400: '#73c2ec',
        500: '#50b3e8',
        600: '#2da3e3',
        700: '#1b8fcd',
        800: '#1776aa',
        900: '#0e4a6b',
        1000: '#0a374f'
      },
      secondary: {
        100: '#E7EBEF',
        200: '#DAE1E7',
        300: '#CED7DE',
        400: '#C2CDD6',
        500: '#B6C3CD',
        600: '#92A5B5',
        700: '#7991A4',
        800: '#637D92',
        900: '#4A5E6D',
        1000: '#323F49'
      },
      neutrals: {
        100: '#e3e3e3',
        200: '#cccbcb',
        300: '#b5b3b3',
        400: '#9f9c9c',
        500: '#898384',
        600: '#726c6c',
        700: '#5a5555',
        800: '#433e3f',
        900: '#2b2829',
        1000: '#151314'
      },
      success: {
        100: '#caebd7',
        200: '#95d7ae',
        300: '#37935b'
      },
      warning: {
        100: '#f5e8b9',
        200: '#ecd272',
        300: '#a68717'
      },
      error: {
        100: '#fbbaba',
        200: '#f67676',
        300: '#be0c0c'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
export default config
