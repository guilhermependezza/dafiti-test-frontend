import React, { Component } from 'react'
import UserDataHeader from '../UserDataHeader/index'
import BackToMyAccount from '../BackToMyAccount'

import loadUserData from '../../utils/load-user-data'
import loadProducts from '../../utils/load-products'

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

    renderOrderHistory() {
        return this.state.productList.map((product, index) =>
            <div className="order-history-item" key={index}>
                <div className="order-history-item__image-container">
                    <img alt={product.title} className="order-history-item__image" src={product.image} />
                    <label className="order-history-item__purchase-date">{product.purchaseDate}</label>
                </div>
                <div className="order-history-item__title-container">
                    <div className="order-history-item__title">
                        {product.name}
                    </div>
                    <div className="order-history-item__description">
                        {product.description}
                    </div>
                </div>

            </div>
        )
    }

    renderProductList() {
        return this.state.productList.length === 0 ?
        <div>Loading...</div> :
        this.renderOrderHistory()
    }

    handleProductList(data) {
        this.setState({ productList: data })
    }
}

export default OrderHistory