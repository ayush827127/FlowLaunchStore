"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleRows, setVisibleRows] = useState(2);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateVisibleCards = () => {
    const cardsPerRow = 6;
    const totalVisibleCards = visibleRows * cardsPerRow;
    return Math.min(totalVisibleCards, filteredProducts.length); // Use filtered products for calculation
  };

  const handleSeeMore = () => {
    setVisibleRows((prevRows) => prevRows + 1);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="mb-4">
        {/* Search input */}
        <div className="flex items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered lg:w-[580px] md:w-[300px] w-[250px]"
            />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="animate-pulse flex flex-wrap justify-center mt-40 md:mt-20">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-500 w-64 h-64 rounded-lg m-2"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredProducts.slice(0, calculateVisibleCards()).map((product) => (
            <Link
              href={"/products/" + product.id}
              key={product.id}
              className="bg-white rounded-lg shadow-lg flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="flex-grow p-4">
                <p className="text-lg font-semibold truncate">
                  {product.title}
                </p>
                <p className="text-gray-700 text-sm">{product.category}</p>
              </div>
              <div className="px-4 p-1">
                <p className="text-gray-900 text-sm font-semibold">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {!loading && visibleRows * 6 < filteredProducts.length && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSeeMore}
            className="text-green-500 font-semibold text-xl px-4 rounded"
          >
            See More Products &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
