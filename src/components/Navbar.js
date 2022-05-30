import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      className="navbar "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>

        <button type="button" class="btn btn-primary ms-2">
          Cart items:
          <span class="badge text-bg-secondary">{items.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
