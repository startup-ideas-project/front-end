import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";

import {getMessages} from '../../api/chat-service';


const ChatView = ({comment, user}) => {
    const socketURL = "http://127.0.0.1:4080";
    const [response, setResponse] = useState("");
    const [inputText, setInputText] = useState("")
    const [useSocket, setUseSocket] = useState(null)
    const [messageStore, setMessageStore] = useState([])
    const [displayedMessage, setDisplayedMessage] = useState([])

    const handleInput = (event) => {
        setInputText(event.target.value)
    }

    const handleOnSend = (commentID, message, sender) => {
        useSocket.emit(commentID, {message, sender})
        useSocket.on(commentID, data => {
            setResponse(data)
            setInputText("")
          });
    }

    useEffect(() => {
        getMessages(comment.commentid).then(data => {
            setMessageStore(data.data.Items)
        })
    },[comment, response])

    useEffect(() => {
        const socket = socketIOClient(socketURL);
        setUseSocket(socket)
    },[])

    console.log(messageStore)

    useEffect(() => {
        const messages = messageStore.map(item => {
            return {
                message : item.message,
                creator : item.creator}
        })
        setDisplayedMessage(messages)
    },[messageStore, response])

    console.log(displayedMessage)
    const DisplayMessage = () => {
        return displayedMessage.map(message => {
            return (
                <div>
                    <i>{message.creator}: </i>
                    <p>{message.message}</p>
                </div>
            )
        })
    }

    return(
        <div>
            <p>Chat Section for the text "{comment.text}"</p>
            <DisplayMessage />
            <div className="messages-input">
                    <input type="text" onChange={handleInput} value={inputText} />
                    <button onClick={() => handleOnSend(comment.commentid, inputText, user.name)}>Send</button>
                </div>
        </div>
    )
}

export default ChatView