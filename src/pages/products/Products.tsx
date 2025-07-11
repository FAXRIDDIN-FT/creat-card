import React, { useEffect, useState } from "react";
import { IPraducts } from "../../types";
import { api } from "../../api";

const Products = () => {
  const [data, setData] = useState<null | IPraducts[]>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("/products", {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      })
      .then((res) => setData(res.data.products))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading && <p>Yuklanmoqda...</p>}
      {error && <p>Xatolik: {error.message}</p>}
      <div className="container mx-auto grid grid-cols-4">
          {data?.map((item: IPraducts) => (
            <div key={item.id} className="p-[10px]" >
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
              <button className="bg-blue-500 p-[5px] w-full text-violet-50">buy</button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Products;
