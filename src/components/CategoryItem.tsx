
import { View, Text, StyleSheet } from "react-native";

type CategoryItemProps = {
  name: string;
  emoji: string;
};

export default function CategoryItem({
  name,
  emoji,
}: CategoryItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    minHeight: 120,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 34,
  },
  name: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    color: "#111827",
  },
});
