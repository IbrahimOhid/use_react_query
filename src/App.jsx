import React from "react";
import ProductList from "./component/ProductList";
import ProductDetails from "./component/ProductDetails";
import { Outlet } from "react-router-dom";
import Root from "./layout/Root";

const App = () => {
  return (
    <div>
      <Root />
    </div>
  );
};

export default App;
