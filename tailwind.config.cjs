/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			"sans": ['outfit', 'system-ui']
		},

		colors: {
			"pinky-red": {
				100: '#e1335f',
				200: '#da0037',
				600: '#ae002c',
				700: '#36d001c',
				900: '#160005'
			},

			"ash-gray": {
				100: '#EDEDED',
				200: '#C6C6C6'
			}
		},


		extend: {}
	},

	plugins: []
};

module.exports = config;
