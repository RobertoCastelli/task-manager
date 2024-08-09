// Context.js
import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/FirebaseCongif";
import { collection, getDocs } from "firebase/firestore";

// Creazione del contesto
export const MyContext = createContext();

// Creazione del Provider del contesto
const MyProvider = ({ children }) => {
  // Stato per salvare i dati del database
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    // Funzione per recuperare i documenti dalla collezione
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "anagrafica_ditte"));
        const docsRef = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatabase(docsRef); // Salva i dati nello stato
      } catch (error) {
        console.error("Errore nel fetching data: ", error);
      }
    };
    fetchData(); // Richiama la funzione fetchData
  }, []);

  return (
    <MyContext.Provider value={{ database }}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
