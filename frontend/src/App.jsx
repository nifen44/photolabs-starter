import {React, useEffect, useState, useReducer} from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import reducer from './components/reducers/reducer';
import { fetchCurrentTopic, fetchData } from './components/hooks/useApplicationData';


const App = () => {

  const [state, dispatch] = useReducer(reducer, { 
      favorites: [], 
      modalShow: false, 
      currentPhoto: null, 
      currentTopic: 0, 
      allPhotos: [],
      photos: [], 
      topics: []
    });

  useEffect(() => fetchData(dispatch), []);

  useEffect(() => fetchCurrentTopic(dispatch, state.currentTopic), [state.currentTopic]);

   return(
    <div className="App">
      <HomeRoute state={state} dispatch={dispatch}/>
    </div>
   )
  
}

export default App