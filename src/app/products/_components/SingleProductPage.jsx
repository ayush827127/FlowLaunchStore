import React from 'react';

const SingleProductPage = ({ ProductDetail }) => {
  return (
    <div className="w-[400px] md:max-w-4xl md:w-full mx-auto px-2 sm:px-4 py-4 sm:py-8">
      {ProductDetail && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className=" w-40 md:w-1/2 sm:w-full p-2 sm:p-4 items-center justify-center mx-auto">
              <img src={ProductDetail.image} alt={ProductDetail.title} className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 sm:w-full p-2 sm:p-4">
              <h2 className="text-3xl font-semibold mb-2">{ProductDetail.title}</h2>
              <p className="text-gray-700 mb-4">{ProductDetail.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-gray-700">Category: {ProductDetail.category}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-gray-700">Price: ${ProductDetail.price}</span>
              </div>
              <div className="flex items-center mb-4">
                {ProductDetail.rating && (
                  <span className="text-gray-700">Rating: {ProductDetail.rating.rate}/5 ({ProductDetail.rating.count} reviews)</span>
                )}
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
