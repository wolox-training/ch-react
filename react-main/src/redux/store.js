import { combineReducers, createStore } from 'redux';

import { historyReducer } from './history/reducer';

const mainReducer = combineReducers({ historyReducer });

const mainStore = createStore(mainReducer);

export default mainStore;
