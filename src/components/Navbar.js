import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ( {title} ) => {
    return (
        <View style={style.navbar}>
            <Text style={style.text}>{title}</Text>
        </View>

    )
};


const style = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#555555',
        paddingBottom: 15,
        marginTop: 25,
        
    },
    text: {
        color: '#fff',
        fontSize: 15,
    },
})