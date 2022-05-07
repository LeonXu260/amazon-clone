import React, { useEffect, useState } from "react";
import { useStateValue } from "../../redux/StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../redux/reducer";

import axios from "../../Auth/axios";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [succeeded, setSucceed] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceed(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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

              <article className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </article>

              {error && <article>{error}</article>}
            </form>
          </article>
        </article>
      </article>
    </section>
  );
}

export default Payment;
