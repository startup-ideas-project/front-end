import React, { useEffect, useState } from 'react';
import {loadFileByID} from '../../api/file-service';
import {postComment, getCommentByDocID} from '../../api/comment-service';

const DocumentView = ({document, setSelectedComment}) => {
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
    const [commentPosition, setCommentPosition] = useState([])

    useEffect(() => {
        if(document){
            getCommentByDocID(document.key).then(data => {
                setCommentPosition(data.data)
            })
        }
    },[document])

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

    const handleTextButtonOnClick = (text, setSelectedComment) => {
        // open a new chat section with the selected text of the document on top
        setSelectedComment({
            text,
            commentid: commentPosition[0].commentid
        })
    }
    const setCommentSectionAsButton =  (text, positions) => {
        const textResult = (previousText, buttonText, remainingText) => {
            return (
                <p>
                    {previousText}
                    <button onClick={() => handleTextButtonOnClick(buttonText, setSelectedComment)}>{buttonText}</button>
                    {remainingText}
                </p>
            )
        }
        // only work for individual comments for now, no overlap, this code block needs to be fixed
        const startindex = positions[0]?.startindex || 0
        const endingindex = positions[0]?.endingindex || 0
        // =====================


        return textResult(text.slice(0,startindex), text.slice(startindex, endingindex), text.slice(endingindex,text.length))
    }

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

    const handleOnClick = (event) => {
        event.preventDefault();
        postComment({
            creatorID: '6e0479c2-5fce-4e11-8e2d-910aea60f0bb',
            startIndex: selectedState.selectionStart,
            endingIndex: selectedState.selectionEnd,
            documentID: document.key,
        })
    }
    return(
        <div>
            <span onMouseUp={onMouseUpHandler}>{setCommentSectionAsButton(selectedState.text, commentPosition)}</span>
            <button onClick={handleOnClick}>Comment</button>
        </div>
    )
}

export default DocumentView;