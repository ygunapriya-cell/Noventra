import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './App.css'
const Product = () => {
  
  let [product,setproduct] = useState([])
  let fetchapi = async () =>{
    let apirResp = await axios.get("http://localhost:4000/products")
    setproduct(apirResp.data)    
  }
  useEffect (()=>{
   fetchapi()
  },[])

  const navigate = useNavigate()
  const viewmore = (productid) =>{
    navigate(`/adminprotal/viewmore/${productid}`)
    
  }

  //categaery
 const [filterCategory, setFilterCategory] = useState(product);
 let categoryArray = [ "ALL","men's clothing","jewelery","electronics","women's clothing"]
 let filtercategory = (e) =>{
  let categoryName = e.target.innerText
  if(categoryName == 'All'){
    setFilterCategory(product)

  }else {
    let res = product.filter((elem)=>{
      return elem.category === categoryName
    })
    setFilterCategory(res)
  }

 }
 useEffect(()=>{
  setFilterCategory(product)
 },[product])
  // console.log(Product)
  return (
    <>
     <div className="btun">
        <button
          onClick={() => {
            navigate("/adminportal/addproduct");
          }}
        >
          Add Product
        </button>
      </div>
       <div className="category">
          {categoryArray.map((ele,index)=>{
            return(
              <button key={index} onClick={filtercategory}>{ele}</button>
            )
          })}
      </div>


       <div className="products">+
          <div className="header">
          <div className="heading">Products</div>
          </div>

          <div className="cards">
            {product.map((elem,index)=>{
              let {id,title,price,category,image,rating} = elem
              return (
                <div className="card" key={index}>
                  <div className="cat">{category}</div>
                  <img src={image} alt="no image" />
                  <div className="title">{title}</div>
                  <div className="box">
                    <div className="rating">{rating?.rate}⭐</div>
                    <div className="price">{Math.floor(price*95.12)}.00</div>
                  </div>
                  <button onClick={()=>viewmore(id)}>
                    View More
                  </button>
                  </div>
              )

            })}
          </div>
        </div>
      
    </>
  )
}

export default Product
