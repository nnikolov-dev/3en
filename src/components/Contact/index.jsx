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

				<div className="flex md:space-x-5 flex-col md:flex-row">
					<input
						type="text"
						aria-label={placeholders.contactName}
						name="name"
						placeholder={placeholders.contactName}
						className="form-input border p-2 w-full md:w-1/2 focus:border-secondary rounded bg-lite"
						required
						disabled={complete}
						onChange={handleChange}
					/>
					<input
						type="tel"
						aria-label={placeholders.contactTelephone}
						name="number"
						placeholder={placeholders.contactTelephone}
						className="form-input border p-2 w-full md:w-1/2 mt-3 md:mt-0 focus:border-secondary rounded bg-lite"
						required
						disabled={complete}
						onChange={handleChange}
					/>
				</div>
				<input
					type="email"
					aria-label={placeholders.contactEmail}
					name="email"
					placeholder={placeholders.contactEmail}
					className="form-input border p-2 w-full mt-3 focus:border-secondary rounded bg-lite"
					required
					disabled={complete}
					onChange={handleChange}
				/>
				<textarea
					cols="10"
					rows="3"
					aria-label={placeholders.contactMessage}
					name="message"
					placeholder={placeholders.contactMessage}
					className="form-textarea border p-2 mt-3 w-full focus:border-secondary rounded bg-lite"
					required
					disabled={complete}
					onChange={handleChange}
				/>
				<div className="flex items-center space-x-4 my-2">
					<input
						type="checkbox"
						aria-label={placeholders.contactGDPR}
						name="gdpr"
						className="form-checkbox inline-block focus:border-secondary p-2"
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
