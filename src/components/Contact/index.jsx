import React, {useState} from 'react'
import cx from 'classnames'
import Button from '../Button'

import contactImage from '../../assets/images/contact.svg'

const encode = (data) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')

const Contact = () => {
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
		'relative overflow-hidden p-8 bg-white border-2 rounded shadow-lg flex-grow-0 flex-',
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
		<div className="flex flex-col-reverse md:flex-row">
			<div className="w-full md:w-1/2">
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
						<label htmlFor="name" className="hidden">Вашите Имена</label>
						<div className="flex md:space-x-5 flex-col md:flex-row">
							<input
								type="text"
								name="name"
								placeholder="Вашите Имена"
								className="border p-2 w-full md:w-1/2 focus:border-secondary rounded bg-lite"
								required
								disabled={complete}
								onChange={handleChange}
							/>
							<label htmlFor="number" className="hidden">Телефонен Номер</label>
							<input
								type="tel"
								name="number"
								placeholder="Телефонен Номер"
								className="border p-2 w-full md:w-1/2 mt-3 md:mt-0 focus:border-secondary rounded bg-lite"
								required
								disabled={complete}
								onChange={handleChange}
							/>
						</div>
						<label htmlFor="email" className="hidden">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Вашият Email Адрес"
							className="border p-2 w-full mt-3 focus:border-secondary rounded bg-lite"
							required
							disabled={complete}
							onChange={handleChange}
						/>
						<label htmlFor="message" className="hidden">Запитване</label>
						<textarea
							cols="10"
							rows="3"
							name="message"
							placeholder="Запитване"
							className="border p-2 mt-3 w-full focus:border-secondary rounded bg-lite"
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
							<p className="text-shade text-sm">Разрешавам на този уебсайт да съхраниява моите данни от тази форма, за да може да бъде обработено моето запитване</p>
						</div>
						<Button
							full
							type="submit"
							theme="shade"
							disabled={complete}
						>
							{complete ? 'Вашето запитване бе изпратено!' : 'Изпрати'}
						</Button>
					</div>
				</form>
			</div>
			<div className="w-full md:w-1/2 md:pl-8 mb-8">
				<h1 className="text-3xl font-title">Имате запитване?</h1>
				<h2 className="text-xl font-title">Може да използвате тази форма за да се свържете с нас и ние ще се постараем да ви обслужим възможно най-скоро</h2>
				<img src={contactImage} alt="Contact" />
			</div>
		</div>
	)
}

export default Contact
