import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export const Navbar = ( {title} ) => {
    return (
        <SafeAreaView style={style.navbar}>
            <Text style={style.text}>{title}</Text>
        </SafeAreaView>

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