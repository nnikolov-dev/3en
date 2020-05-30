import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

import jumbotronImage from '../assets/images/stock-6.jpeg'

const Team = () => (
	<>
		<Helmet>
			<title>Team</title>
		</Helmet>

		<div className="flex flex-col min-h-screen text-shade">
			<div className="flex-1 mt-20 md:mt-0">
				<Jumbotron
					overlay
					image={jumbotronImage}
				/>
				<Layout>
					<div className="flex justify-center text-center mb-8 md:mt-16">
						<div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
							<h1 className="font-heading text-shade font-bold text-3xl md:text-4xl">Our Team</h1>
							<h2 className="font-heading text-shade text-lg md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!</h2>
						</div>
					</div>
					<h1 className="text-center font-heading text-4xl md:my-16 mb-8">Meet the Barristers</h1>
					<div className="mb-6 flex justify-center md:justify-end">
						<div className="relative md:w-1/4">
							<select className="block appearance-none w-full bg-lite border border-lite text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="grid-state">
								<option>Criminal Law</option>
								<option>Some Law</option>
								<option>Another</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
							</div>
						</div>
					</div>
					<ul className="flex flex-wrap md:text-xl text-center">
						{[...Array(20).fill().map((_, i) => (
							<li className="w-full md:w-1/4 p-4 md:p-8 border-b-2 hover:bg-lite font-light transition duration-300"><Link to="/person">John Doe {i}</Link></li>
						))]}
					</ul>
				</Layout>
			</div>
			<Footer />
		</div>
	</>
)


export default Team
