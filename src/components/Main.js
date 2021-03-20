import React, { useState } from "react";
import QueryComponent from "./Query";
import Results from "./Results";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getLogs } from "../redux/ActionCreators";

const Main = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.loginReducer);
    const [queryWord, setqueryWord] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const handleChange = (e) => {
        const {value} = e.target;
        setqueryWord(value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getLogs(queryWord));
        setqueryWord("");

    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = state.logResults.items?.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <QueryComponent queryWord={queryWord} 
                                    handleSubmit={handleSubmit} 
                                    handleChange={handleChange} 
                    />
                    <Results        isLoading={state.isLoading} 
                                    errMsg={state.errMsg} 
                                    logs={currentPosts}
                                    count={state.logResults.total_count}
                    />
                    <Pagination     paginate={paginate}
                                    postsPerPage={postsPerPage}
                                    totalPosts={state.logResults.items?.length}
                    />
                </div>
            </div>
        </div>
    )
}

export default Main;