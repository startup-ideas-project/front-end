import React, {useState} from 'react';
import FileUpload from '../upload-file/upload';
import FileView from '../file-view/file-view';
import DocumentView from '../document-view/document-view';

const ChatView = () => {
    return(
        <div>
            <h1>ChatView</h1>
        </div>
    )
}
const LandingPage = () => {
    const [documentId, setDocumentId] = useState("");
    return (
        <div>
            <div className="flexbox-container">
                <FileView setDocumentId={setDocumentId} />
                <DocumentView documentId={documentId}/>
                <ChatView />
            </div>
            <div>
                <FileUpload />
            </div>
        </div>
    )
}

export default LandingPage;