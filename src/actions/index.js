import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

export const fetchComments = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    console.log(response.data);

    return {
        type: FETCH_COMMENTS,
        payload: response
    };
};