import axios from 'axios';

const chatServiceURL = "http://localhost:4080/chat"

const getMessages = (conversationID) => {
    return axios.get(`${chatServiceURL}/${conversationID}`)
}

export  {
    getMessages
}
