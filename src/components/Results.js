import React from "react";
import Loading from "./Loading";
import Failed from "./Failed";
import NoLogs from "./NoLogsFound";
import Avatar from "react-avatar";

const Results = ({logs, isLoading, errMsg, count}) => {
    console.log(logs)
    if(isLoading) {
        return <Loading />;
    }
    else if(errMsg) {
        return <Failed errMsg={errMsg} />
    }
    else if(count === 0)  {
        return <NoLogs />
    }

    const mappedLogs = logs?.map(log => {
        return(          
            <div>
                <li key={log.id}>
                    <div className="row">
                        <div className="col-md-4 mb-3 d-flex justify-content-center"><Avatar size="40" src={log.avatar_url} /></div>
                        <div className="col-md-4 mb-3 d-flex justify-content-center"><p>{log.login}</p></div>
                        <div className="col-md-4 mb-3 d-flex justify-content-center"><p>{log.type}</p></div>
                    </div>
                </li>
            </div>
        )
    })

    return(
        <div className="mt-5">
            <ol className="pl-5">
                {mappedLogs}
            </ol>
        </div>
    )
}

export default Results;