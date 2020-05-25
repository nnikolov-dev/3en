import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Index = () => (
	<>
		<Helmet>
			<title>Home</title>
		</Helmet>

		<div className="flex flex-col min-h-screen">
			<div className="flex-1">
				<Jumbotron
					overlay
				>
					<Layout>
						<Nav />
						<div className="sm:max-w-sm md:max-w-md lg:max-w-lg py-8">
							<h1 className="font-heading text-white font-bold text-3xl md:text-6xl">Your Homepage</h1>
							<h2 className="font-heading text-white text-lg md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!</h2>
						</div>
					</Layout>
				</Jumbotron>
				<div className="flex flex-wrap md:flex-no-wrap">
					<Card>
						<Layout>
							<h1 className="font-title font-bold text-2xl">Our Expertise</h1>
							<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
						</Layout>
					</Card>
					<Card color="primary">
						<Layout>
							<h1 className="font-title font-bold text-2xl">Our Values</h1>
							<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
						</Layout>
					</Card>
				</div>
				<div className="relative h-64 flex justify-center items-center">
					<img
						src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						className="absolute w-full h-full object-cover"
					/>
					<div className="absolute bg-shade bg-opacity-75 w-full h-full flex items-center text-center">
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
							<Button color="shade">View</Button>
						</div>
						<div className="md:pl-8 md:w-1/2 pb-8">
							<h1 className="font-title font-bold text-blue text-2xl">Our Expertise</h1>
							<p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
							<Button color="shade">View</Button>
						</div>
					</div>
				</Layout>
				<section className="bg-lite py-16 text-shade">
					<div className="max-w-xl mx-auto px-8">
						<Slider dots infinite autoplay arrows={false}>
							<div className="item w-full">
								<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
								<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
								<Button color="shade">View More</Button>
							</div>
							<div className="item w-full">
								<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
								<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
								<Button color="shade">View More</Button>
							</div>
							<div className="item w-full">
								<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
								<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
								<Button color="shade">View More</Button>
							</div>
							<div className="item w-full">
								<h1 className="font-title font-bold text-4xl">Criminal Law</h1>
								<p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
								<Button color="shade">View More</Button>
							</div>
						</Slider>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	</>
)


export default Index
