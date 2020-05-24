import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import {Nav, NavItem} from '../components/Nav'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const About = () => (
	<>
		<Helmet>
			<title>About</title>
		</Helmet>

		<div className="flex flex-col min-h-screen">
			<div className="flex-1">
				<div className="home">
					<Jumbotron
						overlay
					>
						<Layout>
							<Nav>
								<NavItem address="/">Home</NavItem>
								<NavItem address="/about" active>About</NavItem>
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
					<div className="flex flex-wrap justify-center border-t-4 border-b-4 border-light_blue">
						<div className="md:w-1/2 bg-black text-white py-20">
							<Layout>
								<h1 className="font-title font-bold text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
							</Layout>
						</div>
						<div className="md:w-1/2 bg-blue text-white py-20">
							<Layout>
								<h1 className="font-title font-bold text-2xl">Our Values</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
							</Layout>
						</div>
					</div>
					<div className="relative h-64 flex justify-center items-center">
						<img
							src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
							className="absolute w-full h-full object-cover"
						/>
						<div className="absolute bg-black bg-opacity-75 w-full h-full flex items-center text-center">
							<Layout>
								<h2 className="font-heading text-white text-lg md:text-2xl z-10">
									&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!&quot;
								</h2>
							</Layout>
						</div>
					</div>
					<Layout>
						<div className="flex flex-wrap justify-center my-12">
							<div className="md:pr-8 md:w-1/2 pb-8">
								<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								<Button color="black">View</Button>
							</div>
							<div className="md:pl-8 md:w-1/2 pb-8">
								<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
								<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								<Button color="black">View</Button>
							</div>
						</div>
					</Layout>
					<section className="bg-skin py-16 border-t-4 border-skin text-black">
						<div className="max-w-xl mx-auto px-8">
							<Slider dots infinite autoplay arrows={false}>
								<div className="item w-full">
									<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
									<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
									<Button color="black">View More</Button>
								</div>
								<div className="item w-full">
									<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
									<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
									<Button color="black">View More</Button>
								</div>
								<div className="item w-full">
									<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
									<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
									<Button color="black">View More</Button>
								</div>
								<div className="item w-full">
									<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
									<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
									<Button color="black">View More</Button>
								</div>
							</Slider>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	</>
)


export default About
