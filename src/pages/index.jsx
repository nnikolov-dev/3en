import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Bar from '../components/Bar'
import {Nav, NavItem} from '../components/Nav'
import Layout from '../components/Layout'
import {Container, Content} from '../components/Container'
import '../assets/styles/style.scss'
import {Jumbotron, JumbotronContent} from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Section from '../components/Section'
import {H1, H2, H3} from '../components/Heading'
import logoImage from '../assets/images/logo.svg'

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
				</div>
			</Content>
			<Footer />
		</Container>
	</>
)


export default Index
