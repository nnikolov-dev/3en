import React from 'react'
import PropTypes from 'prop-types'
import aerialImage from '../../assets/images/stock-1.jpeg'
import logoImage from '../../assets/images/logo.svg'

const Jumbotron = ({image, children, overlay}) => (
	<header
		className="relative min-h-auto md:min-h-screen bg-cover bg-fixed bg-jumbotron pb-8"
		style={{backgroundImage: `url(${image})`}}
	>
		{overlay && (<div className="absolute w-full h-full bg-primary bg-opacity-75" />)}
		<div className="absolute w-full h-full flex items-center justify-center">
			<img
				src={logoImage}
				alt="Logo"
				className="w-40 md:w-1/2"
			/>
		</div>
		{children}
	</header>
)

Jumbotron.propTypes = {
	image: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	overlay: PropTypes.bool,
}

Jumbotron.defaultProps = {
	image: aerialImage,
	children: '',
	overlay: false,
}

export default Jumbotron
