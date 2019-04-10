import axios from 'axios'

const url = process.env.REACT_APP_CUSTOMER_SERVICE_URL
const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_CUSTOMER_SERVICE_API_KEY
    }
}

const getCustomers = () => {
    return axios.get(url, config)
}

const addCustomer = (customer) => {
    return axios.post(url, customer, config)
}

export { getCustomers, addCustomer }