import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import config from "../../api/schema.json";
import { FaShoppingBag, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./style.scss";
import useProducts from "../../hooks/useAPI";

const Navbar = ({ theme, isMobile }) => {
  const { navbar } = config.schema;
  const { cart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]); 

  const { products, loading, error } = useProducts();

  let timeoutId;

  const handleSearch = () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }, 500);
  };

  
  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setFilteredProducts([]); 
    }

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    navigate(`/payment?price=${totalPrice}&name=Carrito&quantity=${cart.length}`);
  };

  return (
    <nav className={`navbar ${theme === "light" ? "light-theme" : "dark-theme"} ${isMobile ? "navbar-mobile" : ""}`}>
      <Link to={"/"}>
        <img src={navbar.logo} alt="logo" className="navbar_logo" />
      </Link>

      <FaShoppingBag size={24} className="cart_icon desktop" onClick={() => setCartOpen(true)} />
      <FaBars className="menu_icon" size={24} onClick={() => setMenuOpen(true)} />

      <div className={`navbar_slider ${menuOpen ? "open" : ""}`}>
        <FaTimes className="close_icon" size={24} onClick={() => setMenuOpen(false)} />
        <ul className="navbar_links">
          <Link to="/s" onClick={() => setMenuOpen(false)}><li>{navbar.text[0]}</li></Link>
          <Link to="/" onClick={() => setMenuOpen(false)}><li>{navbar.text[1]}</li></Link>
          <Link to="/" onClick={() => setMenuOpen(false)}><li>{navbar.text[2]}</li></Link>
        </ul>
        <div className="navbar_icons">
          <FaUser size={24} />
          <FaSearch size={24} onClick={() => setSearchOpen(true)} />
        </div>
      </div>

      {searchOpen && (
        <div className="search_modal">
          <div className="search_content">
            <FaTimes className="close_icon" size={24} onClick={() => setSearchOpen(false)} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <ul className="search_results">
              {loading ? <li>Cargando productos...</li> : error ? <li>{error}</li> :
                filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <li key={product.id}>
                      <Link to={`/product/${product.id}`} onClick={() => setSearchOpen(false)}>
                        {product.name}  
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No se encontraron productos</li>
                )}
            </ul>
          </div>
        </div>
      )}

      <div className={`cart_slider ${cartOpen ? "open" : ""}`}>
        <FaTimes className="close_icon" size={24} onClick={() => setCartOpen(false)} />
        <h2>Carrito de Compras</h2>
        <ul className="cart_items">
          {cart.length > 0 ? (
            cart.map((product) => (
              <li key={product.id}>{product.name} - ${product.price} x {product.quantity}</li>
            ))
          ) : (
            <li>El carrito está vacío</li>
          )}
        </ul>
        {cart.length > 0 && (
          <button className="checkout_button" onClick={handleCheckout}>
            Pagar ($ {cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)})
          </button>
        )}
      </div>

      <ul className="navbar_links_desktop">
        <Link to="/s"><li>{navbar.text[0]}</li></Link>
        <Link to="/"><li>{navbar.text[1]}</li></Link>
        <Link to="/"><li>{navbar.text[2]}</li></Link>
        <div className="navbar_icons">
          <FaUser size={24} />
          <FaShoppingBag size={24} className="cart_icon" onClick={() => setCartOpen(true)} />
          <FaSearch size={24} onClick={() => setSearchOpen(true)} />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
