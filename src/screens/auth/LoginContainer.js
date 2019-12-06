import React ,{ Component} from 'react';
import {View ,Text ,StyleSheet} from 'react-native';
import  {Input , Button } from '../../components/common';
import  { BLUE_COLOUR} from '../../theme/colors';

class LoginContainer extends Component {
    //To hide the ActionBar/NavigationBar
    static navigationOptions = {
        header: null,
    };

    state={
        username:'',
        password:''
    }

    constructor(props){
        super(props) 
     
    }

    updateUserName=(name)=>{
       this.setState({username:name}) 
    }

    updatePassword=(password)=>{
        this.setState({password:password})
    }

    loginUser=()=>{

        if(this.state.username === "Gyanesh" &&
           this.state.password === "1234"){

            alert("success");
        }else{
            alert("wrong information")
        }
    }

    renderLoginPage()
    {
        return(
            <View>
               <Input
                label="Username" 
                placeholder="Joe Coiner"
                value={this.state.username}
                onChangeText={this.updateUserName}
               />

               <Input
                label="Password"
                 placeholder="Password"
                 value={this.state.password}
                 onChangeText={this.updatePassword}

                />
                
                <Button 
                label="Login"
                onPress={()=>this.loginUser()}
                
                />

                <Text
                 style={{}}
                >New User ?
                <Text style={{color:BLUE_COLOUR}}>Signup</Text>
                </Text>
            </View>
        );
    }

    render()
    {
     const loginPage=this.renderLoginPage();

      return(
          <View>
              {loginPage}
          </View>

      );
    }
}

const styles= StyleSheet.create(
    {
        
    }
);

export default LoginContainer;