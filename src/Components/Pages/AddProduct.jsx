import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const  navigate = useNavigate()
    let [newproduct,setnewproduct] = useState(
    {
        id:"",
        title:"",
        price :"",
        description : "",
        category : "",
        image : "",
        rating : {
        rate :"", 
        count : ""
        }
    })



    let allcategories = ["men's clothing","jewelery","electronics","women's clothing"]
 
    
    let handleInput =(e)=>{
        let key = e.target.name
        let val = e.target.value
        // console.log(key,val)
        if(key === "rate" || key ==="count"){
          setnewproduct({
           ...newproduct,
           rating:{
             ...newproduct.rating,
           
            [key] : val
           }
          })
         }else{
           setnewproduct({
          ...newproduct,
          [key] : val
        })
       }
    }
      

     let handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from refreshing
    
    try {
      await axios.post(`http://localhost:4000/products`,
        {
           ...newproduct,
          price:Number(newproduct.price),
          rating:{
            ...newproduct.rating,
            rate:Number(newproduct.rating.rate),
            count:Number(newproduct.rating.count)
          }
        })
        navigate(`/adminportal/products`)
      toast.success("product is added")
       } catch (error) {
      toast.error(`product is not added: ${error}`)
    }
 
  };


  return (
    <>
      <div className="add-product">
       <h1>Add product</h1>
        <div className="foxbox">
          <div className="head">
              <button onClick={()=>navigate('/adminportal/products')}></button> 
          </div>
           <form>
            <div className="inputField">
              <input 
              type="text" 
              placeholder="Enter title" 
              onChange={handleInput} 
              name='title'
              value={newproduct.title}
              required
              />
              <input 
              type="text" 
              placeholder="Enter price"
               onChange={handleInput}
               name='price'
               value={newproduct.price}
                required
                />
              <input
               type="text" 
               placeholder="Enter Description"
                onChange={handleInput}
                name='description'
                value={newproduct.description}
                 required
                 />

             <span>select category</span>
              <select
               name="category"
                onChange={handleInput}
                 required
                 >  
                <option value={newproduct.category}>-----select category---</option>
                {allcategories.map((elem,index)=>{
                    return (<option key={index} 
                      value={elem}>
                        {elem}</option>
                    )
                })}
                
              </select>
              <input 
              type="text"
               placeholder="Enter Image URL"
                onChange={handleInput}
                name="image"
                value={newproduct.image}
                 required
                 />
              <input 
              type="text" 
              placeholder="Enter Rating" 
              onChange={handleInput} 
              name="rate"
              value={newproduct.rating.rate}
               required
              />
              
              
              <input 
              type="text" 
              placeholder="Enter Count" 
              onChange={handleInput} 
              name="count"
              value={newproduct.rating.count}
               required
              />
            </div>
           <div className="butn">
            <button onClick={handleSubmit}>Add Product</button>
          </div>

          </form>
        </div>
      </div>
    </>
  );
  
};

export default AddProduct;
