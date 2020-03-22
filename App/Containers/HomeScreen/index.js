import React, { useState } from 'react'
import { SafeAreaView } from 'react-navigation'
import MapView from 'react-native-maps'

import Header from 'App/Components/Header'

import styles from './styles'

const HomeScreen = () => {
  const [region] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <SafeAreaView forceInset={{ top: 'never' }} style={styles.container}>
      <MapView style={styles.mapStyle} region={region}>
        <Header />
      </MapView>
    </SafeAreaView>
  )
}

export default HomeScreen
