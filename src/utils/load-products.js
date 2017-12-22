import API_URL from '../config/index'

const endpointsAvailable = {
    wishlist: 'wishlist',
    orderHistory: 'order-history'
}

export default function loadProducts(userId, listType, callback) {
    const endpoint = endpointsAvailable[listType]
    return fetch(`${API_URL}/${endpoint}/${userId}`)
            .then(data => data.json())
            .then(callback)
}