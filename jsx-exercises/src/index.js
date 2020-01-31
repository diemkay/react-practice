import React from 'react';
import ReactDOM from 'react-dom';

// function Book() {
//   return (
//     <>
//       <div className='book'>
//         <div className='title'> The Title</div>
//       </div>
//       <div className='author'>The Author</div>
//       <ul className='stats'>
//         <li className='rating'>5 stars</li>
//         <li className='isbn'>12-345678-910</li>
//       </ul>
//       {/* Leading and trailing spaces are removed, so are newlines */}
//       <div>&nbsp;Non-breaking &nbsp;Space&nbsp;</div>
//     </>
//   );
// }

// The same but with React.createELement
function BookWithOldSyntax() {
  return React.createElement(
    'div',
    { className: 'book' },
    React.createElement('div', { className: 'title' }, 'The Title'),
    React.createElement('div', { className: 'author' }, 'The Author'),
    React.createElement(
      'ul',
      { className: 'stats' },
      React.createElement('li', { className: 'rating' }, '5 stars'),
      React.createElement('li', { className: 'isbn' }, '12-345678-910')
    )
  );
}

ReactDOM.render(<BookWithOldSyntax />, document.getElementById('root'));
