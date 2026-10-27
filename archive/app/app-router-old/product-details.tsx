import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import { useCart } from "../../../src/context/CartContext";

export default function ProductDetailsScreen() {
  const { name, price, emoji } = useLocalSearchParams<{
    name?: string;
    price?: string;
    emoji?: string;
  }>();

  const productName = Array.isArray(name)
    ? name[0]
    : name || "Product";

  const productPrice = Array.isArray(price)
    ? price[0]
    : price || "0";

  const productEmoji = Array.isArray(emoji)
    ? emoji[0]
    : emoji || "📦";

  const { addToCart } = useCart();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const handleAddToCart = () => {
    addToCart({
      name: productName,
      price: Number(productPrice),
      emoji: productEmoji,
    });

    Alert.alert(
      "Added to Cart",
      `${productName} added to your cart!`,
      [
        {
          text: "Continue Shopping",
          style: "cancel",
        },
        {
          text: "View Cart",
          onPress: () => router.push("/cart"),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <Pressable
        onPress={handleBack}
        style={styles.backButton}
        accessibilityRole="button"
      >
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      {/* Product Image */}
      <View style={styles.imageBox}>
        <Text style={styles.emoji}>
          {productEmoji}
        </Text>
      </View>

      {/* Product Information */}
      <View style={styles.details}>
        <Text style={styles.title}>
          {productName}
        </Text>

        <Text style={styles.price}>
          ₹{Number(productPrice).toLocaleString("en-IN")}
        </Text>

        <Text style={styles.stock}>
          ● In Stock
        </Text>

        <Text style={styles.heading}>
          Product Description
        </Text>

        <Text style={styles.description}>
          This is a quality {productName} from MyStore.
          Explore our products and choose your favorite item.
        </Text>

        {/* Add to Cart Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleAddToCart}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>
            Add to Cart
          </Text>
        </Pressable>

        {/* View Cart Button */}
        <Pressable
          style={styles.cartButton}
          onPress={() => router.push("/cart")}
          accessibilityRole="button"
        >
          <Text style={styles.cartButtonText}>
            View Cart
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    paddingBottom: 30,
  },

  backButton: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    alignSelf: "flex-start",
    padding: 5,
  },

  backText: {
    fontSize: 20,
    color: "#2563eb",
    fontWeight: "bold",
  },

  imageBox: {
    height: 250,
    marginHorizontal: 20,
    backgroundColor: "#eeeeee",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 100,
  },

  details: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222222",
  },

  price: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 10,
  },

  stock: {
    color: "green",
    marginTop: 10,
    fontSize: 16,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
  },

  description: {
    fontSize: 16,
    color: "#555555",
    lineHeight: 24,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },

  buttonPressed: {
    backgroundColor: "#1d4ed8",
    opacity: 0.85,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  cartButton: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#2563eb",
  },

  cartButtonText: {
    color: "#2563eb",
    fontSize: 17,
    fontWeight: "bold",
  },
});
