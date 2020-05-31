import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'


const Button = ({children, color, white, full, type, disabled}) => {
	const buttonClass = cx(
		'relative overflow-hidden bg-transparent group hover:text-white font-title font-bold uppercase text-sm py-2 px-8',
		{
			'text-white border-white': white,
			[`text-${color} border-${color}`]: !white && !disabled,
			'w-full': full,
			'w-auto': !full,
			[`bg-${color} text-white`]: disabled,
			[`border hover:border-${color}`]: !disabled,
		},
	)
	return (
		// eslint-disable-next-line react/button-has-type
		<button
			type={type}
			className={buttonClass}
			disabled={disabled}
		>
			<div className={`absolute w-full inset-0 border border-transparent bg-${color} transform translate-y-full group-hover:translate-y-0 ease-in-out duration-150`} />
			<span className="relative">{children}</span>
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	color: PropTypes.string,
	white: PropTypes.bool,
	full: PropTypes.bool,
	type: PropTypes.string,
	disabled: PropTypes.bool,
}

Button.defaultProps = {
	children: '',
	color: 'secondary',
	white: false,
	full: false,
	type: 'button',
	disabled: false,
}

export default Button
