import axios from 'axios';

const loginUser = user => ({
    type: "LOGIN_USER",
    user
})

const logoutUser = user => ({
    type: "LOGOUT_USER",
    user
})

const getFavs = function(text){
    return{
        type:"SET_GET_FAVORITES",
        favorites : text
    }
}

export const fetchRegister = (data) => dispatch =>
    axios.post('api/register', data)

export const fetchLogin = data => dispatch =>
    axios.post('api/login', data)
    .then(res => dispatch(loginUser(res.data)))  /// console.log(res) no funciona

export const fetchLogout = data => dispatch =>
    axios.get('api/logout', data)
    .then(() => dispatch(logoutUser({})))

export const fetchIsLogged = () => dispatch =>
    axios.get('api/me')
    .then((res) => res.data)
    .then(user => dispatch(logoutUser(user)))

export const AddFavorites = (data)=> () =>
    axios.post("/api/favorites", data)


export const getFavorites = (id) => (dispatch) =>
    axios.get(`/api/favorites/${id}`)
    .then(favorites => {
        console.log("FAVORITOS DEL AXIOS", favorites)
        dispatch(getFavs(favorites.data))
    })

export const deleteFavorites = (id) => () => 
    axios.delete(`/api/favorites/${id}`)