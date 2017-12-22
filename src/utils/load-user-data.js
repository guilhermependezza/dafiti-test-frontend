import API_URL from '../config/index'

console.log(API_URL)

export default function loadUserData(callback) {
    return fetch(`${API_URL}/user`)
            .then(data => data.json())
            .then(callback)
}