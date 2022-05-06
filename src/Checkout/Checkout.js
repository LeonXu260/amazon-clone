import React from "react";

// Import file
import Subtotal from "./Subtotal";

import "./Checkout.css";

function Checkout() {
  return (
    <section className="checkout">
      <article className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon ads"
        />

        <article>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </article>
      </article>

      <article className="checkout__right">
        <Subtotal />
      </article>
    </section>
  );
}

export default Checkout;
