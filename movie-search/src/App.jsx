
import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'


//omdb API Key: 63b922b5

//creating a static variable:
const API_URL = 'http://www.omdbapi.com?apikey=63b922b5';

function App() {
  
  //asyn arrow function: aync - stands for asynchronous data, means it takes some time to fetch the movies.
  //this asyn func. accepts a title props
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //this calls the API
    const data = await response.json(); //gets the data from the API response. This json contains the data about the movies.

    console.log(data.Search);
  }


  //this HOOK calls the API, right at the loading of the page.
  useEffect(() =>{
    searchMovies('Starwars');
  },[]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      
      <div className='search'>
        <input //input in REACT always must have value & onChange
          placeholder='Search for Movies' 
          // value=''
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt='searchIcon'

        />
        </div>
    </div>
  )
}

export default App
