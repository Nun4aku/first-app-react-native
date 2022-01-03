import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from "../theme";

export const EditModal = ( { visible, onCancel, value , onSave} ) => {

    const[title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3 ){
            Alert.alert('Ощибка!', `Минимальная длина 3 символа. Сейчас ${title.trim().length}`)
        } else {
            onSave(title)
        }
    }

    return(
        <Modal 
            visible={visible} 
            style={style.modal}
            animationType='slide'
            transparent={false}
        >
            <View style={style.wrap}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={style.input}
                    autoCapitalize="none"
                    maxLength={100}
                />
                <View style={style.btns} >
                    <Button title='Сохранить' color={ THEME.ORANGE_COLOR}  onPress={saveHandler}/>
                    <Button title='Отменить' onPress={onCancel} color={ THEME.GREY_COLOR} />
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modal: {
        
    },
    wrap:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.GREY_COLOR,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '80%',
        borderRadius: 10,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        
    } 
})

