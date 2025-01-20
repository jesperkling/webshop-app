import React from "react";
import { useParams } from "react-router-dom";
import products from "../services/products";

function ProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}:-</p>
    </div>
  );
}

export default ProductPage;
