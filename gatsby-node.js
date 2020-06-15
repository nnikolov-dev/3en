
const path = require('path')

// MapBox SSR
exports.onCreateWebpackConfig = ({actions, stage, loaders}) => {
	const config = {
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		},
	}
	if (stage === 'build-html') {
		config.module = {
			rules: [
				{
					test: /mapbox-gl/,
					use: loaders.null(),
				},
			],
		}
	}
	actions.setWebpackConfig(config)
}

const pageTemplate = path.resolve('./src/templates/page.jsx')

exports.createPages = ({graphql, actions}) => {
	const {createPage, createRedirect} = actions

	createRedirect({
		fromPath: '/',
		toPath: '/bg',
		isPermanent: 'true',
	})

	return new Promise((resolve) => {
		graphql(`
		query pageQuery {
			allKontentItemPage {
			  nodes {
				system {
				  id
				  language
				  last_modified(formatString: "DD/MM/YYYY")
				}
				elements {
				  description {
					value
				  }
				  keywords {
					value
				  }
				  location__address {
					images {
					  description
					  height
					  image_id
					  url
					  width
					}
					links {
					  codename
					  link_id
					  type
					  url_slug
					}
					name
					type
					value
				  }
				  location__latitude {
					value
				  }
				  location__longitude {
					value
				  }
				  logo {
					value {
					  url
					  description
					  name
					}
				  }
				  cookies__message {
					value
				  }
				  cookies__accept {
					value
				  }
				  cookies__decline {
					value
				  }
				  products {
					value {
					  ... on kontent_item_product_category {
						id
						elements {
						  title {
							value
						  }
						  products {
							value {
							  ... on kontent_item_product {
								id
								elements {
								  title {
									value
								  }
								  description {
									images {
									  description
									  height
									  image_id
									  url
									  width
									}
									links {
									  codename
									  link_id
									  url_slug
									  type
									}
									value
									type
									name
								  }
								}
							  }
							}
						  }
						  image {
							value {
							  description
							  url
							}
						  }
						}
					  }
					}
				  }
				  quote {
					value
				  }
				  title {
					value
				  }
				  work_hours {
					images {
					  description
					  height
					  image_id
					  url
					  width
					}
					links {
					  codename
					  link_id
					  type
					  url_slug
					}
					value
					type
					name
				  }
				  content {
					value {
					  ... on kontent_item_section {
						elements {
						  image {
							value {
							  url
							  description
							}
						  }
						  title {
							value
						  }
						  rich_text__content {
							images {
							  description
							  height
							  image_id
							  url
							  width
							}
							links {
							  codename
							  link_id
							  type
							  url_slug
							}
							type
							name
							value
						  }
						}
						system {
						  codename
						}
					  }
					}
				  }
				  contact_form__e_mail_address {
					value
				  }
				  contact_form__gdpr_text {
					value
				  }
				  contact_form__message {
					value
				  }
				  contact_form__name {
					value
				  }
				  contact_form__submit_button {
					value
				  }
				  contact_form__submit_message {
					value
				  }
				  contact_form__telephone_number {
					value
				  }
				}
			  }
			}
		  }						  
    `).then((result) => {
			const pages = result.data.allKontentItemPage.nodes

			pages.forEach((page) => {
				createPage({
					path: `${page.system.language}`,
					component: pageTemplate,
					context: page,
				})
			})
			resolve()
		})
	})
}
