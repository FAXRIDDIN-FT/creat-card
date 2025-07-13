import React from "react";
import {  Praduct } from "../../types";
import { useDispatch } from "react-redux";

const ProductsCard = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4">
        {data?.map((item: Praduct) => (
          <div key={item.id} className="p-[10px]">
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
            <button 
            onClick={() => dispatch({type: "product/toggleWishlistProduct", payload: item})}
            className="bg-blue-500 p-[5px] w-full text-violet-50">
              buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
