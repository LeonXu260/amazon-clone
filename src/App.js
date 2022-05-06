import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import file
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <Router>
      <section className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
