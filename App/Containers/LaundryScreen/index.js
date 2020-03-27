import React from 'react'
import { Text, View, ScrollView, ImageBackground } from 'react-native'

import Header from 'App/Components/Header'

import { Images } from 'App/Theme'
import styles from './styles'

export default class LaundryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={Images.shopLogo} resizeMode="contain" style={styles.headerImage}>
            <Header title="Map" />
          </ImageBackground>
        </View>
        <View style={styles.shopInfo}>
          <Text>shopInfo</Text>
        </View>
        <View style={styles.shopServices}>
          <ScrollView>
            <Text>services</Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}
