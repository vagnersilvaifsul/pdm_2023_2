import React, {createContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const EstudanteContext = createContext({});

export const EstudanteProvider = ({children}) => {
  const [estudantes, setEstudantes] = useState([]);

  useEffect(() => {
    const listener = firestore()
      .collection('estudantes')
      .orderBy('nome')
      .onSnapshot(snapshot => {
        let data = []; //array de objetos do tipo Estutante
        snapshot.forEach(doc => {
          data.push({
            uid: doc.id,
            nome: doc.data().nome,
            curso: doc.data().curso,
          });
        });
        setEstudantes(data);
      });

    return () => {
      listener(); //para de escutar o firestore
    };
  }, []);

  async function save(estudante) {
    try {
      await firestore().collection('estudantes').doc(estudante.uid).set(
        {
          nome: estudante.nome,
          curso: estudante.curso,
        },
        {merge: true},
      );
      return true;
    } catch (error) {
      console.error('EstudanteProvider, save: ' + error);
      return false;
    }
  }

  async function del(uid) {
    try {
      await firestore().collection('estudantes').doc(uid).delete();
      return true;
    } catch (error) {
      console.error('EstudanteProvider, del: ' + error);
      return false;
    }
  }

  return (
    <EstudanteContext.Provider value={{estudantes, save, del}}>
      {children}
    </EstudanteContext.Provider>
  );
};
