import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
  },
  header: {
    height: 200,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  shopInfo: {
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  titleContainerStyle: {
    flex: 2,
    padding: 20,
  },
  titleStyle: {
    flex: 1,
    fontSize: 18,
  },
  descriptionStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: 12,
  },
  shopServices: {
    flex: 2,
    paddingBottom: 50,
  },
  servicesListContainer: {
    flex: 1,
    alignItems: 'center',
  },
  serviceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'absolute',
    borderColor: 'lightgrey',
    borderTopWidth: 1,
    bottom: 0,
    width: width,
    height: 100,
    paddingHorizontal: 20,
    paddingBottom: 35,
    paddingTop: 15,
    elevation: 1,
    shadowColor: 'lightgrey',
    shadowOpacity: 0.3,
  },
})
