import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const ErrorBox = () => (
  <div className="alert-danger">
    <h1>Hello world</h1>
  </div>
);

ReactDOM.render(<ErrorBox />, document.getElementById('root'));
