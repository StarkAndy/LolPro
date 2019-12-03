import React ,{ Component } from 'react';
import { View ,Text} from 'react-native'

class AuthLoading extends Component {

   static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
   };

   componentDidMount()
     {
      this.navigateScreenAsync();
     }

     /**
      * function helps to navigate to different screen
      */
     navigateScreenAsync= async()=>
     {
       this.props.navigation.navigate('Auth')  
     }

     render(){
        return(<View />);
     }





}


export default AuthLoading;