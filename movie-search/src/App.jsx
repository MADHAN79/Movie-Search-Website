import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./components/MovieCard";

//omdb API Key: 63b922b5

//creating a static variable:
const API_URL = "http://www.omdbapi.com?apikey=63b922b5";

function App() {
  
  //for dynamic input the search title to map logic
  const [movies, setmovies] = useState([]); //initialized with empty array.
  
  //dynamically updates the value of input field.
  const [searchTerm, setsearchTerm] = useState(''); //initialized with emty string

  //asyn arrow function: aync - stands for asynchronous data, means it takes some time to fetch the movies.
  //this asyn func. accepts a title props
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //this calls the API
    const data = await response.json(); //gets the data from the API response. This json contains the data about the movies.

    //this update the state of the prop 'movies' with the value in data variable.
    setmovies(data.Search);
  };

  //this HOOK calls the API, right at the loading of the page, so initially the page loads
  //with the list of Hustle movie list.
  useEffect(() => {
    searchMovies("Hustle");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input //input in REACT always must have value & onChange
          placeholder="Search for Movies"
          value={searchTerm} 
          //the input value gets assigned to searchTerm's value by eventHandler function
          onChange={(e) => setsearchTerm(e.target.value)} 
        />
        <img 
          src={SearchIcon} 
          alt="searchIcon" 
          //while clicking the search icon, we are calling the above searchMovies async func. by giving 
          //searchTerm value as 'title' prop to that func.
          onClick={() => searchMovies(searchTerm)} 
        />
      </div>

      {/* this loops through each movie object in json and renders into each div */}
      {/* SEARCH FUNCTIONALITY LOGIC: */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard  key={movie.imdbID} movie={movie} /> //each component requires a unique key as a prop.
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
