import {React, useReducer, useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import PhotoDetailsModal from './PhotoDetailsModal';
import reducer from '../components/hooks/useApplicationData';


const HomeRoute = () => {

  // const applicationData = useApplicationData();
  const [state, dispatch] = useReducer(reducer, {photos, topics, favorites: [], modalShow: false});
  console.log(state);
  return(
    <div className="home-route">
      <TopNavigation state={state} dispatch={dispatch} />
      <PhotoList state={state} dispatch={dispatch} showType={'single'}/>
      {state.modalShow && 
          <PhotoDetailsModal 
            state={state} 
            dispatch={dispatch}
            showType={'three'}
          />
      }
    </div>
  )
}
  
  

export default HomeRoute;