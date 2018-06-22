import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { historyReducer } from './history/reducer';

const mainReducer = combineReducers({ historyReducer, routing: routerReducer, form: formReducer });

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
