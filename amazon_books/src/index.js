import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const fontColor = '#617d98';

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
  const inlineHeadlineStyle = {
    color: fontColor,
    fontSize: '1.25rem',
    marginTop: '0.5rem',
  }
  return (
    <h2 style={inlineHeadlineStyle}>
      The Hill We Climb
    </h2>
  )
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


