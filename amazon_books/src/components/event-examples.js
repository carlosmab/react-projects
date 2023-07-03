export const EventExamples = () => {

  const handleFormInput = (event) => {
    console.log(event.target.value);
  };

  const handleButtonClick = (event) => {
    console.log(event.target.value);
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted');
  }

  return (
    <section className='event-examples'>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical form</h2>
        <input 
          type="text" 
          placeholder="Enter text" 
          style={{margin: '1rem 0'}}
          onChange={handleFormInput}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}