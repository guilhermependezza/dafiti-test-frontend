import React, { Component } from 'react';
import loadUserData from '../../utils/load-user-data'
import loadAddressList from '../../utils/load-address-list'
import UserDataHeader from '../UserDataHeader/index';
import BackToMyAccount from '../BackToMyAccount'

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

    renderTableHeader() {
        return (
            <thead>
                <th className="address-list__col">Rua</th>
                <th className="address-list__col">Número</th>
                <th className="address-list__col">Cidade</th>
                <th className="address-list__col">Estado</th>
            </thead>
        )
    }

    renderTableBody() {
        return this.state.addressList.length === 0 ?
            <div>Loading...</div> :
            <tbody>
            {
                this.state.addressList.map((address, index) => (
                    <tr className="address-list__row" key={index}>
                        <td className="address-list__col">{address.street}</td>
                        <td className="address-list__col">{address.number}</td>
                        <td className="address-list__col">{address.city}</td>
                        <td className="address-list__col">{address.state}</td>
                    </tr>
                ))
            }
            </tbody>
    }

    render() {
        return (
            <div>
                <UserDataHeader user={this.state.user} />
                <table className="address-list">
                    {this.renderTableHeader()}
                    {this.renderTableBody()}
                </table>
                <BackToMyAccount />
            </div>
        )
    }
}

export default AddressList