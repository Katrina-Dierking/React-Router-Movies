import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList] = useState( [] );

  // const addToSavedList = movie => {
  //   setSavedList( [...savedList, movie] );
  // };
  console.log(savedList)

  return (
    <div>
      <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;