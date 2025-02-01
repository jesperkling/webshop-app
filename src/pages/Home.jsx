import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/fakeStoreAPI";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };
    getProducts();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to my webshop</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}:-</p>
            <div className={styles.buttonContainer}>
              <Link to={`/product/${product.id}`} className={styles.viewButton}>
                View Details
              </Link>
              <button
                onClick={() => addToCart(product)}
                className={styles.addToCartButton}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>Browse our amazing products</p>
    </div>
  );
}

export default Home;
