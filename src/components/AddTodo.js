import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, Keyboard} from "react-native";
import { THEME } from "../theme";
import { AntDesign } from '@expo/vector-icons'; 


export const AddTodo = ( { onSubmit } ) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {

        //if(value !== ''){
        if(value.trim()){
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        }else{
            //error
            Alert.alert('не может быть пустым')
        }
    }



    return (
        <View style={style.block}>
           <TextInput 
                style = {style.input}
                //onChangeText = {text => setValue(text)}
                onChangeText = {setValue}
                value = {value}
                placeholder = 'введите что-нибудь'
                autoCorrect = {false}
                autoCapitalize = 'none'
            />
            <AntDesign.Button style = {style.btn} onPress={pressHandler} name='plussquareo' color="#333" >
                Добавить
            </AntDesign.Button>
           {/*<Button title="Добавить" onPress={pressHandler} color={ THEME.ORANGE_COLOR} />*/}
        </View>
    )
}

const style = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#eee",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 5,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#fff",
    },
    btn: {
        backgroundColor: THEME.ORANGE_COLOR,
    }

})