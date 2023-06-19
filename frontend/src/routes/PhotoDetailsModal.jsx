import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import { ACTIONS } from '../components/hooks/useApplicationData';

export const PhotoDetailsModal = (props) => {

  const { currentPhoto } = props.state;

  const onClosePhotoDetailsModal = ()=>{
    props.dispatch(
      {
        type:ACTIONS.HIDE_DISPLAY_PHOTO_DETAILS,
      }
    )
  }

  return(
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={onClosePhotoDetailsModal}>
        <svg width="18" style={{stroke:'red', transform: 'scale(.8) translate(1px, 3px)'}} height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      {currentPhoto && <PhotoListItem 
          {...currentPhoto}
          {...props}
          showType={'detail'}/>}
      {currentPhoto && <PhotoList {...props} photos={Object.values(currentPhoto.similar_photos)} showType={props.showType}/>}
  </div>
  )
}

export default PhotoDetailsModal;