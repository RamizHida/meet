import { useState } from 'react';
import mockData from '../mock-data';
import { getEvents } from '../api';

const Event = ({ event }) => {
  // Event Details don't show by default
  const [detailsShowing, setDetailsShowing] = useState(false);

  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>

      {detailsShowing ? (
        <details className="details-opened" open={true}>
          {event.description}
        </details>
      ) : (
        <details className="details-closed" open={false}>
          {event.description}
        </details>
      )}

      <button
        className="details-btn"
        onClick={() => setDetailsShowing(!detailsShowing)}
      >
        {detailsShowing ? 'hide details' : 'show details'}
      </button>
    </li>
  );
};

export default Event;
