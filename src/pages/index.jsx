import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import logoImage from '../assets/images/logo.svg'
import jumbotronImage from '../assets/images/stock-2.jpeg'

const Index = () => (
	<>
		<Helmet>
			<title>Home</title>
		</Helmet>

		<div className="flex flex-col min-h-screen">
			<div className="flex-1 mt-20 md:mt-0">
				<Jumbotron
					overlay
					image={jumbotronImage}
				>
					<div className="hidden md:flex absolute w-full h-full items-center justify-center">
						<img
							src={logoImage}
							alt="Logo"
							className="w-1/2"
						/>
					</div>
					<Layout>
						<Nav />
						{/* <div className="sm:max-w-sm md:max-w-md lg:max-w-lg py-8">
							<h1 className="font-heading text-white font-bold text-3xl md:text-6xl">Your Homepage</h1>
							<h2 className="font-heading text-white text-lg md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!</h2>
						</div> */}
					</Layout>
				</Jumbotron>
				<Layout>
					<div id="contact" className="md:py-16 py-4 text-center md:text-left">
						<Contact />
					</div>
				</Layout>
				<section className="bg-lite py-16 text-shade">
					<div className="max-w-xl mx-auto px-8">
						<Slider dots infinite autoplay arrows={false}>
							{[...Array(5)].fill().map((_, i) => (
								<div className="item w-full">
									<h1 className="font-title font-bold text-4xl">Company {i}</h1>
									<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
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


export default Index
