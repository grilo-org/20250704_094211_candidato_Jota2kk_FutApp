import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ShowStatistics() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MatchStats")}
      style={{
        backgroundColor: "#2e64e5",
        padding: 10,
        borderRadius: 8,
        margin: 10,
        width: 250,
        height: 40,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", textAlign:"center"}}>SHOW STATISTICS</Text>
    </TouchableOpacity>
  );
}