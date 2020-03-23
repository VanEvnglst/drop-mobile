import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import MapView from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'

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
        <Header title="Map" />
        <LinearGradient colors={['rgba(255,255,255, 0.4)', '#fafafa']} style={styles.bodyContainer}>
          <View style={styles.boxContainer}>
            <Text>Search shop here</Text>
          </View>
        </LinearGradient>
      </MapView>
    </SafeAreaView>
  )
}

export default HomeScreen
