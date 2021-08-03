import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import FileView from '../file-view/file-view';
import DocumentView from '../document-view/document-view';
import ChatView from '../chat-view/chat-view';
import {getFiles} from '../../api/file-service';

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
    
    return (
        <div>
            <img src={logo_size} alt="logo" />
            <hr />
            <Box display="flex" flexDirection="row" p={1} m={1}>
                <Box p={1}  m={1} bgcolor="grey.300">
                    <FileView setDocument={setSelectedDocument} documents={files}/>
                </Box>
                <Box p={1}  m={1} flexGrow={1} bgcolor="grey.300">
                    <DocumentView document={selectedDocument} setSelectedComment={setSelectedComment}/>
                </Box>
                <Box p={1} m={1} bgcolor="grey.300">
                    <ChatView
                        comment={selectedComment}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default LandingPage;