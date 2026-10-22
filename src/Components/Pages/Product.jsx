import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  let [product, setproduct] = useState([]);
  let [filterCategory, setFilterCategory] = useState([]);

  let fetchapi = async () => {
    let apirResp = await axios.get("http://localhost:4000/products");
    setproduct(apirResp.data);
    setFilterCategory(apirResp.data);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const navigate = useNavigate();

  const viewmore = (productid) => {
    navigate(`/adminprotal/viewmore/${productid}`);
  };

  // category
  let categoryArray = [
    "ALL",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const filtercato = (e) => {
    let category = e.target.innerText;

    if (category === "ALL") {
      setFilterCategory(product);
    } else {
      let filData = product.filter((ele) => {
        return ele.category === category;
      });

      setFilterCategory(filData);
    }
  };

  return (
    <>
      <div className="btun">
        <button
          onClick={() => {
            navigate("/adminprotal/addproduct");
          }}
        >
          Add Product
        </button>
      </div>

      <div className="category">
        {categoryArray.map((ele, index) => {
          return (
            <button key={index} onClick={filtercato}>
              {ele}
            </button>
          );
        })}
      </div>

      <div className="products">
        <div className="header">
          <h3>Products</h3>
        </div>

        <div className="cards">
          {filterCategory.map((elem, index) => {
            let { id, title, price, category, image, rating } = elem;

            let { rate, count } = rating || {};

            return (
              <div className="card" key={id || index}>
                <h5>{category}</h5>

                <div className="image">
                  <img src={image} alt={title} />
                </div>

                <h4>{title}</h4>

                <div className="rateandprice">
                  <div className="rate">{rate}</div>

                  <div className="price">RS. {Math.round(price * 92)}</div>
                </div>

                <button onClick={() => viewmore(id)}>View More</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
