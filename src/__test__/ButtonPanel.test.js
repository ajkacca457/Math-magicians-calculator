import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';

describe('Button Component', () => {

  const handleClick = () => { ''; };

  it('renders correctly', () => {
    const originalError = console.error;
    console.error = jest.fn();
    const btnpaneltree = TestRenderer
      .create(<ButtonPanel />)
      .toJSON();
    expect(btnpaneltree).toMatchSnapshot();
  });
});
