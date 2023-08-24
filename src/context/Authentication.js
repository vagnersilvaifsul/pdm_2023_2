import React, {createContext, useContext, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({children}) => {
  const [user, setUser] = useState(null);

  async function storeUserSession(email, pass) {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({
          email,
          pass,
        }),
      );
      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
      console.error('SignIn, storeUserSession' + error);
    }
  }
  async function logar(email, pass) {
    try {
      await auth().signInWithEmailAndPassword(email, pass);
      //TODO: buscar dados do user no Firestore
      setUser(auth().currentUser);
      return 'ok';
    } catch (e) {
      return launchServerMessageErro(e);
    }
  }

  //função utilitária
  function launchServerMessageErro(e) {
    switch (e.code) {
      case 'auth/user-not-found':
        return 'Usuário não cadastrado.';
      case 'auth/wrong-password':
        return 'Erro na senha.';
      case 'auth/invalid-email':
        return 'Email inválido.';
      case 'auth/user-disabled':
        return 'Usuário desabilitado.';
      case 'auth/email-already-in-use':
        return 'Email em uso. Tente outro email.';
      default:
        return 'Erro desconhecido. Contate o administrador';
    }
  }

  return (
    <AuthenticationContext.Provider value={{storeUserSession, logar, user}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
