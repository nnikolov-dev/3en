import React, {useState, useEffect} from 'react'
import {window} from 'browser-monads'
import cx from 'classnames'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Card from '../Card'
import Button from '../Button'

const services = [
	{
		title: 'Criminal Law',
		image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
		description: 'Description about the service',
	},
	{
		title: 'Matriomonial Law',
		image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
		description: 'Description about the service',
	},
	{
		title: 'Motoring Offenses',
		image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1505&q=80',
		description: 'Description about the service',
	},
	{
		title: 'Other',
		image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
		description: 'Description about the service',
	},
]

const Catalog = () => {
	const [active, setActive] = useState(false)
	const [content, setContent] = useState({title: '', description: ''})
	const handleClick = (title, description) => (e) => {
		e.stopPropagation()
		setContent({title, description})
		setActive(true)
	}

	useEffect(() => {
		window.addEventListener('click', () => setActive(false))
	})

	const modalClass = cx(
		'fixed w-screen bg-primary left-0 bottom-0 z-10 transition ease-in-out duration-200 transform text-white p-8',
		{
			'translate-y-0 opacity-100': active,
			'translate-y-full opacity-0': !active,
		},
	)

	return (
		<>
			<div className={modalClass}>
				<div className="flex flex-col md:flex-row md:items-center">
					<div className="md:w-1/3 pr-3 md:border-secondary md:border-r-2">
						<h1 className="text-2xl font-heading">{content.title}</h1>
						<p>{content.description}</p>
					</div>
					<div className="md:pl-10 mt-4 md:mt-0">
						<p className="text-lg mb-2">Have a question?</p>
						<AnchorLink to="/#contact" stripHash><Button white>Contact us</Button></AnchorLink>
					</div>
				</div>
			</div>
			<div className="flex">
				<div className="w-full flex flex-wrap justify-center">
					{services.map(({title, image, description}) => (
						<div className="w-full md:w-1/4 pr-2 pb-2" key={`service-${title}`}>
							<Card image={image} onClick={handleClick(title, description)}>{title}</Card>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
export default Catalog
