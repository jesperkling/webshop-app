import React from "react";
import products from "../services/products";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to my webshop</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}:-</p>
            <Link to={`/product/${product.id}`} className={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
      <p>Browse our amazing products</p>
    </div>
  );
}

export default Home;
