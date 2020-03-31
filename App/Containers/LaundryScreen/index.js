import React, { useState } from 'react'
import { Text, View, ScrollView, ImageBackground, Animated } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from 'App/Components/Header'

import { Images } from 'App/Theme'
import styles from './styles'

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 80
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const LaundryScreen = ({ branch }) => {
  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground)
  const { name, services, description } = branch

  const [scrollY] = useState(new Animated.Value(0))
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <AnimatedImage source={Images.shopLogo} resizeMode="contain" style={[styles.headerImage]}>
          <Header />
        </AnimatedImage>
      </Animated.View>
      <Animated.View style={[styles.shopInfo, { height: headerHeight }]}>
        <Animated.View style={[styles.titleContainerStyle]}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.descriptionStyle}>{description.substr(0, 50)}...</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.shopServices}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
        >
          <View style={styles.servicesListContainer}>
            <Text style={styles.titleStyle}>Services</Text>
            {services.map((service) => {
              return (
                <View key={service.id} style={styles.serviceContainer}>
                  <Text>{service.name}</Text>
                  <Text>P{service.price}/kilo</Text>
                </View>
              )
            })}
            {services.map((service) => {
              return (
                <View key={service.id} style={styles.serviceContainer}>
                  <Text>{service.name}</Text>
                  <Text>P{service.price}/kilo</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    branch: state.branches.clickBranch,
  }
}

const { object } = PropTypes
LaundryScreen.propTypes = {
  branch: object,
}

export default connect(
  mapStateToProps,
  null
)(LaundryScreen)
