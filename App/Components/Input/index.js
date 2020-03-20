import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default Input
