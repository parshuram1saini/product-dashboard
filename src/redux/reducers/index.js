import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  productsList: productReducer,
  auth : authReducer
});

export default rootReducer;
