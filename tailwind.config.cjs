/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			"sans": ['outfit', 'system-ui']
		},

		
		/*Extend breaks the backdrop blur for some reason.*/
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
				200: '#C6C6C6',
				400: "#777777",
				800: '#141414',
				850: '#0e0e0e',
				900: '#070707',
			},
			"red": {
				50: '#FF0000'
			}
		},
		
		extend: {		
		}

	},

	plugins: []
};

module.exports = config;
