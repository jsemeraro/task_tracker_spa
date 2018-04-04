import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function UserForm(props) {
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
        api.submit_user(props.form);
        console.log(props.form);
    }

    function clear(ev) {
        props.dispatch({
            type: 'CLEAR_FORM',
        });
    }

    // let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
    return <div style={{ padding: "4ex" }}>
        <h2>New User</h2>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="textarea" name="name" value={props.form.name} onChange={update} />
        </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input type="textarea" name="email" value={props.form.email} onChange={update} />
        </FormGroup>
        <Button onClick={submit} color="primary">Submit</Button>
    </div>;
}

function state2props(state) {
    console.log("rerender", state);
    return {
        form: state.form
    };
}

// Export the result of a curried function call.
export default connect(state2props)(UserForm);