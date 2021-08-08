import React, {useState, useEffect} from 'react';
import FileView from '../file-view/file-view';
import DocumentView from '../document-view/document-view';
import ChatView from '../chat-view/chat-view';
import {getFiles} from '../../api/file-service';
import UserView from '../user/user-view';
import "./chat.css"

// logo
import logo_size from '../../media/logo_size.jpg'

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
        
    <div class="container">
        <div class="row" id="title-row">
            <div class="col col-sm-3"><h2>Peer Review Chat</h2></div>
            <div class="col col-sm-6"><h4> Document View: {selectedDocument.fileName}</h4></div>
            <div class="col col-sm-3">
                User Info
                <UserView />
            </div>
        </div>
        <div class="row" id="content-row">
            <div class="col col-sm-3">
                <FileView setDocument={setSelectedDocument} documents={files}/>
            </div>
            <div class="col col-sm-6">
                <DocumentView document={selectedDocument} setSelectedComment={setSelectedComment}/>
            </div>
            <div class="col col-sm-3">
                <ChatView
                    comment={selectedComment}
                />
            </div>
        </div>
    </div>
    )
}

export default LandingPage;