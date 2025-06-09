import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StatRowProps = {
  label: string;
  value1: string;
  value2: string;
};

const StatRow: React.FC<StatRowProps> = ({ value1, label, value2 }) => (
  <View style={styles.statRow}>
    <Text style={styles.statLabel}>{value1}</Text>
    <Text style={styles.statValue}>{label}</Text>
    <Text style={styles.statValue}>{value2}</Text>
  </View>
);


const styles = StyleSheet.create({
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    paddingVertical: 8,
    marginVertical: 5,
  },
  statLabel: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    width: '33.3%', 
  },
  statValue: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    width: '33.3%',
  },
});


export default StatRow;
