/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };