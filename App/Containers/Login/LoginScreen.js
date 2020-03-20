import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import Input from 'App/Components/Input/'
import Button from 'App/Components/Button'
import styles from './styles'

const LoginScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.formContainer}>
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <Button label="Sign in" />
      </View>
      <View style={styles.footerContainer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
