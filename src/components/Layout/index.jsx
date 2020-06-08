import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children}) => (
	<div className="container mx-auto px-4">
		{children}
	</div>
)

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Layout.defaultProps = {
	children: '',
}

export default Layout
