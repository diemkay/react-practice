import React from 'react';
import ReactDOM from 'react-dom';

// function Book() {
//   return (
//     <>
//       <div className="book">
//         <div className="title"> The Title</div>
//       </div>
//       <div className="author">The Author</div>
//       <ul className="stats">
//         <li className="rating">5 stars</li>
//         <li className="isbn">12-345678-910</li>
//       </ul>
//       {/* Leading and trailing spaces are removed, so are newlines */}
//       <div>&nbsp;Non-breaking &nbsp;Space&nbsp;</div>
//     </>
//   );
// }

// Make a copy and replace the JSX with calls to React.createElement. The output should be identical.
// function BookWithOldSyntax() {
//   return React.createElement(
//     'div',
//     { className: 'book' },
//     React.createElement('div', { className: 'title' }, 'The Title'),
//     React.createElement('div', { className: 'author' }, 'The Author'),
//     React.createElement(
//       'ul',
//       { className: 'stats' },
//       React.createElement('li', { className: 'rating' }, '5 stars'),
//       React.createElement('li', { className: 'isbn' }, '12-345678-910')
//     )
//   );
// }

// Return the appropriate JSX from this component so that when username is undefined or null, it renders “Not logged in”. When username is a string, render “Hello, username”.

// function Greeting() {
//   let username = 'root';
//   //   let username = undefined;
//   //   let username = null;
//   //   let username = false;
//   return <span> {typeof username === "string" ? `Hello ${username}` : 'Not logged in'} </span>;
// }

// Boundary exploration

// Name a component with lowercase:  ""'Greeting' is not defined"
// Return 2 elements at once: "JSX expressions must have one parent element.""
// Use 'return' inside JSX: "Expression expected.""
// What about a function call like alert('hi')? Does it halt rendering? Alerts first, only renders the value from return once dismissed
// Try putting a quoted string inside JSX. Does it strip out the quotes? No

// Tables
// 1. Create a component called Table that renders a table with 1 row and 3 columns and any data you like. Open the browser console and make sure there are no warnings.Then, create a component called Data that renders the 3 columns, and replace the 3 < td > s with the < Data /> component.

// 2. Then, create a component called Data that renders the 3 columns, and replace the 3 < td > s with the < Data /> component.

function Data() {
  return (
    <tr>
      <td>100</td>
      <td>110</td>
      <td>120</td>
    </tr>
  );
}
function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>January</th>
          <th>February</th>
          <th>March</th>
        </tr>
      </thead>
      <tbody>
        <Data />
      </tbody>
    </table>
  );
}

ReactDOM.render(<Table />, document.getElementById('root'));
