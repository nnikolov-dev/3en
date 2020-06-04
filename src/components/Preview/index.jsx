import React from 'react'
import Button from '../Button'

const Preview = ({id, title}) => (
	process.env.GATSBY_PREVIEW_ENABLED && process.env.GATSBY_PREVIEW_ENABLED.toLowerCase() === 'true'
		? (
			<div className="fixed bottom-0 left-0 w-full bg-primary text-white p-8 bg-opacity-75 z-50">
				<a href={`${process.env.GATSBY_EDIT_URL}${id}`} alt="Edit"><Button white>Edit {title}</Button></a>
			</div>
		)
		: null)

export default Preview
