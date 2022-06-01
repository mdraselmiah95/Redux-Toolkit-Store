import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

//cart
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img
              src={product.image}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(product.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
              <span className="text-center ms-2"> Remove</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
