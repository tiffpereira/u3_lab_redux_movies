import {
    GetMovies, 
    GetMovieDetails 
} from '../../services/MovieServices'
import { GET_MOVIES, GET_MOVIE_DETAILS } from '../types'


export const LoadMovies = () => {

    return async (dispatch) => {
        try {
            const movies = await GetMovies()
            
            dispatch({
                type: GET_MOVIES,
                payload: movies
            })
        } catch (error) {
            throw error 
        }
    }
}

export const LoadMovieDetails = (id) => {
    return async (dispatch) => {
        try {
            const details = await GetMovieDetails(id)

            dispatch({
                type: GET_MOVIE_DETAILS,
                payload: details 
            })
        } catch (error) {
            throw error 
        }
    }
}