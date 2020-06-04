import React from 'react'
import {Helmet} from 'react-helmet'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'
import RichText from '../components/RichText'
import Footer from '../components/Footer'
import Preview from '../components/Preview'

const CustomPage = ({pageContext: {
	system: {id},
	elements: {
		page_general__background_image: {value: [backgroundImage]},
		page_general__description: {value: description},
		page_general__keywords: {value: keywords},
		page_general__title: {value: title},
		richtext__content: content,
	}}}) => (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Helmet>
			<Preview id={id} title={title} />
			<div className="flex flex-col min-h-screen text-shade">
				<div className="flex-1 mt-20 md:mt-0">
					<Jumbotron
						overlay
						image={backgroundImage ? backgroundImage.url : null}
					/>
					<div className="pb-8 md:pt-8">
						<Layout>
							<RichText content={content} />
						</Layout>
					</div>
				</div>
				<Footer />
			</div>
		</>
)

export default CustomPage
