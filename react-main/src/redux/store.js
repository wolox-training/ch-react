import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';

import { historyReducer } from './history/reducer';

const mainReducer = combineReducers({ historyReducer, routerReducer });

const mainStore = initialState => createStore(mainReducer, initialState);

export default mainStore;
