import React, {useState} from 'react'
import cx from 'classnames'
import Button from '../Button'

const encode = (data) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')

const Contact = ({placeholders}) => {
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
		'relative overflow-hidden p-8 bg-white rounded shadow-lg flex-grow-0',
		{
			'border-primary': complete,
		},
	)

	const backgroundClass = cx(
		'absolute bg-primary w-full h-full inset-0 transform transition duration-700',
		{
			'translate-y-0': complete,
			'translate-y-full': !complete,
		},
	)

	return (
		<form
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			className={formClass}
			onSubmit={handleSubmit}
		>
			<div className={backgroundClass} />
			<div className="relative text-shade">
				<input type="hidden" name="form-name" value="contact" />
				<input hidden name="bot-field" onChange={handleChange} />
				<label htmlFor="name" className="hidden">{placeholders.contactName}</label>
				<div className="flex md:space-x-5 flex-col md:flex-row">
					<input
						type="text"
						id="name"
						name="name"
						placeholder={placeholders.contactName}
						className="border p-2 w-full md:w-1/2 focus:border-secondary rounded bg-lite"
						required
						disabled={complete}
						onChange={handleChange}
					/>
					<label htmlFor="number" className="hidden">{placeholders.contactTelephone}</label>
					<input
						type="tel"
						id="number"
						name="number"
						placeholder={placeholders.contactTelephone}
						className="border p-2 w-full md:w-1/2 mt-3 md:mt-0 focus:border-secondary rounded bg-lite"
						required
						disabled={complete}
						onChange={handleChange}
					/>
				</div>
				<label htmlFor="email" className="hidden">{placeholders.contactEmail}</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder={placeholders.contactEmail}
					className="border p-2 w-full mt-3 focus:border-secondary rounded bg-lite"
					required
					disabled={complete}
					onChange={handleChange}
				/>
				<label htmlFor="message" className="hidden">{placeholders.contactMessage}</label>
				<textarea
					cols="10"
					rows="3"
					id="message"
					name="message"
					placeholder={placeholders.contactMessage}
					className="border p-2 mt-3 w-full focus:border-secondary rounded bg-lite"
					required
					disabled={complete}
					onChange={handleChange}
				/>
				<div className="flex items-baseline space-x-2 my-2">
					<label htmlFor="gdpr" className="hidden">{placeholders.contactGDPR}</label>
					<input
						type="checkbox"
						id="gdpr"
						name="gdpr"
						className="inline-block focus:border-secondary"
						required
						disabled={complete}
					/>
					<p className="text-shade text-sm">{placeholders.contactGDPR}</p>
				</div>
				<Button
					full
					type="submit"
					theme="shade"
					disabled={complete}
				>
					{complete ? placeholders.contactSubmitMessage : placeholders.contactSubmit}
				</Button>
			</div>
		</form>
	)
}

export default Contact
