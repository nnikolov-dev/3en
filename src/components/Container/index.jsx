import React from 'react'
import styles from './container.module.scss'

const Container = ({children}) => (
	<main className={styles.Container}>
		{children}
	</main>
)

const Content = ({children}) => (
	<div className={styles.Content}>
		{children}
	</div>
)

export {Container, Content}
