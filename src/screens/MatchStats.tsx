import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

type Fixture = {
  fixture: { id: number; date: string };
  teams: { home: { name: string }; away: { name: string } };
};

type TeamStatistics = {
  fixtures: {
    wins: { home: number; away: number; total: number };
    draws: { home: number; away: number; total: number };
    loses: { home: number; away: number; total: number };
    played: { home: number; away: number; total: number };
  };
};

export default function MatchStats() {
  const { teamId } = useRoute().params as { teamId: number };

  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [stats, setStats] = useState<TeamStatistics | null>(null);

  const [loadingFixtures, setLoadingFixtures] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  //partidas
  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const res = await fetch(
          `https://v3.football.api-sports.io/fixtures?team=${teamId}&season=2021`,
          { headers: { "x-apisports-key": "Sua chave da API" } }
        );
        const json = await res.json();
        setFixtures(json.response);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingFixtures(false);
      }
    };
    fetchFixtures();
  }, [teamId]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://v3.football.api-sports.io/teams/statistics?team=${teamId}&season=2021&league=741`,
          { headers: { "x-apisports-key": " Sua chave da API" } }
        );
        const json = await res.json();
        const statObj: TeamStatistics = Array.isArray(json.response)
          ? json.response[0]
          : json.response;
        setStats(statObj);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingStats(false);
      }
    };
    fetchStats();
  }, [teamId]);


  if (loadingFixtures || loadingStats) {
    return <ActivityIndicator style={styles.center} />;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 18 }}>
      {stats && (
        <View style={styles.card}>
          <Text style={styles.teams}>Estatísticas gerais</Text>
          <Text style={styles.text}>Jogos: {stats.fixtures.played.total}</Text>
          <Text style={styles.text}>Vitórias: {stats.fixtures.wins.total}</Text>
          <Text style={styles.text}>Derrotas: {stats.fixtures.loses.total}</Text>
        </View>
      )}

      <FlatList
        data={fixtures}
        keyExtractor={(item) => item.fixture.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.teams}>
              {item.teams.home.name} x {item.teams.away.name}
            </Text>
            <Text style={styles.date}>
              {new Date(item.fixture.date).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
   },

  card: { 
    backgroundColor: "#222", 
    padding: 19, 
    marginVertical: 8, 
    borderRadius: 8
   },

  teams: { 
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold",
   },

  date: { 
    color: "#ccc", 
    marginTop: 4
   },

   text:{
    color:"white",
    fontSize:12
   },
});
