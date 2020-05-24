import React from 'react'
import PropTypes from 'prop-types'
import aerialVideo from '../../assets/videos/aerial_alt.mp4'
import aerialImage from '../../assets/videos/aerial_alt.jpg'

const Jumbotron = ({image, video, children, overlay}) => (
	<header className="relative">
		<video
			className="absolute w-full h-full object-cover object-jumbotron"
			autoPlay
			muted
			poster={image}
			playsInline
			loop
		>
			<source src={video} type="video/mp4" />
		</video>
		{overlay && (<div className="absolute w-full h-full bg-blue bg-opacity-75" />)}
		{children}
	</header>
)

Jumbotron.propTypes = {
	image: PropTypes.string,
	video: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	overlay: PropTypes.bool,
}

Jumbotron.defaultProps = {
	image: aerialImage,
	video: aerialVideo,
	children: '',
	overlay: false,
}

export default Jumbotron
