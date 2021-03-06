import React from 'react'
import {Link} from 'gatsby'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import CookieConsent from 'react-cookie-consent'
import Layout from '../components/Layout'
import RichText from '../components/RichText'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Preview from '../components/Preview'
import Scroll from '../components/Scroll'
import SEO from '../components/SEO'
import Products from '../components/Products'

import waveImage from '../assets/images/wave.svg'

const languages = JSON.parse(process.env.GATSBY_LANG)

const Page = ({pageContext: {
	elements: {
		title: {value: metaTitle},
		description: {value: metaDescription},
		keywords: {value: metaKeywords},
		logo: {value: [{url: logoUrl, description: logoAlt}]},
		content: {value: sections},
		location__address: address,
		location__latitude: {value: addressLat},
		location__longitude: {value: addressLong},
		products: {value: productCategories},
		quote: {value: quoteText},
		contact_form__name: {value: contactName},
		contact_form__e_mail_address: {value: contactEmail},
		contact_form__telephone_number: {value: contactTelephone},
		contact_form__message: {value: contactMessage},
		contact_form__gdpr_text: {value: contactGDPR},
		contact_form__submit_button: {value: contactSubmit},
		contact_form__submit_message: {value: contactSubmitMessage},
		cookies__message: {value: cookiesMessage},
		cookies__accept: {value: cookiesAccept},
		cookies__decline: {value: cookiesDecline},
		work_hours: workHours,
	},
	system: {
		id: pageId,
		language: pageLanguage,
		last_modified: metaLastModified,
	},
}}) => (
	<>
		<Preview id={pageId} title={metaTitle} />
		<SEO
			title={metaTitle}
			description={metaDescription}
			keywords={metaKeywords}
			lastModified={metaLastModified}
			lang={pageLanguage}
		/>
		<Scroll />
		<CookieConsent
			location="bottom"
			buttonText={cookiesAccept}
			declineButtonText={cookiesDecline}
			cookieName="gatsby-gdpr-google-analytics"
			style={{background: '#5EAAE8', color: '#FFFFFF'}}
			buttonStyle={{background: '#304B76', color: '#FFFFFF'}}
		>
			{cookiesMessage}
		</CookieConsent>
		<header className="relative h-screen md:h-main background">
			<div className="absolute w-full h-full text-shade opacity-25" />
			<div className="relative z-10 h-full flex items-center">
				<Layout>
					<div className="w-full flex justify-center">
						<img src={logoUrl} alt={logoAlt} className="w-32 md:w-72" />
					</div>
					<div className="flex flex-col md:flex-row justify-center md:space-x-24 pt-20">
						{sections.map(({system: {codename: sectionCodename}, elements: {title: {value: sectionTitle}}}) => (
							<div className="p-5 shadow-lg bg-lite text-shade rounded mb-4 w-full flex-initial group hover:bg-blue-600 flex items-center justify-center">
								<AnchorLink to={`/${pageLanguage}#${sectionCodename}`} stripHash>
									<div className="relative text-center">
										<h1 className="font-light group-hover:text-gray-400 text-2xl md:text-3xl">{sectionTitle}</h1>
									</div>
								</AnchorLink>
							</div>
						))}
					</div>
					<div className="absolute left-0 bottom-8 w-full md:static md:mt-24 flex md:justify-center md:space-x-2">
						{languages.map((language) => (
							<Link to={`/${language}`} title={`${language} Language`} className="w-10 h-10 overflow-hidden hover:opacity-100 transition duration-150 flex items-center bg-lite rounded-full mx-2 opacity-50" activeClassName="opacity-100 shadow-lg">
								<div
									className="w-full h-full bg-center bg-fill bg-no-repeat"
									style={{backgroundImage: `url(https://www.countryflags.io/${language}/flat/64.png)`}}
								/>
							</Link>
						))}
					</div>
				</Layout>
			</div>
			<div className="absolute bottom-0 transform translate-y-1 z-0 w-full ">
				<img src={waveImage} alt="background wave" className="w-full" />
			</div>
		</header>
		<main>
			{sections.map(({
				system: {codename: sectionCodename},
				elements: {
					image: {value: [{url: sectionImageUrl, description: sectionImageDescription}]},
					title: {value: sectionTitle},
					rich_text__content: sectionContent,
				},
			}) => {
				switch (sectionCodename) {
				case 'koi_sme_nie':
					return (
						<section className="relative bg-shade min-h-screen text-lite py-20" id={sectionCodename}>
							<Layout>
								<div className="flex flex-wrap">
									<div className="w-full md:w-1/2 text-lg">
										<h2 className="mb-6 font-thin text-4xl">{sectionTitle}</h2>
										<RichText content={sectionContent} />
									</div>
									<div className="w-full md:w-1/2 md:pl-32">
										<img src={sectionImageUrl} alt={sectionImageDescription} />
									</div>
								</div>
								<div className="w-full text-center mt-20">
									<img src={logoUrl} alt={logoAlt} className="mx-auto mb-5 w-48" />
									<h1 className="font-thin italic text-2xl md:text-5xl">&apos;{quoteText}&apos;</h1>
								</div>
							</Layout>
						</section>
					)
				case 'nashite_produkti':
					return (
						<section className="relative background-2 min-h-screen text-lite py-20" id={sectionCodename}>
							<Layout>
								<div className="w-full">
									<div className="flex flex-wrap items-end">
										<div className="w-full md:w-2/6">
											<h2 className="mb-6 font-thin text-4xl">{sectionTitle}</h2>
											<RichText content={sectionContent} />
										</div>
										<img src={sectionImageUrl} alt={sectionImageDescription} className="w-full md:w-4/6 md:pl-32" />
									</div>
									<div className="mt-20 text-white">
										<Products productCategories={productCategories} />
									</div>
								</div>
							</Layout>
						</section>
					)
				case 'kontakt':
					return (
						<section className="relative background-3 min-h-screen text-lite py-20" id={sectionCodename}>
							<Layout>
								<div className="flex flex-col-reverse md:flex-row">
									<div className="w-full md:w-1/2">
										<Contact placeholders={{contactName, contactTelephone, contactEmail, contactMessage, contactGDPR, contactSubmit, contactSubmitMessage}} />
									</div>
									<div className="w-full md:w-1/2 md:pl-8 mb-8">
										<RichText content={sectionContent} />
										<img src={sectionImageUrl} alt={sectionImageDescription} />
									</div>
								</div>
							</Layout>
						</section>
					)
				default: return null
				}
			})}
			<Footer
				title={metaTitle}
				logoUrl={logoUrl}
				logoAlt={logoAlt}
				workHours={workHours}
				address={address}
				lat={addressLat}
				lng={addressLong}
			/>
		</main>
	</>
)

export default Page
