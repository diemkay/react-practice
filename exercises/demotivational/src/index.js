import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
    <img className="image" src="https://picsum.photos/500/380" alt="iets random"></img>
  );
};

const BigWord = ({ word }) => <div className="big-word">{word}</div>;

const Tagline = ({ phrase }) => <div className="tagline">{phrase}</div>;

ReactDOM.render(<Poster />, document.getElementById('root'));
