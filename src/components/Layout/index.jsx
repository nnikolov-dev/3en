import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children}) => (
	<div className="relative mx-auto max-w-screen-xl px-8">
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
