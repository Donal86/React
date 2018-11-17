import React, { Component } from 'react';
class Checkbox extends Component {
    render() {
        return (
            <div>
                <input
                    type='Checkbox'
                    checked={this.props.checkbox}
                    onChange={() => this.props.handleCheck(this.props.id)}
                />
            </div>
        )
    }
}
export default Checkbox;