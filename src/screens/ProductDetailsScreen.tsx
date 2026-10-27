
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../../App";
import {
  fetchProductById,
  type Product,
} from "../services/api";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ProductDetails"
>;

export default function ProductDetailsScreen({
  route,
  navigation,
}: Props) {
  const { id } = route.params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadProduct() {
      try {
        setLoading(true);
        setError("");

        const result = await fetchProductById(String(id));

        if (isActive) {
          setProduct(result);
        }
      } catch (err) {
        if (isActive) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load product"
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      isActive = false;
    };
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.description}>
          Loading product details...
        </Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>
          Product Details Unavailable
        </Text>

        <Text style={styles.description}>
          {error || "Product not found"}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>
          ← Back to Products
        </Text>
      </Pressable>

      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.productId}>
        Product ID: {product.id}
      </Text>

      <Text style={styles.title}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        ₹{product.price.toLocaleString("en-IN")}
      </Text>

      <Text style={styles.category}>
        Category: {product.category}
      </Text>

      <Text style={styles.category}>
        Stock: {product.stock}
      </Text>

      <Text style={styles.category}>
        Status: {product.status}
      </Text>

      <View style={styles.descriptionBox}>
        <Text style={styles.heading}>
          Product Description
        </Text>

        <Text style={styles.description}>
          {product.description || "No description available."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    padding: 20,
    paddingBottom: 35,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    marginBottom: 15,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563eb",
  },
  image: {
    width: "100%",
    height: 260,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
  },
  productId: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 12,
  },
  category: {
    fontSize: 17,
    color: "#64748b",
    marginTop: 10,
  },
  descriptionBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginTop: 10,
    textAlign: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
