import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import '../MovieListing/MovieListing'
import MovieListing from '../MovieListing/MovieListing';
import {fetchAsyncMovies, fetchAsyncShows} from '../../featuers/movieReducer/movieSlice'

const Home = () => {
    const dispatch = useDispatch()
    const initialMovie = 'Harry'
    const initialShows = 'Friends'
   
    useEffect(() => {  
        dispatch(fetchAsyncMovies(initialMovie))
        dispatch(fetchAsyncShows(initialShows))
        
    },[])
    
    return (
        <div>
           <div className="banner-image"></div>
           <MovieListing />
        </div>
    );
};

export default Home;