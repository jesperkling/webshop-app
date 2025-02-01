import { useCart } from "../contexts/CartContext";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className={styles.addToCartButton}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
