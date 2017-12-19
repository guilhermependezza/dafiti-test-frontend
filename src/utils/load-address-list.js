export default function loadAddressList(userId, callback) {
    return fetch(`http://localhost:3000/address-list/${userId}`)
            .then(data => data.json())
            .then(callback)
}