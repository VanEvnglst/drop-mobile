import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  formContainer: {
    marginTop: 300,
    alignSelf: 'center',
    width: '100%',
  },
  formInput: { 
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center'
  },
  btnStyle: { 
    height: 45, 
    width: '98%',
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'blue',
    borderRadius: 5
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    alignSelf: 'center'

  }
})