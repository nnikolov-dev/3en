import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styles from './nav.module.scss'

import logoImage from '../../assets/images/logo.svg'

const NavItem = ({children, address, active}) => (
	<div
		className={`${styles.NavItem} ${active && styles.Active}`}
	>
		<Link to={address}>{children}</Link>
	</div>
)

const Nav = ({children}) => {
	const [visible, setVisible] = useState(false)
	const toggleNav = () => setVisible(!visible)
	return (
		<div className={styles.Nav}>
			<div className={styles.Logo}>
				<img src={logoImage} alt="Logo" />
			</div>
			<div className={styles.Items}>
				{children}
			</div>
			<div className={`${styles.MobileItems} ${visible && styles.Visible}`}>
				{children.map((child) => (
					<div className={styles.Item}>
						{child}
					</div>
				))}
			</div>
			<div className={styles.Toggle} onClick={toggleNav}>
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}

Nav.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
}

Nav.defaultProps = {
	children: [],
}

export {Nav, NavItem}
