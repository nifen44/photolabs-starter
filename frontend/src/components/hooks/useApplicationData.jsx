import axios from 'axios';
import { ACTIONS } from "../reducers/reducer";

export function fetchData(dispatch) {
    const fetchPhotos = axios.get('/api/photos');
    const fetchTopics = axios.get('/api/topics');

    axios.all([fetchPhotos, fetchTopics])
        .then(axios.spread((photosResponse, topicsResponse) => {
            dispatch(
                {
                    type: ACTIONS.SET_ALL_PHOTO_DATA,
                    photos: photosResponse.data
                }
            )
            dispatch(
                {
                    type: ACTIONS.SET_TOPIC_DATA,
                    topics: topicsResponse.data
                }
            )
        }))
        .catch(error => {
            console.error('Error:', error);
        });
}

export function fetchCurrentTopic(dispatch, currentTopic) {
    if (currentTopic) {
        axios.get(`/api/topics/photos/${currentTopic}`)
            .then((res) => res.data)
            .then((data) => {
                dispatch(
                    {
                        type: ACTIONS.SET_PHOTO_DATA,
                        photos: data
                    }
                )
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
