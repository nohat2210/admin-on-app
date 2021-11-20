import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from '../pages/auth/reducer';
import categories from '../pages/categories/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    categories,
  });
