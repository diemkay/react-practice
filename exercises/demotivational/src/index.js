import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo512.png';

const DemotivateYourself = () => {
  return (
    <Poster
      word="React"
      phrase="If You Can't Learn to Do it Well, At Least Learn to Enjoy Doing it Badly"
    />
  );
};

const Poster = ({ word, phrase }) => {
  return (
    <div className="frame">
      <Image />
      <BigWord word={word} />
      <Tagline phrase={phrase} />
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

const BigWord = ({ word }) => {
  const smallWorld = word.toUpperCase();
  const firstLetter = smallWorld.charAt(0);
  const lastLetter = smallWorld.charAt(smallWorld.length - 1);
  const middle = smallWorld.slice(1, -1);

  return (
    <div className="big-word">
      <span className="border-letter">{firstLetter}</span>
      <span className="word-middle">{middle}</span>
      <span className="border-letter">{lastLetter}</span>
    </div>
  );
};

const Tagline = ({ phrase }) => <div className="tagline">{phrase}</div>;

ReactDOM.render(<DemotivateYourself />, document.getElementById('root'));
