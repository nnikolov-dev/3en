import React, {useState, useEffect} from 'react'
import {window} from 'browser-monads'
import cx from 'classnames'
import PropTypes from 'prop-types'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Button from '../Button'

const click = (callback) => {
	useEffect(() => {
		window.addEventListener('mouseup', callback)
		return () => window.removeEventListener('mouseup', callback)
	}, [callback])
}

const Card = ({image, children, description, modal, onClick}) => {
	const [active, setActive] = useState(false)

	const handleClick = (e) => {
		if (modal) {
			e.stopPropagation()
			setActive(true)
		}
		if (onClick) {
			onClick()
		}
	}

	const handleClose = () => setActive(false)
	click(handleClose)

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
						<h1 className="text-2xl font-heading">{children}</h1>
						<p>{description}</p>
					</div>
					<div className="md:pl-10 mt-4 md:mt-0">
						<p className="text-lg mb-2">Have a question?</p>
						<AnchorLink to="/#contact" stripHash><Button theme="white">Contact us</Button></AnchorLink>
					</div>
				</div>
			</div>
			<div className="group p-2 bg-lite cursor-pointer" onClick={handleClick}>
				<img src={image} className="h-32 object-cover w-full" alt={children} />
				<h3 className="text-xl font-title mb-0 font-light text-center py-2 bg-shade text-white group-hover:bg-primary">{children}</h3>
			</div>
		</>
	)
}

Card.propTypes = {
	image: PropTypes.string,
	children: PropTypes.string,
	description: PropTypes.string,
	modal: PropTypes.bool,
	onClick: PropTypes.func,
}

Card.defaultProps = {
	image: '',
	children: '',
	description: '',
	modal: false,
	onClick: null,
}

export default Card
