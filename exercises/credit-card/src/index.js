import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Card({ cardInfo }) {
  const { name, bank, number, expiryDate } = cardInfo;
  return (
    <div className="credit-card">
      <BankName bankName={bank} />
      <div className="personal-details">
        <Number cardNumber={number} />
        <ExpiryDate validThruDate={expiryDate} />
        <CardHolder cardHolder={name} />
      </div>
    </div>
  );
}

function BankName({ bankName }) {
  return <div className="bank-name">{bankName}</div>;
}

function Number({ cardNumber }) {
  return (
    <div className="card-number">
      {cardNumber}
      <br />
      <span className="pin-number">1234</span>
    </div>
  );
}

function ExpiryDate({ validThruDate }) {
  return (
    <div className="expiry-date">
      <div className="valid-thru">
        Valid <br />
        Thru
      </div>
      <div className="valid-to"> {validThruDate}</div>
    </div>
  );
}

function CardHolder({ cardHolder }) {
  return <div className="cardholder-name">{cardHolder}</div>;
}

const sampleClient = {
  name: 'Andreea Nastase',
  bank: 'Chase',
  number: '1234 5678 9012 3456',
  expiryDate: '08/20',
};

ReactDOM.render(<Card cardInfo={sampleClient} />, document.getElementById('root'));
