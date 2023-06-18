
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import { ACTIONS } from './hooks/useApplicationData';


const PhotoListItem = (props) => {

  // const { onPhotoSelect, favorites, setFavorites } = props.state;

  const heartHandleClick = () => {
    console.log('heart toggle');
    props.dispatch(
      {
        type: ACTIONS.FAV_PHTOT_TOGGLE,
        id: props.id
      }
    )
  };

  const photoHandlerClick = () => {
      // onPhotoSelect(props.id);
      props.dispatch(
        {
          type: ACTIONS.DISPLAY_PHOTO_DETAILS,
          id: props.id
        }
      )
  }

  const className = props.showType === 'single' ? 'photo-list__item' : (props.showType === 'three' ? 'photo-list-modal__item' : 'photo-list-detail__item');
  const userDetailClassName = props.showType === 'three' ? 'photo-list__user-details' : 'photo-list-modal__user-details';
  return(
    <li className={className} id={props.id}>
      <PhotoFavButton heart={props.state.favorites.indexOf(props.id) >= 0} heartHandleClick={heartHandleClick} />
      <img src={props.urls.full} className='photo-list__image' onClick={photoHandlerClick}/>
      
      <div className={userDetailClassName}>
        <img src={props.user.profile} className='photo-list__user-profile' /> 
        <div className='photo-list__user-div'>
          <span className='photo-list__user-info'>{props.user.name}</span>
          <span className='photo-list__user-location'>{props.location.city}, {props.location.country}</span>
        </div>
      </div>
    </li>
  )
}

export default PhotoListItem