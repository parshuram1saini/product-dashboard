import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductDashboard from './components/ProductDashboard';
import "./App.css"
import HOC from './components/Common/HOC';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {

  const ProductDashboardComponent = HOC(ProductDashboard)

  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/products" element={<ProductDashboardComponent />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Provider>
  );
}

export default App;
