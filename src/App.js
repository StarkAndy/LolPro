/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{ Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { Input } from './components/common'
import LoginContainer from './screens/auth/LoginContainer'
import AppNavigator from './routes/AppNavigator'

class App extends Component {

renderTextInput(){

    return(
        <View>
           <Input />
        </View>
    );
}    

 render(){
    return (
        <View style={{flex:1}}>
           <AppNavigator />
        </View>
      
    );
 }   
 
};



export default App;
