
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Products"
>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyStore 🛒</Text>

      <Text style={styles.heading}>All Products</Text>

      <Text style={styles.subtitle}>
        Explore our latest products
      </Text>

      {/* Login and Register Buttons */}
      <View style={styles.buttonRow}>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                id: String(item.id),
              })
            }
          />
        )}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No products available. Please check again later!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 18,
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    padding: 13,
    borderRadius: 10,
  },
  registerButton: {
    flex: 1,
    backgroundColor: "#16a34a",
    padding: 13,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    color: "#666",
  },
});
