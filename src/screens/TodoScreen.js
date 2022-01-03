import React from "react";
import { StyleSheet, View, Text, Button} from 'react-native';
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { EditModal } from '../components/EditModal';
import { useState } from 'react';


export const TodoScreen = ( {goBack, todo, onRemove, onSave} ) => {

    const [modal, setModal] = useState(false)

    const saveHandler = (title) => {
        onSave (todo.id, title)
        setModal(false)
    }

    return (
        <View style={ Styles.wrap }>
            
            <EditModal 
                value={todo.title}
                visible={modal} 
                onCancel={ () => setModal(false) }
                onSave={saveHandler}
            />

            <AppCard>
                <Text>{todo.title}</Text>
            </AppCard>
            

            <View style={Styles.buttoms}>
                <View style={Styles.btn}>
                    <Button title= 'Редактировать' onPress = { () => setModal(true) } color={THEME.ORANGE_COLOR} />
                </View>
                
                <View style={Styles.btn}>
                    <Button title="Удалить" onPress = { () => onRemove(todo.id) } color={THEME.ORANGE_COLOR} />
                </View>
            </View>
            <View>
                <Button title="Назад" onPress = { goBack } color= { THEME.GREY_COLOR }/>
            </View>
            
        </View>
    )
}

const Styles = StyleSheet.create( {
    buttoms: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        width: '48%',
        marginBottom: 10,
    },
    wrap: {
        margin: 20,
    }
} )