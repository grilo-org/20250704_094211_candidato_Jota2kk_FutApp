import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function InputMatch() {
  const navigation = useNavigation();
  const teams = [
    { id: 121, name: "Palmeiras" },
    { id: 117, name: "Atlético-MG" },
    { id: 127, name: "Flamengo" },
    { id: 154, name: "Fortaleza" },
    { id: 131, name: "Corinthians" },
    { id: 794, name: "Bragantino" },
    { id: 124, name: "Fluminence" },
  ];

  const [selectedTeamId, setSelectedTeamId] = useState<number>(teams[0].id);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione um time:</Text>
      <Picker
        selectedValue={selectedTeamId}
        onValueChange={(value) => setSelectedTeamId(value)}
        style={styles.picker}
      >
        {teams.map((team) => (
          <Picker.Item key={team.id} label={team.name} value={team.id} color="white"/>
        ))}
      </Picker>

      <Button
        title="Ver jogos desse time"
        onPress={() =>
          navigation.navigate("MatchStats" as never, { teamId: selectedTeamId } as never)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center", 
    justifyContent: "center",
  },

  label: {
    textAlign:"center",
    fontSize: 22, 
    fontWeight: "bold",
    color:"white"
  },

  picker: {
    width:200,
    marginBottom: 3,
  },

});
