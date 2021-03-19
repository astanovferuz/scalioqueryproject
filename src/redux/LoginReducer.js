import * as ActionTypes from "./ActionTypes";

export const loginReducer = (state = {logResults: []}, action) => {
    switch(action.type) {
        case(ActionTypes.GET_LOGINS):
            return {...state, logResults: action.payload}
        default:
            return state;
    }
}