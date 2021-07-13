import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AuthReducer from './reducres/AuthReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import PostReducer from './reducres/PostReducer';


const rootReducers = combineReducers({
	AuthReducer,
	PostReducer,
	
});

const middlewares = [thunkMiddleware];
const Store = createStore(
	rootReducers,composeWithDevTools(applyMiddleware(...middlewares))
);

export default Store;