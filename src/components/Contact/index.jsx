import React, {useState} from 'react'
import cx from 'classnames'
import Button from '../Button'

const encode = (data) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')

const Contact = ({phoneNumber}) => {
	const [fields, setFields] = useState()
	const [complete, setComplete] = useState(false)

	const handleChange = (e) => setFields({...fields, [e.target.name]: e.target.value})

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: encode({
				'form-name': form.getAttribute('name'),
				...fields,
			}),
		})
			.then(() => setComplete(true))
			.catch((error) => console.log(error))
	}

	const formClass = cx(
		'relative overflow-hidden w-full md:w-1/2 p-8 bg-gray-100 border-2',
		{
			'border-green-300': complete,
		},
	)

	const backgroundClass = cx(
		'absolute bg-green-100 w-full h-full inset-0 transform transition duration-700',
		{
			'translate-y-0': complete,
			'translate-y-full': !complete,
		},
	)

	return (
		<div className="flex flex-col-reverse md:flex-row">
			<form
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				className={formClass}
				onSubmit={handleSubmit}
			>
				<div className={backgroundClass} />
				<div className="relative">
					<input type="hidden" name="form-name" value="contact" />
					<input hidden name="bot-field" onChange={handleChange} />
					<label htmlFor="name" className="hidden">Name</label>
					<div className="flex md:space-x-5 flex-col md:flex-row">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="border p-2 w-full md:w-1/2 focus:border-secondary"
							required
							disabled={complete}
							onChange={handleChange}
						/>
						<label htmlFor="number" className="hidden">Number</label>
						<input
							type="tel"
							name="number"
							placeholder="Your Number"
							className="border p-2 w-full md:w-1/2 mt-3 md:mt-0 focus:border-secondary"
							required
							disabled={complete}
							onChange={handleChange}
						/>
					</div>
					<label htmlFor="email" className="hidden">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="border p-2 w-full mt-3 focus:border-secondary"
						required
						disabled={complete}
						onChange={handleChange}
					/>
					<label htmlFor="message" className="hidden">Message</label>
					<textarea
						cols="10"
						rows="3"
						name="message"
						placeholder="Tell us about your legal issue"
						className="border p-2 mt-3 w-full focus:border-secondary"
						required
						disabled={complete}
						onChange={handleChange}
					/>
					<div className="flex items-baseline space-x-2 my-2">
						<label htmlFor="gdpr" className="hidden">Consent for GDPR</label>
						<input
							type="checkbox"
							name="gdpr"
							className="inline-block focus:border-secondary"
							required
							disabled={complete}
						/>
						<p className="text-shade text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
					</div>
					<Button
						full
						type="submit"
						disabled={complete}
					>
						{complete ? 'Your query has been submitted!' : 'Submit'}
					</Button>
				</div>
			</form>
			<div className="w-full md:w-1/2 md:pl-8 mb-8">
				<h1 className="text-3xl font-title">Have a Question?</h1>
				<h2 className="text-xl font-title">We are one short email call away, so contact us now so we can help you with your legal issues today</h2>
				<h1 className="text-3xl font-title mt-8">Prefer a Call?</h1>
				<a href={`tel:${phoneNumber}`} alt="Call us now"><Button primary>Call us now</Button></a>
			</div>
		</div>
	)
}

export default Contact
