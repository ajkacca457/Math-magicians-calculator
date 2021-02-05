import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders correctly', () => {
    const navtree = TestRenderer
      .create(<BrowserRouter>
        {' '}
        <Navbar />
        {' '}
              </BrowserRouter>)
      .toJSON();
    expect(navtree).toMatchSnapshot();
  });
});
