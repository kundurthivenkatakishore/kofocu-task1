import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slice";

const Chat = ({ email, setEmail, message, setMessage, messages, setMessages }) => {
    const handleClick = (e) => {
        console.log(message);
        messages.push(message);
        console.log(messages)
        setMessage('')
    }
    const handleEmail = (e) => {
        const emailValue = e.target.value;
        if (!emailValue) {
            alert('Please provide user email')
        }
        setEmail(emailValue)
    }

    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch()
    // setEmail('')
    console.log(users, 'redux')

    return (
        <div style={{ width: '100%', height: '600px', backgroundColor: 'black' }}>
            <input type="email" value={email} onChange={(e) => handleEmail(e)} />
            <button onClick={() => dispatch(add(email))}>Add Users</button>
            <div style={{ width: '100%', height: '550px', backgroundColor: 'grey', display: 'flex', flexDirection: 'column' }}>
            <div>
                <span>Added Users</span><br></br>
                {users.map((eachUser) => (
                    <p>{eachUser.payload}</p>
                ))}
            </div>
                {messages.map((eachMsg) => (
                    <>
                        <span>{ }</span>
                        <span>{eachMsg}</span>
                    </>
                ))}
            </div>
            <div>

                <input style={{ width: '90%', height: '50px' }} placeholder="Enter a message" type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} /><button onClick={() => handleClick()}>Send</button>
            </div>
        </div>
    )
}
export default Chat;