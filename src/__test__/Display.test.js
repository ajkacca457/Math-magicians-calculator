import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

describe('Display', () => {
  test('Correctly renders Display component', () => {
    const displayTree = TestRenderer.create(<Display />).toJSON();
    expect(displayTree).toMatchSnapshot();
  });
});
