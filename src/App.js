
import { useEffect, useState } from 'react';
import './App.css';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import db from './firebase';
import SendIcon from '@mui/icons-material/Send';
import firebase from 'firebase/compat/app';
import Message from './Message';
import FlipMove from 'react-flip-move';
import IconButton from '@mui/material/IconButton';


function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {

        db
            .collection('messages')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            }

            )
    }, [])

    useEffect(() => {
        setUsername(prompt("Enter your name"));

    }, [])// condition

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })


        setMessages([...messages, { username: username, text: input }])
        setInput('');

    }

    return (
        <div className="App">
            <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook-messenger-logo" />

            <h1>Facebook Messenger Clone</h1>
            <h3>Welcome {username}</h3>

            <form className='app__form'>
                <FormControl className='app__formControl'>
                    <Input className='app__input' placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />

                    <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >
                        <SendIcon />
                    </IconButton>

                </FormControl>
            </form>


            <FlipMove>
                {
                    messages.map(message => (
                        <Message username={username} message={message} />
                    ))
                }
            </FlipMove>


        </div>
    );
}

export default App;