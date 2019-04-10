import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddCustomerForm from './customers/AddCustomerForm'
import CustomerList from './customers/CustomerList'
import { getCustomers, addCustomer } from './customers/CustomerService'
import uuidv1 from 'uuid/v1'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            customers: []
        }
        this.handleAddCustomer = this.handleAddCustomer.bind(this);
    }

    handleAddCustomer(customerState) {
        addCustomer( {Id: uuidv1(), Name: customerState.name })        
            .then(response => {
                this.state.customers.push({id: customerState.name, name: customerState.name})
                this.setState(this.state)
            })
            .catch(error => console.error('Error:', error))
    }

    componentDidMount() {
        getCustomers()        
            .then(response => {
                const customers = response.data.Items.map(c => {
                    return {
                        id: c.Id,
                        name: c.Name
                    }
                })
            
                const state = Object.assign({}, this.state, {
                    customers: customers
                })
                    
                this.setState(state) 
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Customers
                    </p>
                    <AddCustomerForm onAddCustomer={this.handleAddCustomer} ></AddCustomerForm>
                    <CustomerList customers={this.state.customers}></CustomerList>
                </header>
            </div>
        )
    }
}

export default App;