import React from 'react';
import FileUpload from '../upload-file/upload'

const FileView = ({documents, setDocument}) => {
    const onClickHandler = (id) =>{
        setDocument(id)
    }
    return(
        <div>
            <ul>
                {documents.map(item => {
                    return (
                    <li key={item.key}>
                        <a href="/" onClick={(event) =>{
                            event.preventDefault()
                            onClickHandler(item)}}>
                            <span>{item.fileName}</span>
                        </a>
                    <hr/>
                    </li>
                    )
                })}
            </ul>
            <p>Choose a file to upload</p>
            <FileUpload />
        </div>
    )
}

export default FileView;