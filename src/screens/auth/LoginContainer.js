import React ,{ Component} from 'react';
import {View ,Text ,StyleSheet} from 'react-native';
import  {Input , Button } from '../../components/common';
import  { BLUE_COLOUR} from '../../theme/colors';

class LoginContainer extends Component {

    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };

    renderLoginPage()
    {
        return(
            <View>
               <Input
                label="Username" 
                placeholder="Joe Coiner"
               />

               <Input
                label="Password"
                 placeholder="Password"
                />

                <Button 
                label="Login"
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