import React, { Component } from 'react';
import './customer.css'

class Customer extends Component {
    render() {
        return (
            <div className="customer">
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Customer

