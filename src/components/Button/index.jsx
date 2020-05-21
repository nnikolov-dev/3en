import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, color, white}) => (
	<button
		type="button"
		className={`bg-transparent hover:bg-${color} text-${white ? 'white' : color} hover:text-white font-title font-bold uppercase text-sm py-2 px-8 border hover:border-${color} rounded`}
	>
		{children}
	</button>
)

Button.propTypes = {
	children: PropTypes.string,
	color: PropTypes.string,
	white: PropTypes.bool,
}

Button.defaultProps = {
	children: '',
	color: 'light_blue',
	white: false,
}

export default Button
