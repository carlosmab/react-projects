export const Book = ({author, title, imageSrc}) => {

  return (
    <article className='book'>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}