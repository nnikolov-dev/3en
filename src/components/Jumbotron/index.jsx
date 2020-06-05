import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import Nav from '../Nav'

const Jumbotron = ({image, children, overlay, full}) => {
	const headerClass = cx(
		'fixed md:relative w-full left-0 top-0 min-h-auto bg-cover pb-2 md:pb-8 z-10 bg-none bg-primary',
		{
			'md:min-h-screen': full,
			'md:min-h-half': !full,
		},
	)

	const bgClass = cx(
		'absolute w-full h-full bg-cover bg-center invisible md:visible',
		{
			'bg-fixed ': full,
		},
	)

	return (
		<StaticQuery
			query={graphql`
			query jumbotronQuery {
				kontentItemSiteInformation {
				  elements {
					title {
					  value
					}
					logo {
					  value {
						url
					  }
					}
				  }
				}
			  }												
	`}
			render={({
				kontentItemSiteInformation: {
					elements: {
						title: {value: title},
						logo: {value: [{url: logoImage}]},
					}},
			}) => (
				<header
					className={headerClass}
				>
					<div
						style={{backgroundImage: `url(${image})`}}
						className={bgClass}
					/>
					{overlay && (<div className="absolute w-full h-full bg-primary bg-opacity-75" />)}
					<div className="md:hidden absolute w-full h-full flex items-center justify-center">
						<img
							src={logoImage}
							alt={title}
							className="w-32"
						/>
					</div>
					<Layout>
						<Nav />
					</Layout>
					{children}
				</header>
			)}
		/>
	)
}

Jumbotron.propTypes = {
	image: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	overlay: PropTypes.bool,
	full: PropTypes.bool,
}

Jumbotron.defaultProps = {
	image: null,
	children: '',
	overlay: false,
	full: false,
}

export default Jumbotron
