import React from "react";
import { StyleSheet, View, FlatList, Text , Image} from 'react-native';
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ( {addTodo, todos, removeTodo, openTodo} ) => {

    let content = (
        <FlatList
                keyExtractor={item => item.id.toString()}
                data = {todos}
                renderItem = {({item}) => (
                    <Todo todo={item} onRemove = {removeTodo} oneOpen={openTodo}/>
                )}
            />
    )

    if (todos.length === 0 ) {
        content = (
            <View style = {Styles.imgWrap} >
                <Image 
                    source={ require('../../assets/icons8-no-document-64.png') } 
                    style = {Styles.img} 
                />
            </View>
        )
    }


    return (
        <View>
            <AddTodo onSubmit={addTodo}/>

            {content}
            
        </View>
    )
}

const Styles = StyleSheet.create( {
    imgWrap:{
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: 100,
    },
    img: {
        
    }
} )