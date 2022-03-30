import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useHooks";
import OrderCart from "../OrderCart/OrderCart";
import Oma from "../OrderItem/Oma";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
  };
  return (
    <div className="order-container">
      <div className="carts">
        {cart.map((product) => (
          <Oma key={product.id} product={product} handleRemove={handleRemove}></Oma>
        ))}
      </div>
      <div className="cart-style">{<OrderCart cart={cart}></OrderCart>}</div>
    </div>
  );
};

export default Orders;
