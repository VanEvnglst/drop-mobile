import React from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'

import { Images } from 'App/Theme'

const ShopMarker = ({ marker }) => {
  return (
    <MapView.Marker
      coordinate={{
        latitude: Number(marker.latitude),
        longitude: Number(marker.longitude),
      }}
      title={marker.name}
      description={marker.description}
      tracksViewChanges={false}
      image={Images.pin}
    />
  )
}

export default ShopMarker

const { object } = PropTypes
ShopMarker.propTypes = {
  marker: object,
}
