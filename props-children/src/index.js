import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
  return (
    <div>
      {' '}
      <ErrorBox>The world is ending</ErrorBox>
      <FirstChildOnly>
        <div>Bananas</div>
        <div>Grapes</div>
        <div>Blueberries</div>
      </FirstChildOnly>
      <LastChildOnly>
        <div>Bananas</div>
        <div>Grapes</div>
        <div>Blueberries</div>
      </LastChildOnly>
      <Head number={3}>
        <div className="head">Bananas</div>
        <div className="head">Grapes</div>
        <div className="head">Blueberries</div>
        <div className="head">Apples</div>
        <div className="head">Oranges</div>
        <div className="head">Kiwi</div>
        <div className="head">Watermelon</div>
        <div className="head">Papaya</div>
        <div className="head">Mango</div>
      </Head>
      <Tail number={5}>
        <div className="tail">Bananas</div>
        <div className="tail">Grapes</div>
        <div className="tail">Blueberries</div>
        <div className="tail">Apples</div>
        <div className="tail">Oranges</div>
        <div className="tail">Kiwi</div>
        <div className="tail">Watermelon</div>
        <div className="tail">Papaya</div>
        <div className="tail">Mango</div>
      </Tail>
      <Dialog>
        <Title>A Title</Title>
        <Body>Some Very Important Message</Body>
        <Footer>Close</Footer>
      </Dialog>
    </div>
  );
};

const ErrorBox = ({ children }) => <div className="alert alert-danger">{children}</div>;

const FirstChildOnly = ({ children }) => {
  let items = React.Children.toArray(children);
  return <div>{items[0]}</div>;
};

const LastChildOnly = ({ children }) => {
  let items = React.Children.toArray(children);
  return <div>{items[items.length - 1]}</div>;
};

// Create a component named Head that takes a number prop, and renders the first [number] children. e.g. If you pass number=3, and 7 child elements, it will render the first 3.

const Head = ({ children, number }) => {
  let items = React.Children.toArray(children);
  let newArray = items.slice(0, number);

  return <div>{newArray}</div>;
};

const Tail = ({ children, number }) => {
  //   let items = React.Children.toArray(children);
  //   let newArray = items.slice(-number);
  //   return <div>{newArray}</div>;

  return React.Children.toArray(children).slice(-number);
};

// 3. Create a Dialog component which accepts as children Title, Body,and Footer components, all optional. Dialog should verify that all of its children are one of these types

const Dialog = ({ children }) => {
  let items = React.Children.toArray(children);
  const isValid = items.every(
    item =>
      item.type.name === 'Title' ||
      item.type.name === 'Body' ||
      item.type.name === 'Footer'
    // ['Title', 'Body', 'Footer'].includes(item.type.name)
  );

  if (!isValid) {
    throw new Error('Dialog can only contain Title, Body or Footer components');
  }

  return (
    <div className="modal-dialog" role="dialog">
      <div class="modal-content">{children}</div>
    </div>
  );
};

const Title = ({ children }) => (
  <div className="modal-header">
    <h5 className="modal-title">{children}</h5>
  </div>
);

const Body = ({ children }) => (
  <div className="modal-body">
    <p>{children}</p>
  </div>
);

const Footer = ({ children }) => (
  <div className="modal-footer">
    <button type="button" className="btn btn-primary" data-dismiss="modal">
      {children}
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
