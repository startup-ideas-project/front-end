import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserView = ({setUser}) => {
    const user = useSelector(state => state.user)
    useEffect(() => {
        setUser(user)
    },[])
    return (
        <div>
            <span>email: {user.name}</span>
        </div>
    )
}

export default UserView;