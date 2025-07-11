import { use, useEffect, useState } from "react"
import { IUser } from "../../types";
import { api } from "../../api";

const User = () => {
  const [data, setData] = useState<null | IUser[]>(null);
  const [error,setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    api
      .get("/users", {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      })
      .then((res) => setData(res.data.users))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  },[])
  return (
    <div>
      
      <div className="container mx-auto grid grid-cols-4">
        {
          data?.map((item: IUser) => (
            <div key={item.id} className="p-[10px]">
              <img src={item.firstName} alt="" />
              <p>{item.firstName}</p>
              <p>{item.email}</p>
              <button className="bg-blue-500 p-[5px] w-full text-violet-50">buy</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default User