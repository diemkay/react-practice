import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

// It’s also good to follow the DRY (Don’t Repeat Yourself) principle. If you have an explicit object shape required in one place, for instance in Author, there’s little value in duplicating the shape in the parent Tweet component. If the shape of author changes some day, there will be two places to update code. Having that second check doesn’t buy you anything, and instead, could actually cost you time in the future.

// Tweet.propTypes = {
//   tweet: PropTypes.shape({
//     message: PropTypes.string,
//     gravatar: PropTypes.string,
//     author: PropTypes.shape({
//       handle: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//     likes: PropTypes.number,
//     retweets: PropTypes.number,
//     timestamp: PropTypes.string,
//   }).isRequired,
// };

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

Avatar.propTypes = {
  hash: PropTypes.string,
};

function Message({ text }) {
  return <div className="message">{text}</div>;
}

Message.propTypes = {
  message: PropTypes.string,
};

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string,
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count} </span>}
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number,
};

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button" />;

const testTweet = {
  message: 'Something about cats.',
  gravatar: 'd47dd963d01952cb219ff5bc09a764c0',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person',
  },
  likes: 30,
  retweets: 120,
  timestamp: '2016-07-30 21:24:37',
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById('root'));
