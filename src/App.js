import React, { useEffect, useState } from 'react';
import Login from './Pages/Login';
import Loading from './Components/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, provider } from './services/Firebase';
import Sidebar from './Components/Sidebar';
import { Container } from '../src/styles/app';
import Chat from './Pages/Chat';
import ScreenConverseless from './Components/ScreenConverseless';

export default function App() {
    const [user, loading] = useAuthState(auth);
    const [userChat, setUserChat] = useState(null);

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid).set({
                email: user.email,
                photoUrl: user.photoURL
            })
        }
    }, [user]);

    if (loading) return <Loading />;

    if (!user) return <Login />;

    return (
        <Container>
            <Sidebar setUserChat={setUserChat} userChat={userChat} />
            {!userChat ? <ScreenConverseless /> : <Chat userChat={userChat} />}

        </Container>
    );
}