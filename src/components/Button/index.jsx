import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children}) => (
	<button
		type="button"
		className="
			bg-transparent
			hover:bg-light_blue
			text-blue-700
			font-title
			font-bold
			uppercase
			text-sm
			py-2
			px-8
			border
			border-blue-500
			hover:border-light_blue
			rounded
		"
	>
		{children}
	</button>
)

Button.propTypes = {
	children: PropTypes.string,
}

Button.defaultProps = {
	children: '',
}

export default Button
