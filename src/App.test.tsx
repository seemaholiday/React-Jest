import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(
      <App />
  )
  expect(screen.getByText(/Welcome Home/i)).toBeInTheDocument()
});