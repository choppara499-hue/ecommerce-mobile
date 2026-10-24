
import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import type { NativeStackScreenProps } from
  "@react-navigation/native-stack";
import { products } from "../data/products";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Products"
>;

export default function ProductsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                id: String(item.id),
              })
            }
          >
            <Text style={styles.emoji}>
              {item.emoji || "📦"}
            </Text>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                ₹{Number(item.price).toLocaleString("en-IN")}
              </Text>
              <Text style={styles.link}>View Details →</Text>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={<Text>No products available.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  emoji: {
    fontSize: 42,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 17,
    color: "#2563eb",
    marginTop: 5,
  },
  link: {
    color: "#2563eb",
    marginTop: 8,
  },
});
