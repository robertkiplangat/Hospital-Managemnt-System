import React, { Component } from 'react'



class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(
                customers => this.setState({ customers }, () => console.log('data fetched ', customers))
            )
    }
    render() {
        return (
            <div>
                <h1>Customers feyguhewjbkgjik</h1>
                {this.state.customers.map((customer) => (
                    <li key={customer.id}>{customer.firstName} {customer.secondName}</li>
                ))}
            </div>
        )
    }
}
export default Customers