import React from 'react';
import '../styles/MyFavButton.scss'
import { ACTIONS } from './reducers/reducer';

const MyFavButton = (props) =>{

    const onFavoriteBtnHandler = () =>{
        props.dispatch(
            {
                type: ACTIONS.SHOW_FAVORITE_LIST
            }
        )
    }

    return(
        <button className="my-favorite-btn" onClick={onFavoriteBtnHandler}>My Favorites</button>
    )
}

export default MyFavButton;