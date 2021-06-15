import React from 'react';

const FileView = () => {
    return(
        <div>
            <h1>File View</h1>
        </div>
    )
}
const DocumentView = () => {
    return(
        <div>
            <h1>DocumentView</h1>
        </div>
    )
}
const ChatView = () => {
    return(
        <div>
            <h1>ChatView</h1>
        </div>
    )
}
const LandingPage = () => {
    return (
        <div>
            <FileView />
            <DocumentView />
            <ChatView />
        </div>
    )
}

export default LandingPage;