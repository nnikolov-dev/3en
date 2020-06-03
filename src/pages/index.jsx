import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import RichText from '../components/RichText'

const Index = ({data: {
	kontentItemSiteInformation: {elements: {
		title: {value: title},
		logo: {value: [{url: logoImage}]},
		phone_number: {value: phoneNumber},
	}},
	kontentItemHomePage: {elements: {
		background_image: {value: [{url: backgroundImage}]},
		carousel: {value: [{elements: {items: {value: carouselItems}}}]},
	}}}}) => (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>

			<div className="flex flex-col min-h-screen">
				<div className="flex-1 mt-20 md:mt-0">
					<Jumbotron
						overlay
						image={backgroundImage}
						full
					>
						<div className="hidden md:flex absolute w-full h-full items-center justify-center">
							<img
								src={logoImage}
								alt="Logo"
								className="w-1/2"
							/>
						</div>
					</Jumbotron>
					<Layout>
						<div id="contact" className="pb-8 md:py-16 text-center md:text-left">
							<Contact phoneNumber={phoneNumber} />
						</div>
					</Layout>
					<section className="bg-lite py-16 text-shade">
						<div className="max-w-xl mx-auto px-8">
							<Slider dots infinite autoplay arrows={false}>
								{carouselItems.map(({id, elements: {richtext__content: content}}) => (
									<div className="item w-full" key={`slider-${id}`}>
										<RichText content={content} />
									</div>
								))}
							</Slider>
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</>
)

export const query = graphql`
query homeQuery {
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
		phone_number {
		  value
		}
	  }
	}
	kontentItemHomePage {
	  elements {
		background_image {
		  value {
			url
		  }
		}
		carousel {
		  value {
			... on kontent_item_carousel {
			  id
			  elements {
				items {
				  value {
					... on kontent_item_carousel_item {
					  id
					  elements {
						richtext__content {
						  images {
							description
							height
							url
							image_id
							width
						  }
						  links {
							codename
							link_id
							url_slug
							type
						  }
						  name
						  type
						  value
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	}
  }   
`

export default Index
