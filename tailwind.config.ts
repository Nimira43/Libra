import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
				'support': '#87ceeb',
				'light': '#fffcfa',
				'dark': '#111',
				'grey-dark': '#333',
				'grey-medium': '#999',				
        'grey-light': '#ccc',
				'grey-light-extra': '#eee',
      }, 
    },
  },
  plugins: [],
} satisfies Config

export default config