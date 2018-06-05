import { combineReducers, createStore } from 'redux';

import { historyReducer } from './history/reducer';

const mainReducer = combineReducers({ historyReducer });
const mainStore = initialState => createStore(mainReducer, initialState);

export default mainStore;
