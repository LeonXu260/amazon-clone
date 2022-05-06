import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <article className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon home image"
        />

        <article className="home__row">
          <Product />
          <Product />
        </article>
        <article className="home__row">
          <Product />
          <Product />
          <Product />
        </article>
        <article className="home__row">
          <Product />
        </article>
      </article>
    </section>
  );
}

export default Home;
