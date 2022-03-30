import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useHooks";
import OrderCart from "../OrderCart/OrderCart";
import Oma from "../OrderItem/Oma";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(cart);
  return (
    <div className="order-container">
      <div className="cart">
        {cart.map((product) => (
          <Oma key={product.id} product={product}></Oma>
        ))}
      </div>
      <div className="cart-style">{<OrderCart cart={cart}></OrderCart>}</div>
    </div>
  );
};

export default Orders;
