import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import { historyReducer } from './history/reducer';

const mainReducer = combineReducers({ historyReducer });
console.log('mainReducer', mainReducer);

// const mainStore = initialState => createStore(mainReducer, initialState, applyMiddleware(thunk));

export default mainReducer;
