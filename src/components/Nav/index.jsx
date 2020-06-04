import React, {useState} from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import cx from 'classnames'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Button from '../Button'

const NavItem = ({children, address}) => (
	<div className="relative mx-8 text-sm text-center font-title font-bold uppercase">
		<Link to={address} className="pb-1 border-b-2 text-white border-transparent hover:border-white hover:border-opacity-25 transition ease-in-out duration-200" activeClassName="border-white">{children}</Link>
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
		<StaticQuery
			query={graphql`
			query navQuery {
				allKontentItemPage {
				  nodes {
					elements {
					  navigation__navigation {
						value {
						  name
						}
					  }
					  page_general__title {
						value
					  }
					  slug {
						value
					  }
					}
				  }
				}
			  }								  
			`}
			render={({allKontentItemPage: {nodes: pages}}) => (
				<nav className="flex relative justify-end md:justify-center items-center z-50 w-full pt-8">
					<div className="hidden flex-row items-center sm:hidden md:flex">
						<NavItem address="/">Home</NavItem>
						{pages.map(({elements: {navigation__navigation: {value: [displayNav]}, page_general__title: {value: title}, slug: {value: slug}}}) => {
							if (displayNav) {
								return (
									<NavItem address={`/page/${slug}`}>{title}</NavItem>
								)
							}
							return null
						})}
						<AnchorLink to="/#contact" stripHash><Button theme="white">Contact</Button></AnchorLink>
					</div>
					<div className={`transform p-12 flex flex-col items-center z-50 fixed w-full h-full bg-primary inset-0 transition ease-in-out duration-200 md:hidden ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
						<div className="mb-5"><NavItem address="/">Home</NavItem></div>
						{pages.map(({elements: {navigation__navigation: {value: [displayNav]}, page_general__title: {value: title}, slug: {value: slug}}}) => {
							if (displayNav) {
								return (
									<div className="mb-5"><NavItem address={`/page/${slug}`}>{title}</NavItem></div>
								)
							}
							return null
						})}
						<div className="mb-5"><AnchorLink to="/#contact" stripHash><Button white>Contact</Button></AnchorLink></div>
					</div>
					<div className="sm:block md:hidden z-50 w-6 h-6 cursor-pointer right-8 transform translate-x-1/2" onClick={toggleNav}>
						<div className={topBarClass} />
						<div className="w-full h-px my-1 bg-white transition duration-150" />
						<div className={bottomBarClass} />
					</div>
				</nav>
			)}
		/>
	)
}

export default Nav
