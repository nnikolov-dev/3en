import React from 'react'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'
import RichText from '../components/RichText'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Preview from '../components/Preview'
import SEO from '../components/SEO'

import jumbotronImage from '../assets/images/person.jpeg'
import defaultImage from '../assets/images/jupiter.svg'

const PersonPage = ({pageContext: {
	system: {id},
	elements: {
		name: {value: name},
		areas_of_expertise: {value: areasOfExperetise},
		awards: {value: awards},
		direct_access: {value: directAccess},
		education: {value: education},
		year_called: {value: yearCalled},
		image: {value: [image]},
		richtext__content: content,
	}}}) => (
		<>
			<Preview id={id} title={name} />
			<SEO title={name} description={`The profile of ${name}`} keywords={name} />
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
									<div className="h-40 md:h-72 bg-primary">
										{image
											? (
												<img
													src={image.url}
													alt={name}
													className="w-full h-full object-cover"
												/>
											)
											: (
												<div className="w-full h-full bg-repeat" style={{backgroundImage: `url(${defaultImage})`}} />
											)}
									</div>
									<h1 className="py-2 mb-4 text-xl bg-primary text-white text-center">{name}</h1>
									{yearCalled && (
										<div className="m-2 py-2 flex border-b-2 border-gray-400">
											<span className="w-full">
												Year called
											</span>
											<span className="text-right font-light w-full">
												{yearCalled}
											</span>
										</div>
									)}
									{areasOfExperetise.length > 0 && (
										<div className="m-2 py-2 flex border-b-2 border-gray-400">
											<span className="w-full">
												Areas of expertise
											</span>
											<span className="text-right font-light w-full">
												{areasOfExperetise.map(({elements: {title: {value: areaOfExperetise}}}) => areaOfExperetise).join(', ')}
											</span>
										</div>
									)}
									{education && (
										<div className="m-2 py-2 flex border-b-2 border-gray-400">
											<span className="w-full">
												Education
											</span>
											<span className="text-right font-light w-full">
												{education}
											</span>
										</div>
									)}
									<div className="m-2 py-2 flex border-b-2 border-gray-400">
										<span className="w-full">
											Direct Access
										</span>
										<span className="text-right font-light w-full">
											{directAccess.length > 0
												? 'Yes'
												: 'No'}
										</span>
									</div>
									{awards && (
										<div className="m-2 py-2 flex border-b-2 border-gray-400">
											<span className="w-full">
												Awards
											</span>
											<span className="text-right font-light w-full">
												{awards}
											</span>
										</div>
									)}
									<div className="my-4 p-2">
										<AnchorLink to="/#contact" stripHash><Button full theme="shade">Contact</Button></AnchorLink>
									</div>
								</div>
								<div className="w-full md:w-8/12 md:mt-16 md:px-8 py-8">
									<RichText content={content} />
									{/* <div className="mt-8">
									<h1 className="font-heading text-shade font-bold text-2xl">Notable Cases</h1>
									<div className="mt-2 h-96 overflow-y-auto">
										<div className="flex flex-col space-y-3">
											{[...Array(5)].fill().map((_, i) => (
												<div className="w-full border-b-2 border-accent border-dashed pb-3">
													<h1 className="text-lg font-bold">Case {i + 1}</h1>
													<h2 className="text-sm">01/01/2019</h2>
													<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sapiente? Reiciendis quaerat consectetur illum quis amet illo molestias nostrum earum, eos facere porro eaque molestiae. Earum expedita harum molestias! Libero?</p>
												</div>
											))}
										</div>
									</div>
								</div> */}
								</div>
							</div>
						</Layout>
					</div>
				</div>
				<Footer />
			</div>
		</>
)

export default PersonPage
