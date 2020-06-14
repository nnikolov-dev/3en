import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Card = ({children, image, active, onClick}) => {
	const cardClass = cx(
		'rounded shadow-lg flex flex-col md:flex-row text-center md:text-left h-full items-center p-4 md:p-8 cursor-pointer transition duration-150',
		{
			'text-white bg-shade': active,
			'bg-white  group-hover:bg-primary': !active,
		},
	)
	return (
		<div className={cardClass} onClick={onClick}>
			<div
				className="bg-primary group-hover:bg-white w-32 h-32 rounded-full flex-shrink-0"
				style={{backgroundImage: `url(${image})`}}
			/>
			<div className="md:ml-10 mt-2 md:ml-0">
				{children}
			</div>
		</div>
	)
}

Card.propTypes = {
	onClick: PropTypes.func,
	image: PropTypes.string,
}

Card.defaultProps = {
	onClick: null,
	image: null,
}

export default Card
