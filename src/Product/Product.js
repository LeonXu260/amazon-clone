import React from "react";
import "./Product.css";

function Product() {
  return (
    <section className="product">
      <article className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <article className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </article>
      </article>

      <img src={image} alt="product info" />

      <button>Add to Basket</button>
    </section>
  );
}

export default Product;
