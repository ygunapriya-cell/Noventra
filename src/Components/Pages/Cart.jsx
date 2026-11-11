import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const [Product, setProduct] = useState([]);
  const apifetch = async () => {
    let api = await axios.get("http://localhost:4000/cart");
    setProduct(api.data);
  };
  useEffect(() => {
    apifetch();
  }, []);
  let total = 0;
  

  // delete the product

  const del = async (id) => {
    try {
      let bool = confirm(`Do you want to Delete these products`)
      if(bool){
      await axios.delete(`http://localhost:4000/cart/${id}`)
      toast.success("product deleted")
      setTimeout(() => {
        apifetch()  
      }, 800);
      }else{
        toast.error('Product is not deleted')

      }
    } catch (error) {
      toast.error(`${error} is the code`)
    }
  };
  return (
    <div className="cart">
      <h1>Selected items</h1>

      <table>
        <thead>
          <tr>
            <td>Sino</td>
            <td>Title</td>
            <td>Image</td>
            <td>Category</td>
            <td>Price</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {Product.map((elem, index) => {
            let { id, title, price, category, image, rating } = elem;
            total += Math.round(price * 95);
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td className="image">
                  <img src={image} alt="" />
                </td>
                <td>{category}</td>
                <td>{Math.round(price * 95)}</td>
                <td>
                  <button onClick={()=>del(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Total : {total}</h3>
    </div>
  );
};

export default Cart;
