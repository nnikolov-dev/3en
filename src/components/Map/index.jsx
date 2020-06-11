import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const hasWindow = typeof window !== 'undefined' && window

const Map = ({lat, lng}) => {
	if (!hasWindow) {
		return null
	}

	const mapNode = useRef(null)

	useEffect(() => {
		mapboxgl.accessToken = process.env.GATSBY_MAPBOX_TOKEN
		const map = new mapboxgl.Map({
			container: mapNode.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: 13,
		})

		new mapboxgl.Marker()
			.setLngLat([lng, lat])
			.addTo(map)

		return () => {
			map.remove()
		}
	}, [])

	return (
		<div className="max-w-sm md:w-56 h-56 border-4 border-primary">
			<div ref={mapNode} className="w-full h-full" />
		</div>
	)
}

Map.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
}

Map.defaultProps = {
	lat: 0,
	lng: 0,
}

export default Map
