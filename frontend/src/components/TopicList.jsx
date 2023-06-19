import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const { topics } = props.state;
  return(
    <div className="top-nav-bar__topic-list">
    {topics && topics.map(ele=>{
      return (
        <TopicListItem key={ele.id} {...ele} {...props}></TopicListItem>
      )
    })}
  </div>
  )
}

export default TopicList