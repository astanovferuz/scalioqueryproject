import * as ActionTypes from "./ActionTypes";

export const getLogs = (logKey) => async dispatch => {
    const response = await fetch(`https://api.github.com/search/users?q=${logKey} in:login`);
    const results = await response.json();
    const data = await results;

    dispatch(getLogins(data));
}

const getLogins = data => ({
    type: ActionTypes.GET_LOGINS,
    payload: data
})