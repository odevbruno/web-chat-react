import React, { useEffect, useRef, useState } from 'react';
import * as C from "./styles";
import { MdSend } from 'react-icons/md'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../services/Firebase';
import firebase from 'firebase/compat/app';

export default function ChatFooter({ chatId }) {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState("");

    const hSendMessage = (e) => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            message: message,
            email: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessage("");
    }

    return (
        <C.Container>
            <C.Form onSubmit={hSendMessage}>
                <C.Input placeholder='Mensagem' onChange={(e) => setMessage(e.target.value)} value={message} />
                <MdSend onClick={hSendMessage} />
            </C.Form>
        </C.Container>
    );
}