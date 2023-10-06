import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/Rout";
import Footer from "./components/Footer";
import Productdetail from "./components/ProductDetail";

const App = () => {
  //add to cart
  const [cart, setCart] = useState([]);
  //product details
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState(Productdetail);
  const searchBtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };
  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Nav searchBtn={searchBtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
