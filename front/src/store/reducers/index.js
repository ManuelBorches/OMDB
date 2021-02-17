import { combineReducers } from 'redux';

import moviesReducer from "../reducers/movies-reducer";
import userReducer from "../reducers/users-reducer";


export default combineReducers({
    movies: moviesReducer,
    users: userReducer
})

/* movies: {
    list: [],
    selected: {}
} */

/* users = {
    userRegister: "",
    userLogin: "",
    userLogged: false
} */