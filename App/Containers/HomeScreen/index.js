import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import MapView from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'

import Header from 'App/Components/Header'
import { Images } from 'App/Theme'

import styles from './styles'

const HomeScreen = () => {
  const [region] = useState({
    latitude: 14.612111,
    longitude: 120.987809,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  })

  const [marker] = useState([{ name: 'Liempuhan', latitude: 14.612111, longitude: 120.987809 }])

  return (
    <SafeAreaView forceInset={{ top: 'never' }} style={styles.container}>
      <MapView style={styles.mapStyle} region={region}>
        <Header title="Map" />
        <MapView.Marker
          key={String(marker[0].id)}
          coordinate={{
            latitude: Number(marker[0].latitude),
            longitude: Number(marker[0].longitude),
          }}
          title={marker.name}
          description={'description'}
        >
          <Image source={Images.pin} style={styles.pinStyle} />
        </MapView.Marker>
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
