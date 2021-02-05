import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const btntree = TestRenderer
      .create(<Button />)
      .toJSON();
    expect(btntree).toMatchSnapshot();
  });

  const handleClick = () => { ''; };

  test('Checking if the button roles are button', () => {
    const { getByRole } = render(<Button name="=" wide={false} color={false} handleClick={handleClick} />);
    const eqlBtn = getByRole('button');
    expect(eqlBtn).toBeInTheDocument();
  });

  test('Checking if it renders the button texts correctly', () => {
    const { getByText } = render(<Button name="=" wide={false} color={false} handleClick={handleClick} />);
    const eqlBtn = getByText(/=/i);
    expect(eqlBtn).toBeInTheDocument();
  });
});
