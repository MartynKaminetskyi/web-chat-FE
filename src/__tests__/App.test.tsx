import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders greeting message', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Web-chat-FE/i);
  expect(headingElement).toBeInTheDocument();
});
