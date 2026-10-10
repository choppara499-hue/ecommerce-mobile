import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProductCard from "../components/ProductCard";
import CategoryItem from "../components/CategoryItem";
import SectionHeader from "../components/SectionHeader";

const categories = [
  { id: "1", name: "Mobiles", emoji: "📱" },
  { id: "2", name: "Laptops", emoji: "💻" },
  { id: "3", name: "Fashion", emoji: "👕" },
  { id: "4", name: "Accessories", emoji: "🎧" },
];

const products = [
  {
    id: "1",
    name: "Smartphone",
    price: 25000,
    emoji: "📱",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: "2",
    name: "Laptop",
    price: 55000,
    emoji: "💻",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    id: "3",
    name: "Headphones",
    price: 2500,
    emoji: "🎧",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: "4",
    name: "Smart Watch",
    price: 5000,
    emoji: "⌚",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>MyStore</Text>
        <Text style={styles.cart}>🛒</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcome}>
        <Text style={styles.title}>
          Welcome to MyStore!
        </Text>

        <Text style={styles.subtitle}>
          Find your favorite products at great prices.
        </Text>
      </View>

      {/* Promotional Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTag}>
          SPECIAL OFFER
        </Text>

        <Text style={styles.bannerTitle}>
          Great Deals Are Here!
        </Text>

        <Text style={styles.bannerSubtitle}>
          Explore products you will love.
        </Text>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <SectionHeader title="Categories" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              emoji={category.emoji}
            />
          ))}
        </ScrollView>
      </View>

      {/* Featured Products Section */}
      <View style={styles.section}>
        <SectionHeader
          title="Featured Products"
          subtitle="Explore our latest products"
        />

        <View style={styles.productList}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              emoji={product.emoji}
              image={product.image}
            />
          ))}
        </View>
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
    paddingBottom: 25,
  },

  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2563eb",
  },

  cart: {
    fontSize: 24,
  },

  welcome: {
    padding: 20,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 6,
    color: "#666666",
    lineHeight: 23,
  },

  banner: {
    margin: 20,
    padding: 22,
    borderRadius: 14,
    backgroundColor: "#2563eb",
  },

  bannerTag: {
    color: "#dbeafe",
    fontWeight: "bold",
    fontSize: 12,
  },

  bannerTitle: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 8,
  },

  bannerSubtitle: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 6,
  },

  section: {
    paddingHorizontal: 20,
  },

  categoryList: {
    gap: 12,
    paddingBottom: 20,
  },

  productList: {
    gap: 16,
    paddingBottom: 10,
  },
});