import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'


const SEO = ({title, description, keywords, lastModified, lang}) => (
	<Helmet
		title={title}
		meta={[
			{
				name: 'description',
				content: description,
			},
			{
				name: 'keywords',
				content: keywords,
			},
			{
				name: 'last-modified',
				content: lastModified,
			},
			{
				property: 'og:title',
				content: title,
			},
			{
				property: 'og:description',
				content: description,
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				name: 'twitter:card',
				content: 'summary',
			},
			{
				name: 'twitter:creator',
				content: title,
			},
			{
				name: 'twitter:title',
				content: title,
			},
			{
				name: 'twitter:description',
				content: description,
			},
			{
				name: 'charset',
				content: 'UTF-8',
			},
			{
				name: 'language',
				content: lang,
			},
			{
				name: 'robots',
				content: 'index,follow',
			},
			{
				name: 'author',
				content: 'Nikita Nikolov, https://nnikolov.me',
			},
		]}
		htmlAttributes={{
			lang,
		}}
	/>
)

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
	lastModified: PropTypes.string,
	lang: PropTypes.string,
}

SEO.defaultProps = {
	title: null,
	description: null,
	keywords: null,
	lastModified: null,
	lang: 'en',
}

export default SEO
