import React from "react";
import "../styles/HomePage.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

const HomePage = () => {
  return (
    <main className="homepage-container">
      <div className="homepage-title">
        <h3>Sistema di Gestione Contratti</h3>
      </div>

      <section className="homepage-menu">
        <article>
          <div className="homepage-subtitle">
            <h4> Login </h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Inserisci le informazioni relative alle aziende con cui collabori,
            le loro caratteristiche, i servizi che offrono per formare un
            database da utilizzare nei contratti.
          </p>
        </article>
      </section>

      <section className="homepage-form">
        <article>
          <div className="homepage-subtitle">
            <h4> Ditte </h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Inserisci le informazioni relative alle aziende con cui collabori,
            le loro caratteristiche, i servizi che offrono per formare un
            database da utilizzare nei contratti.
          </p>
        </article>
        <article>
          <div className="homepage-subtitle">
            <h4>Codice Identificativo Gara (CIG)</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Inserisci i dettagli dei contratti, inclusi avvio, scadenza e
            informazioni finanziarie, per una gestione efficace e puntuale.
          </p>
        </article>
        <article>
          <div className="homepage-subtitle">
            <h4>Contratti Attuativi (CA)</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Inserisci i contratti attuativi, monitorando le attività, le
            scadenze e i tecnici coinvolti. Questa funzione è essenziale per
            seguire l'implementazione dei contratti.
          </p>
        </article>

        <article>
          <div className="homepage-subtitle">
            <h4>Stato Avanzamento Lavori (SAL)</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Registra e verifica lo stato di avanzamento dei lavori per ciascun
            contratto. Questa funzione ti aiuta a monitorare i progressi e a
            gestire le spese associate.
          </p>
        </article>
      </section>

      <section className="homepage-utility">
        <article>
          <div className="homepage-subtitle">
            <h4>Dashboard</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            La dashboard fornisce una vista complessiva e interattiva delle
            informazioni chiave e dei dati del sistema. Consente di accedere
            rapidamente alle statistiche, ai principali indicatori di
            performance.
          </p>
        </article>
        <article>
          <div className="homepage-subtitle">
            <h4>Verbali</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            Genera e gestisci i verbali di inizio, fine lavori e i SAL in carta
            intestata. Questa funzione ti consente di documentare ufficialmente
            i progressi e le conclusioni delle attività, garantendo trasparenza
            e conformità.
          </p>
        </article>

        <article>
          <div className="homepage-subtitle">
            <h4>Report</h4>
            <div>
              <BsBoxArrowUpRight />
            </div>
          </div>
          <p>
            La sezione Report fornisce una panoramica completa dei contratti e
            del sistema, con statistiche dettagliate e numeri totali. Offre una
            visione chiara dei dati e delle performance.
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
