import '@testing-library/jest-dom';
import { SomeTest } from 'components/SomeTest';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<SomeTest />);
  const linkElement = screen.getByText(/Edit and save to reload./i);
  expect(linkElement).toBeInTheDocument();
});
