import React from 'react';
import { useSelector } from 'react-redux';

const UserView = ({userName, userEmail}) => {
    const user = useSelector(state => state.user)
    return (
        <div>
            <span>email: {user.name}</span>
        </div>
    )
}

export default UserView;