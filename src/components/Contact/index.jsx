import React from 'react'
import Button from '../Button'

const Contact = () => (
	<div className="flex flex-col md:flex-row">
		<div className="w-full md:w-1/2 bg-gray-100 p-8">
			<form method="post" netlify-honeypot="bot-field" data-netlify="true">
				<input type="hidden" name="bot-field" />
				<div className="flex md:space-x-5 flex-col md:flex-row">
					<input type="text" name="name" placeholder="Your Name" className="border p-2 w-full md:w-1/2 focus:border-secondary" />
					<input type="tel" name="number" placeholder="Your Number" className="border p-2 w-full md:w-1/2 mt-3 md:mt-0 focus:border-secondary" />
				</div>
				<input type="email" name="email" placeholder="Your Email" className="border p-2 w-full mt-3 focus:border-secondary" />
				<textarea cols="10" name="message" rows="3" placeholder="Tell us about your legal issue" className="border p-2 mt-3 w-full focus:border-secondary" />
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

export default Contact
