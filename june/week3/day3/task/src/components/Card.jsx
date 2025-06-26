import React from "react";

function Card({ product }) {
  return (
    <div className="card w-[24rem] border rounded-xl p-4 border-gray-500 hover:-translate-y-2 transition duration-300  hover:shadow-[#8a8a8a] hover:shadow-[25px_25px]">
      <div className="">
        <img
          src={product.image}
          alt=""
          className="h-[20rem] w-full object-cover ms-2"
        />
      </div>

      <hr className="text-gray-400 mb-2 w-[50%] mx-auto" />
      <div className="text-2xl font-bold text-center">{product.title}</div>
      <div className="text-center my-0.5">{product.description}</div>
      <div className="text-center font-semibold">
        Price: {product.price.toLocaleString("en-IN")} &#8377;
      </div>
      <div className="flex justify-center">
        <button className="bg-yellow-500 rounded border-xl my-2 px-4 py-2 font-semibold hover:bg-yellow-600 transition duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
