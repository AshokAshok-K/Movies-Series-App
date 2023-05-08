import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import user from '../../images/user.png'
import './Header.scss'
import { fetchAsyncMovies, fetchAsyncShows } from '../../featuers/movieReducer/movieSlice';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if(searchTerm === '') return alert('Pls enter movie/show name')
        dispatch(fetchAsyncMovies(searchTerm))
        dispatch(fetchAsyncShows(searchTerm))

        setSearchTerm('')
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'> Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search Movies/Shows' 
                    />
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt='movie app' />
            </div>

        </div>
    );
};

export default Header;