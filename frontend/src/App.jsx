import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation

// let photos = new Array(3);
//   photos.forEach(photo=>{
//     photo.push(<PhotoListItem />);
//   });

const App = () => (
  <div className="App">
    <HomeRoute />
  </div>
)

export default App