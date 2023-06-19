import {React, useEffect, useState, useReducer} from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import reducer from './components/hooks/useApplicationData';
import { ACTIONS } from './components/hooks/useApplicationData';

const App = () => {

  const [state, dispatch] = useReducer(reducer, { 
      favorites: [], 
      modalShow: false, 
      currentPhoto: null, 
      currentTopic: 0, 
      photos: [], 
      topics: []
    });

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => { 
        dispatch(
          {
            type: ACTIONS.SET_PHOTO_DATA,
            photos: data
          }
        )
   })
   }, [])

   useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => { 
        dispatch(
          {
            type: ACTIONS.SET_TOPIC_DATA,
            topics: data
          }
        )
   })
   }, [])

   useEffect(() => {
    state.currentTopic && fetch(`http://localhost:8001/api/topics/photos/${state.currentTopic}`)
      .then(res => res.json())
      .then(data => { 
        dispatch(
          {
            type: ACTIONS.SET_PHOTO_DATA,
            photos: data
          }
        )
   })
   }, [state.currentTopic])

   return(
    <div className="App">
      <HomeRoute state={state} dispatch={dispatch}/>
    </div>
   )
  
}

export default App