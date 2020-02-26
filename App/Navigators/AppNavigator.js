import { createAppContainer, createStackNavigator } from 'react-navigation'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: LoginScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
