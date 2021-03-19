import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        loginReducer,
    }), applyMiddleware(thunk, logger))
    return store;
}