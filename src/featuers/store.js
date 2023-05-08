import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './movieReducer/movieSlice'

export const store = configureStore({
    reducer: {movies: moviesReducer}
})

