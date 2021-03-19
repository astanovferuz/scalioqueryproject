import React, { useState } from "react";
import QueryComponent from "./Query";
import Results from "./Results";
import { useSelector, useDispatch } from "react-redux";
import { getLogs } from "../redux/ActionCreators";

const Main = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.loginReducer.logResults.items);
    const [queryWord, setqueryWord] = useState("");

    const handleChange = (e) => {
        const {value} = e.target;
        setqueryWord(value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getLogs(queryWord));
        setqueryWord("");
        console.log(state)

    }

    console.log(state);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <QueryComponent queryWord={queryWord} handleSubmit={handleSubmit} handleChange={handleChange} />
                    <Results logs={state} />
                </div>
            </div>
        </div>
    )
}

export default Main;