import React from 'react'
import ProductList from '../component/ProductList'
import ProductDetails from '../component/ProductDetails'
import AddProduct from '../component/AddProduct'

const Root = () => {
  return (
    <div  className="grid grid-cols-3">
        <AddProduct/>
        <ProductList/>
        <ProductDetails id={5}/>
    </div>
  )
}

export default Root