
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

import { router } from "expo-router";

type ProductCardProps = {
  name: string;
  price: number;
  emoji: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  emoji,
  image,
}: ProductCardProps) {
  const handleViewProduct = () => {
    router.push({
      pathname: "/product-details",
      params: {
        name,
        price: String(price),
        emoji,
      },
    });
  };

  return (
    <View style={styles.card}>
      {/* Actual Product Image */}
      <View style={styles.imageBox}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel={name}
        />
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>
        ₹{price.toLocaleString("en-IN")}
      </Text>

      <Text style={styles.stock}>● In Stock</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleViewProduct}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>View Product</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },
  imageBox: {
    height: 180,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    color: "#222222",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 6,
    color: "#111827",
  },
  stock: {
    color: "green",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  buttonPressed: {
    backgroundColor: "#1d4ed8",
    opacity: 0.85,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
