const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
