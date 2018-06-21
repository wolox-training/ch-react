import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { historyReducer } from './history/reducer';

const mainReducer = combineReducers({ historyReducer, routing: routerReducer, form: formReducer });

// const mainStore = initialState => createStore(mainReducer, initialState, applyMiddleware(thunk));

export default mainReducer;
