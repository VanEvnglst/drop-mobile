import React from 'react'
import MapView from 'react-native-maps'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from 'App/Theme'
import styles from './styles'

const ShopMarker = ({ marker }) => {
  return (
    <MapView.Marker
      coordinate={{
        latitude: Number(marker.latitude),
        longitude: Number(marker.longitude),
      }}
      title={marker.name}
      description={marker.description}
    >
      <Image source={Images.pin} style={styles.pinStyle} />
    </MapView.Marker>
  )
}

export default ShopMarker

const { object } = PropTypes
ShopMarker.propTypes = {
  marker: object,
}
