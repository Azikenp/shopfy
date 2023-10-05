import React from "react";
import Productdetail from "./ProductDetail";
import "./Product.css";
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const Product = ({ product, setProduct, detail, view, close, setClose }) => {
  const filterProducts = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const allProducts = () => {
    setProduct(Productdetail);
  };

  return (
    <>
      <div className="product_detail">
        <div className="container">
          <button onClick={() => close()}><AiOutlineCloseCircle /></button>
          {detail.map((curElm) => {
            return (
              <div className="productbox">
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>A screen everyone will love whether your family is streaming or video chatting with friends Tablet A8 . . . </p>
                  <h3>{curElm.Price}</h3>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="products">
        <h2>#Products</h2>
        <p>Home . products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => allProducts()}>All products</li>
                <li onClick={() => filterProducts("Tablet")}>Tablet</li>
                <li onClick={() => filterProducts("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterProducts("Headphone")}>Headphone</li>
                <li onClick={() => filterProducts("Camera")}>Camera</li>
                <li onClick={() => filterProducts("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="container">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="icon">
                          <li>
                            <AiOutlineShoppingCart />
                          </li>
                          <li onClick={() => view(curElm)}>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
