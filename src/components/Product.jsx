import React, { useState } from "react";
import Productdetail from "./ProductDetail";
import "./Product.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const Product = () => {
  const [product, setProduct] = useState(Productdetail);

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
                          <li>
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
