import React, {useState, useRef} from 'react'
import RichText from '../RichText'
import Card from '../Card'

const Products = ({productCategories}) => {
	const [current, setCurrent] = useState(0)
	const productsRef = useRef(null)
	const products = productCategories.length > 0 ? productCategories[current].elements.products.value : []
	const handleCurrent = (arg) => () => {
		console.log(productsRef.current)
		setCurrent(arg)
		productsRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	if (products.length > 0) {
		return (
			<>
				<div className="flex flex-col md:flex-row flex-wrap justify-evenly text-black">
					{productCategories.map(({elements: {title: {value: categoryName}, image: {value: [categoryImage]}}}, i) => (
						<div className="w-full md:w-2/4 p-2 group">
							<Card active={i === current} onClick={handleCurrent(i)} image={categoryImage}>
								<h1 className="text-xl font-light group-hover:text-white">{categoryName}</h1>
							</Card>
						</div>
					))}
				</div>
				<div className="mt-5 mx-2 p-2 bg-white text-black rounded flex flex-col items-center" ref={productsRef}>
					{products.map(({elements: {title: {value: productTitle}, description: productDescription}}) => (
						<div className="p-2 flex flex-col md:flex-row">
							<div className="w-full md:w-1/2 flex md:justify-end">
								<h2 className="font-light w-full md:w-3/4 text-center md:text-right md:pr-10">{productTitle}</h2>
							</div>
							<div className="text-lg w-full mt-4 md:mt-0 md:w-1/2 p-2 md:pl-5 font-light rounded text-center md:text-left links">
								<RichText content={productDescription} />
							</div>
						</div>
					))}
				</div>
			</>
		)
	}
	return null
}

export default Products
