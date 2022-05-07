import React, { useEffect, useState } from "react";

import { db } from "../../Auth/firebaseInit";
import { useStateValue } from "../../redux/StateProvider";
import Order from "./Order";

import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <section className="orders">
      {!user ? (
        <h1 className="orders__noitem">Sorry, you have no orders!</h1>
      ) : (
        <>
          <h1>Your Orders</h1>{" "}
          <article className="orders__order">
            {orders?.map((order) => (
              <Order order={order} />
            ))}
          </article>
        </>
      )}
    </section>
  );
}

export default Orders;
