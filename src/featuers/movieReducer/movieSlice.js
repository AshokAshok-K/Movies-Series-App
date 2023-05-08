import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'

//fetching movies 
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (searchTerm) => {
        const response = await movieApi.get(`?apikey=${APIKey}&s=${searchTerm}&type=movie`)
        return response.data
    })
    
//fetching shows
export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncMovies',
    async (searchTerm) => {
        const response = await movieApi.get(`?apikey=${APIKey}&s=${searchTerm}&type=series`)
        return response.data
    })

//Select Movie/show
export const fetchAsyncMovieOrShow = createAsyncThunk('selectMovieOrShow/fetchAsyncMovieOrShow',
    async (id) => {
        const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
        return response.data
    })
    
    

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrShow : (state) => {
            state.selectMovieOrShow = {}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending] : () => {
            console.log('Movie Fetching is Pending');
        },
        [fetchAsyncMovies.fulfilled] : (state,{payload}) => {
            console.log('Movie Fetching is Fullfilled');
            return {...state,movies:payload}
        },
        [fetchAsyncShows.fulfilled] : (state,{payload}) => {
            console.log('Movie Fetching is Fullfilled');
            return {...state,shows:payload}
        },
        [fetchAsyncMovieOrShow.fulfilled] : (state,{payload}) => {
            console.log('Movie/Show Fetching is Fullfilled');
            return {...state,selectMovieOrShow:payload}
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log('Movie Fetching is rejected');
        },
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions

export default movieSlice.reducer
