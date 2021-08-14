import axios from 'axios';

const fileServiceURL = "http://localhost:9000/file"
const fileUpload = (file) => {
    return axios.post(`${fileServiceURL}`, file, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

const getFiles = () => {
    return axios.get(`${fileServiceURL}`)
}

const getFileById = (fileID) => {
    return axios.get(`${fileServiceURL}/${fileID}`)
}

const loadFileByID = (fileID) => {
    return axios.get(`${fileServiceURL}/${fileID}/load`)
}

export  {
    fileUpload,
    getFiles,
    getFileById,
    loadFileByID
}
