import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import {Nav, NavItem} from '../components/Nav'
import Layout from '../components/Layout'
// import '../assets/styles/style.scss'
import Jumbotron from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Index = () => (
	<>
		<Helmet>
			<title>Home :: Agency</title>
		</Helmet>
		<div className="flex flex-col min-h-screen">
			<div className="flex-1">
				<div className="home">
					<Jumbotron
						overlay
					>
						<Layout>
							<Nav>
								<NavItem address="/" active>Home</NavItem>
								<NavItem address="/about">About</NavItem>
								<NavItem address="/person">The Team</NavItem>
								<NavItem address="/">Services</NavItem>
								<Button white>Contact</Button>
							</Nav>
							<div className="sm:max-w-sm md:max-w-md lg:max-w-lg py-8">
								<h1 className="font-heading text-white font-bold text-3xl md:text-6xl">Your Homepage</h1>
								<h2 className="font-heading text-white text-lg md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!</h2>
							</div>
						</Layout>
					</Jumbotron>
					<Layout>
						<div className="flex flex-wrap justify-center text-left md:my-12">
							<div className="p-8 md:w-1/2">
								<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								<Button color="black">View</Button>
							</div>
							<div className="p-8 md:w-1/2">
								<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								<Button color="black">View</Button>
							</div>
							<div className="p-8 md:w-1/2">
								<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								<Button color="black">View</Button>
							</div>
							<div className="p-8 md:w-1/2">
								<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								<Button color="black">View</Button>
							</div>
						</div>
					</Layout>
					<section className="bg-green py-16 border-t-4 border-skin md:flex md:justify-center p-16">
						<Slider dots infinite autoplay arrows={false}>
							<div className="max-w-xl">
								<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
								<Button color="black">View More</Button>
							</div>
						</Slider>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	</>
)


export default Index
