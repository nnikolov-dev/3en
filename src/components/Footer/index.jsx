import React from 'react'
import Layout from '../Layout'
import RichText from '../RichText'
import Map from '../Map'

const Footer = ({title, logoUrl, logoAlt, workHours, address, lat, lng}) => (
	<footer className="py-16 bg-shade text-white">
		<Layout>
			<div className="flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left my-16 w-full">
				<div className="mb-8">
					<img src={logoUrl} alt={logoAlt} className="w-48 mx-auto" />
				</div>
				<div className="mb-4">
					<RichText content={workHours} />
				</div>
				<div className="mb-4 p-4 bg-white rounded text-black md:pr-10 shadow-lg flex flex-col-reverse md:flex-row">
					<div className="md:mr-6">
						<Map lat={lat} lng={lng} />
					</div>
					<RichText content={address} />
				</div>
			</div>
			<div className="flex justify-between text-sm border-t border-white border-opacity-25 pt-2">
				<div>
					&copy; 2020 . Всички права запазени {title}
				</div>
			</div>
		</Layout>
	</footer>
)

export default Footer
