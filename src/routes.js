import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductList from "./pages/Products";
import PaymentForm from "./hooks/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProductDetail from "./components/ProductDetail/productDetail";
import { CartProvider } from "./context/CartContext";

const stripePromise = loadStripe("pk_test_51O30vVFc4iGu3TjEWAyssF61L8PZjeQFOQ7mdN75sQvnP7m9c7rzKszKokU3wll0p5aBT3904xDD0IiDd0I1trbG008Ma2IiaS");

const RoutesConfig = () => {
  return (
    <BrowserRouter>
     <CartProvider>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </Elements>
      </CartProvider>
    </BrowserRouter>
  );
};

export default RoutesConfig;
