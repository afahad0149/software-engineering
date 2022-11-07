import './createEvent.css'

export default function CreateEvent({clientAPI}) {

  async function submitHandler(event) {
    event.preventDefault();
    const content = {
      title: event.target.title.value,
      date: event.target.date.value,
      venue: event.target.venue.value, 
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    };
    await fetch(`http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/events`,requestOptions); 

    clientAPI();
    event.target.reset()
    event.stopPropagation();

  }
  return(
    <div>
      <div className='create-event-container'>
        <div className='create-event-title'>Create a new event</div>
        <form onSubmit={submitHandler}>
          <h2>TITLE</h2>
          <input required name="title" type="text" placeholder='Insert a title...' />
          <h2>DATE</h2>
          <input required name="date" type="datetime-local" />
          <h2>VENUE</h2>
          <input required name="venue" type="text" placeholder='Insert a venue...' />
          <br/>
          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
}