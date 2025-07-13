import React, { useEffect, useState } from "react";
import {  Praduct } from "../../types";
import { api } from "../../api";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

const Products = () => {
  const [data, setData] = useState<null | Praduct>(null);
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
   
      <ProductsCard data={data} />
      </div>
  );
};

export default Products;
