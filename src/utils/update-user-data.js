import API_URL from '../config/index'

export default function updateUserData(userData, callback) {
    fetch(`${API_URL}/user`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(userData)
    })
    .then(data => data.json())
    .then(callback)
}


