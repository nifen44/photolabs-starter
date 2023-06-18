import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {
  // const [heart, setHeart] = useState(false);

  // const handleClick = ()=>{
  //   setHeart(!heart);
  // }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={props.heartHandleClick}>
        {/* Insert React */}
        <FavIcon fill={props.heart? '#C80000' : '#EEEEEE'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;