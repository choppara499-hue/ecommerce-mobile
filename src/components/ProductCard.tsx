import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  onPress: () => void;
};

export default function ProductCard({
  product,
  onPress,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.productId}>ID: {product.id}</Text>

      <Text
        style={styles.name}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {product.name}
      </Text>

      <Text style={styles.price}>
        ₹{product.price.toLocaleString("en-IN")}
      </Text>

      <Text
        style={styles.category}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {product.category}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`View details for ${product.name}`}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    margin: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 120,
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    marginBottom: 10,
  },
  productId: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 4,
  },
  name: {
    minHeight: 40,
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 5,
  },
  category: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});