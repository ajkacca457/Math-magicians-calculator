import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';

describe('ButtonPanel Component', () => {
  /* eslint-disable no-unused-vars */
  it('renders correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const btnpaneltree = TestRenderer
      .create(<ButtonPanel />)
      /* eslint-enable no-unused-vars */
      .toJSON();
    expect(btnpaneltree).toMatchSnapshot();
  });
});
