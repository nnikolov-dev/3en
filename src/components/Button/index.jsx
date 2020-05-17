import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

const Button = ({accent, children}) => (
	<div className={`${styles.Button} ${accent && styles.Accent}`}>
		{children}
	</div>
)

Button.propTypes = {
	accent: PropTypes.bool,
	children: PropTypes.string,
}

Button.defaultProps = {
	accent: false,
	children: '',
}

export default Button
