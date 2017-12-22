import API_URL from '../config/index'

export default function loadAddressList(userId, callback) {
    return fetch(`${API_URL}/address-list/${userId}`)
            .then(data => data.json())
            .then(callback)
}