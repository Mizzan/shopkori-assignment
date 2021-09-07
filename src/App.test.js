import { render, screen } from '@testing-library/react';
import Home from './components/Home/Home';

// here is the testing of the app component
test('testing the homepage elements', () => {
  render(<Home />);
  const linkElement = screen.getByText(/div/i);
  expect(linkElement).toBeInTheDocument();
});
