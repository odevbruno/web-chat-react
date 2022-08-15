import React from 'react';
import * as C from './styles';
import { MdChat } from 'react-icons/md';

export default function ScreenConverseless() {
  return (
    <C.Container>
      <C.BoxRow>
        <MdChat />
        <h1>WebChat</h1>
      </C.BoxRow>
      <C.BoxColuna>
        <span>Envie mensagens para os seus amigos <p>sem precisar conectar o celular a internet!</p></span>
      </C.BoxColuna>
    </C.Container>
  );
}