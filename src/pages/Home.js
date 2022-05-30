import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="text-center">Welcome to the Redux toolkit store</h2>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
