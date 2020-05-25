import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children, color}) => (
	<div className={`relative overflow-hidden text-white py-20 transition duration-150 cursor-pointer border-t-4 border-b-4 border-secondary bg-${color} group`}>
		<div className="absolute w-full h-full inset-0 border border-transparent bg-secondary transform -translate-y-full group-hover:translate-y-0 ease-in-out duration-150" />
		{children}
	</div>
)

Card.propTypes = {
	color: PropTypes.string,
}

Card.defaultProps = {
	color: 'shade',
}

export default Card
