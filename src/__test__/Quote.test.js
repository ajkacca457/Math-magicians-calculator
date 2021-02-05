import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';

describe('Quote Component', () => {
  it('renders correctly', () => {
    const quotetree = TestRenderer
      .create(<Quote />)
      .toJSON();
    expect(quotetree).toMatchSnapshot();
  });

  test('renders the title text of quote page', () => {
    const { getByText } = render(<Quote />);
    const title = getByText('Quote of the day');
    expect(title).toBeInTheDocument();
  });

});
