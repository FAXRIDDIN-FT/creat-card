import { useEffect, useState } from "react";
import { Recipes as IRecipes, Recipe } from "../../types";
import { api } from "../../api";
import RecipesCard from "../../components/RecipesCard/RecipesCard";

const Recipes = () => {
  const [data, setData] = useState<Recipe[]>([]);
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

      <RecipesCard data={data}/>

    </div>
  )
}

export default Recipes