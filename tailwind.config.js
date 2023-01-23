/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./ui/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
