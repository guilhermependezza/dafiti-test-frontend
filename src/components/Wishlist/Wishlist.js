import React, { Component } from 'react'
import UserDataHeader from '../UserDataHeader'
import BackToMyAccount from '../BackToMyAccount'

import loadUserData from '../../utils/load-user-data'
import loadProducts from '../../utils/load-products'

class Wishlist extends Component {
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
            .then(userId => loadProducts(userId, 'wishlist', this.handleProductList))
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

    renderWishlist() {
        return this.state.productList.map((product, index) =>
            <div className="wishlist-item" key={index}>
                <img alt={product.title} className="wishlist-item__image" src={product.image} />
                <div className="wishlist-item__title">
                    {product.name}
                </div>
            </div>
        )
    }

    renderProductList() {
        return this.state.productList.length === 0 ?
        <div>Loading...</div> :
        this.renderWishlist()
    }

    handleProductList(data) {
        this.setState({ productList: data })
    }
}

export default Wishlist