import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme/'

export default StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    paddingTop: 24, // top notch height
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftStyle: {
    flex: 1,
  },
  rightStyle: {
    flex: 1,
  },
  labelStyle: {
    flex: 3,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
})
