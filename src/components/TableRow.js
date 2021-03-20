import React from "react";
import Avatar from "react-avatar";
import { Table } from "reactstrap";

const TableRow = ({logs}) => {
    return(
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Login</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {logs?.sort((a, b) => a.login.localeCompare(b.login)).map(log => {
                        return(
                            <tr key={log.id}>
                                <th>{logs.indexOf(log)+1}</th>
                                <th className="py-1"><Avatar size="45" src={log.avatar_url}/></th>
                                <th>{log.login}</th>
                                <th>{log.type}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableRow;