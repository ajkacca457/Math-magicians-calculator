import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';
/*eslint-disable */
describe('ButtonPanel Component', () => {
  it('renders correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const btnpaneltree = TestRenderer
      .create(<ButtonPanel />)
      .toJSON();
    expect(btnpaneltree).toMatchSnapshot();
  });
});
/* eslint-enable */
