import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginContainer from '../screens/auth/LoginContainer'
import SignupPage from '../screens/auth/SignupPage'

const AppLogin= createStackNavigator({
     LoginScreen:{
       screen: SignupPage,
       navigationOptions: {
        header: null,
      }
     },
     Signup:{
      screen:SignupPage,
      initial:true
     }
},
{
headerMode:'none',
navigationOptions: {
  headershown: false,
}
}
);

const AppStack =createAppContainer(AppLogin)
export default AppStack;
