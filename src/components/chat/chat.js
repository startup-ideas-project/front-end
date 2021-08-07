import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import FileView from '../file-view/file-view';
import DocumentView from '../document-view/document-view';
import ChatView from '../chat-view/chat-view';
import Paper from '@material-ui/core/Paper';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@material-ui/core/Grid';
import {getFiles} from '../../api/file-service';
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

    console.log(`selected document`)
    console.log(selectedDocument)
    console.log(`selected comment`)
    console.log(selectedComment)

    useEffect(() => {
        getFiles().then(data => setFiles(data.data.Items))
    }, [])
    
    return (
        
    <div class="container">
        <div class="row" id="title-row">
            <div class="col col-sm-3"><h2>Peer Review Chat</h2></div>
            <div class="col col-sm-6"><h4> Document View: {selectedDocument.fileName}</h4></div>
            <div class="col col-sm-3">Comments on this part of document: {selectedComment.text}</div>
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