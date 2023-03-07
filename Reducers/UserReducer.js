import * as ActionTypes from '../Actions/ActionTypes';

const initialState = [];
export const UserReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case ActionTypes.REGISTER_USER:
            return actions.response;
        case ActionTypes.LOGIN_USER:
            return actions.response;
        default:
            return initialState;    
    }
}
 


