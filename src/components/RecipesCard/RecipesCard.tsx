import React from "react";
import { Recipe } from "../../types";
import { useDispatch } from "react-redux";
const RecipesCard = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 gap-[20px]">
        {data?.map((item: Recipe) => (
          <div key={item.id}>
            <div>
              <img className="w-[200px]" src={item.image} alt="" />
              <p>{item.name}</p>
              <button
              onClick={() => dispatch({type: "recipe/toggleWishlistRecipe", payload: item})} 
              className="bg-blue-500 p-[5px] w-full text-violet-50">
                buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesCard;
