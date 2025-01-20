import React from "react";
import { useParams } from "react-router-dom";
import products from "../services/products";
import { useCart } from "../contexts/CartContext";
import styles from "./ProductPage.module.css";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className={styles.image} />
      <p>{product.description}</p>
      <p>Price: {product.price}:-</p>
      <button onClick={() => addToCart(product)} className={styles.button}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductPage;
