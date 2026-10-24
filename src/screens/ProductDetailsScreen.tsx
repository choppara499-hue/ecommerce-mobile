import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { products } from "../data/products";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ProductDetails"
>;

export default function ProductDetailsScreen({
  route,
  navigation,
}: Props) {
  const { id } = route.params;

const product = products.find(
  (item) => String(item.id) === String(id)
);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Product Not Found</Text>

        <Text style={styles.description}>
          The selected product does not exist.
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
        <Text style={styles.backText}>← Back to Products</Text>
      </Pressable>

      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.productId}>Product ID: {product.id}</Text>

      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.price}>
        ₹{product.price.toLocaleString("en-IN")}
      </Text>

      <Text style={styles.category}>
        Category: {product.category}
      </Text>

      <View style={styles.descriptionBox}>
        <Text style={styles.heading}>Product Description</Text>

        <Text style={styles.description}>
          This is {product.name}, available at MyStore.
          Browse the product details and explore our collection.
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