import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];
const initStore = () =>{
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}
export const wrapper = createWrapper(initStore);