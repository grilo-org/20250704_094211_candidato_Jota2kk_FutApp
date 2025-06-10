import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputMatch from "../components/Inputs/Input_match";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>
          Brasileirão 2021
        </Text>
        <InputMatch/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1e1e1e",
    },

    home: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"70%",

    },

    text: {
        fontSize:38,
        textAlign:"center",
        margin:18,
        fontWeight:"bold",
        color:"white"
    }
})