import { combineReducers } from 'redux';
import { accessToken } from './accessToken/reducers'


const allReducers = combineReducers({
    accessToken
});

export default allReducers;