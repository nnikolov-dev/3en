import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'


const SEO = ({title, description, keywords}) => (
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
		]}
		htmlAttributes={{
			lang: 'en',
		}}
	/>
)

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
}

SEO.defaultProps = {
	title: null,
	description: null,
	keywords: null,
}

export default SEO
