import React from 'react';
import * as C from "./styles";
import ChatHeader from '../../Components/ChatHeader';
import ChatBody from '../../Components/ChatBody';
import ChatFooter from '../../Components/ChatFooter';

export default function Chat({ userChat }) { 

  console.log(userChat)
  return (
    <C.Container>
      <ChatHeader photo={userChat?.photoURL}  name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId}/>
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
}