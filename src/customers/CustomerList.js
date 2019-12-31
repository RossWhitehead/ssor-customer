import React, { Component } from 'react';
import Customer from './Customer'

class CustomerList extends Component {
    constructor(props) {
        super(props)
        console.log({props})
    }
    render() {
        return (
            <table class='centered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.customers.map(c =>
                    <Customer id={c.id} name={c.name} />
                )}
                </tbody>
            </table>
        )
    }
}

export default CustomerList
