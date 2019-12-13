import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import HomePage from '../screens/app/HomePage'
import AuthLoading from '../screens/auth/AuthLoading'
import LoginContainer from '../screens/auth/LoginContainer'
import AuthStack from './AuthStack';

const RootStack = createStackNavigator(
    {
        AuthLoadingScreen:
            AuthLoading,
        Auth: {
            screen: AuthStack,
            navigationOptions: {
                header: null
            }
        },
        App: { 
            screen:HomePage,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Auth'
    }

);

const AppNavigator = createAppContainer(RootStack)
export default AppNavigator;
