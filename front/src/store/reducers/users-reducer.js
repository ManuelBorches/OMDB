const initialState = {
    userRegister: "",
    userLogin: {},
    favorites: []
}

export default (state = initialState, action) => {
    switch(action.type){
        /* case "REGISTER_USER":
            return {...state, userRegister: action.user} */
        case "LOGIN_USER":
            return {...state, userLogin: action.user}
        case "LOGOUT_USER":
            return {...state, userLogin: action.user}
        case "SET_GET_FAVORITES":
            return {...state, favorites: action.favorites}
        default:
            return state
    }
}