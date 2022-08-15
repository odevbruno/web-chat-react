import React, { useState } from 'react';
import * as C from './styles';
import { auth, db } from '../../services/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import SidebarChatsItems from '../SidebarChatsItems';

export default function SidebarChats({setUserChat, userChat}) {

  const [user] = useAuthState(auth);
  const refChats = db.collection("chats").where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChats); 

 return ( 
  <C.Container>
  {chatsSnapshot?.docs.map((item, index) => (
    <C.Content key={index}>
    <SidebarChatsItems
      id={item.id}
      users={item.data().users}
      user={user}
      setUserChat={setUserChat}
      active={userChat?.chatId === item.id ? "active" : ""}
    />
    <C.Divider/>
    </C.Content>
  ))}
  </C.Container>
 );
}