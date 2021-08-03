import axios from 'axios';

const commentServiceURL = "http://localhost:4120/comment"

const getCommentByDocID = (docID) => {
    return axios.get(`${commentServiceURL}/${docID}`)
}
const postComment = ({creatorID, startIndex, endingIndex, documentID}) => {
    const payload = {
        creatorID,
        startIndex,
        endingIndex,
        documentID
    }
    return axios.post(`${commentServiceURL}`, payload)
}

export  {
    getCommentByDocID, 
    postComment
}
