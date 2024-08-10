import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="heading">
        Benvenuto nel Sistema di Gestione Contratti e Dati Aziendali
      </h1>

      <div className="flow-container">
        <div className="flow-step">
          <h2 className="subheading">Gestione Ditte</h2>
          <p className="paragraph">
            Organizza e gestisci le informazioni relative alle aziende con cui
            collabori. Questa funzione ti permette di tenere traccia delle
            ditte, delle loro caratteristiche e dei servizi che offrono.
          </p>
        </div>

        <div className="flow-step">
          <h2 className="subheading">Contratti e CIG</h2>
          <p className="paragraph">
            Tieni sotto controllo i contratti attraverso i Codici Identificativi
            di Gara (CIG). Monitora i dettagli dei contratti, inclusi avvio,
            scadenza e informazioni finanziarie, per una gestione efficace e
            puntuale.
          </p>
        </div>

        <div className="flow-step">
          <h2 className="subheading">Contratti Attuativi (CA)</h2>
          <p className="paragraph">
            Gestisci i contratti attuativi, monitorando le attività, le scadenze
            e i tecnici coinvolti. Questa funzione è essenziale per seguire
            l'implementazione dei contratti e assicurarsi che siano rispettati i
            termini stabiliti.
          </p>
        </div>

        <div className="flow-step">
          <h2 className="subheading">Stato Avanzamento Lavori (SAL)</h2>
          <p className="paragraph">
            Registra e verifica lo stato di avanzamento dei lavori per ciascun
            contratto attuativo. Questa funzione ti aiuta a monitorare i
            progressi e a gestire le spese associate.
          </p>
        </div>

        <div className="flow-step">
          <h2 className="subheading">Dashboard</h2>
          <p className="paragraph">
            La dashboard fornisce una vista complessiva e interattiva delle
            informazioni chiave e dei dati del sistema. Consente di accedere
            rapidamente alle statistiche, ai report e ai principali indicatori
            di performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
