import { useCart } from "../contexts/CartContext";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ product, quantity }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <button onClick={handleAddToCart} className={styles.addToCartButton}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
