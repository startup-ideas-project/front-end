import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";

import {getMessages} from '../../api/chat-service';


const ChatView = ({comment}) => {
    const socketURL = "http://127.0.0.1:4080";
    const [response, setResponse] = useState("");
    const [inputText, setInputText] = useState("")
    const [useSocket, setUseSocket] = useState(null)
    const [messageStore, setMessageStore] = useState([])
    const [displayedMessage, setDisplayedMessage] = useState([])

    const handleInput = (event) => {
        setInputText(event.target.value)
    }

    const send = (commentID, message) => {
        useSocket.emit(commentID, message)
        useSocket.on(commentID, data => {
            setResponse(data)
            setInputText("")
          });
    }

    useEffect(() => {
        getMessages(comment.commentid).then(data => {
            console.log(data)
            setMessageStore(data.data.Items)
        })
    },[comment])

    useEffect(() => {
        const socket = socketIOClient(socketURL);
        setUseSocket(socket)
    },[])

    useEffect(() => {
        const messages = messageStore.map(item => {
            return {
                message : item.message,
                creator : item.creator}
        })
        setDisplayedMessage(messages)
    },[messageStore])

    const displayMessage = () => {
        return displayedMessage.map(message => {
            return (
                <div>
                    <h4>{message.creator}</h4>
                    <p>{message.message}</p>
                </div>
            )
        })
    }

    return(
        <div>
            <p>Chat Section for the text "{comment.text}"</p>
            {displayMessage()}
            <h1>{response}</h1>
            <div className="messages-input">
                    <input type="text" onChange={handleInput} value={inputText} />
                    <button onClick={() => send(comment.commentid, inputText)}>Send</button>
                </div>
        </div>
    )
}

export default ChatView