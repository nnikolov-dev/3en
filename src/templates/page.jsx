import React from 'react'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Layout from '../components/Layout'
import RichText from '../components/RichText'
import Expandable from '../components/Expandable'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Preview from '../components/Preview'
import SEO from '../components/SEO'

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
		work_hours: workHours,
	},
	system: {
		id: pageId,
		language: pageLanguage,
	},
}}) => (
	<>
		<Preview id={pageId} title={metaTitle} />
		<SEO
			title={metaTitle}
			description={metaDescription}
			keywords={metaKeywords}
		/>
		<main className="min-h-screen">
			<section className="relative h-screen background">
				<div className="absolute w-full h-full bg-pattern text-shade opacity-25" />
				<div className="relative z-10 h-full pt-10 md:pt-32">
					<Layout>
						<div className="w-full flex justify-center">
							<img src={logoUrl} alt={logoAlt} className="w-32 md:w-72" />
						</div>
						<div className="flex flex-col md:flex-row justify-center items-center md:space-x-24 pt-10 md:pt-20">
							{sections.map(({system: {codename: sectionCodename}, elements: {title: {value: sectionTitle}}}) => (
								<AnchorLink to={`/${pageLanguage}#${sectionCodename}`} stripHash>
									<div className="relative group">
										<h1 className="text-lite font-light group-hover:text-gray-400">{sectionTitle}</h1>
									</div>
								</AnchorLink>
							))}
						</div>
						<div className="mt-24 flex justify-center space-x-2">
							{languages.map((language) => (
								<AnchorLink to={`/${language}`}>
									<div className={`${language === pageLanguage ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition duration-150`}>
										<img src={`https://www.countryflags.io/${language}/flat/64.png`} alt={language} />
									</div>
								</AnchorLink>
							))}
						</div>
					</Layout>
				</div>
			</section>
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
										<h2 className="mb-6 font-thin">{sectionTitle}</h2>
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
											<h2 className="mb-6 font-thin">{sectionTitle}</h2>
											<RichText content={sectionContent} />
										</div>
										<img src={sectionImageUrl} alt={sectionImageDescription} className="w-full md:w-4/6 md:pl-32" />
									</div>
									<div className="mt-20 text-white">
										{productCategories.map(({elements: {title: {value: productCategory}, products: {value: products}}}) => (
											<div className="flex flex-wrap my-10">
												<div className="w-full md:w-2/6">
													<h2 className="text-xl md:text-3xl">{productCategory}</h2>
												</div>
												<div className="w-full md:w-4/6 md:pl-32">
													{products.map(({elements: {title: {value: productTitle}, description: productDescription}}) => (
														<Expandable title={productTitle}>
															<RichText content={productDescription} />
														</Expandable>
													))}
												</div>
											</div>
										))}
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
										<Contact />
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
