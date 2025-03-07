import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useAPI";
import config from "../../api/schema.json";
import "./style.scss";

const Products = () => {
  const { HairCareProducts } = config.schema;
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  return (
    <section className="products">
      <div>
        <h1>{HairCareProducts.title}</h1>
        <h3>{HairCareProducts.subtitle}</h3>
        <hr className="mz" />
        <div className="products__container">
          {loading && <p>Cargando productos...</p>}
          {error && <p>Error: {error}</p>}

          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
            </div>
          ))}
          <Link to={"/products"}>
          <button>mas productos</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
