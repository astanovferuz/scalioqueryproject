import React from "react"
import { Spinner } from "reactstrap";

const Loading = () => {
    return(
        <div className="row d-flex justify-content-center mt-5">
            <Spinner className="mt-5" color="primary" />
        </div>
    )
}

export default Loading;