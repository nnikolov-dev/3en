import React from 'react'
import PropTypes from 'prop-types'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

const hasWindow = typeof window !== 'undefined' && window

const MapComponent = ({lat, lng, text}) => {
	if (!hasWindow) {
		return null
	}

	return (
		<div className="max-w-sm md:w-56 h-56 border-4 border-primary">
			<div style={{width: '100%', height: '100%'}}>
				<Map center={[lat, lng]} zoom={13}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright" rel=”nofollow”>OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[lat, lng]}>
						<Popup>{text}</Popup>
					</Marker>
				</Map>
			</div>
		</div>
	)
}

MapComponent.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
	text: PropTypes.string,
}

MapComponent.defaultProps = {
	lat: 0,
	lng: 0,
	text: '',
}

export default MapComponent
