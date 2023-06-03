import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const fontColor = '#617d98';
const author = 'Amanda Gorman';
const title = 'The Lord of the Rings';
const imageSrc = './images/book-1.jpg';



const BookList = () => {

  const books = [
    {
      author: 'Amanda Gorman',
      title: 'The Lord of the Rings',
      imageSrc: './images/book-1.jpg',
    },
    {
      author: 'J.K. Rowling',
      title: 'Harry Potter',
      imageSrc: './images/book-1.jpg',
    }
  ];

  return (
    <section className='book-list'>
      {books.map((book) => (
        <Book key={book.title} author={book.author} title={book.title} imageSrc={book.imageSrc} />
      ))}    
    </section>
  )
}

const Book = ({author, title, imageSrc}) => {
    return (
    <article className='book'>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
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


