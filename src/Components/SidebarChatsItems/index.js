import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../../services/Firebase';
import * as C from './styles';
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) => users?.filter((user) => user !== userLogged?.email)[0];

export default function SidebarChatsItems({id, users, user, setUserChat, active}) {
    const [getUserItem] = useCollection(db.collection("users").where("email", "==", getUser(users, user))); 
    
    const Avatar = getUserItem?.docs?.[0]?.data();
    const item = getUser(users, user);
  
    const hNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split("@")[0],
            photoURL: Avatar?.photoUrl,
        };

        setUserChat(userChat);
    } 

    return ( 
        <C.Container onClick={hNewChat} className={active}>
        {Avatar ? <C.Avatar src={Avatar?.photoUrl} /> : <MdPerson/>}
            <C.Name>{item.split("@")[0]}</C.Name>
        </C.Container>
    );
}