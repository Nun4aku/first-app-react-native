import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";


export const Todo = ( {todo, onRemove, oneOpen} ) => {

    const longPressHandler = () => {
        onRemove(todo.id) 
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.3} 
            onPress = { () => oneOpen(todo.id) } 
            onLongPress = {longPressHandler}
        >
            <View style={style.todo}>
                {/*<Text> {todo.id} </Text>*/}
                <Text style={style.title}> {todo.title} </Text>
            </View>
        </TouchableOpacity>
        
    )
}

const style = StyleSheet.create ({
    todo:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    /*
    title: {
        fontFamily: 'roboto-bolt',
    }*/
})