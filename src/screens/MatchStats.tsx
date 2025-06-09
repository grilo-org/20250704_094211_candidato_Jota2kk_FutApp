import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StatRow from "../components/Inputs/StatsRow";

export default function MatchStats() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas da Partida</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.team}>Barcelona</Text>
        <Text style={styles.score}>2</Text>
        <Text style={styles.score}>2</Text>
        <Text style={styles.team}>Real Sociedad</Text>
      </View>

      <View style={styles.statsBox}>
        <StatRow value1="1" label="Chutes" value2="4" />
        <StatRow value1="55%" label="Posse de bola" value2="45%" />
        <StatRow value1="88%" label="Precisão de passe" value2="85%" />
        <StatRow value1="11" label="Faltas" value2="13" />
      </View>

      <View style={styles.playerBox}>
        <Text style={styles.subTitle}>Melhor jogador</Text>
        <Text style={styles.player}>Robert Lewandowski - Nota 8.4</Text>

        <Text style={styles.subTitle}>Pior jogador</Text>
        <Text style={styles.player}>Martín Zubimendi - Nota 6.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor: "#1e1e1e",
    justifyContent:"space-evenly",
    flexDirection:"column",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  scoreContainer: {
    width:"100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:4,
    marginBottom: 10,
  },
  team: {
    color: "#fff",
    fontSize: 18,
  },
  score: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  statsBox: {
    width:"100%",
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    padding: 24,
    marginBottom: 2,
  },
  statRow: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginVertical: 6,
  },
  statLabel: {
    color: "#ccc",
    fontSize: 16,
  },
  statValue: {
    color: "#fff",
    fontWeight: "bold",
  },
  playerBox: {
    width:"100%",    
    padding: 16,
    backgroundColor: "#333",
    borderRadius: 8,
  },
  subTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  player: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 6,
  },
});
