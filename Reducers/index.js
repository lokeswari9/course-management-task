import { combineReducers } from 'redux';
//root reducer to combine all reducer
import {UserReducer} from './UserReducer';

const rootReducer = combineReducers({
    user: UserReducer
});

export default rootReducer;