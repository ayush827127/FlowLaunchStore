"use client";
import React, { useEffect, useState } from "react";
import SingleProductPage from "../_components/SingleProductPage";

const ProductPage = ({ params }) => {
  const [ProductDetail, setProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.ProductId)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetail(data);
        setIsLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between md:px-24  mt-[130px] md:mt-20">
      {isLoading ? ( // Render loading animation if loading is true
        <div className="animate-pulse flex flex-wrap justify-center mt-40 md:mt-20">
          {[...Array(1)].map((_, index) => ( // Create placeholder cards for loading animation
            <div key={index} className="bg-gray-500 w-64 h-64 rounded-lg m-2 mt-10 items-center"></div>
          ))}
        </div>
      ) : (
        <SingleProductPage ProductDetail={ProductDetail} />
      )}
    </div>
  );
};

export default ProductPage;
