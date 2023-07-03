import { books } from "../data/books.js";
import { EventExamples } from "./event-examples.js";
import { Book } from "./book.js";

const BooksList = () => {

  const someValue = "random value to display"; 
  const getBook = (id) => {
    const book = books.find(book => book.id === id);
    console.log(book);
  }

  return (
    <section className='book-list'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}    
    </section>
  )
}