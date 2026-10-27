
const API_BASE_URL = "http://192.168.183.42:5000";


export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  status: string;
  category: string;
  image: string;
};

type ProductsResponse = {
  success: boolean;
  message: string;
  count: number;
  data: {
    _id: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
    status: string;
    category: string;
    image: string;
  }[];
};

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(
    `${API_BASE_URL}/product/list`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const result: ProductsResponse = await response.json();

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error("Invalid products response");
  }

  return result.data.map((item) => ({
    id: String(item._id),
    name: item.name,
    description: item.description ?? "",
    price: Number(item.price),
    stock: Number(item.stock),
    status: item.status,
    category: item.category ?? "General",
    image: item.image ?? "https://placehold.co/400x400?text=Product",
  }));
}

export async function fetchProductById(
  id: string
): Promise<Product> {
  const response = await fetch(
    `${API_BASE_URL}/product/${encodeURIComponent(id)}`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const result = await response.json();

  // Supports either { success, data: product }
  // or a direct product response.
  const item = result.data ?? result;

  if (
    result.success === false ||
    !item ||
    !item._id
  ) {
    throw new Error("Product not found");
  }

  return {
    id: String(item._id),
    name: item.name,
    description: item.description ?? "",
    price: Number(item.price),
    stock: Number(item.stock),
    status: item.status,
    category: item.category ?? "General",
    image: item.image ?? "https://placehold.co/400x400?text=Product",
  };
}