import axios from 'axios';

const commentServiceURL = "http://localhost:4120/comment"
const commentServiceAddReviewersURL = "http://localhost:4120/comment/comment-reviewers"

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

const postReviewer = ({documentID, userEmail}) => {
    const payload = {
        additionInfo: {
            documentID,
            userEmail
        }
    }
    return axios.post(`${commentServiceAddReviewersURL}`, payload)
}

export  {
    getCommentByDocID, 
    postComment,
    postReviewer
}
