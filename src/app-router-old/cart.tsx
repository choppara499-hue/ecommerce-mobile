import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";

import { router } from "expo-router";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (name: string) => {
    Alert.alert(
      "Remove Product",
      `Remove ${name} from your cart?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => removeFromCart(name),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>My Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={styles.emptyTitle}>
            Your cart is empty
          </Text>
          <Text style={styles.emptyText}>
            Add some products to your cart!
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.buttonText}>
              Browse Products
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          {cartItems.map((item) => (
            <View key={item.name} style={styles.card}>
              <Text style={styles.emoji}>{item.emoji}</Text>

              <View style={styles.productInfo}>
                <Text style={styles.productName}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  ₹{item.price.toLocaleString("en-IN")}
                </Text>

                <Text style={styles.subtotal}>
                  Subtotal: ₹
                  {(item.price * item.quantity).toLocaleString(
                    "en-IN"
                  )}
                </Text>

                <View style={styles.quantityRow}>
                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => decreaseQuantity(item.name)}
                  >
                    <Text style={styles.quantityText}>−</Text>
                  </Pressable>

                  <Text style={styles.quantity}>
                    {item.quantity}
                  </Text>

                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => increaseQuantity(item.name)}
                  >
                    <Text style={styles.quantityText}>+</Text>
                  </Pressable>
                </View>

                <Pressable
                  onPress={() => handleRemove(item.name)}
                >
                  <Text style={styles.removeText}>
                    Remove
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}

          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>
              Total Amount
            </Text>
            <Text style={styles.totalAmount}>
              ₹{totalAmount.toLocaleString("en-IN")}
            </Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Coming Soon",
                "Checkout will be added next."
              )
            }
          >
            <Text style={styles.buttonText}>
              Proceed to Checkout
            </Text>
          </Pressable>

          <Pressable
            style={styles.continueButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.continueText}>
              Continue Shopping
            </Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 20,
  },
  emptyBox: {
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  emptyEmoji: {
    fontSize: 55,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 21,
    fontWeight: "bold",
  },
  emptyText: {
    color: "#6b7280",
    marginTop: 8,
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    gap: 15,
  },
  emoji: {
    fontSize: 42,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  subtotal: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 5,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 12,
  },
  quantityButton: {
    width: 34,
    height: 34,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 17,
    fontWeight: "bold",
  },
  removeText: {
    color: "#dc2626",
    marginTop: 12,
    fontWeight: "600",
  },
  totalBox: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    marginTop: 5,
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: "#4b5563",
  },
  totalAmount: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  continueButton: {
    padding: 15,
    alignItems: "center",
    marginTop: 5,
  },
  continueText: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
  },
});
