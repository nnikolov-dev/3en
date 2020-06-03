import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({items, onChange}) => (
	<div className="relative md:w-1/4">
		<select
			className="block appearance-none w-full bg-lite border border-lite text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-primary"
		>
			<option onClick={onChange(null)}>All</option>
			{items.map((item) => (<option onClick={onChange(item)}>{item}</option>))}
		</select>
		<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
			<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
		</div>
	</div>
)

Dropdown.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func,
}

Dropdown.defaultProps = {
	items: [],
	onChange: null,
}

export default Dropdown
