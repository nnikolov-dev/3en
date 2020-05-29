import React from 'react'
import Helmet from 'react-helmet'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Team from '../components/Team'
import Footer from '../components/Footer'

import logoImage from '../assets/images/logo.svg'
import jumbotronImage from '../assets/images/stock-1.jpeg'

const About = () => (
	<>
		<Helmet>
			<title>About</title>
		</Helmet>

		<div className="flex flex-col min-h-screen">
			<div className="flex-1 mt-20 md:mt-0">
				<Jumbotron
					overlay
					image={jumbotronImage}
				>
					<div className="absolute hidden md:flex justify-center items-center h-full w-full">
						<div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
							<h1 className="font-heading text-white font-bold text-3xl md:text-6xl">About Us </h1>
							<h2 className="font-heading text-white text-lg md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!</h2>
						</div>
					</div>
					<Layout>
						<Nav />
					</Layout>
				</Jumbotron>
				<div className="flex justify-center items-center text-accent my-16 flex-wrap md:flex-nowrap">
					<span className="material-icons text-6xl mx-4">stars</span>
					<span className="material-icons text-6xl mx-4">stars</span>
					<span className="material-icons text-6xl mx-4">stars</span>
					<span className="material-icons text-6xl mx-4">stars</span>
					<span className="material-icons text-6xl mx-4">stars</span>
				</div>
				<Layout>
					<h1 className="text-center font-heading text-4xl my-16 mb-8">&quot;Best in business!&quot;</h1>
					<p className="text-center mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur nesciunt, deleniti iure minus, doloribus blanditiis dolorem autem quaerat hic accusantium consectetur recusandae. Pariatur recusandae maxime aliquam quis modi, voluptatum distinctio quae sint nulla sed, dicta quia, quaerat placeat corrupti rerum. Sequi deserunt odit commodi harum eum laborum illum in minus repellat veniam soluta, distinctio facere fugit amet repudiandae culpa molestiae reiciendis quisquam nobis perferendis veritatis, voluptates corrupti praesentium? Doloribus voluptatibus voluptatem doloremque architecto aliquid velit tempore nulla harum consequatur natus. Atque sit, fuga facere veniam aspernatur explicabo libero, molestias voluptate animi voluptates illum repellat ipsum reprehenderit odit autem? Eos!</p>
					<h1 className="text-center font-heading text-4xl my-16 mb-8">A Team of Professionals</h1>
				</Layout>
				<div className="bg-lite">
					<Layout>
						<Team />
					</Layout>
				</div>
			</div>
			<Footer />
		</div>
	</>
)


export default About
