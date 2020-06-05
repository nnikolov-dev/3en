require('dotenv').config()

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
		'gatsby-plugin-offline',
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-transition-link',
		'gatsby-plugin-anchor-links',
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'en',
			},
		},
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
		{
			resolve: '@kentico/gatsby-source-kontent',
			options: {
				projectId: process.env.KONTENT_ID || '',
				languageCodenames: [
					'default',
				],
				includeTypes: true,
				usePreviewUrl: process.env.GATSBY_PREVIEW_ENABLED && process.env.GATSBY_PREVIEW_ENABLED.toLowerCase() === 'true',
				authorizationKey: process.env.GATSBY_PREVIEW_ENABLED && process.env.GATSBY_PREVIEW_ENABLED.toLowerCase() === 'true'
					? process.env.KONTENT_API
					: undefined,
				includeRawContent: !!process.env.KONTENT_API,
			},
		},
		{
			resolve: 'gatsby-plugin-netlify',
			options: {
				headers: {
					'/*': [
						'cache-control: max-age=0,no-cache,no-store,must-revalidate',
					],
				},
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: false, // boolean to turn off the default caching headers
			},
		},
	],
}
