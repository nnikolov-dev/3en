import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import {Nav, NavItem} from '../components/Nav'
import Layout from '../components/Layout'
import {Container, Content} from '../components/Container'
import '../assets/styles/style.scss'
import {Jumbotron, JumbotronContent} from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Section from '../components/Section'
import {H1, H2, H3} from '../components/Heading'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Index = () => (
	<>
		<Helmet>
			<title>Home :: Agency</title>
		</Helmet>
		<Container>
			<Content>
				<div className="home">
					<Jumbotron
						dark
					>
						<Layout>
							<Nav>
								<NavItem address="/" active>Home</NavItem>
								<NavItem address="/about">About</NavItem>
								<NavItem address="/person">The Team</NavItem>
								<NavItem address="/">Services</NavItem>
								<Button>Contact</Button>
							</Nav>
							<JumbotronContent>
								<H1>Your Homepage</H1>
								<H2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis quam dolorum, assumenda asperiores inventore facilis sapiente!</H2>
							</JumbotronContent>
						</Layout>
					</Jumbotron>
					<Layout>
						<div className="lr-section">
							<div className="lr">
								<h1>Our Expertise</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
							</div>
							<div className="lr">
								<h1>Our Team</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
							</div>
							<div className="lr">
								<h1>Our Company</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
							</div>
						</div>
					</Layout>
					<Section>
						<Layout>
							<JumbotronContent>
								<H3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta saepe, rem repellendus illum cumque possimus iure iusto provident aliquid eligendi cum voluptatem quis laboriosam, nulla quibusdam veniam architecto officiis nostrum?</H3>
							</JumbotronContent>
						</Layout>
					</Section>
					<section className="carousel">
						<Layout>
							<Slider dots infinite autoplay arrows={false}>
								<div className="item">
									<JumbotronContent>
										<H1>Criminal Law</H1>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
										<Button accent>View More</Button>
									</JumbotronContent>
								</div>
								<div className="item">
									<JumbotronContent>
										<H1>Matriomonial Law</H1>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
										<Button accent>View More</Button>
									</JumbotronContent>
								</div>
								<div className="item">
									<JumbotronContent>
										<H1>Motoring Offenses</H1>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
										<Button accent>View More</Button>
									</JumbotronContent>
								</div>
								<div className="item">
									<JumbotronContent>
										<H1>Other</H1>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ad aspernatur. Distinctio aliquid velit deleniti ex veritatis magnam temporibus architecto optio beatae consectetur! Deserunt itaque accusamus laboriosam nam illo quis.</p>
										<Button accent>View More</Button>
									</JumbotronContent>
								</div>
							</Slider>
						</Layout>
					</section>
				</div>
			</Content>
			<Footer />
		</Container>
	</>
)


export default Index
