import React from 'react';
import ReactDOM from 'react-dom/client';
import { BooksList } from './components/books-list.js'

import './index.css';


const root = ReactDOM
  .createRoot(document.getElementById('root'));

root.render(
  <BooksList />
);



// const fontColor = '#617d98';
// const author = 'Amanda Gorman';
// const title = 'The hill we climb';
// const imageSrc = './images/book-1.jpg';

// const books = [
//   {
//     id: 1,
//     author: 'Amanda Gorman',
//     title: 'The hill we climb',
//     imageSrc: './images/book-1.jpg',
//   },
//   {
//     id: 2,
//     author: 'Sr. Seuss',
//     title: "Oh, the Places You'll Go!",
//     imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL900_SR900,600_.jpg',
//   }
// ];

// const BookList = () => {

//   const someValue = "random value to display"; 
//   const getBook = (id) => {
//     const book = books.find(book => book.id === id);
//     console.log(book);
//   }

//   return (
//     <section className='book-list'>
//       <EventExamples />
//       {/* <Book
//         author={author} title={title} imageSrc={imageSrc}
//       >
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus,</p> 
//       </Book> */}
//       {books.map((book) => {
//         // const {id, author, title, imageSrc} = book;
//         // return <Book key={id} author={author} title={title} imageSrc={imageSrc} />
//         return <Book {...book} key={book.id} getBook={getBook} />
//       })}    
//     </section>
//   )
// }

// const Book = ({id, author, title, imageSrc, getBook}) => {

//   return (
//     <article className='book'>
//       <img src={imageSrc} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={() => getBook(id)}>Click me</button>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }


// const EventExamples = () => {

//   const handleFormInput = (event) => {
//     console.log(event.target.value);
//   };

//   const handleButtonClick = (event) => {
//     console.log(event.target.value);
//   }
  
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     alert('Form Submitted');
//   }

//   return (
//     <section className='event-examples'>
//       <form onSubmit={handleFormSubmit}>
//         <h2>Typical form</h2>
//         <input 
//           type="text" 
//           placeholder="Enter text" 
//           style={{margin: '1rem 0'}}
//           onChange={handleFormInput}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   )
// }


// const Image = () => {
//   return <img src="./images/book-1.jpg" alt="he Hill We Climb" />
// }


// const Title = () => {
//   const inlineHeadlineStyle = {
//     color: fontColor,
//     fontSize: '1.25rem',
//     marginTop: '0.5rem',
//   }
//   return (
//     <h2 style={inlineHeadlineStyle}>
//       The Hill We Climb
//     </h2>
//   )
// }

// const Author = () => {
//   const inlineHeadlineStyle = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   }

//   return (
//     <h4 style={inlineHeadlineStyle}>  
//       Amanda Gorman
//     </h4>
//   )
// }




