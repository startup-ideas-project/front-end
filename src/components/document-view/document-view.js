import React, { useEffect, useState } from 'react';
import {loadFileByID} from '../../api/file-service'

const DocumentView = ({document}) => {
    const [file, setFile] = useState({
        data: ""
    })
    const [selectedState, setSelectedState] = useState({
        text: "",
            isDirty: false,
            selection: '',
            anchorNode: '?',
            focusNode: '?',
            selectionStart: '?',
            selectionEnd: '?'
    })

    useEffect(() => {
        if(document){
            loadFileByID(document.key).then(data => {
                setFile(data)
                setSelectedState({
                    ...selectedState,
                    text: data.data
                })
            }) 
        }  
    },[document])

    const onMouseUpHandler = (event) => {
        event.preventDefault();
        const selectionObj = (window.getSelection && window.getSelection());
        const selection = selectionObj.toString();
        const anchorNode = selectionObj.anchorNode;
        const focusNode = selectionObj.focusNode;
        const anchorOffset = selectionObj.anchorOffset;
        const focusOffset = selectionObj.focusOffset;
        const position = anchorNode.compareDocumentPosition(focusNode);
        let forward = false;

        if (position === anchorNode.DOCUMENT_POSITION_FOLLOWING) {
            forward = true;
        } else if (position === 0) {
            forward = (focusOffset - anchorOffset) > 0;
        }

        let selectionStart = forward ? anchorOffset : focusOffset;

        if (forward) {
            if (anchorNode.parentNode.getAttribute('data-order')
                && anchorNode.parentNode.getAttribute('data-order') === 'middle') {
                selectionStart += selectedState.selectionStart;
            }
            if (anchorNode.parentNode.getAttribute('data-order')
                && anchorNode.parentNode.getAttribute('data-order') === 'last') {
                selectionStart += selectedState.selectionEnd;
            }
        } else {
            if (focusNode.parentNode.getAttribute('data-order')
                && focusNode.parentNode.getAttribute('data-order') === 'middle') {
                selectionStart += selectedState.selectionStart;
            }
            if (focusNode.parentNode.getAttribute('data-order')
                && focusNode.parentNode.getAttribute('data-order') === 'last') {
                selectionStart += selectedState.selectionEnd;
            }
        }

        const selectionEnd = selectionStart + selection.length;

        setSelectedState({
            ...selectedState,
            selection,
            anchorNode,
            focusNode,
            selectionStart,
            selectionEnd
        })
    }
    return(
        <div>
            <span onMouseUp={onMouseUpHandler}>{selectedState.text}</span>
        </div>
    )
}

export default DocumentView;