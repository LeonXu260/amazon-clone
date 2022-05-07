import React, { useState } from "react";
import { useStateValue } from "../../redux/StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, handleError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};

  return (
    <section className="payment">
      <article className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <article className="payment__section">
          <article className="payment__title">
            <h3>Delivery Address</h3>
          </article>
          <article className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </article>
        </article>
        <article className="payment__section">
          <article className="payment__title">
            <h3>Review items and delivery</h3>
          </article>
          <article className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </article>
        </article>
        <article className="payment__section">
          <article className="payment__title">
            <h3>Payment Method</h3>
          </article>
          <article className="payment__details">
            <form onClick={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </article>
        </article>
      </article>
    </section>
  );
}

export default Payment;