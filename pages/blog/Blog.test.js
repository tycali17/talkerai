import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blog from './Blog';

describe('<Blog />', () => {
  test('it should mount', () => {
    render(<Blog />);
    
    const blog = screen.getByTestId('Blog');

    expect(blog).toBeInTheDocument();
  });
});