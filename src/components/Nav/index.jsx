import React, {useState} from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Button from '../Button'
import tailwindConfig from '../../../tailwind.config'

import logoImage from '../../assets/images/logo.svg'

const NavItem = ({children, title, address}) => (
	<div className="relative mx-8 text-sm text-center font-title font-bold uppercase">
		{Array.isArray(children)
			? (
				<div className="group relative">
					<div className="border-b-2 text-white border-transparent transition ease-in-out duration-200 cursor-pointer">{title}</div>
					<div className="absolute bottom-full right-0 py-4 invisible group-hover:visible font-title font-normal normal-case w-96 transition ease-in-out duration-200 transform -translate-y-1 group-hover:translate-y-0">
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
			: <AniLink to={address} cover direction="bottom" bg={tailwindConfig.theme.extend.colors.primary} className="pb-1 border-b-2 text-white border-transparent hover:border-white hover:border-opacity-25 transition ease-in-out duration-200" activeClassName="border-white">{children}</AniLink>}
	</div>
)

const Nav = () => {
	const [visible, setVisible] = useState(false)
	const toggleNav = () => setVisible(!visible)
	return (
		<nav className="flex relative justify-between items-center z-10 w-full">
			<div className="w-56 mt-4">
				<img src={logoImage} alt="Logo" />
			</div>
			<div className="hidden flex-row items-center sm:hidden md:flex">
				<NavItem address="/">Home</NavItem>
				<NavItem address="/about">About</NavItem>
				<NavItem address="/about#team">The Team</NavItem>
				<NavItem address="/services" title="Services">
					<AniLink to="/services#1">Criminal Law</AniLink>
					<AniLink to="/services#1">Matriomonial Law</AniLink>
					<AniLink to="/services#1">Motoring Offenses</AniLink>
					<AniLink to="/services#1">Other</AniLink>
				</NavItem>
				<Button white>Contact</Button>
			</div>
			<div className={`transform p-12 flex flex-col items-center z-50 fixed w-full h-full bg-primary inset-0 transition ease-in-out duration-200 md:hidden ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
				<div className="mb-5"><NavItem address="/">Home</NavItem></div>
				<div className="mb-5"><NavItem address="/about">About</NavItem></div>
				<div className="mb-5"><NavItem address="/person">The Team</NavItem></div>
				<div className="mb-5"><NavItem address="/services">Services</NavItem></div>
				<div className="mb-5"><Button white>Contact</Button></div>
			</div>
			<div className={`sm:block md:hidden z-50 w-6 h-6 cursor-pointer right-8 transform translate-x-1/2 ${visible ? 'fixed' : 'block'}`} onClick={toggleNav}>
				<div className="w-full h-px bg-white" />
				<div className="w-full h-px my-1 bg-white" />
				<div className="w-full h-px bg-white" />
			</div>
		</nav>
	)
}

export default Nav
