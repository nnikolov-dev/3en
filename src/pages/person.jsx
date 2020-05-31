import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

import jumbotronImage from '../assets/images/stock-7.jpeg'

const Person = () => (
	<>
		<Helmet>
			<title>John Doe</title>
		</Helmet>

		<div className="flex flex-col min-h-screen text-shade">
			<div className="flex-1 mt-20 md:mt-0">
				<Jumbotron
					overlay
					image={jumbotronImage}
				/>
				<div className="relative md:-mt-16 md:z-10">
					<Layout>
						<div className="flex flex-wrap mt-2">
							<div className="w-full md:w-4/12 bg-lite p-1 border">
								<img
									src="https://images.unsplash.com/photo-1551989745-347c28b620e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
									className="min-w-full object-cover"
								/>
								<h1 className="py-2 mb-4 text-xl bg-primary text-white text-center">John Doe</h1>
								<div className="m-2 py-2 flex border-b-2 border-gray-400">
									<span className="w-full">
										Year called
									</span>
									<span className="text-right font-light w-full">
										2020
									</span>
								</div>
								<div className="m-2 py-2 flex border-b-2 border-gray-400">
									<span className="w-full">
										Areas of expertise
									</span>
									<span className="text-right font-light w-full">
										Criminal, Motoring
									</span>
								</div>
								<div className="my-4 p-2">
									<AnchorLink to="/#contact" stripHash><Button full color="shade">Contact</Button></AnchorLink>
								</div>
							</div>
							<div className="w-full md:w-8/12 md:mt-16 md:px-8 py-8">
								<Slider dots infinite autoplay arrows={false}>
									{[...Array(5)].fill().map(() => (
										<div className="item w-full">
											<p className="mb-8 text-center text-lg font-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
										</div>
									))}
								</Slider>
								<h1 className="mt-16 font-heading text-shade font-bold text-3xl md:text-4xl">About John Doe</h1>
								<p className="mt-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus adipisci numquam quo blanditiis iste harum, aliquid omnis quam dolorum eaque quibusdam nulla temporibus. Rem, atque repudiandae! Unde odit velit quasi est facere asperiores a voluptas sint, aperiam corrupti totam labore vel illo eaque ea corporis. Aut ex possimus sapiente dolorum, quas veniam quod laudantium excepturi perspiciatis corporis quasi ipsum commodi, neque quos consectetur sunt quo. Dolor commodi debitis aliquam mollitia vero architecto, corporis quo soluta iure error illo saepe, eligendi molestias sit similique sequi et dolores blanditiis, dignissimos totam quaerat. Consectetur esse quae itaque velit eaque, perspiciatis obcaecati praesentium officiis, in sequi animi fuga dolores debitis delectus similique sunt expedita molestiae culpa repellat consequatur nisi? Repellat ex, inventore optio sit itaque quia est sapiente quibusdam molestiae commodi eos, beatae, aperiam sequi veritatis perferendis rerum quasi ut? Cumque quod voluptates saepe, ea totam, commodi amet provident, eius eaque accusantium maxime.
								</p>
							</div>
						</div>
					</Layout>
				</div>
			</div>
			<Footer />
		</div>
	</>
)


export default Person
