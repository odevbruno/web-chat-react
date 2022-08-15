import React from 'react';
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from '../../services/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function SidebarHeader({ setUserChat }) {

  const [user] = useAuthState(auth);
  const refChat = db.collection("chats").where("users", "array-contains", user.email);
  const [chatSnapshot] = useCollection(refChat);

  const hCreateChat = () => {
    const emailInput = prompt("Digite o email do usuario para mandar mensagem!");  

    if(!emailInput) return; 

    if(!EmailValidator.validate(emailInput)){
      return alert("E-mail inválido!")
    } else if(emailInput === user.email){
      return alert("Insira um e-mail diferente do seu!")
    } else if(chatExists(emailInput)){
      return alert("Chat já existe!")
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (email) => {
    return !!chatSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === email)?.length > 0
    )
  }

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={hCreateChat} />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
}