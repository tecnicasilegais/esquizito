import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SomeTest } from 'components/SomeTest';

test('renders learn react link', () => {
  render(<SomeTest />);
  const linkElement = screen.getByText(/Edit and save to reload./i);
  expect(linkElement).toBeInTheDocument();
});
