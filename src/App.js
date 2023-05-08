import './App.scss';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetails from './components/MovieDetail/MovieDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='/movie/:imdbID' element={<MovieDetails />} />
              <Route element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
