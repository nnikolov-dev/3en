import React, {useState} from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Button from '../Button'

const NavItem = ({children, title, address}) => (
	<div className="relative mx-8 text-sm text-center font-title font-bold uppercase">
		{Array.isArray(children)
			? (
				<div className="group relative z-50">
					<Link to={address} className="pb-1 border-b-2 text-white border-transparent hover:border-white hover:border-opacity-25 transition ease-in-out duration-200" activeClassName="border-white">{title}</Link>
					<div className="absolute bottom-full right-0 py-4 invisible group-hover:visible font-title font-normal normal-case w-96 transition ease-in-out duration-200 transform -translate-y-1 group-hover:translate-y-0 z-50">
						<div className="bg-white text-left border-b-4 border-white border-t-4">
							<svg className="block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-3 mt-1 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
							<ul className="flex flex-wrap">
								{children.map((child, i) => (
									<li key={`nav-child-${i}`} className="p-6 w-1/2 hover:text-primary hover:bg-gray-100">{child}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)
			: <Link to={address} className="pb-1 border-b-2 text-white border-transparent hover:border-white hover:border-opacity-25 transition ease-in-out duration-200" activeClassName="border-white">{children}</Link>}
	</div>
)

const Nav = () => {
	const [visible, setVisible] = useState(false)
	const toggleNav = () => setVisible(!visible)

	const topBarClass = cx(
		'w-full h-px bg-white transition duration-150 origin-center transform',
		{
			'translate-y-1': visible,
		},
	)

	const bottomBarClass = cx(
		'w-full h-px bg-white transition duration-150 origin-center transform',
		{
			'-translate-y-1': visible,
		},
	)

	return (
		<nav className="flex relative justify-end md:justify-center items-center z-50 w-full pt-8">
			<div className="hidden flex-row items-center sm:hidden md:flex">
				<NavItem address="/">Home</NavItem>
				<NavItem address="/about">About</NavItem>
				<NavItem address="/team">The Team</NavItem>
				<NavItem address="/services">Services</NavItem>
				<AnchorLink to="/#contact"><Button white>Contact</Button></AnchorLink>
			</div>
			<div className={`transform p-12 flex flex-col items-center z-50 fixed w-full h-full bg-primary inset-0 transition ease-in-out duration-200 md:hidden ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
				<div className="mb-5"><NavItem address="/">Home</NavItem></div>
				<div className="mb-5"><NavItem address="/about">About</NavItem></div>
				<div className="mb-5"><NavItem address="/team">The Team</NavItem></div>
				<div className="mb-5"><NavItem address="/services">Services</NavItem></div>
				<div className="mb-5"><Link to="/#contact"><Button white>Contact</Button></Link></div>
			</div>
			<div className="sm:block md:hidden z-50 w-6 h-6 cursor-pointer right-8 transform translate-x-1/2" onClick={toggleNav}>
				<div className={topBarClass} />
				<div className="w-full h-px my-1 bg-white transition duration-150" />
				<div className={bottomBarClass} />
			</div>
		</nav>
	)
}

export default Nav
