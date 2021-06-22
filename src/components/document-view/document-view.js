import React, { useEffect, useState } from 'react';
import {loadFileByID} from '../../api/file-service'

const DocumentView = ({document}) => {
    const [file, setFile] = useState({
        data: ""
    })

    useEffect(() => {
     loadFileByID(document.key).then(data => setFile(data))   
    },[document])

    const splitTextToButtons = (text) => {
        return text.split(" ")
    }

    return(
        <div>
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