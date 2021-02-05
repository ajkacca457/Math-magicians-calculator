import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../components/ButtonPanel';

describe('ButtonPanel Component', () => {
  const handleClick = () => { ''; };

  it('renders correctly', () => {
    const btnpaneltree = TestRenderer
      .create(<ButtonPanel handleClick={handleClick} />)
      .toJSON();
    expect(btnpaneltree).toMatchSnapshot();
  });
});
