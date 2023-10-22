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
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        className="event-number"
        value={eventsQuantity}
        onChange={handleInputChanged}
        placeholder="32"
      />
    </div>
  );
};

export default NumberOfEvents;
