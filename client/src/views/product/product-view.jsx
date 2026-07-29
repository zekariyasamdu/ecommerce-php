import "./product-view.css";
import { useEffect, useState } from "react";
import Header from "../../components/header/header.jsx";
import Promotion from "../../components/promotion/promotion.jsx";
import ProductItem from "../../components/product-item/product-item.jsx";
import Search from "../../components/search/search.jsx";
import { QUERY } from "../../services/product-services.js";

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    QUERY.getProducts(search)
      .then((data) => {
        if (active) {
          setProducts(data);
          setError("");
        }
      })
      .catch((err) => {
        if (active) setError(err.message || "Could not load products.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [search]);

  return (
    <div className="product-layout">
      <Header />
      <Promotion />
      <Search onSearch={setSearch} />
      <div className="product-container">
        {loading && <p className="product-status">Loading products…</p>}
        {!loading && error && <p className="product-status is-error">{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className="product-status">
            {search ? `No products match “${search}”.` : "No products yet."}
          </p>
        )}
        {!loading &&
          !error &&
          products.map((item) => <ProductItem key={item.id} product={item} />)}
      </div>
    </div>
  );
};

export default ProductScreen;
