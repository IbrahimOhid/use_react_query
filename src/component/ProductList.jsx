import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const allProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey}`);
  return response.data;
};

const ProductList = () => {
  const {
    data: products,
    loading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: allProducts,
    retry: false,
  });

  if (loading)
    return <div className="p-12">Fetching Loading Products Data...</div>;
  if (error) return <div className="p-12">{error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8  mx-auto p-12">
        {products &&
          products.map((product) => {
            const { id, title, description, price, thumbnail } = product;
            return (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={thumbnail}
                    alt="Product Image"
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                    {id}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-green-600">
                      ${price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                      Show Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
