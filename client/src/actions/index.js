import axios from 'axios';
import { FETCH_USER } from './types';

// ReduxThunk sees we return a function? It will call our function and call dispatch
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({ type: FETCH_USER, payload: res.data });
    }