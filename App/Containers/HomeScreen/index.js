import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'

import BranchActions from 'App/Redux/BranchRedux'

import Header from 'App/Components/Header'
import ShopMarker from 'App/Components/ShopMarker'

import styles from './styles'

const HomeScreen = ({ doGetBranches, branches }) => {
  const [region] = useState({
    latitude: 14.612111,
    longitude: 120.987809,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  })

  useEffect(() => {
    doGetBranches()
  }, [])

  return (
    <SafeAreaView forceInset={{ top: 'never' }} style={styles.container}>
      <MapView style={styles.mapStyle} region={region}>
        <Header title="Map" />
        {branches.data &&
          branches.data.map((marker) => (
            <ShopMarker key={String(marker.id)} marker={marker.attributes} />
          ))}
      </MapView>
      <LinearGradient colors={['rgba(255,255,255, 0.4)', '#fafafa']} style={styles.bodyContainer}>
        <View style={styles.boxContainer}>
          <Text>Search shop here</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    branches: state.branches,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doGetBranches: () => dispatch(BranchActions.getBranches()),
  }
}

const { array, func } = PropTypes
HomeScreen.propTypes = {
  branches: array,
  doGetBranches: func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
