import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// import ProductList from '../src/components/ProductDashboard/ProductList';
import SignIn from '.';
import { BrowserRouter as Router } from 'react-router-dom';
// import ProductItem from '../src/components/ProductDashboard/ProductItem';

test('User Sign in', () => {
  const initialState =
  {
    auth: {
      isAuthenticated: true,
      user: null,
      error: null
    }
  };

  const mockStore = configureMockStore();
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Router>
        <SignIn />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/Remember me/i)).toBeInTheDocument();
  expect(screen.getByText(/Don't have an account\? Sign Up/i)).toBeInTheDocument();
})