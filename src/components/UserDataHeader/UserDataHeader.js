import React from 'react';

const UserDataHeader = ({ user }) => {
    return (
        <div>
            <h4>Olá, {user.name}</h4>
        </div>
    )
}

export default UserDataHeader