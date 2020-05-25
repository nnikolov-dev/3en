import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, color, white}) => (
	<button
		type="button"
		className={`relative overflow-hidden bg-transparent group ${white ? ' text-white border-white' : `text-${color} border-${color}`} hover:text-white font-title font-bold uppercase text-sm py-2 px-8 border hover:border-${color}`}
	>
		<div className={`absolute w-full inset-0 border border-transparent bg-${color} transform translate-y-full group-hover:translate-y-0 ease-in-out duration-150`} />
		<span className="relative">{children}</span>
	</button>
)

Button.propTypes = {
	children: PropTypes.string,
	color: PropTypes.string,
	white: PropTypes.bool,
}

Button.defaultProps = {
	children: '',
	color: 'secondary',
	white: false,
}

export default Button
