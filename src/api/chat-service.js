import axios from 'axios';

const chatServiceURL = "http://localhost:4080/chat"

const getMessages = (creator) => {
    console.log(`${chatServiceURL}/${creator}`)
    return axios.get(`${chatServiceURL}/${creator}`)
}

export  {
    getMessages
}
