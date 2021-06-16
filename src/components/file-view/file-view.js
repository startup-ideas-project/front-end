import React, { useEffect, useState } from 'react';
import {getFiles, getFileById} from '../../api/file-service'

const FileView = ({setDocumentId}) => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        getFiles().then(data => setFiles(data.data.Items))
    }, [])

    const onClickHandler = (id) =>{
        setDocumentId(id)
    }
    return(
        <div>
            {files.map(item => {
                return (
                <ul key={item.key}>
                    <button onClick={(event) =>{
                        event.preventDefault()
                        onClickHandler(item.key)
                    }}>
                        {item.S3URL}
                    </button>
                </ul>)
            })}
        </div>
    )
}

export default FileView;