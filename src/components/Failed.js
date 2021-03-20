import React from "react";

const Failed = ({errMsg}) => {
    return(
        <div>
            <h4 className="text-center mt-5 text-danger">{errMsg}</h4>
        </div>
    )
}

export default Failed;