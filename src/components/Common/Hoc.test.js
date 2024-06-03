import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HOC from './HOC';

jest.mock('../HomeDashboard', () => () => <div>Home Dashboard Content</div>);

const DummyComponent = () => <div>Dummy Component Content</div>;

const WrappedComponent = HOC(DummyComponent);

test('HOC renders HomeDashboard and WrappedComponent', () => {
  render(<WrappedComponent />);

  expect(screen.getByText('Home Dashboard Content')).toBeInTheDocument();
  expect(screen.getByText('Dummy Component Content')).toBeInTheDocument();
});
