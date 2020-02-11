import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo512.png';

const Poster = () => {
  return (
    <div className="frame">
      <Image />
      <BigWord word="React" />
      <Tagline phrase="If You Can't Learn to Do it Well, At Least Learn to Enjoy Doing it Badly" />
    </div>
  );
};

const Image = () => {
  return (
    <div className="image-frame">
      <img className="image" src={logo} alt="react"></img>
    </div>
  );
};

const BigWord = ({ word }) => <div className="big-word">{word}</div>;

const Tagline = ({ phrase }) => <div className="tagline">{phrase}</div>;

ReactDOM.render(<Poster />, document.getElementById('root'));
