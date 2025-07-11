import React from "react";
import { api } from "../../api";
import { useQuery } from "@tanstack/react-query";
const getPosts = async () => {
  const res = await api.get("/posts");
  return res?.data;
};
const Posts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-4 gap-[20px]">
        {data?.posts.map((item: any) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button className="bg-blue-500 p-[5px] w-full text-violet-50">buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
