import React from 'react'
import PropTypes from 'prop-types'

const Card = ({image, children, onClick}) => (
	<div className="group p-2 bg-lite cursor-pointer" onClick={onClick}>
		<img src={image} className="h-32 object-cover w-full" alt="Law" />
		<h1 className="text-xl font-light text-center py-2 bg-shade text-white group-hover:bg-primary">{children}</h1>
	</div>
)

Card.propTypes = {
	image: PropTypes.string,
	children: PropTypes.string,
	onClick: PropTypes.func,
}

Card.defaultProps = {
	image: '',
	children: '',
	onClick: null,
}

export default Card
