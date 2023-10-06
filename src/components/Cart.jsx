import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {
  // increase qty
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };
  // decrease qty
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //remove Product
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <div className="container">
      {cart.length === 0 && (
        <div className="emptycart">
          <h2 className="empty">Cart is Empty</h2>
          <Link to="/product" className="emptycartbtn">
            Shop Now
          </Link>
        </div>
      )}
      <div className="contant">
        {cart.map((curElm) => {
          return (
            <div className="cart_item" key={curElm.id}>
              <div className="img_box">
                <img src={curElm.Img} alt={curElm.Title} />
              </div>
              <div className="detail">
                <div className="info">
                  <h4>{curElm.Cat}</h4>
                  <h3>{curElm.Title}</h3>
                  <p>Price: ${curElm.Price}</p>
                  <div className="qty">
                    <button onClick={() => incqty(curElm)} className="incqty">
                      +
                    </button>
                    <input type="text" value={curElm.qty} />
                    <button onClick={() => decqty(curElm)} className="decqty">
                      -
                    </button>
                  </div>
                  <h4>sub total: ${curElm.Price * curElm.qty}</h4>
                </div>
                <div className="close">
                  <button onClick={() => removeProduct(curElm)}>
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <>
          <h2 className="totalprice">Total: ${totalPrice}</h2>{" "}
          <button className="checkout">checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
