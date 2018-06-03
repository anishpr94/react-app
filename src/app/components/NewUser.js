import React from "react";
import PropTypes from 'prop-types';

export class NewUser extends React.Component {
    state = { user: 'Anish' }
    onChangeValue(e) {
        this.setState({
            user: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input className="form-control" value={this.state.user} onChange={this.onChangeValue.bind(this)} />
                <br/>
                <text>{this.state.user}</text>
            </div>
        )
    }
}
