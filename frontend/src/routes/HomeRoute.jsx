import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  return(
    <div className="home-route">
      <TopNavigation state={props.state} dispatch={props.dispatch} />
      <PhotoList state={props.state} dispatch={props.dispatch} photos={props.state.photos} showType={'single'} />
      {props.state.modalShow && 
          <PhotoDetailsModal 
            state={props.state} 
            dispatch={props.dispatch}
            showType={'three'}
          />
      }
    </div>
  )
}
  
  

export default HomeRoute;