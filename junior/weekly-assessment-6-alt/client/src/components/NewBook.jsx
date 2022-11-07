export default function NewBook({clientAPI}) {

  let favorite = false;
  function onChange() {
    favorite = !favorite
  }

  async function submitHandler(event) {
    event.preventDefault();
    const content = {
      title: event.target.title.value,
      author: `${event.target.name.value} ${event.target.surname.value}`,
      favorite: favorite, 
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    };
    console.log(content);
    const server_url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/books`
    
    const response = await fetch(server_url, requestOptions); 
    const data = await response.json();
    console.log(data)
    
    //clientAPI();
    event.target.reset()
    event.stopPropagation();
  }

  return (
    <div>
      <div className='newbook-container'>
        <div className='newbook-title'>Add a new book</div>
        <form onSubmit={submitHandler}>
          <h2>TITLE</h2>
          <input required name="title" type="text" placeholder="Insert book's title" />
          <h2>AUTHOR</h2>
          <div className="flex">
            <input required name="name" type="text" placeholder="Name"/>
            <input required name="surname" type="text" placeholder="Surname"/>
          </div>
          <div className="flex">
            <h2>FAVORITE</h2>
            <input name="favorite" type="checkbox" onChange={onChange}/>
          </div>
          <br/>
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
}