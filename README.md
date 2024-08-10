# Task Manager

Il progetto **Task Manager** è un'applicazione web destinata alla gestione e monitoraggio di contratti e interventi per servizi vari. Utilizza una struttura modulare per tenere traccia delle aziende, dei contratti, dei SAL (Stati Avanzamento Lavori), dei verbali e dei tecnici coinvolti. Il sistema è progettato per gestire diverse tipologie di servizi e contratti, e per facilitare la pianificazione e il controllo degli interventi.

## Indice

- [Panoramica](#panoramica)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Struttura programma](#struttura-programma)

## Panoramica

Il Task Manager ti permette di:

- Creare, visualizzare, aggiornare e cancellare task.
- Gestire i task in diverse categorie o progetti.
- Utilizzare l'autenticazione tramite Firebase per gestire gli utenti e mantenere i dati sicuri.

## Tecnologie Utilizzate

- **React**: Framework per la creazione dell'interfaccia utente.
- **Firebase**: Per autenticazione, database e hosting.
- **React Router**: Per la navigazione tra le pagine dell'applicazione.
- **CSS/SCSS**: Per la progettazione e lo styling dell'interfaccia utente.

## Struttura Programma

```mermaid
graph TD
    %% Definizione dei nodi principali
    CIG -->|Accordo Quadro| Accordo_Quadro
    CIG -->|Affidamento Diretto| Affidamento_Diretto
    CIG -->|Gara| Gara

    %% Definizione dei sottogruppi per una disposizione più ordinata
    subgraph Accordo_Quadro_Subsystem
        direction TB
        Accordo_Quadro
        ContrattoAttuativo_Accordo_Quadro
        SAL_Accordo_Quadro
        Verbale_Accordo_Quadro
        Accordo_Quadro -->|includes| ContrattoAttuativo_Accordo_Quadro
        ContrattoAttuativo_Accordo_Quadro -->|includes| SAL_Accordo_Quadro
        SAL_Accordo_Quadro -->|generates| Verbale_Accordo_Quadro
        SAL_Accordo_Quadro -->|erodes| Accordo_Quadro
    end

    subgraph Affidamento_Diretto_Subsystem
        direction TB
        Affidamento_Diretto
        SAL_Affidamento_Diretto
        Verbale_Affidamento_Diretto
        Affidamento_Diretto -->|includes| SAL_Affidamento_Diretto
        SAL_Affidamento_Diretto -->|generates| Verbale_Affidamento_Diretto
        SAL_Affidamento_Diretto -->|erodes| Affidamento_Diretto
    end

     subgraph Gara_Subsystem
        direction TB
        Gara
        SAL_Gara
        Verbale_Gara
        Gara-->|includes| SAL_Gara
        SAL_Gara -->|generates| Verbale_Gara
        SAL_Gara -->|erodes| Gara
    end

    %% Relazioni generali
    ContrattoAttuativo_Accordo_Quadro -->|erodes| CIG
```
