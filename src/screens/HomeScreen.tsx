import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  RefreshControl,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../../App";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";
import type { Product } from "../services/api";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

export default function HomeScreen({ navigation }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const loadProducts = useCallback(async () => {
    setError("");

    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not load products. Please try again."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const retry = () => {
    setLoading(true);
    loadProducts();
  };

  // Loading state
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.message}>Loading products...</Text>
      </View>
    );
  }

  // Error state
  if (error && products.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>
          Oops! Couldn't load products.
        </Text>

        <Text style={styles.message}>
          Please check your connection and try again.
        </Text>

        <Pressable style={styles.retryButton} onPress={retry}>
          <Text style={styles.retryText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>No products available.</Text>

        <Pressable style={styles.retryButton} onPress={retry}>
          <Text style={styles.retryText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  // Success state
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyStore 🛒</Text>

      <Text style={styles.heading}>
        All Products ({products.length})
      </Text>

      <Text style={styles.subtitle}>
        Explore our latest products
      </Text>

      {/* Refresh error: keep showing existing products */}
      {error !== "" && (
        <Text style={styles.warning}>
          Refresh failed. Showing loaded products.
        </Text>
      )}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              loadProducts();
            }}
          />
        }
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard
              product={item}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  id: item.id,
                })
              }
            />
          </View>
        )}
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
  row: {
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "48%",
    marginBottom: 12,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  message: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#dc2626",
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 18,
  },
  retryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  warning: {
    color: "#b45309",
    marginBottom: 10,
  },
});
