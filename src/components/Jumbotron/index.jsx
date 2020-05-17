import React from 'react'
import PropTypes from 'prop-types'
import aerialVideo from '../../assets/videos/aerial.mp4'
import aerialImage from '../../assets/videos/aerial.jpg'
import styles from './jumbotron.module.scss'

const JumbotronContent = ({children}) => (
	<div className={styles.JumbotronContent}>
		{children}
	</div>
)

const Jumbotron = ({image, children, justifyContent, alignItems, dark}) => (
	<div className={styles.Jumbotron} style={{backgroundImage: `url(${image})`, justifyContent, alignItems}}>
		<video className={styles.Video} autoPlay muted poster={aerialImage} playsInline>
			<source src={aerialVideo} type="video/mp4" />
		</video>
		{dark && (<div className={styles.Dark} />)}
		<div className={styles.Content}>
			{children}
		</div>
	</div>
)

Jumbotron.propTypes = {
	image: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	dark: PropTypes.bool,
}

Jumbotron.defaultProps = {
	image: aerialImage,
	children: '',
	justifyContent: 'center',
	alignItems: 'center',
	dark: false,
}

export {JumbotronContent, Jumbotron}
