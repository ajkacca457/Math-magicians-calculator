import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

describe('App Component', () => {
  it('renders correctly', () => {
    const apptree = TestRenderer
      .create(<App />)
      .toJSON();
    expect(apptree).toMatchSnapshot();
  });
});
