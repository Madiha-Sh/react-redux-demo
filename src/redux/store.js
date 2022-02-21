import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


// console.log(rootReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => { console.log('updated state', store.getState().iceCream)})