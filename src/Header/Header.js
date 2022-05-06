import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <section className="header__search">
        <input className="header__searchInput" type="text" />
      </section>

      <nav className="header__nav">
        <section className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </section>
        <section className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </section>
        <section className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </section>
      </nav>
    </header>
  );
}

export default Header;
