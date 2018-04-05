import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

export default class WorkTimeIncr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: props.time};
    }

    incr() {
        this.setState({time: this.state.time+15});
    }

    decr() {
        this.setState({time: this.state.time-15});
    }

    render() {
        return (
            <span>
                <Input readOnly className="w-50" value={this.state.time} />
                <Button onClick={this.incr.bind(this)} >+</Button>
                <Button onClick={this.decr.bind(this)} >-</Button>
            </span>
        );
    }
}
