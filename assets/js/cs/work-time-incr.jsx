import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

export default class WorkTimeIncr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: props.time, update_time: props.update_time};
    }

    incr() {
        this.setState({time: this.props.time+15}, () => {
            this.state.update_time(this.state.time);
        });
    }

    decr() {
        this.setState({time: this.props.time-15}, () => {
            this.state.update_time(this.state.time);
        });
    }

    render() {
        return (
            <span>
                <Input readOnly className="w-50" value={this.props.time} />
                <Button onClick={this.incr.bind(this)} >+</Button>
                <Button onClick={this.decr.bind(this)} >-</Button>
            </span>
        );
    }
}
