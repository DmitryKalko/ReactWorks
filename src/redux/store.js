
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import techReducer from './tech/reducer';


const reducers = combineReducers({
  tech: techReducer,
});

const middlewares = applyMiddleware(reduxThunk);

const store = createStore(reducers, middlewares);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;