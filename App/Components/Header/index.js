import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Header = ({ title }) => {
  const { containerStyle, labelStyle, leftStyle, rightStyle } = styles

  return (
    <View style={containerStyle}>
      <View style={leftStyle} />
      <Text style={labelStyle}>{title}</Text>
      <View style={rightStyle} />
    </View>
  )
}

export default Header

const { string } = PropTypes
Header.propTypes = {
  title: string,
}
