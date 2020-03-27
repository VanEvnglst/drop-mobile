import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  shopInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  shopServices: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
})
