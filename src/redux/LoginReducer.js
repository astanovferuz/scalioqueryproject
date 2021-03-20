import * as ActionTypes from "./ActionTypes";

export const loginReducer = (state = {isLoading: false, errMsg: null, logResults: []}, action) => {
    switch(action.type) {
        case(ActionTypes.GET_LOGINS):
            return {...state, isLoading: false, errMsg: null, logResults: action.payload};
        case(ActionTypes.LOGS_LOADING):
            return {...state, isLoading: true, errMsg: null, logResults: []};
        case(ActionTypes.LOGS_FAILED):
            return {...state, isLoading: false, errMsg: action.payload, logResults: []}
        default:
            return state;
    }
}