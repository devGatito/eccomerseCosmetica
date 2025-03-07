import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useAPI";
import "./index.scss";
import FooterComponent from "../footer";
import Navbar from "../navbar";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handlePayment = () => {
    const totalPrice = quantity * product.price;
    navigate(
      `/payment?price=${totalPrice}&name=${encodeURIComponent(
        product.name
      )}&quantity=${quantity}`
    );
  };

  return (
    <>
      <Navbar theme={"dark"} isMobile={isMobile} />
      <section className="product-detail">
        <div className="product-left">
          <h1>{product.name}</h1>
          <hr className="mb" />
          <p>${product.price}</p>

          <div>
            <input
              className="select"
              type="number"
              min="1"
              placeholder="0"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <button onClick={handlePayment}>Pagar</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
          <p>
            <strong>Descripción:</strong> {product.description}
          </p>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
          <h3>Beneficios:</h3>
          <ul>
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="product-right">
          <img src={product.image} alt={product.name} />
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default ProductDetail;