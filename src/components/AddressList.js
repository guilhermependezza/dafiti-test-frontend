import React, { Component } from 'react';
import loadUserData from '../utils/load-user-data'
import loadAddressList from '../utils/load-address-list'

class AddressList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            addressList: []
        }

        this.handleAddressList = this.handleAddressList.bind(this)
        this.handleUserData = this.handleUserData.bind(this)
    }

    componentDidMount() {
        loadUserData(this.handleUserData)
            .then(userId => loadAddressList(userId, this.handleAddressList))
    }

    handleUserData(data) {
        this.setState({ user: data })
        return data.userId
    }

    handleAddressList(data) {
        this.setState({ addressList: data })
    }

    renderAddressList() {
        return this.state.addressList.length === 0 ?
            <div>Loading...</div> :
            this.state.addressList.map((address, index) => (
                <div key={index} className="address">
                    <div>{address.street}</div>
                    <div>{address.number}</div>
                </div>
            ))
    }

    render() {
        return (
            <div>
                <div className="user-data">{this.state.user.name}</div>
                <div>{this.renderAddressList()}</div>
            </div>
        )
    }
}

export default AddressList