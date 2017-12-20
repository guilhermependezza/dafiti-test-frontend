import React, { Component } from 'react'
import UserDataHeader from './UserDataHeader'
import BackToMyAccount from './BackToMyAccount'

import loadUserData from '../utils/load-user-data'
import loadProducts from '../utils/load-products'

class OrderHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            user: {}
        }

        this.handleProductList = this.handleProductList.bind(this)
        this.handleUserData = this.handleUserData.bind(this)
        
    }
    
    componentDidMount() {
        loadUserData(this.handleUserData)
            .then(userId => loadProducts(userId, 'orderHistory', this.handleProductList))
    }

    render() {
        return (
            <div>
                <UserDataHeader user={this.state.user} />
                <div>{this.renderProductList()}</div>
                <BackToMyAccount />
            </div>
        )
    }

    handleUserData(data) {
        this.setState({ user: data })
        return data.userId
    }

    renderProductList() {
        console.log(this.state.productList)
        return this.state.productList.length === 0 ?
        <div>Loading...</div> :
        this.state.productList.map((product, index) =>
            <div key={index}>{product.name}</div>
        )
    }

    handleProductList(data) {
        this.setState({ productList: data })
    }
}

export default OrderHistory