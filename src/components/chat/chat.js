import React, {useState, useEffect} from 'react';
import FileUpload from '../upload-file/upload';
import FileView from '../file-view/file-view';
import DocumentView from '../document-view/document-view';
import ChatView from '../chat-view/chat-view';
import {getFiles} from '../../api/file-service';
import './chat.scss';

const LandingPage = () => {
    const [selectedDocument, setSelectedDocument] = useState("");

    const [files, setFiles] = useState([])

    useEffect(() => {
        getFiles().then(data => setFiles(data.data.Items))
    }, [])
    
    return (
        <div>
            <div className="flexbox-container">
                <FileView setDocument={setSelectedDocument} documents={files}/>
                <DocumentView document={selectedDocument}/>
                <ChatView document={selectedDocument}/>
            </div>
            <div>
                <FileUpload />
            </div>
        </div>
    )
}

export default LandingPage;