import React from 'react';
import { View ,Text ,TextInput ,StyleSheet } from 'react-native';


const Input = (props) =>{
    const { label ,placeholder,value,onChangeText,inputStyle} = props;

    return(
        <View
         style={[styles.inputContainerStyle,inputStyle]}
        >
           <Text>{label}</Text>
           <TextInput 
            style={styles.inputBoxStyle}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
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
            elevation:1,
            marginTop:5
         
        },
        inputContainerStyle:
        {
         marginHorizontal:10,
         marginTop:20
        }

    }

    );


export { Input };