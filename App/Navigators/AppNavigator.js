import { createAppContainer, createStackNavigator } from 'react-navigation'
import { fromLeft, fadeIn } from 'react-navigation-transitions'

import LoginScreen from 'App/Containers/Login/LoginScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2]
  const nextScene = scenes[scenes.length - 1]

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === 'SplashScreen' &&
    nextScene.route.routeName === 'MainScreen'
  ) {
    return fadeIn()
  }
  return fromLeft()
}

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: LoginScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    transitionConfig: (nav) => handleCustomTransition(nav),
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
