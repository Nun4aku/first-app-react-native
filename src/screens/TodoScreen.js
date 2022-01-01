import React from "react";
import { StyleSheet, View, Text, Button} from 'react-native';
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";

export const TodoScreen = ( {goBack, todo, onRemove} ) => {
    return (
        <View style={ Styles.wrap }>
            
            <AppCard>
                <Text>{todo.title}</Text>
            </AppCard>
            

            <View style={Styles.buttoms}>
                <View style={Styles.btn}>
                    <Button title= 'Редактировать' onPress = { () => console.log('edit') } color={THEME.ORANGE_COLOR} />
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