import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import HomePage from '../screens/app/HomePage'
import AuthLoading from '../screens/auth/AuthLoading'
import LoginContainer from '../screens/auth/LoginContainer'

const RootStack = createStackNavigator(
    {
     AuthLoadingScreen:
         AuthLoading,
     Auth:LoginContainer,
     App:HomePage
    },
    {
        initialRouteName:'AuthLoadingScreen'
    }

);

const AppNavigator =createAppContainer(RootStack)
export default AppNavigator;
