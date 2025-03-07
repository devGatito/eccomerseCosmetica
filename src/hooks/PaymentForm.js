import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./index.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const priceFromUrl = searchParams.get("price");
    const nameFromUrl = searchParams.get("name");
    const quantityFromUrl = searchParams.get("quantity");
    if (priceFromUrl) setPrice(priceFromUrl);
    if (nameFromUrl) setProductName(decodeURIComponent(nameFromUrl));
    if (quantityFromUrl) setQuantity(quantityFromUrl);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(`Pago exitoso de $${price} por ${productName} (ficticio)`);
      console.log("PaymentMethod ID:", paymentMethod.id);
    }
  };

  return (
    <div className="payment-form-container">
      <div className="payment-card">
        <h2 className="payment-title">Pago para {productName}</h2>
        <p className="payment-total">Total a pagar: <strong>${price}</strong> por {quantity} unidad{quantity > 1 ? 'es' : ''}</p>
        
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="card-input-container">
            <label htmlFor="card-element" className="input-label">Información de pago</label>
            <CardElement className="card-element" id="card-element" />
          </div>
          
          <button type="submit" className="payment-button" disabled={!stripe}>
            Confirmar y pagar
          </button>
          
          <p className="payment-message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
