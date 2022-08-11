import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProduct} from '../Redux/actions/productActions.js'
import axios from 'axios'



function ProductListing() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();

const fetchProduct = async ()=>{
  const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{console.log('err',err)})
  dispatch(setProduct(response.data))
};


useEffect(() => {
  fetchProduct()
}, []);
console.log(products)
  return (
    <div className='ui grid container'>
       <ProductComponent/>
    </div>
  )
}

export default ProductListing