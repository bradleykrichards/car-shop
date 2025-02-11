import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import "./styles.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>R {item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: R {cart.total}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
