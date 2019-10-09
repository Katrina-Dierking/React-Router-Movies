import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/Movie.js'
import Movie from './Movies/Movie.js'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  
// eslint-disable-next-line

// const addToSavedList = movie => {
//     setSavedList( [...savedList, movie] );
 
//   };

return (
      <div>
        <SavedList list={savedList} />
        <Route exact path = "/" component = {MovieList} />
        <Route path = "/movies/:id" component = {Movie} />
      </div>
    );
  };


export default App;
