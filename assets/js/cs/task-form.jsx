import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';
import WorkTimeIncr from './work-time-incr';

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
    if (props.our_token) {
        return <div style={{ padding: "4ex" }}>
            <h2>New Task</h2>
            <FormGroup>
                <Label for="user_id">Assign To</Label>
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
            <FormGroup>
                <Label for="complete">Complete</Label>
                <Input type="checkbox" className="complete" name="complete" value={props.form.complete} onChange={update} />
            </FormGroup>
            <FormGroup>
                <Label for="work_time">Work Time</Label>
                <WorkTimeIncr time={props.form.work_time} />
            </FormGroup>
            <Button onClick={submit} color="primary">Submit</Button>
            <Button onClick={clear}>Clear</Button>
        </div>;
    } else {
        return <div></div>;
    }
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