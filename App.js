import logo from './logo.svg';
import './App.css';
import { First } from './Pages/First';
import { useState } from 'react';
import { Second } from './Pages/Second';
import { Preview } from './Pages/Preview';
import Chat from './Pages/Chat';

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Chat email={email} setEmail={setEmail} message={message} setMessage={setMessage} messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
