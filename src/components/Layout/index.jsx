import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children}) => (
	<div className="relative mx-auto max-w-screen-xl sm:px-8 xl:px-0">
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
