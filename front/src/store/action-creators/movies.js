import axios from 'axios';

const receiveMovies = movies => ({
    type: "RECEIVE_MOVIES",
    movies
})

const receiveSingleMovie = movie => ({
    type: "RECEIVE_SINGLE_MOVIE",
    movie
})

export const fetchMovies = (movies) => dispatch =>
    axios.get(`http://www.omdbapi.com/?apikey=dc38499f&s=${movies}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies)))

export const fetchSingleMovie = (id) => dispatch =>
    axios.get(`http://www.omdbapi.com/?apikey=dc38499f&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveSingleMovie(movie)))

