/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			sans: ['Raleway, sans-serif'],
		},
		extend: {
			colors: {
				grey: '#969696',
				primary: '#0EC5D7',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
