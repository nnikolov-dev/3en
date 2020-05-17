import React from 'react'
import {Link} from 'gatsby'
import Layout from '../Layout'
import styles from './footer.module.scss'

import logoImage from '../../assets/images/logo.svg'

const Footer = () => (
	<footer className={styles.Footer}>
		<Layout>
			<div className={styles.Logo}>
				<img src={logoImage} akt="Logo" />
			</div>
			<div className={styles.Columns}>
				<div className={styles.Column}>
					<h1>Working Hours</h1>
					<ul>
						<li>
							Monday (9:00 - 18:00)
						</li>
						<li>
							Tuesday (9:00 - 18:00)
						</li>
						<li>
							Wednesday (9:00 - 18:00)
						</li>
						<li>
							Thursday (9:00 - 18:00)
						</li>
						<li>
							Friday (9:00 - 18:00)
						</li>
						<li>
							Saturday (9:00 - 18:00)
						</li>
						<li>
							Sunday (9:00 - 18:00)
						</li>
					</ul>
				</div>
				<div className={styles.Column}>
					<h1>Services</h1>
					<ul>
						<li>
							<Link to="/">Criminal Law</Link>
						</li>
						<li>
							<Link to="/">Matriomonial Law</Link>
						</li>
						<li>
							<Link to="/">Motoring Offenses</Link>
						</li>
						<li>
							<Link to="/">Other</Link>
						</li>
					</ul>
				</div>
				<div className={styles.Column}>
					<h1>SIte Map</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/">About</Link></li>
						<li><Link to="/">The Team</Link></li>
						<li><Link to="/">Services</Link></li>
					</ul>
				</div>
				<div className={styles.Column}>
					<h1>Our Office</h1>
					<ul>
						<li>12 John Doe</li>
						<li>Business Park</li>
						<li>ABC 123</li>
						<li>Tel: (+44) 777 7777</li>
						<li>Fax: (+888) 777-7777</li>
					</ul>
				</div>
			</div>
			<div className={styles.Bottom}>
				<div>
					&copy; 2020 Your Company. All Rights Reserved | Terms of Service
				</div>
				<div>
					Website by <a href="https://nikolov.me" alt="NNikolov">NNikolov</a>
				</div>
			</div>
		</Layout>
	</footer>
)

export default Footer
