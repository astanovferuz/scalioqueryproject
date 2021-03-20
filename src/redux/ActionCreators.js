import * as ActionTypes from "./ActionTypes";

export const getLogs = (logKey) => async dispatch => {
    dispatch(logsLoading());
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${logKey} in:login`);
        const results = await response.json();
        const data = await results;
        dispatch(getLogins(data));
    } catch (error) {
        dispatch(logsFailed(error.message));
    }
}

const getLogins = data => ({
    type: ActionTypes.GET_LOGINS,
    payload: data
})

const logsLoading = () => ({
    type: ActionTypes.LOGS_LOADING
});

const logsFailed = (err) => ({
    type: ActionTypes.LOGS_FAILED,
    payload: err
})