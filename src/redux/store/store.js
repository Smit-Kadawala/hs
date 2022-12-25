import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoginReducers from '../reducer/LoginReducers';

const rootReducer = combineReducers({LoginReducers});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
