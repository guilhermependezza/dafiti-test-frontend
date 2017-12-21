import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import loadUserData from '../../utils/load-user-data'


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            userData: {}
        }

        this.editButton = this.editButton.bind(this)
        this.cancelButton = this.cancelButton.bind(this)
        this.saveButton = this.saveButton.bind(this)
        this.handleUserData = this.handleUserData.bind(this)
    }

    handleUserData(data) {
        this.setState({ userData: data })
    } 

    componentDidMount() {
        loadUserData(this.handleUserData)
    }

    render() {
        return this.state.editing ? 
            this.renderEditForm() : 
            this.renderDisplayForm()
    }

    onChange(field, e) {
        const userData = this.state.userData
        userData[field] = e.target.value
        this.setState({ userData });
    }

    renderEditForm() {
        return (
            <section className="user-data">
                <div className="edit-field">
                    <label className="edit-field__label">User id:</label>
                    <span className="display-field__value">{this.state.userData.userId}</span>
                </div>
                <div className="edit-field">
                    <label className="edit-field__label">Name:</label>
                    <input type="text" className="edit-field__value" value={this.state.userData.name} onChange={this.onChange.bind(this, 'name')} />
                </div>
                <div className="edit-field">
                    <label className="edit-field__label">Age:</label>
                    <input type="text" className="edit-field__value" value={this.state.userData.age} onChange={this.onChange.bind(this, 'age')} />
                </div>
                <div className="edit-field">
                    <label className="edit-field__label">Phone:</label>
                    <input type="text" className="edit-field__value" value={this.state.userData.phone} onChange={this.onChange.bind(this, 'phone')} />
                </div>
                <div className="edit-field">
                    <label className="edit-field__label">e-mail:</label>
                    <input type="text" className="edit-field__value" value={this.state.userData.email} onChange={this.onChange.bind(this, 'email')} />
                </div>
                <div className="actions">
                    <button className="actions__link" href='#' onClick={this.saveButton} >Save user info</button>
                    <button className="actions__link" href='#' onClick={this.cancelButton} >Cancel</button>
                </div>
            </section>
        )
    }

    editButton() {
        this.setState({ editing: true })
    }
    
    saveButton() {
        this.updateUserData()
            .then(res => res.json())
            .then(res => this.setState({ editing: false }))
        
    }

    cancelButton() {
        loadUserData(this.handleUserData)
        this.setState({ editing: false })
    }

    updateUserData() {
        return fetch('http://localhost:3000/user', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(this.state.userData)
        })
    }
    
    renderDisplayForm() {
        const { userId, name, age, phone, email } = this.state.userData
        return (
            <section className="user-data">
                <div className="display-field">
                    <label className="display-field__label">User id:</label>
                    <span className="display-field__value">{userId}</span>
                </div>
                <div className="display-field">
                    <label className="display-field__label">Name:</label>
                    <span className="display-field__value">{name}</span>
                </div>
                <div className="display-field">
                    <label className="display-field__label">Age:</label>
                    <span className="display-field__value">{age}</span>
                </div>
                <div className="display-field">
                    <label className="display-field__label">Phone:</label>
                    <span className="display-field__value">{phone}</span>
                </div>
                <div className="display-field">
                    <label className="display-field__label">e-mail:</label>
                    <span className="display-field__value">{email}</span>
                </div>
                <button onClick={this.editButton} >Edit user info</button>
                <div className="actions">
                    <Link className="actions__link" to={`/address-list/${userId}`}>View address list</Link>
                    <Link className="actions__link" to={`/wishlist/${userId}`}>Wishlist</Link>
                    <Link className="actions__link" to={`/order-history/${userId}`}>Order history</Link>
                </div>
            </section>
        )
    }
}

export default User;