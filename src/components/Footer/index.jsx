import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Layout from '../Layout'
import RichText from '../RichText'

const Footer = () => (
	<StaticQuery
		query={graphql`
		query footerQuery {
			allKontentItemPage {
			  nodes {
				elements {
				  navigation__navigation {
					value {
					  name
					}
				  }
				  page_general__title {
					value
				  }
				  slug {
					value
				  }
				}
			  }
			}
			kontentItemSiteInformation {
			  elements {
				title {
				  value
				}
				logo {
				  value {
					url
				  }
				}
				address {
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
				working_hours {
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
				  name
				  type
				}
			  }
			}
			allKontentItemService {
			  nodes {
				elements {
				  title {
					value
				  }
				}
			  }
			}
		  }									  
	`}
		render={({
			allKontentItemPage: {nodes: pages},
			kontentItemSiteInformation: {
				elements: {
					title: {value: title},
					logo: {value: [{url: logoImage}]},
					address,
					working_hours: workingHours,
				}},
			allKontentItemService: {nodes: services},
		}) => (
			<footer className="py-16 bg-shade text-white">
				<Layout>
					<div className="flex justify-center">
						<img src={logoImage} alt={title} className="max-w-sm" />
					</div>
					<div className="flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left my-16 w-full">
						<div className="mb-4">
							<h1 className="uppercase text-xl">Working Hours</h1>
							<RichText content={workingHours} />
						</div>
						<div className="mb-4">
							<h1 className="uppercase text-xl">Services</h1>
							<ul>
								{services.map(({elements: {title: {value: service}}}) => (
									<li>
										<Link to="/services">{service}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="mb-4">
							<h1 className="uppercase text-xl">Site Map</h1>
							<ul>
								<li><Link to="/">Home</Link></li>
								{pages.map(({elements: {navigation__navigation: {value: [displayNav]}, page_general__title: {value: pageTitle}, slug: {value: slug}}}) => {
									if (displayNav) {
										return (<li><Link to={`page/${slug}`}>{pageTitle}</Link></li>)
									}
									return null
								})}
							</ul>
						</div>
						<div className="mb-4">
							<h1 className="uppercase text-xl">Our Office</h1>
							<RichText content={address} />
						</div>
					</div>
					<div className="flex justify-between text-sm border-t border-white border-opacity-25 pt-2">
						<div>
							&copy; 2020 Your Company. All Rights Reserved | Terms of Service
						</div>
					</div>
				</Layout>
			</footer>
		)}
	/>
)

export default Footer
