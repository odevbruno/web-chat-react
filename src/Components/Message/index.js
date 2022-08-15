import React from 'react';
import * as C from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/Firebase";

export default function Message({user, message}) {
  const [userLogginIn] = useAuthState(auth); 
  
  return (
    <C.Container>
      <C.Line className={userLogginIn?.email === user ? "me" : ""}>
      <C.Content>
        <C.Message>{message.message}</C.Message>
        <C.MessageData>
          {new Date(message?.timestamp).toLocaleDateString()}
        </C.MessageData>
      </C.Content>
      </C.Line>
    </C.Container>
    );
}