import React from "react";
import ProductList from "./component/ProductList";
import ProductDetails from "./component/ProductDetails";



const App = () => {

  return (
    <div className="flex ml-2">
      <ProductList />
      <ProductDetails id={1}/>
    </div>
  );
};

export default App;
