import { useState } from 'react';
import mockData from '../mock-data';
import { getEvents } from '../api';

const Event = ({ event }) => {
  // Event Details don't show by default
  const [detailsShowing, setDetailsShowing] = useState(false);

  return (
    <li>
      <div>{event.summary}</div>
      <div>{event.created}</div>
      <div>{event.location}</div>

      {detailsShowing ? (
        <details className="details-opened" open={true}>
          {event.description}
        </details>
      ) : (
        <details className="details-closed" open={false}>
          {event.description}
        </details>
      )}

      <button onClick={() => setDetailsShowing(!detailsShowing)}>
        {detailsShowing ? 'hide details' : 'show details'}
      </button>
    </li>
  );
};

export default Event;
