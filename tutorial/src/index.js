import React from 'react';
import ReactDOM from 'react-dom/client';

const Greeting = () => {
  return (
    <> 
      <div>
        <h2>Hello people</h2>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>Hello world</h2>
      <input type="text" name="" id="" />
      <Person />
      <Description />
   </>
  );
};

const Person = () => {
  return (
    <h2>Person Name</h2>  
  );
}

const Description = () => {
  return (
    <p>Person description</p>
  );
}


// React.createElement(Greeting);
// const Greeting = () => React.createElement('h2', {}, 'My First Component');

const root = ReactDOM
  .createRoot(document.getElementById('root'));

root.render(
  <Greeting />
);


