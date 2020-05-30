import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Button = ({children, color, white, full}) => {
	const buttonClass = cx(
		'relative overflow-hidden bg-transparent group hover:text-white font-title font-bold uppercase text-sm py-2 px-8 border',
		`hover:border-${color}`,
		{
			'text-white border-white': white,
			[`text-${color} border-${color}`]: !white,
			'w-full': full,
			'w-auto': !full,
		},
	)
	return (
		<button
			type="button"
			className={buttonClass}
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
}

Button.defaultProps = {
	children: '',
	color: 'secondary',
	white: false,
	full: false,
}

export default Button
