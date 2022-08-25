import React from "react";
import {Link} from "react-router-dom"

function Product({ product }) {
  return (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="h-72 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            className="p-8 rounded-t-lg"
            src={product.image}
            alt="product image"
          />
        </Link>
      </div>

      <div className="px-5 pb-5">
        <Link to={`/product/${product.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5 text-gray-300">
          {product.description.substring(0,150)}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
