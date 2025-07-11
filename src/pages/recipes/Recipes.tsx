import { useEffect, useState } from "react";
import { IRecipes } from "../../types";
import { api } from "../../api";

const Recipes = () => {
  const [data, setData] = useState<null | IRecipes[]>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    api
      .get("/recipes", {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      })
      .then((res) => setData(res.data.recipes))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 gap-[20px]"> 
        {
          data?.map((item: IRecipes) => (
            <div key={item.id}>
              <div>
                <img className="w-[200px]" src={item.image} alt="" />
                <p>{item.name}</p>
                <button className="bg-blue-500 p-[5px] w-full text-violet-50">buy</button>
              </div>

            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Recipes