import React from "react";
import { useStateValue } from "../redux/StateProvider";
import "./Product.css";

function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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

      <button onClick={addToBasket}>Add to Basket</button>
    </section>
  );
}

export default Product;
