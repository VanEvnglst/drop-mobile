import React from 'react'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import BranchActions from 'App/Redux/BranchRedux'
import NavigationService from 'App/Services/NavigationService'

import { Images } from 'App/Theme'
import styles from './styles'

const ShopMarker = ({ marker, doClickBranch }) => {
  const { latitude, longitude, name, description } = marker

  const clickBranch = () => {
    NavigationService.navigate('LaundryScreen')
    doClickBranch(marker)
  }
  return (
    <MapView.Marker
      coordinate={{
        latitude: Number(latitude),
        longitude: Number(longitude),
      }}
      title={name}
      description={description}
      tracksViewChanges={false}
      image={Images.pin}
    >
      <MapView.Callout onPress={clickBranch}>
        <View style={styles.callOutContainer}>
          <Text style={styles.callOutTitle}>{name}</Text>
          <Text style={styles.callOutDescription}>Tap me again for more details</Text>
        </View>
      </MapView.Callout>
    </MapView.Marker>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    doClickBranch: (branch) => dispatch(BranchActions.clickBranch(branch)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ShopMarker)

const { object, func } = PropTypes
ShopMarker.propTypes = {
  marker: object,
  doClickBranch: func,
}
