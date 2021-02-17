const initialState = {
    list: [],               
    selected: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "RECEIVE_MOVIES": 
            return { ...state, list: action.movies }
        case "RECEIVE_SINGLE_MOVIE":
            return { ...state, selected: action.movie }
        default:
            return state
    }
}