import { render, screen } from '@testing-library/react';
import PropertyPage from '../pages/PropertyPage';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the property details', () => {
  render(
    <Router>
      <PropertyPage match={{ params: { id: '123' } }} />
    </Router>
  );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
