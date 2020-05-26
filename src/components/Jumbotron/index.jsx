import React from 'react'
import PropTypes from 'prop-types'
import aerialImage from '../../assets/images/stock-6.jpeg'

const Jumbotron = ({image, children, overlay}) => (
	<header
		className="relative min-h-screen bg-cover bg-fixed bg-jumbotron"
		style={{backgroundImage: `url(${image})`}}
	>
		{overlay && (<div className="absolute w-full h-full bg-primary bg-opacity-75" />)}
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
