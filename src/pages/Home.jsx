import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/fakeStoreAPI";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import AddToCartButton from "../components/AddToCartButton";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h1>Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h3>{product.title}</h3>
              <p>{product.price}:-</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link to={`/product/${product.id}`} className={styles.viewButton}>
                View Details
              </Link>
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
