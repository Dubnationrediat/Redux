import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './Product.css'
function ProductComponent() {
const products = useSelector((state)=>state.allProducts.products);
const renderList = products.map((product)=>{
const {id,title,image,price,category}= product
    return(
<div className="mainContainer" key={id}>
  <Link to={`/product/${id}`}>
 <div className="innerContainer">
    <div className="secondContainer">
        <div className="images">
<img src={image} alt={title}/>
        </div>
        <div className="texting">
            <div className="">{title}</div>
            <div className=""> ${price}</div>
            <div className="">{category}</div>
        </div>
    </div>
 </div>
 </Link>
        
        </div>
    )
})
  return (
<>
{renderList}
</>
  )
}

export default ProductComponent