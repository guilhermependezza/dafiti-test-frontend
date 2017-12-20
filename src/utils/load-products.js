const endpointsAvailable = {
    wishlist: 'wishlist',
    orderHistory: 'order-history'
}

export default function loadProducts(userId, listType, callback) {
    const endpoint = endpointsAvailable[listType]
    return fetch(`http://localhost:3000/${endpoint}/${userId}`)
            .then(data => data.json())
            .then(callback)
}