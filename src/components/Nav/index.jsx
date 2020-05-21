import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import logoImage from '../../assets/images/logo.svg'

const NavItem = ({children, address, active}) => (
	<div className={`mx-8 text-sm text-center font-title font-bold uppercase pb-1 border-b-2 hover:border-white transition ease-in-out duration-200 ${active ? 'border-white' : 'border-transparent'}`}>
		<Link to={address} className="text-white">{children}</Link>
	</div>
)

const Nav = ({children}) => {
	const [visible, setVisible] = useState(false)
	const toggleNav = () => setVisible(!visible)
	return (
		<div className="flex relative justify-between items-center z-10 w-full">
			<div className="w-56">
				<img src={logoImage} alt="Logo" />
			</div>
			<div className="hidden flex-row items-center sm:hidden md:flex">
				{children}
			</div>
			<div className={`transform p-12 flex flex-col items-center z-50 fixed w-full h-full bg-blue inset-0 transition ease-in-out duration-200 md:hidden ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
				{children.map((child) => (
					<div className="mb-5">
						{child}
					</div>
				))}
			</div>
			<div className={`sm:block md:hidden z-50 w-6 h-6 cursor-pointer right-8 transform translate-x-1/2 ${visible ? 'fixed' : 'block'}`} onClick={toggleNav}>
				<div className="w-full h-px bg-white" />
				<div className="w-full h-px my-1 bg-white" />
				<div className="w-full h-px bg-white" />
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
