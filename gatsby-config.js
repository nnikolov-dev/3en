module.exports = {
	siteMetadata: {
		title: 'Burlington Chambers',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Burlington Chambers',
				short_name: 'Burlington Chambers',
				start_url: '/',
				background_color: '#F6F6F6',
				theme_color: '#366897',
				display: 'standalone',
			},
		},
		{
			resolve: 'gatsby-plugin-offline',
			// options: {
			// 	precachePages: ['/about/', '/projects/*'],
			// },
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-transition-link',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'material icons',
					'roboto:300,400,500,700',
					'montserrat:400.400i,700,700i',
					'open sans:400,400i,700,700i',
					'lora:400,700',
				],
			},
		},
		// {
		// 	resolve: 'gatsby-plugin-purgecss',
		// 	options: {
		// 		printRejected: false,
		// 		develop: true,
		// 		tailwind: true,
		// 	},
		// },
		//   resolve: `@kentico/gatsby-source-kontent`,
		//   options: {
		//     deliveryClientConfig: {
		//       projectId: `5ac93d1e-567d-01e6-e3b7-ac435f77b907`,
		//     },
		//     languageCodenames: [
		//       `default`,
		//       `de-DE`,
		//       `cs-CZ`,
		//     ]
		//   }
		// }
	],
}
