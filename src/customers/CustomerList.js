import React, { Component } from 'react';
import Customer from './Customer'

class CustomerList extends Component {
    constructor(props) {
        super(props)
        console.log({props})
    }
    render() {
        return (
            <div>
                {this.props.customers.map(c =>
                    <Customer key={c.id} name={c.name} />
                )}
            </div>
        )
    }
}

export default CustomerList
