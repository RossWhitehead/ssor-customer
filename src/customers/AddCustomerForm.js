import React, { Component } from 'react';

class AddCustomerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {name: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        this.setState({
          [target.name]: target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onAddCustomer(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleChange}/>
                <input type="submit" value="Add Customer" />
            </form>
        )
    }
}

export default AddCustomerForm