import { useDispatch } from "react-redux";

const CardView = ({ data }) => {
  const dispatch = useDispatch();

  if (!data || !data.carts) return <div>No data found</div>;

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {data.carts.map((cart: any) =>
        cart.products.map((product) => (
          <div key={product.id} className="border p-4 border-gray-300">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover mb-2"
            />
            <div className="flex flex-1 mt-3">
              <p className="font-semibold">{product.title}</p>
            </div>
            <div className="flex mt-5">
              <button
                onClick={() =>
                  dispatch({
                    type: "product/toggleWishlistProduct",
                    payload: product,
                  })
                }
                className="w-full bg-blue-500 text-white py-1 rounded"
              >
                Buy
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardView;
