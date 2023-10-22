import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });

  test('renders text input', () => {
    const NumberOfEventsTextBox =
      NumberOfEventsComponent.queryByRole('textbox');

    expect(NumberOfEventsTextBox).toBeInTheDocument();
    expect(NumberOfEventsTextBox).toHaveClass('event-number');
  });

  test('default input value is 32', () => {
    // input values, even numbers, are interpreted as strings, hence the matcher toBe uses a string
    expect(NumberOfEventsComponent.queryByRole('textbox').value).toBe('32');
  });

  test('value of textbox updates when users types in it', async () => {
    const NumberOfEventsTextBox =
      NumberOfEventsComponent.queryByRole('textbox');

    const user = userEvent.setup();
    await user.type(NumberOfEventsTextBox, '{backspace}{backspace}10');
    expect(NumberOfEventsTextBox.value).toBe('10');
  });
});
