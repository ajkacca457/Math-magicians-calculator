import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Home Component', () => {

  it('renders correctly', () => {
    const hometree = TestRenderer
      .create(<Home />)
      .toJSON();
    expect(hometree).toMatchSnapshot();;
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Welcome to our page!');
    expect(title).toBeInTheDocument();
  });
});
