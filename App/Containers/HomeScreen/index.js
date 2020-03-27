import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import MapView from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'

import Header from 'App/Components/Header'
import ShopMarker from 'App/Components/ShopMarker'

import styles from './styles'

const HomeScreen = () => {
  const [region] = useState({
    latitude: 14.612111,
    longitude: 120.987809,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  })

  const [markers] = useState([
    { name: 'Liempuhan', latitude: 14.612111, longitude: 120.987809 },
    { name: 'Liempuhan 2', latitude: 14.610065, longitude: 120.989265 },
  ])

  return (
    <SafeAreaView forceInset={{ top: 'never' }} style={styles.container}>
      <MapView style={styles.mapStyle} region={region}>
        <Header title="Map" />
        {markers.map((marker) => (
          <ShopMarker key={marker.name} marker={marker} />
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

export default HomeScreen
