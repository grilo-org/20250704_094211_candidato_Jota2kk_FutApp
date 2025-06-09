import { TextInput, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function InputMatch(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Escolha uma partida</Text>
            <TextInput style={styles.inputStyle} placeholder="Partida"></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:14,
        alignItems:"center",
        justifyContent:"center",
    },

    inputStyle: {
        width: 250,
        height: 40,
        backgroundColor: "#333333",
        borderRadius: 6,
        paddingHorizontal: 10,
        color: "white",
        marginTop: 8,
        fontWeight:"bold"

    },

    text: {
        fontSize:16,
        textAlign:"center",
        color:"#CCCCCC",
        fontWeight:"bold"
    },
})