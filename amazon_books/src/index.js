import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return <section className='book-list'>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/91QclGg4BjL._AC_UL900_SR900,600_.jpg" alt="" />
}

const Title = () => {
  return <h2>The Hill We Climb</h2>
}

const Author = () => {
  return <h4>Amanda Gorman</h4>
}


const root = ReactDOM
  .createRoot(document.getElementById('root'));

root.render(
  <BookList />
);


