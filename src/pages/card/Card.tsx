import React from "react";
import { api } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { ICard } from "../../types";
import CardView from "../../components/CardView/CardView";

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
    <CardView data={data} />
    </div>
    </div>
  );
};

export default Card;
