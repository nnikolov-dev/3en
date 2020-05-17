import React from 'react'
import styles from './heading.module.scss'

const H1 = ({children}) => (
	<h1 className={styles.H1}>{children}</h1>
)

const H2 = ({children}) => (
	<h2 className={styles.H2}>{children}</h2>
)

const H3 = ({children}) => (
	<h3 className={styles.H3}>{children}</h3>
)

export {H1, H2, H3}
