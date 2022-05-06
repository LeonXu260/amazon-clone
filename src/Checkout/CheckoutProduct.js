import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <section className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product info" />

      <article className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <article className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </article>
        <button>Remove from Basket</button>
      </article>
    </section>
  );
}

export default CheckoutProduct;
