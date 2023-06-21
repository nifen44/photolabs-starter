import React from 'react';

import '../styles/TopicListItem.scss'
import { ACTIONS } from './reducers/reducer';


const TopicListItem = (props) => {

  const handleTopic = ()=>{
    props.dispatch(
      {
        type: ACTIONS.GET_PHOTOS_BY_TOPICS,
        id: props.id
      }
    )
  }

  return(
    <div className="topic-list__item">
        <span onClick={handleTopic}>{props.title}</span>
    </div>
  )
    
}

export default TopicListItem