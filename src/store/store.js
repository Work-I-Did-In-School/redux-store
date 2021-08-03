import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './reducers/categories';

const reducers = combineReducers({ categories })

export default createStore(reducers, composeWithDevTools());