import { loadFeature, defineFeature } from 'jest-cucumber';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 events are shown by default', ({
    given,
    when,
    then,
  }) => {
    let AppComponent = render(<App />);
    given('that the user has not specified the number of events', () => {
      // no action required
    });

    when('the user does not input a number in the event field', () => {
      // no action required
    });

    then('32 events will be displayed automatically', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('that the user wants to see a specific number of events', () => {
      AppComponent = render(<App />);
    });

    when('the user inputs a number in the event field', async () => {
      const input = screen.getByTestId('number-of-events');
      fireEvent.change(input, { target: { value: '19' } });
      await waitFor(() => {
        expect(input.value).toBe('19');
      });
    });

    then('events displayed will correspond to the input value', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(19);
      });
    });
  });
});
