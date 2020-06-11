import React from 'react'
import cx from 'classnames'
import {RichTextElement} from '@kentico/gatsby-kontent-components'

const RichText = ({content, flex}) => {
	const richTextClass = cx(
		'rich-text mb-8',
		{
			'flex flex-col md:flex-row md:space-x-4': flex,
		},
	)

	const imageClass = cx(
		'bject-cover',
		{
			'w-full my-8': !flex,
			'w-96 flex-grow-0': flex,
		},
	)

	return (
		<div className={richTextClass}>
			<RichTextElement
				value={content.value}
				images={content.images}
				links={content.links}
				linkedItems={content.modular_content}
				resolveImage={(image) => (
					<img
						src={image.url}
						alt={image.description ? image.description : image.name}
						className={imageClass}
					/>
				)}
				resolveLinkedItem={(linkedItem) => {
					if (linkedItem.system.type === 'layout_flex') {
						const {value: options} = linkedItem.elements.options
						const isFlex = options.filter((option) => option.codename === 'flex').length === 1
						const isCentered = options.filter((option) => option.codename === 'centered').length === 1
						const isShrinked = options.filter((option) => option.codename === 'shrinked').length === 1
						const layoutClass = cx(
							{
								'mx-auto text-center': isCentered,
								'sm:max-w-sm md:max-w-md': isShrinked,
							},
						)
						return (
							<div className={layoutClass}>
								<RichText content={linkedItem.elements.richtext__content} flex={isFlex} />
							</div>
						)
					}
					if (linkedItem.system.type === 'graphic_stars') {
						const {value: numberOfStars} = linkedItem.elements.number_of_stars
						return (
							<div className="flex justify-center items-center text-accent my-16 flex-wrap md:flex-nowrap">
								{[...Array(numberOfStars)].map((_, i) => (
									<span className="material-icons text-6xl mx-4" key={`star-${i}`}>stars</span>
								))}
							</div>
						)
					}
					return null
				}}
			/>
		</div>
	)
}

export default RichText
