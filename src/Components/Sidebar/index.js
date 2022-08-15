import React from 'react';
import { Container } from '../Sidebar/styles';
import SidebarChats from '../SidebarChats/index';
import SidebarHeader from '../SidebarHeader/index';

export default function Sidebar({ setUserChat, userChat }) {
  return (
    <Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </Container>
  );
}