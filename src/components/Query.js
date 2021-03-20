import React from "react";
import { InputGroup, InputGroupAddon, Button, Input, Form } from 'reactstrap';

const QueryComponent = ({handleChange, handleSubmit, queryWord}) => {
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input value={queryWord} onChange={handleChange} placeholder="Please enter a word" />
                    <InputGroupAddon addonType="append">
                        <Button color="success">Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        </div>
    )
}

export default QueryComponent;