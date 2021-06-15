import React from 'react';

const UserView = ({userName, userEmail}) => {
    return (
        <div>
            <h1>{userName}</h1>
            <h1>{userEmail}</h1>
        </div>
    )
}

export default UserView;