import * as ActionTypes from './ActionTypes';
import UserActionsApi from '../api/UserActionsApi';

const loginSuccess = (response) => {
    return {
        type: ActionTypes.LOGIN_USER,
        response
    }
}
const loginFailure = (err) => {
    return {
        type: ActionTypes.LOGIN_USER,
        err
    }
}
export const loginUser = (userData) => {
    return function(dispatch){
        return UserActionsApi.loginUser(userData).then((response) =>{
            dispatch(loginSuccess(response.data));
        }).catch(err =>{
            console.log(err);
            dispatch(loginFailure(err));
        });
    }
}