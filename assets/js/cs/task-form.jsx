import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {
    function update(ev) {
        let tgt = $(ev.target);

        let data = {};
        data[tgt.attr('name')] = tgt.val();
        let action = {
            type: 'UPDATE_FORM',
            data: data,
        };
        console.log(action);
        props.dispatch(action);
    }

    function submit(ev) {
        api.submit_task(props.form);
        console.log(props.form);
    }

    function clear(ev) {
        props.dispatch({
            type: 'CLEAR_FORM',
        });
    }

    let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
    return <div style={{ padding: "4ex" }}>
        <h2>New Task</h2>
        <FormGroup>
            <Label for="user_id">User</Label>
            <Input type="select" name="user_id" value={props.form.user_id} onChange={update}>
                {users}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="title">Title</Label>
            <Input type="textarea" name="title" value={props.form.title} onChange={update} />
        </FormGroup>
        <FormGroup>
            <Label for="descrip">Description</Label>
            <Input type="textarea" name="descrip" value={props.form.descrip} onChange={update} />
        </FormGroup>
        <Button onClick={submit} color="primary">Submit</Button>
    </div>;
}

function state2props(state) {
    console.log("rerender", state);
    return {
        form: state.form,
        users: state.users
    };
}

// Export the result of a curried function call.
export default connect(state2props)(TaskForm);