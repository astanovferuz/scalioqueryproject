import React from "react";

const Results = ({logs}) => {

    const mappedLogs = logs?.map(log => <li key={log.id}>{log.login}</li>)

    return(
        <div className="mt-5">
            <ul>
                {mappedLogs}
            </ul>
        </div>
    )
}

export default Results;