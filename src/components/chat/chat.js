import React, {useState, useEffect} from 'react';
import FileView from '../file-view/file-view';
import DocumentView from '../document-view/document-view';
import ChatView from '../chat-view/chat-view';
import {getFiles} from '../../api/file-service';
import UserView from '../user/user-view';
import AddReviewer from '../add-reviewers/add-review';
import "./chat.css"

// logo
// import logo_size from '../../media/logo_size.jpg'

const LandingPage = () => {
    const [selectedDocument, setSelectedDocument] = useState("");

    const [files, setFiles] = useState([])
    const [selectedComment, setSelectedComment] = useState({
        text: "",
        commentid: ""
    })

    useEffect(() => {
        getFiles().then(data => setFiles(data.data.Items))
    }, [])
    
    // <img src={logo_size} alt="failedToLoad"/>
    return (
        
    <div className="container">
        <div className="row" id="title-row">
            <div className="col col-sm-3 column-border"><h2>Peer Review Chat</h2></div>
            <div className="col col-sm-6 column-border"><h4> Document View: {selectedDocument.fileName}</h4></div>
            <div className="col col-sm-3 column-border">
                User Info
                <UserView />
            </div>
        </div>
        <div className="row " id="content-row">
            <div className="col col-sm-3 column-border">
                <FileView setDocument={setSelectedDocument} documents={files}/>
            </div>
            <div className="col col-sm-6 column-border">
                <DocumentView document={selectedDocument} setSelectedComment={setSelectedComment}/>
                <AddReviewer document={selectedDocument}/>
            </div>
            <div className="col col-sm-3 column-border">
                <ChatView
                    comment={selectedComment}
                />
            </div>
        </div>
    </div>
    )
}

export default LandingPage;