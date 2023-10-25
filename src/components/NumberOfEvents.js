import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventsQuantity, setEventsQuantity] = useState('32');

  const handleInputChanged = (e) => {
    const value = e.target.value;
    setEventsQuantity(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="numberOfEvents">Number of Events: </label>
      <input
        type="text"
        className="event-number"
        id="numberOfEvents"
        value={eventsQuantity}
        onChange={handleInputChanged}
        placeholder="32"
        data-testid="number-of-events"
      />
    </div>
  );
};

export default NumberOfEvents;
