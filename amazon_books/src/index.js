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
  return <img src="./images/book-1.jpg" alt="he Hill We Climb" />
}

const Title = () => {
  return <h2>The Hill We Climb</h2>
}

const Author = () => {
  const inlineHeadlineStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }

  return (
    <h4 style={inlineHeadlineStyle}>  
      Amanda Gorman
    </h4>
  )
}


const root = ReactDOM
  .createRoot(document.getElementById('root'));

root.render(
  <BookList />
);


