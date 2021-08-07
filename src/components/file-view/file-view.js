import React from 'react';

const FileView = ({documents, setDocument}) => {
    const onClickHandler = (id) =>{
        setDocument(id)
    }
    return(
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
    )
}

export default FileView;