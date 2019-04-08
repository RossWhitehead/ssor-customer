import axios from 'axios'

const url = process.env.REACT_APP_CUSTOMER_SERVICE_URL
const requestConfig = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_CUSTOMER_SERVICE_API_KEY
    }
}

const getCustomers = () => {
    return axios.get(url, requestConfig)
}

const addCustomer = (customer) => {
    requestConfig.body = customer
    return axios.post(url, requestConfig)
}

export { getCustomers, addCustomer }