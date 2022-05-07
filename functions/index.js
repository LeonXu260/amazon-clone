const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.post("/paymens/create", async (req, res) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
