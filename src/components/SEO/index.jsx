import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'


const SEO = ({title, description, keywords}) => (
	<StaticQuery
		query={graphql`
          query seoQuery {
            kontentItemSiteInformation {
              elements {
                description {
                  value
                }
                keywords {
                  value
                }
                title {
                  value
                }
              }
            }
          }          
        `}
		render={({kontentItemSiteInformation: {elements: {
			title: {value: siteTitle},
			description: {value: siteDescription},
			keywords: {value: siteKeywords},
		}}}) => (
			<Helmet
				title={title ? `${title} - ${siteTitle}` : siteTitle}
				meta={[
					{
						name: 'description',
						content: description || siteDescription,
					},
					{
						name: 'keywords',
						content: keywords ? `${siteKeywords}, ${keywords}` : siteKeywords,
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
						content: siteTitle,
					},
					{
						name: 'twitter:title',
						content: siteTitle,
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
		)}
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
