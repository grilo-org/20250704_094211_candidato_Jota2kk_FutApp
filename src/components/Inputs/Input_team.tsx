import { TextInput, StyleSheet, Text, ScrollView, View} from "react-native";
import React from "react";

export default function InputTeam (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Escolha um time</Text>
            <TextInput style={styles.inputStyle} placeholder="Time" placeholderTextColor={"#CCCCCC"}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:14,
        alignItems:"center",
        justifyContent:"center"},

    inputStyle: {
        width: 250,
        height: 40,
        backgroundColor: "#333333",
        borderRadius: 6,
        paddingHorizontal: 10,
        color: "#CCCCCC", 
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