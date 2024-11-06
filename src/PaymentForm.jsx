// PaymentForm.jsx
import React, { useState } from 'react';
import './PaymentForm.css';

function PaymentForm() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardNumber.length === 16 && cvv.length === 3 && expiryDate) {
      alert('Pago realizado con éxito');
    } else {
      alert('Por favor, complete todos los campos correctamente');
    }
  };

  return (
    <div className="payment-form-container">
      <h2>Formulario de Pago</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="cardName">Nombre en la tarjeta</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Ejemplo: Juan Pérez"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Número de tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9101 1121"
            maxLength="16"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de expiración</label>
          <input
            type="month"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={saveCard}
              onChange={() => setSaveCard(!saveCard)}
            />
            Guardar tarjeta para futuros pagos
          </label>
        </div>

        <button type="submit" className="pay-button">Pagar</button>
      </form>
    </div>
  );
}

export default PaymentForm;
