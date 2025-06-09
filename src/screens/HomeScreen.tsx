import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputTeam from "../components/Inputs/Input_team";
import InputMatch from "../components/Inputs/Input_match";
import ShowStatistics from "../components/button/ShowStatistics";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>Resultado Da Partida</Text>
        <InputTeam/>
        <InputMatch/>
        <ShowStatistics/>
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

    },

    text: {
        width:"65%",
        fontSize:38,
        textAlign:"center",
        margin:12,
        fontWeight:"bold",
        color:"white"
    }
})