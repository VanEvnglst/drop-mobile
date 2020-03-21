import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Button = ({ label, onClick }) => {
  const { containerStyle, labelStyle } = styles

  return (
    <TouchableOpacity style={containerStyle} onPress={onClick}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
