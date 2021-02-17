import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleWare from "redux-thunk";
import {createLogger} from 'redux-logger';

import combinedReducer from "./reducers/index";

/////////////////////////////// composeEnhancer createLogger??   ////////////////////

export default createStore(combinedReducer, compose(applyMiddleware(createLogger(), thunkMiddleWare)))