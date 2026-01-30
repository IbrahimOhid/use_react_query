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
      <h1 className="text-2xl text-blue-500 mb-5">Product Details</h1>
      <div className="py-8">
        <div key={id} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className=" rounded-lg   mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product.thumbnail}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                Product Name
              </h2>
              <p className="text-gray-600  text-sm mb-4">
               {product.title}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">
                    Price: 
                  </span>
                  <span className="text-gray-600 ">
                     ${product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">
                    In Stock
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                <p className="text-gray-600  text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
