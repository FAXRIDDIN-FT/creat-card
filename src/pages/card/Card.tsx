import React from "react";
import { api } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { ICard } from "../../types";

const getCard = async () => {
  const res = await api.get("/carts");
  return res?.data;
};

const Card = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["card"],
    queryFn: getCard,
  });

  return (
    <div>
    <div> 
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {data?.carts.map((cart) =>
          cart.products.map((product) => (
            <div key={product.id} className="border p-4 border-gray-300 " >
              <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2" />
              <div className="flex flex-1 mt-3">
              <p className="font-semibold">{product.title}</p>
              </div>
              <div className="flex mt-5">
              <button className="w-full bg-blue-500 text-white py-1 rounded">Buy</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default Card;
