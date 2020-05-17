import React from 'react'
import styles from './section.module.scss'
import sectionImage from '../../assets/images/section.jpg'

const Section = ({children}) => (
	<section className={styles.Section}>
		<div className={styles.Overlay} />
		<div className={styles.Background}>
			<img src={sectionImage} alt="Background" />
		</div>
		<span className={styles.Quote}>“</span>
		<div className={styles.Content}>
			{children}
		</div>
	</section>
)

export default Section
