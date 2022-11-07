import moment from 'moment';
import './event.css';

export default function Event({event}) {
  return (
    <div>
      <div className="event-box">
        <div className="date-box">
          <h1>{moment(event.date).format('ddd, hA')}</h1>
        </div>
        <div>
          <h2>{event.title}</h2>
          <h3>{event.date}</h3>
          <h3>{event.venue}</h3>
        </div>
      </div>
    </div>
  );
}
