import React, {useState} from 'react'
import cx from 'classnames'

const Expandable = ({title, children}) => {
	const [expanded, setExpanded] = useState(false)

	const handleExpand = () => setExpanded(!expanded)

	const circleClass = cx(
		'absolute w-3 h-3 transform md:-translate-x-10 translate-y-2 border-2 border-lite group-hover:bg-lite rounded transition duration-150',
		{
			'bg-lite': expanded,
		},
	)

	const contentClass = cx(
		'overflow-y-auto transition-all ease-in-out  duration-200',
		{
			'h-40 md:h-24': expanded,
			'h-0': !expanded,
		},
	)

	return (
		<div className="my-4 relative group md:border-b-0 border-b-2 border-opacity-25">
			<div className={circleClass} />
			<h3 className="cursor-pointer pl-6 md:pl-0 mb-2 text-lg md:text-2xl" onClick={handleExpand}>{title}</h3>
			<div className="transition duration-500 h-auto">
				<div className={contentClass}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Expandable
