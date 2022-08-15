import React from 'react';
import * as C from './styles';
import { MdPerson, MdSearch, MdMoreVert } from 'react-icons/md';

export default function ChatHeader({photo, name}) {    
    return (
        <C.Container>
            <C.userInfo>
                {photo ? <C.Avatar src={photo} /> : <MdPerson />}
                <C.NameContent>
                    <C.Name>{name}</C.Name>
                </C.NameContent>
            </C.userInfo> 
            <C.Options>
                <MdSearch/>
                <MdMoreVert/>
            </C.Options>
        </C.Container>
    );
}