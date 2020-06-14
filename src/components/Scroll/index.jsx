import React, {useState} from 'react'
import {window} from 'browser-monads'
import cx from 'classnames'

const Scroll = () => {
	const [active, setActive] = useState(false)
	const handleScroll = () => window.scrollTo({top: 0, behavior: 'smooth'})

	const checkActive = () => {
		console.log(window.pageYOffset)
		if (!active && window.pageYOffset > 400) {
			setActive(true)
		} else if (active && window.pageYOffset <= 400) {
			setActive(false)
		}
	}

	window.addEventListener('scroll', checkActive)

	const scrollClass = cx(
		'fixed bottom-0 right-0 md:bottom-8 md:right-8 z-50 p-2 md:p-4 bg-lite rounded-none md:rounded-full transition duration-150 flex items-center',
		{
			'opacity-100': active,
			'opacity-0': !active,
		},
	)

	return (
		<button
			className={scrollClass}
			type="button"
			onClick={handleScroll}
		>
			<span className="material-icons text-shade md:text-4xl">
                keyboard_arrow_up
			</span>
		</button>
	)
}

export default Scroll
