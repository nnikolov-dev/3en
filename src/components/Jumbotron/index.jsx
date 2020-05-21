import React from 'react'
import PropTypes from 'prop-types'
import aerialVideo from '../../assets/videos/aerial.mp4'
import aerialImage from '../../assets/videos/aerial.jpg'

const Jumbotron = ({image, children, overlay}) => (
	<header className="relative border-b-4 border-light_blue">
		<video
			className="absolute w-full h-full object-cover object-jumbotron"
			autoPlay
			muted
			poster={aerialImage}
			playsInline
		>
			<source src={aerialVideo} type="video/mp4" />
		</video>
		{overlay && (<div className="absolute w-full h-full bg-blue bg-opacity-75" />)}
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
