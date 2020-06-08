import React, {useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
	const mapNode = useRef(null)

	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1Ijoibm5pa29sb3YtZGV2IiwiYSI6ImNrYjZnMDkyMjB6Y3kycm82MnBrYTBoZzMifQ.7d84s2gdcazI0qO2QzwXAw'
		const map = new mapboxgl.Map({
			container: mapNode.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [23.394580, 42.679539],
			zoom: 13,
		})

		new mapboxgl.Marker()
			.setLngLat([23.394580, 42.679539])
			.addTo(map)

		return () => {
			map.remove()
		}
	}, [])

	return (
		<div className="max-w-sm md:w-64 h-64 border-4 border-primary">
			<div ref={mapNode} className="w-full h-full" />
		</div>
	)
}
export default Map
