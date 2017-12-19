export default function loadUserData(callback) {
    return fetch('http://localhost:3000/user')
            .then(data => data.json())
            .then(callback)
}