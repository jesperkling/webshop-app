import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Details about product {id} will go here.</p>
    </div>
  );
}

export default ProductPage;
