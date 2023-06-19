import React, { useReducer } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = (props) => {

  const { favorites } = props.state;
  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={favorites.length > 0 ? true : false}/>
    </div>
  ) 
};

export default FavBadge;