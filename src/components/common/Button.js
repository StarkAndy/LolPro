import React  from 'react';
import { View ,
         Text ,
         TouchableOpacity ,
         StyleSheet
        } from 'react-native';

const Button = (props) =>
{
const{label} =props;

return(
    <View style={styles.buttonContainerStyle}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.labelStyle}>{label}</Text>   
       </TouchableOpacity>  
    </View>
    )

}

const styles= StyleSheet.create({
    buttonContainerStyle:
    {
      alignItems:'center'
    },
    buttonStyle:{
        backgroundColor:'blue',
        paddingHorizontal:70,
        marginTop:10,
        paddingVertical:8,
        borderRadius:5
    },
    labelStyle:{
        color:'white'
    }
 }
)


export {Button}