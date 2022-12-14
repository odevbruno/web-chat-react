import React from 'react';
import { Botao, Container } from './styles';
import { auth, provider } from '../../services/Firebase'

export default function Login() {
   const handleSignin = () => {
      auth.signInWithPopup(provider).catch(alert);
   }

   return (
      <Container>
         <Botao onClick={handleSignin}>
            Entre com sua conta google
         </Botao>
      </Container>
   );
}