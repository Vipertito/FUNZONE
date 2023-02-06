// import { useState, useEffect } from 'react';
import React, { useState, useEffect } from "react";

import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";
import "./App.css";

// 87869f2a -- api key
// custom Component
// const Person = (props) => {
//   return (
//     <>
//     <h1>Name: {props.name}</h1> 
//     {/* we can directly write the name bt upper is an advance one 
//     also we can write--
//     const Person = () =>{
//       return(
//         <><h1>Name: Mainak</h1>
//         </>
//       )
//     } */}
//     <h2>Lasr Name: Banerjee</h2>
//     <h2>Age: 22</h2>
//     </>
//   )
// }
//new project--
const API_URL = 'http://www.omdbapi.com?apikey=87869f2a';

const App = () => {
  // const name = 'Mainak';
  // const isNameShowing = false;
  // const isUserLoggedIN = true;
  // const [counter,setCounter] = useState(0);
  // useEffect(() => {
  //   // alert('Reload')
  //     alert("You change the counter to : " + counter)
  // },[counter]);
  //new project--  justunder--process to call api 
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    // <div>
    //    <h1>Hello {isNameShowing ? name : 'Someone'}!!</h1>
    //   <h1>{name}</h1> */}
    //   {/* <h1>Hello {2 + 2}</h1> */}
    //   {/* {name ? (
    //     <>
    //     <h1>{name}</h1>
    //     </>
    //   ) :
    //   (
    //     <>
    //     <h1>test</h1>
    //     <h2>There is no Name</h2>
    //     </>
    //   )} */}
    //   {/* <Person name = {'Mainak'}/> */}
    //   {/* and in upper here we can write also
    //   <person/> */}
    //   {/* 2nd thing learn */}
    //   {/* <button onClick={() => alert('clicked')}>-</button> */}
    //   {/* <button onClick={() => setCounter ((prevCount) => prevCount-1)}>-</button>
    //   <h1>{counter}</h1>
    //   <button onClick={() => setCounter ((prevCount) => prevCount+1)}>+</button>
    // </div>
    //make a project now
    
      <div className="app">
      <h1>⑉Ƒun๖ۣۜZone⑉</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // here  e is the call back function 
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

