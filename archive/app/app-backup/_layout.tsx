import { Stack } from "expo-router";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="explore"
          options={{ title: "Explore" }}
        />

        <Stack.Screen
          name="product-details"
          options={{
            title: "Product Details",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="cart"
          options={{
            title: "My Cart",
            headerShown: false,
          }}
        />
      </Stack>
    </CartProvider>
  );
}
