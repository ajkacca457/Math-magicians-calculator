import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders correctly', () => {
    const navtree = TestRenderer
      .create(
        /*eslint-disable */
        <BrowserRouter>
        {' '}
        <Navbar />
        {' '}

      </BrowserRouter>)
      /* eslint-enable */
      .toJSON();
    expect(navtree).toMatchSnapshot();
  });
});
