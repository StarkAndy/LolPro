import React ,{ Component } from 'react';
import { View } from 'react-native'

class AuthLoading extends Component {

    constructor(){

        this.state={
            loggedIn:true
        }
     }

     componentDidMount(){

     }


     /**
      * function helps to navigate to different screen
      */
     navigateScreenAsync= async()=>{
     
        this.props.navigation.navigate(this.state.loggedIn ?'App':'Auth')
        
     }


     render(){
        return(<View />);
     }





}


export default AuthLoading;