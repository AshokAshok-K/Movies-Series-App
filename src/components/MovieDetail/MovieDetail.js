import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShow ,removeSelectedMovieOrShow } from '../../featuers/movieReducer/movieSlice';
import { useParams } from 'react-router-dom';
import './MovieDetail.scss'

const MovieDetail = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.movies.selectMovieOrShow)
    const {imdbID} = useParams()

    
    useEffect(() => {
        
      
            dispatch(fetchAsyncMovieOrShow(imdbID))
        
    
        return () => {
            dispatch(removeSelectedMovieOrShow())
        
        }
    },[])

    return (
        <div className='movie-section'>
            {Object.keys(data).length === 0 ? (<p>...Loading</p>) : (
                <>
                    <div className='section-left'>
                        <div className="movie-title">{data.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMBD Rating <i className='fa fa-star'></i> : {data.imdbRating}
                            </span>
                            <span>
                                IMBD Votes <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}
                            </span>
                            <span>
                                IMBD Runtine <i className='fa fa-film'></i> : {data.Runtime}
                            </span>
                            <span>
                                Year <i className='fa fa-calendar'></i> : {data.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{data.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{data.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.Poster} alt={data.Title} />
                    </div>

                 </>
            )}
            
        </div>
    );
};

export default MovieDetail;