import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div className="flex justify-between">
      <span className="logo">REDUX STORE</span>
      <ul className="flex gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
      <span className="cartCount">cart items:{items.length}</span>
    </div>
  );
};

export default Navbar;
