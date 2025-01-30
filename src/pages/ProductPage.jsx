import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/products";
import { useCart } from "../contexts/CartContext";
import styles from "./ProductPage.module.css";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        console.log(fetchedProduct);
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p>{product.description}</p>
      <p>Price: {product.price}:-</p>
      <button onClick={() => addToCart(product)} className={styles.button}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductPage;
