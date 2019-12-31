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
                <div class="row">
                    <div class="input-field col s6">
                        <input type="text" name="name" id="name" onChange={this.handleChange}/>
                        <label for="name">Name</label>
                    </div>
                    <div class="input-field col s6">         
                        <button class="btn waves-effect waves-light" type="submit" name="action">Add customer
                        <i class="material-icons right">send</i>
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddCustomerForm