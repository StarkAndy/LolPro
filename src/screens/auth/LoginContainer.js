import React ,{ Component} from 'react';
import {View ,Text ,StyleSheet ,TouchableOpacity} from 'react-native';
import  {Input , Button } from '../../components/common';
import  { BLUE_COLOUR} from '../../theme/colors';

class LoginContainer extends Component {
    //To hide the ActionBar/NavigationBar

    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
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

        if(this.state.username === "G" &&
           this.state.password === "1"){
           this.props.navigation.navigate('App');
        }else{
            alert("wrong information")
        }
    }

    renderLoginPage()
    {
        return(
            <View style={styles.containerStyle}>
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

               <View style={{flexDirection:'row' ,alignContent:'center',marginTop:10,justifyContent:'center'}}>
                <Text>New User ? </Text>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Signup')}
                >
                <Text style={{color:BLUE_COLOUR}}>Signup</Text>
                </TouchableOpacity>
              </View>
               

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
        containerStyle:{
            marginTop:20
        }
        
    }
);

export default LoginContainer;