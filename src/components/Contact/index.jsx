import React, {useState} from 'react'
import Button from '../Button'


const encode = (data) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')

const Contact = () => {
	const [fields, setFields] = useState()

	const handleChange = (e) => setFields({...fields, [e.target.name]: e.target.value})

	async function handleSubmit(e) {
		e.preventDefault()
		const form = e.target
		const request = fetch('/', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: encode({
				'form-name': form.getAttribute('name'),
				...fields,
			}),
		})

		const response = await request.json()
		console.log(response)
	}
	return (
		<div className="flex flex-col md:flex-row">
			<div className="w-full md:w-1/2 bg-gray-100 p-8">
				<form
					method="post"
					netlify-honeypot="bot-field"
					data-netlify="true"
					onSubmit={handleSubmit}
				>
					<input type="hidden" name="bot-field" />
					<input type="hidden" name="form-name" value="Contact" />
					<div className="flex md:space-x-5 flex-col md:flex-row">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="border p-2 w-full md:w-1/2 focus:border-secondary"
							onChange={handleChange}
						/>
						<input
							type="tel"
							name="number"
							placeholder="Your Number"
							className="border p-2 w-full md:w-1/2 mt-3 md:mt-0 focus:border-secondary"
							onChange={handleChange}
						/>
					</div>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="border p-2 w-full mt-3 focus:border-secondary"
						onChange={handleChange}
					/>
					<textarea
						cols="10"
						rows="3"
						name="message"
						placeholder="Tell us about your legal issue"
						className="border p-2 mt-3 w-full focus:border-secondary"
						onChange={handleChange}
					/>
					<div className="flex items-baseline space-x-2 my-2">
						<input type="checkbox" className="inline-block focus:border-secondary" />
						<p className="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
					</div>
					<Button color="primary" full submit>Submit</Button>
				</form>
			</div>
			<div className="w-full md:w-1/2 md:pl-8">
				<h1 className="text-3xl font-title">Have a Question?</h1>
				<h2 className="text-xl font-title">We are one short email call away, so contact us now so we can help you with your legal issues today</h2>
				<h1 className="text-3xl font-title mt-8">Prefer a Call?</h1>
				<Button color="primary">Call us now</Button>
			</div>
		</div>
	)
}

export default Contact
