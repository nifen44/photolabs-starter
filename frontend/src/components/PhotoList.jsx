import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const { photos } = props;
  const className = props.showType === 'single' ? "photo-list" : "photo-list-modal";
  return <ul className={className}>
    {photos.map(ele=>{
      return (
        ele && <PhotoListItem 
          {...props}
          showType={props.showType}
          key={ele.id} {...ele} 
        />
      )
    })}
  </ul>
}

export default PhotoList