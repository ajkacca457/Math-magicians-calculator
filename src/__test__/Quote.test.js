import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';

describe('Quote Component', () => {
  it('renders correctly', () => {
    const quotetree = TestRenderer
      .create(<Quote />)
      .toJSON();
    expect(quotetree).toMatchSnapshot();
  });
});
