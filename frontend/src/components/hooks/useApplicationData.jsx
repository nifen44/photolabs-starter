import { useState, useReducer } from 'react'
import photos from "../../mocks/photos";
import topics from '../../mocks/topics';

/* insert app levels actions below */
export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    FAV_PHTOT_TOGGLE: 'FAV_PHOTO_TOGGLE'
  }
  
  function reducer(state, action) {
    switch (action.type) {
        // case ACTIONS.FAV_PHOTO_ADDED:
        // return { 
        //     ...state,
        //     favorites: [...favorites, action.favoriteId]
        // }
        // case ACTIONS.FAV_PHOTO_REMOVED:
        // return{
        //     ...state,
        //     favorites: favorites.filter((t)=>t.id !== action.id)
        // }
        case ACTIONS.FAV_PHTOT_TOGGLE:
            let curFavorites = [...state.favorites];
            console.log('reducer', [...curFavorites]);
            if (curFavorites.indexOf(action.id) >= 0) {
                curFavorites.splice(curFavorites.indexOf(action.id), 1);
            } else {
                curFavorites = [...curFavorites, action.id];
            }
            console.log('reducer', [...curFavorites]);
            return{
                ...state,
                favorites: curFavorites
            }
        case ACTIONS.SET_PHOTO_DATA:
        return{
            ...state, 
            photos
        }
        case ACTIONS.SET_TOPIC_DATA:
        return{
            ...state,
            topics
        }
        case ACTIONS.SELECT_PHOTO:
        return{
            
        }
        case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return{
            ...state,
            modalShow : true,
            currentPhoto : photos.find(p=>p.id === action.id)
        }
        default:
            return state;
      }
      
    //   default:
    //     throw new Error(
    //       `Tried to reduce with unsupported action type: ${action.type}`
    //     );
    }


// function useApplicationData() {
//     const [favorites, setFavorites] = useState([]);
//     const [modalShow, setModalShow] = useState(false);
//     const [currentPhoto, setCurrentPhoto]= useState({});

//     const onPhotoSelect = (id)=>{
//         setModalShow(true);
//         document.body.style = "overflow: hidden";
//         setCurrentPhoto(photos.find(p => p.id === id));
//       }

//     const onClosePhotoDetailsModal = () => {
//         document.body.style = "overflow: auto";
//         setModalShow(false);
//     };

//     return {
//         favorites, 
//         modalShow, 
//         currentPhoto, 
//         onPhotoSelect, 
//         onClosePhotoDetailsModal, 
//         setCurrentPhoto, 
//         setFavorites, 
//         setModalShow,
//         photos,
//         topics
//     }
// }

export default reducer;