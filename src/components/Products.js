import React, { useEffect, useState } from "react";
import { add } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProduct = () => {
      fetch("http://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchProduct();
  }, []);
  const handleAdd = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      dispatch(add(product));
    } else {
      alert("item is already in cart");
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border flex flex-col items-center p-4">
          <h1>{product.title}</h1>
          <img src={product.image} alt="img" className="w-24" />
          <span>{product.price} $</span>
          <br></br>
          <button
            className="border bg-slate-100"
            onClick={() => handleAdd(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
