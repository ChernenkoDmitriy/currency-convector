import { combineReducers } from 'redux';
import { appState } from './appState/stateReducer';

export const rootReducer = combineReducers({
    appState,
});