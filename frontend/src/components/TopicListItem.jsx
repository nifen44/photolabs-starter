import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => (
    <div className="topic-list__item">
    {/* Insert React */}
      <span>{props.title}</span>
  </div>
  );

// TopicListItem.defaultProps =   {
//   "id": "1",
//   "slug": "topic-1",
//   "label": "Nature"
// }
export default TopicListItem