import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'App/Theme/'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingTop: 24, // top notch height
    height: height * 0.1,
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
