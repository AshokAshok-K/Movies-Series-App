import React from 'react';
import './MovieCard.scss'
import {Link} from 'react-router-dom'


const MovieCard = (props) => {
    const {data} = props;
    
    return (
        <div className='card'>
            <Link to={`/movie/${data.imdbID}`}>
                <div className='main-card'>
                    <div className="poster-image">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                    <div className="movie-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;