import React, { useState, useEffect } from "react";
import CreateEvent from './createEvent';
import NextEvent from './nextEvent';
import Event from './event';
import './dashboard.css'

export default function Dashboard() {

  const [events, setEvents] = useState([])

  async function clientAPI() {
    const response = await fetch(`http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/events`);
    const data = await response.json();
    console.log(data)
    setEvents(data);
    sortEvents();
  }

  useEffect(() => {
    clientAPI();
  })

  function sortEvents(){
    setEvents(events => events.sort( (a,b) => b.date - a.date));
  }

  return (
    <div className="body-events">
      { events.length && (
        <div className="events-list">
          { events.map( (event, index) =>
            index === 0 ?
            <div  key = {index}>
              <NextEvent event={event}></NextEvent>
            </div>
            :
            <div className='event' key = {index}>
              <Event event={event}></Event>
            </div>
          )}
        </div>
      )}
      <div className="create-event">
        <CreateEvent clientAPI={clientAPI}></CreateEvent>
      </div>
    </div>
  );
}
