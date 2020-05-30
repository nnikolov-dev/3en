import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Catalog from '../components/Catalog'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

import jumbotronImage from '../assets/images/stock-4.jpeg'

const Services = () => (
	<>
		<Helmet>
			<title>Services</title>
		</Helmet>

		<div className="flex flex-col min-h-screen text-shade">
			<div className="flex-1 mt-20 md:mt-0">
				<Jumbotron
					overlay
					image={jumbotronImage}
				/>
				<Layout>
					<h1 className="text-center font-heading font-bold text-3xl md:text-4xl my-16 mb-8">Our Services</h1>
					<p className="text-center mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur nesciunt, deleniti iure minus, doloribus blanditiis dolorem autem quaerat hic accusantium consectetur recusandae. Pariatur recusandae maxime aliquam quis modi, voluptatum distinctio quae sint nulla sed, dicta quia, quaerat placeat corrupti rerum. Sequi deserunt odit commodi harum eum laborum illum in minus repellat veniam soluta, distinctio facere fugit amet repudiandae culpa molestiae reiciendis quisquam nobis perferendis veritatis, voluptates corrupti praesentium? Doloribus voluptatibus voluptatem doloremque architecto aliquid velit tempore nulla harum consequatur natus. Atque sit, fuga facere veniam aspernatur explicabo libero, molestias voluptate animi voluptates illum repellat ipsum reprehenderit odit autem? Eos!</p>
					<div className="my-8">
						<Catalog />
					</div>
				</Layout>
			</div>
			<Footer />
		</div>
	</>
)


export default Services
