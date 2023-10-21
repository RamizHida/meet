import Event from '../components/Event';
import { getDefaultNormalizer, render } from '@testing-library/react';
import '../mock-data';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  test('has element with event title, use .summary key from event as content for element', () => {
    //  allEvents returns mock data -> mock data includes all event details in an array containing JSON objects
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("has an element for the event's start time, use .created key from event as content for element", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("has an element for event's location, use .location key from event as content for element", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('has a button element for showing details, button is titled (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test('event details section should be hidden by default', () => {
    expect(
      EventComponent.queryByText(allEvents[0].description, {
        // prevent collapsing of whitespace characters, which brings togther whitespace characters inside a string , producing a single space
        normalizer: getDefaultNormalizer({
          // prevent collapsing of whitespace
          collapseWhitespace: false,
        }),
      })
    ).not.toBeVisible();
  });

  // requires simulating user event on the UI, making the below test callback fn asynchronous
  test('show event details section when user clicks on (show details) button', async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('show details'));
    const eventDetailSection =
      EventComponent.container.querySelector('.details-opened');

    // Check if element with the class details-opened is currently display on UI
    expect(eventDetailSection).toBeVisible();
  });

  // requires simulating user event on the UI, making the below test callback fn asynchronous
  test('hide event details when user clicks on (hide details) button', async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('hide details'));
    const eventDetailSection =
      EventComponent.container.querySelector('.details-closed');
    expect(eventDetailSection).not.toBeVisible();
  });
});
