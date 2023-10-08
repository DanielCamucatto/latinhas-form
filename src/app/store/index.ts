import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import demandReducer from './reducers';

const rootReducer = combineReducers({
  demand: demandReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
