import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`,
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
  
  const {
    data: product,
    loading,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: allProduct,
  });
  if (loading) return <div>Fetching Products Details...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="p-12">
      <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Product Details
        </div>
        <div key={id} className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2">
            {product && (
              <div className="md:flex-1 px-4">
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt="Product Image"
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                    {id}
                  </span>
                </div>
              </div>
            )}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                Product Name
              </h2>
              {product && (
                <p className="text-gray-600  text-sm mb-4">{product.title}</p>
              )}
              <div className="flex mb-4">
                {product && (
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 ">Price:</span>
                    <span className="text-gray-600 ">${product.price}</span>
                  </div>
                )}
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">In Stock</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                {product && <p className="text-gray-600  text-sm mt-2">
                  {product.description}
                </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
