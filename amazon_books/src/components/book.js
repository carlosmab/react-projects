export const Book = ({id, author, title, imageSrc, getBook}) => {

  return (
    <article className='book'>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}