import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given(
      'that the event element does not show without user interaction',
      () => {}
    );
    let AppComponent;
    when('the user first open the app', () => {
      AppComponent = render(<App />);
    });

    then('the event element remains hidden', () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      const events = within(EventListDOM).queryAllByRole('listitem');
      events.forEach((event) => {
        const details = within(event).querySelector('detials');
        expect(details).not.toBeInTheDocument();
      });
    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {
    let AppComponent;
    given('that details of an event are collapsed by default', async () => {
      // // same result as then method for test of 'an event element is collapsed by default
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    let clickedEventElement;
    when('the user interacts with the event field', async () => {
      const eventList = AppComponent.container.querySelector('#event-list');
      const eventElements = within(eventList).queryAllByRole('listitem');
      // Assuming the first event element is already expanded
      const openDetails = within(eventElements[0]).queryByText('show details');
      userEvent.click(openDetails);
      clickedEventElement = eventElements[0];
    });

    then('the user can view details of the event', () => {
      const details = within(clickedEventElement).queryByText('hide-section');
      expect(details).toBeDefined();
    });
  });

  test('User can collapse an event to hide details', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let showEventElement;
    given('that the user has opened the event details', () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      return waitFor(() => {
        const eventsInList = within(EventListDOM).queryAllByRole('listitem');
        // Verify events are showing
        expect(eventsInList.length).toBe(32);
      }).then(() => {
        const eventList = AppComponent.container.querySelector('#event-list');
        const events = within(eventList).queryAllByRole('listitem');
        // Assuming the first event element is shows details
        const openDetails = within(events[0]).queryByText('show details');
        userEvent.click(openDetails);
        showEventElement = events[0];
      });
    });

    when('the user decides to hide the event details', () => {
      const hideDetails = within(showEventElement).queryByText('hide details');
      userEvent.click(hideDetails);
    });

    then('the event details should be collapsed', () => {
      // if 'hide details' button not on screen, no event details are showing
      expect(screen.queryByText('hide details')).not.toBeInTheDocument();
    });
  });
});
