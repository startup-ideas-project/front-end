import axios from 'axios';

const userServiceURL = "http://localhost:4000/user"

const loginUser = (userName, password) => {
    const body = {
        email: userName,
        password: password
    }
    return axios.post(`${userServiceURL}/login`, body)
}

const signUpUser = (userInfo) => {
    const body = {userInfo}
    return axios.post(`${userServiceURL}`, body)
}

export {
    loginUser,
    signUpUser
}