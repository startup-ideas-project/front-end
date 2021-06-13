import axios from 'axios';

const loginServiceURL = "http://localhost:4000/user"

const loginUser = (userName, password) => {
    const body = {
        email: userName,
        password: password
    }
    return axios.post(`${loginServiceURL}/login`, body)
}

export {
    loginUser
}