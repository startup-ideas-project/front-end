import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";

import {getMessages} from '../../api/chat-service';


const ChatView = ({document}) => {
    const socketURL = "http://127.0.0.1:4080";
    const [response, setResponse] = useState("");
    const [inputText, setInputText] = useState("")
    const [messageStore, setMessageStore] = useState([])

    const handleInput = (event) => {
        setInputText(event.target.value)
    }

    const socket = socketIOClient(socketURL);

    const send = (documentKey, message) => {
        socket.emit(documentKey, message)
        socket.on(documentKey, data => {
            setResponse(data)
          });
    }

    useEffect(() => {
        getMessages("authenticatedUser1").then(data => setMessageStore(data))
    },[response])

    console.log(messageStore)

    return(
        <div>
            <h1>{response}</h1>
            <div className="messages-input">
                    <input type="text" onChange={handleInput} value={inputText} />
                    <button onClick={() => send(document.key, inputText)}>Send</button>
                </div>
        </div>
    )
}

export default ChatView