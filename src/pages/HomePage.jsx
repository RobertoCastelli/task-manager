import React from "react";
import "../styles/HomePage.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

const HomePage = () => {
  return (
    <main className="homepage-container">
      <div>
        <h3>Sistema di Gestione Contratti</h3>
      </div>

      <section>
        <article>
          <div>
            <h4> Gestione Ditte </h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Organizza e gestisci le informazioni relative alle aziende con cui
            collabori. Questa funzione ti permette di tenere traccia delle
            ditte, delle loro caratteristiche e dei servizi che offrono.
          </p>
        </article>

        <article>
          <div>
            <h4>Codice Identificativo Gara (CIG)</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Tieni sotto controllo i contratti attraverso i Codici Identificativi
            di Gara (CIG). Monitora i dettagli dei contratti, inclusi avvio,
            scadenza e informazioni finanziarie, per una gestione efficace e
            puntuale.
          </p>
        </article>

        <article>
          <div>
            <h4>Contratti Attuativi (CA)</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Gestisci i contratti attuativi, monitorando le attività, le scadenze
            e i tecnici coinvolti. Questa funzione è essenziale per seguire
            l'implementazione dei contratti e assicurarsi che siano rispettati i
            termini stabiliti.
          </p>
        </article>

        <article>
          <div>
            <h4>Stato Avanzamento Lavori (SAL)</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Registra e verifica lo stato di avanzamento dei lavori per ciascun
            contratto attuativo. Questa funzione ti aiuta a monitorare i
            progressi e a gestire le spese associate.
          </p>
        </article>

        <article>
          <div>
            <h4>Dashboard</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            La dashboard fornisce una vista complessiva e interattiva delle
            informazioni chiave e dei dati del sistema. Consente di accedere
            rapidamente alle statistiche, ai report e ai principali indicatori
            di performance.
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
