module.exports = {
	siteMetadata: {
		title: 'Gatsby starter site with Kentico Kontent',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		// {
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
