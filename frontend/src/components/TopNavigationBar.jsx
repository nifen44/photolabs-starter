import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import MyFavButton from './MyFavButton';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList {...props}/>
      <MyFavButton dispatch = {props.dispatch}/>
      <FavBadge {...props}/>
    </div>
  )
}

export default TopNavigation;