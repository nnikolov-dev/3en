import React from 'react'
import {graphql} from 'gatsby'
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import RichText from '../components/RichText'
import Expandable from '../components/Expandable'
import Preview from '../components/Preview'
import SEO from '../components/SEO'

import logoImage from '../assets/images/logo.svg'
import logoWhiteImage from '../assets/images/logo_white.svg'
import personProgress from '../assets/images/person_progress.svg'
import factory from '../assets/images/factory.svg'

const Index = ({data: {
	kontentItemSiteInformation: {elements: {
		phone_number: {value: phoneNumber},
	}},
	kontentItemHomePage: {
		system: {
			id,
		},
	}}}) => (
	<>
		<Preview id={id} title="Home Page" />
		<SEO />
		<main className="min-h-screen">
			<section className="relative h-screen background">
				<div className="absolute w-full h-full bg-pattern text-shade" />
				<div className="absolute inset-0 w-full h-full self-center opacity-25 flex justify-end md:pr-32">
					<img src={logoImage} alt="Logo" className="md:max-w-xl max--w-full transform rotate-45 text-shade" />
				</div>
				<div className="relative z-10 pt-32">
					<Layout>
						<AnchorLink to="/#about">
							<div className="relative mb-8 group">
								<div className="absolute w-4 h-4 transform -translate-x-10 translate-y-3 border-2 border-gray-400 rounded transition duration-500 group-hover:bg-gray-400" />
								<h1 className="text-lite font-light group-hover:text-gray-400">За нас</h1>
							</div>
						</AnchorLink>
						<AnchorLink to="/#products">
							<div className="relative mb-8 group">
								<div className="absolute w-4 h-4 transform -translate-x-10 translate-y-3 border-2 border-gray-400 rounded transition duration-500 group-hover:bg-gray-400" />
								<h1 className="text-lite font-light group-hover:text-gray-400">Продукти</h1>
							</div>
						</AnchorLink>
						<AnchorLink to="/#contact">
							<div className="relative mb-8 group">
								<div className="absolute w-4 h-4 transform -translate-x-10 translate-y-3 border-2 border-gray-400 rounded transition duration-500 group-hover:bg-gray-400" />
								<h1 className="text-lite font-light group-hover:text-gray-400">Контакт</h1>
							</div>
						</AnchorLink>
					</Layout>
				</div>
			</section>
			<section className="relative bg-shade min-h-screen text-lite py-20" id="about">
				<Layout>
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/2 text-lg">
							<h2 className="mb-6 font-thin">Кои сме ние</h2>
							<p className="mb-4">
							Фирмата 3ЕН 2000 е сьздадена през 2000 година и е един от водещите специалисти с многогодишен опит в областа на хартиите за полиграфия.Благодарение на дългогодишният ни опит и контактите с редица интернационални производители сме сигурни, че можем да ви предложим широка гама на самозалепващите хартии, гьвкави опаковки и фолиа.
							</p>
							<p className="mb-4">
							3 ЕН2000 ЕООД е утвърден доставчик на хартии и опаковъчни материали за хранително-вкусова промишленост, козметика, фармация, логистика.
							</p>
							<p className="mb-4">
							С наличен рол-апарат в складовата ни база успяваме бързо и индивидуално да изпълняваме Вашите поръчки.
							</p>
						</div>
						<div className="w-full md:w-1/2 md:pl-32">
							<img src={personProgress} alt="Progress" />
						</div>
					</div>
					<div className="w-full text-center mt-20">
						<img src={logoWhiteImage} alt="Logo" className="mx-auto mb-5 w-48" />
						<h1 className="font-thin italic text-2xl md:text-5xl">&apos;Нашата мисия е да сме Вашият доставчик на качество и иновации.&apos;</h1>
					</div>
				</Layout>
			</section>
			<section className="relative background-2 min-h-screen text-lite py-20" id="products">
				<Layout>
					<div className="w-full">
						<div className="flex flex-wrap items-end">
							<div className="w-full md:w-2/6">
								<h2 className="mb-6 font-thin">Нашите продукти</h2>
								<p className="mb-3">
							Доверете се на дългогодишният ни опит в областа на хартии и фолиа.
							Нашата широка продуктова гама ви дава възможност да изпълните различни потребности на вашите клиенти.
								</p>
							</div>
							<img src={factory} alt="products" className="w-full md:w-4/6 md:pl-32" />
						</div>
						<div className="mt-20 text-white">
							{[...Array(3).fill()].map(() => (
								<div className="flex flex-wrap my-10">
									<div className="w-full md:w-2/6">
										<h2 className="text-xl md:text-3xl">Еднослойни и многослойни материали за опаковки на хранителните продукти</h2>
									</div>
									<div className="w-full md:w-4/6 md:pl-32">
										<Expandable title="Oпаковъчни еднослойни и многослойни структури за опаковане на млечни и месни продукти">
											<p>
												Маслоустойчива хартия 60 gr/m2, kit 8 е подходяща за опаковане на масло, маргарин и други млечни продукти.
												Повърхносната обработка на хартията позволява не само безопасното опаковане и транспортиране, а и позволява на продуктите да дишат. Благодарение на това те запазват свойствата си и въшният си вид. Хартията е сертифицирана за пряк достьп до хранителните продукти.
											</p>
										</Expandable>
										<Expandable title="'Paperlike' фолио - фолио с участиево на полимери и минерални съставки">
											<p>
												Маслоустойчива хартия 60 gr/m2, kit 8 е подходяща за опаковане на масло, маргарин и други млечни продукти.
												Повърхносната обработка на хартията позволява не само безопасното опаковане и транспортиране, а и позволява на продуктите да дишат. Благодарение на това те запазват свойствата си и въшният си вид. Хартията е сертифицирана за пряк достьп до хранителните продукти.
											</p>
										</Expandable>
										<Expandable title="Екструдирани хартии">
											<p>
												Маслоустойчива хартия 60 gr/m2, kit 8 е подходяща за опаковане на масло, маргарин и други млечни продукти.
												Повърхносната обработка на хартията позволява не само безопасното опаковане и транспортиране, а и позволява на продуктите да дишат. Благодарение на това те запазват свойствата си и въшният си вид. Хартията е сертифицирана за пряк достьп до хранителните продукти.
											</p>
										</Expandable>
										<Expandable title="Опаковачни структури с участието на хартия и алуминий">
											<p>
												Маслоустойчива хартия 60 gr/m2, kit 8 е подходяща за опаковане на масло, маргарин и други млечни продукти.
												Повърхносната обработка на хартията позволява не само безопасното опаковане и транспортиране, а и позволява на продуктите да дишат. Благодарение на това те запазват свойствата си и въшният си вид. Хартията е сертифицирана за пряк достьп до хранителните продукти.
											</p>
										</Expandable>
										<Expandable title="Многопластови материали с участието на хартия и алуминий за производство на сашета">
											<p>
												Маслоустойчива хартия 60 gr/m2, kit 8 е подходяща за опаковане на масло, маргарин и други млечни продукти.
												Повърхносната обработка на хартията позволява не само безопасното опаковане и транспортиране, а и позволява на продуктите да дишат. Благодарение на това те запазват свойствата си и въшният си вид. Хартията е сертифицирана за пряк достьп до хранителните продукти.
											</p>
										</Expandable>
									</div>
								</div>
							))}

						</div>
					</div>
				</Layout>
			</section>
			<section className="relative background-3 min-h-screen text-lite py-20" id="contact">
				<Layout>
					<Contact />
				</Layout>
			</section>
			<Footer />
		</main>
	</>
)

export const query = graphql`
query homeQuery {
	kontentItemSiteInformation {
	  elements {
		logo {
		  value {
			url
		  }
		}
		phone_number {
		  value
		}
	  }
	}
	kontentItemHomePage {
	  system {
	    id
	  }
	  elements {
		background_image {
		  value {
			url
		  }
		}
		carousel {
		  value {
			... on kontent_item_carousel {
			  id
			  elements {
				items {
				  value {
					... on kontent_item_carousel_item {
					  id
					  elements {
						richtext__content {
						  images {
							description
							height
							url
							image_id
							width
						  }
						  links {
							codename
							link_id
							url_slug
							type
						  }
						  name
						  type
						  value
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	}
  }   
`

export default Index
