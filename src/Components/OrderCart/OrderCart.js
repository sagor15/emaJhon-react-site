import React from "react";
import "./OrderCart.css";

const OrderCart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="orderCartstyle">
      <h3>Order Summary</h3>
      <p>selet items : {cart.length}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping :${shipping}</p>
      <p>Tax : ${tax}</p>
      <h5>Grand Total : ${grandTotal} </h5>
    </div>
  );
};

export default OrderCart;
