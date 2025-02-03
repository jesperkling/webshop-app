import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/products";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import styles from "./ProductPage.module.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        setError({ message: "Failed to load product.", details: error });
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
      <div className={styles.buttonContainer}>
        <AddToCartButton product={product} className={styles.addToCartButton} />
        <Link to={"/"} className={styles.backButton}>
          Back
        </Link>
      </div>
    </div>
  );
}

export default ProductPage;
