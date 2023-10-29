import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventsQuantity, setEventsQuantity] = useState('32');

  const handleInputChanged = (e) => {
    const value = e.target.value;
    setEventsQuantity(value);
    // setCurrentNOE(value);

    let errorText;
    if (value <= 0 || isNaN(value)) {
      errorText = 'Events must be a postive number';
    } else {
      setCurrentNOE(value);
      errorText = '';
    }
    setErrorAlert(errorText);
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
