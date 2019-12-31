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
            <div>
                <nav class="light-blue lighten-1" role="navigation">
                    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    </div>
                </nav>
                <div class="section no-pad-bot" id="index-banner">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 class="header center orange-text">Customers</h1>
                        <div class="row center">
                            <h5 class="header col s12 light">Manage customers</h5>
                        </div>
                    </header>
                </div>
                <div className="App" class="container">
                    <div class="container">
                        <div class="section">
                            <AddCustomerForm onAddCustomer={this.handleAddCustomer} ></AddCustomerForm>
                            <CustomerList customers={this.state.customers}></CustomerList>
                        </div>
                    </div>
                </div>
                <footer class="page-footer orange">
                    <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                        <h5 class="white-text">Company Bio</h5>
                        <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
                        </div>
                        <div class="col l3 s12">
                        <h5 class="white-text">Settings</h5>
                        <ul>
                            <li><a class="white-text" href="#!">Link 1</a></li>
                            <li><a class="white-text" href="#!">Link 2</a></li>
                            <li><a class="white-text" href="#!">Link 3</a></li>
                            <li><a class="white-text" href="#!">Link 4</a></li>
                        </ul>
                        </div>
                        <div class="col l3 s12">
                        <h5 class="white-text">Connect</h5>
                        <ul>
                            <li><a class="white-text" href="#!">Link 1</a></li>
                            <li><a class="white-text" href="#!">Link 2</a></li>
                            <li><a class="white-text" href="#!">Link 3</a></li>
                            <li><a class="white-text" href="#!">Link 4</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="footer-copyright">
                    <div class="container">
                    Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;