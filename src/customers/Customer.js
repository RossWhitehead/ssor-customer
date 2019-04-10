import React, { Component } from 'react';
import './customer.css'

class Customer extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
            </tr>
        )
    }
}

export default Customer

