import { books } from "../data/books.js";
import { EventExamples } from "./event-examples.js";
import { Book } from "./book.js";

export const BooksList = () => {

  const someValue = "random value to display"; 
  return (
    <section className='book-list'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}    
    </section>
  )
}