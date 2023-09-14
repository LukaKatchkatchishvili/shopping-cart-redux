import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const sumPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="border flex justify-between items-center p-4 w-[50%]"
          >
            <img src={product.image} alt="img" className="w-24" />
            <h1>{product.title}</h1>
            <span>{product.price} $</span>
            <br></br>
            <button
              className="border bg-slate-100"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {products.length > 0 ? (
        <div className="flex flex-col items-center gap-5">
          <h1>Price: {sumPrice} $</h1>
          <button
            className="border py-2 px-4 w-24 hover:bg-slate-200 transition-all"
            onClick={() => alert("Success!")}
          >
            Buy now
          </button>
        </div>
      ) : (
        <h1 className="flex justify-center text-2xl">Cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
