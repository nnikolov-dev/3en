
module.exports = {
	theme: {
		screens: {
			sm: '300px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			display: ['Gilroy', 'sans-serif'],
			body: ['Graphik', 'sans-serif'],
			title: ['Montserrat', 'serif'],
			heading: ['Lora', 'serif'],
		},
		borderWidth: {
			default: '1px',
			0: '0',
			2: '2px',
			4: '4px',
		},
		inset: {
			0: 0,
			8: '2rem',
		},
		objectPosition: {
			jumbotron: '50% 70%',
		},
		extend: {
			spacing: {
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
			colors: {
				primary: '#366897',
				secondary: '#7BBCD4',
				accent: '#7E8370',
				shade: '#1F272B',
				lite: '#EAE8E1',
			},
			minHeight: {
				half: '30vh',
			},
		},
	},
	// purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'odd'],
		textColor: ['responsive', 'hover', 'focus', 'group-hover', 'odd'],
		translate: ['responsive', 'hover', 'focus', 'group-hover', 'odd'],
		visibility: ['responsive', 'hover', 'focus', 'group-hover', 'odd'],
	},
}