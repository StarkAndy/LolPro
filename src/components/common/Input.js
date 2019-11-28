import React from 'react';
import { View ,Text ,TextInput ,StyleSheet } from 'react-native';


const Input = (props) =>{
    const { label ,placeholder,value} = props;

    return(
        <View
        style={styles.inputContainerStyle}
        >
           <Text>{label}</Text>
           <TextInput 
            style={styles.inputBoxStyle}
            placeholder={placeholder}
           />
        </View>
    );
}

const styles=StyleSheet.create(
    {
        inputBoxStyle:
        {
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
            borderRadius:5,  
            elevation:1
        },
        inputContainerStyle:
        {
         marginHorizontal:10
        }

    }

    );


export { Input };