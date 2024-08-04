import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders the home page', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Available Properties/i);
  expect(linkElement).toBeInTheDocument();
});
