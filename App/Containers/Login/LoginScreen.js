import React from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const LoginScreen = props => {

  handleNavigate = value => {
    const { navigation } = props;
    navigation.navigate(value);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text>Email</Text>
            <TextInput
              placeholder={'Enter email address'}
              style={styles.formInput}
            />
            <Text>Password</Text>
            <TextInput
              placeholder={'Enter Password'}
              style={styles.formInput}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnStyle}>
            <Text style={{color: 'white', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpContainer}>
          <TouchableOpacity>
            <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
      <Text>Forgot Password?
        <Text>Reset</Text>
      </Text>
      </View>
    </View>
  );
}

export default LoginScreen;
