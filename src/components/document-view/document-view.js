import React, { useEffect, useState } from 'react';
import {loadFileByID} from '../../api/file-service'

const DocumentView = ({documentId}) => {
    const [file, setFile] = useState({
        data: ""
    })

    useEffect(() => {
     loadFileByID(documentId).then(data => setFile(data))   
    },[documentId])

    const textSelectionHandler = (event) => {
        console.log(event)
    }

    const splitTextToButtons = (text) => {
        return text.split(" ")
    }

    return(
        <div OnMouseUp={textSelectionHandler}>
            {/* Convert the word to a bunch of buttons, this is a proof of concept for not
            pretty it up later*/}
            <p>{splitTextToButtons(file.data).map((word, index) => {
                return (
                    <button id={`${word}_${index}`}>{word}</button>
                )
            })}</p>
        </div>
    )
}

export default DocumentView;