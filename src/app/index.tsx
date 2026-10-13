import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyStore 🛒</Text>
      <Text style={styles.heading}>All Products</Text>
      <Text style={styles.subtitle}>
        Explore our latest products
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} />
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