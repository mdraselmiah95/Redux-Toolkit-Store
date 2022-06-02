import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    // };
    // fetchProducts();
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <>
      <div className="">
        <div className="row row-cols-md-4 g-3">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  alt=""
                  className="img-fluid p-5"
                  style={{ width: "300px", height: "300px" }}
                />
                <h5 className="py-3">{product.title}</h5>
                <h4 className="text-primary pb-3">${product.price}</h4>
                <button
                  className="btn btn-outline-success"
                  onClick={() => handleAdd(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
