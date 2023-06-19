import { useState, useReducer } from 'react'

/* insert app levels actions below */
export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    FAV_PHTOT_TOGGLE: 'FAV_PHOTO_TOGGLE',
    HIDE_DISPLAY_PHOTO_DETAILS: 'HIDE_DISPLAY_PHOTO_DETAILS',
    GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
  }
  
  function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FAV_PHTOT_TOGGLE:
            let curFavorites = [...state.favorites];
            if (curFavorites.indexOf(action.id) >= 0) {
                curFavorites.splice(curFavorites.indexOf(action.id), 1);
            } else {
                curFavorites = [...curFavorites, action.id];
            }
            return{
                ...state,
                favorites: curFavorites
            }
        case ACTIONS.SET_PHOTO_DATA:
            return{
                ...state, 
                photos: action.photos
            }
        case ACTIONS.SET_TOPIC_DATA:
            return{
                ...state,
                topics: action.topics
            }
        case ACTIONS.HIDE_DISPLAY_PHOTO_DETAILS:
            return{
                ...state, 
                modalShow : false,
                currentPhoto : null
            }
        case ACTIONS.DISPLAY_PHOTO_DETAILS:
            return{
                ...state,
                modalShow : true,
                currentPhoto : state.photos.find(p=>p.id === action.id)
            }
        case ACTIONS.GET_PHOTOS_BY_TOPICS:
            return{
                ...state,
                currentTopic : action.id
            }
        default:
            return state;
      }
    }

export default reducer;