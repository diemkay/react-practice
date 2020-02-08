import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel({ person }) {
  const { street, city, state, zipCode } = person.address;
  return (
    <span className="address">
      {`${person.name}
       ${street}
       ${city}, ${state} ${zipCode}`}
    </span>
  );
}

function Stamp() {
  return (
    <div className="stamp">
      <span className="stamp-text">Some stamp</span>
    </div>
  );
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <div className="from-person">
        <AddressLabel person={fromPerson} />
      </div>
      <div className="to-person">
        <AddressLabel person={toPerson} />
      </div>
      <Stamp />
    </div>
  );
}

const toPerson = {
  name: 'Mrs. Receiver',
  address: {
    street: '123 Fake St.',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94101',
  },
};

const fromPerson = {
  name: 'Mr. Sender',
  address: {
    street: '123 Fake St.',
    city: 'Boston',
    state: 'MA',
    zipCode: '02118',
  },
};

ReactDOM.render(
  <Envelope fromPerson={fromPerson} toPerson={toPerson} />,
  document.getElementById('root')
);
