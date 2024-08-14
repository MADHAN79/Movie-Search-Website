
import { useEffect, useState } from 'react';
import './App.css'
import SearchIcon from './search.svg'

import MovieCard from './components/MovieCard';

//omdb API Key: 63b922b5

//creating a static variable:
const API_URL = 'http://www.omdbapi.com?apikey=63b922b5';

const movie1 = {
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "imdbID": "tt4154796",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
}

function App() {

  const [movies, setmovies] = useState([]);
  
  //asyn arrow function: aync - stands for asynchronous data, means it takes some time to fetch the movies.
  //this asyn func. accepts a title props
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //this calls the API
    const data = await response.json(); //gets the data from the API response. This json contains the data about the movies.

    //this update the state of the prop 'movies' with the value in data variable.
    setmovies(data.Search);
  }


  //this HOOK calls the API, right at the loading of the page.
  useEffect(() =>{
    searchMovies('Avengers');
  },[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      
      <div className='search'>
        <input //input in REACT always must have value & onChange
          placeholder='Search for Movies' 
          value=''
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt='searchIcon'
          onClick={() => {}}
        />
        </div>

        {
          movies?.length > 0
          ? (<div className='container' >
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
          </div>
          ) : (
            <div className='empty' >
              <h2>No movies found</h2>
            </div>
          )
        }

        
    </div>
  )
}

export default App
