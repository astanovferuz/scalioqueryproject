import React from "react";
import Loading from "./Loading";
import Failed from "./Failed";
import NoLogs from "./NoLogsFound";
import TableRow from "./TableRow";

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

    return(
        <div className="mt-5">
            <TableRow logs={logs} />
        </div>
    )
}

export default Results;