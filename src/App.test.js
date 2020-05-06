import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import About from './components/About'
import Rank from './components/Rank'

test('render Home page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome Memers/i);
  expect(linkElement).toBeInTheDocument();
});
test('render About page', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/Hi! Bisakh Here/i);
  const linkElement1 = getByText(/About me/i);
  const linkElement2 = getByText(/Code/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
test('render Rank page', () => {
  const { getByText } = render(<Rank />);
  const linkElement = getByText(/Select One/i);
  expect(linkElement).toBeInTheDocument();

});
