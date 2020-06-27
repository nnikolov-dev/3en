require('dotenv').config()

const languages = JSON.parse(process.env.GATSBY_LANG)

module.exports = {
	siteMetadata: {
		title: '3EH 2000',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: '3EH 2000',
				short_name: '3EH 2000',
				start_url: '/',
				background_color: '#304B76',
				theme_color: '#66A2C8',
				display: 'standalone',
				icon: 'src/assets/images/icon.png',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-anchor-links',
		'gatsby-plugin-meta-redirect',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'material icons',
					'roboto:300,400,500,700',
					'montserrat:400,400i,700,700i',
					'open sans:300,300i,400,400i,700,700i',
					'lora:400,700',
				],
			},
		},
		{
			resolve: '@kentico/gatsby-source-kontent',
			options: {
				projectId: process.env.KONTENT_ID || '',
				languageCodenames: languages,
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
		{
			resolve: 'gatsby-plugin-gdpr-cookies',
			options: {
				googleAnalytics: {
					trackingId: process.env.GOOGLE_ANALYTICS_ID || '',
					anonymize: true,
				},
				environments: ['production', 'development'],
			},
		},
	],
}
