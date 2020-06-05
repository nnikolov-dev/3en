import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'


const Button = ({children, full, type, theme, disabled}) => {
	const buttonClass = cx(
		'relative overflow-hidden bg-transparent group hover:text-white font-title font-bold uppercase border text-sm py-2 px-8',
		{
			'text-white border-white hover:border-secondary': theme === 'white',
			'text-primary border-primary': theme === 'primary',
			'text-secondary border-secondary': theme === 'secondary',
			'text-shade border-shade': theme === 'shade',
			'text-accent border-accent': theme === 'accent',
			'bg-gray-300 text-shade border-none hover:text-shade': disabled,
			'w-full': full,
			'w-auto': !full,
		},
	)
	const buttonClassInner = cx(
		'absolute w-full inset-0 border border-transparent transform translate-y-full group-hover:translate-y-0 ease-in-out duration-150',
		{
			'bg-primary': theme === 'primary' && !disabled,
			'bg-secondary': (theme === 'secondary' || theme === 'white') && !disabled,
			'bg-shade': theme === 'shade' && !disabled,
			'bg-accent': theme === 'accent' && !disabled,
		},
	)
	return (
		// eslint-disable-next-line react/button-has-type
		<button
			type={type}
			className={buttonClass}
			disabled={disabled}
		>
			<div className={buttonClassInner} />
			<span className="relative">{children}</span>
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	full: PropTypes.bool,
	type: PropTypes.string,
	theme: PropTypes.oneOf(['white', 'primary', 'secondary', 'accent', 'shade']),
}

Button.defaultProps = {
	children: '',
	full: false,
	type: 'button',
	theme: 'primary',
}

export default Button
