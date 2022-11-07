import moment from 'moment';
import './nextEvent.css';

export default function NextEvent({event}) {
  return (
    <div>
      <div className='next-event-box'>
        <h3>NextEvent</h3>
        <div className="next-events">
          <h1>{moment(event.date).format('ddd, hA')}</h1>
          <h2>{event.title}</h2>
          <h4>{moment(event.date).format('MMMM Do YYYY')}</h4>
          <h4>{event.venue}</h4>
        </div>
      </div>
    </div>
  );
}