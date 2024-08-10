classDiagram
%% Definizione delle classi e delle enumerazioni

class AnagraficaDitte {
+string ditta PK
+TipologiaServizio tipologia_servizio
+string via
+string civico
+string cap
+string citta
+string piva
+string pec
+string referente_ditta
+LottoGeografico lotto_geografico
}

    class TipologiaServizio {
        <<enumeration>>
        +pulizie
        +edile
        +imbianchino
        +elettrico
        +termotecnico
        +accompagnamento
        +antincendio
        +disinfestazione
        +fabbro
        +fornitura_materiali
        +idraulico
        +manutenzione
        +sistemi_elevatori
        +sistemi_oscuranti
        +sorveglianza
        +verde
    }

    class LottoGeografico {
        <<enumeration>>
        +unico
        +leonardo
        +bovisa
    }

    class TipoContratto {
        <<enumeration>>
        +accordo_quadro
        +affidamento_diretto
        +convenzione
        +gara_sdapa
    }

    class TipoIntervento {
        <<enumeration>>
        +canone
        +extra_canone
    }

    class CIG {
        +string cig PK
        +string ditta FK
        +string oggetto
        +TipoContratto tipo_contratto
        +string lotto
        +date data_avvio
        +date data_scadenza
        +int id_budget
        +float importo_iva_esclusa
        +float importo_totale_calcolato
        +string stato_contratto
    }

    class ContrattoAttuativo {
        +string cig FK
        +string contratto_attuativo PK
        +string ditta
        +string descrizione_attivita
        +float importo_iva_esclusa
        +string sede
        +string campus
        +string edificio
        +date data_avvio
        +date data_scadenza
        +string ods
        +string rda
        +string codice_progetto
        +Tecnico rup
        +Tecnico dec
        +float importo_totale_calcolato
        +string stato_contratto
    }

    class SAL {
        +string contratto_attuativo FK
        +TipoIntervento tipo_intervento
        +string mese
        +string causale
        +int numero_sal PK
        +float importo_iva_esclusa
        +float importo_totale_calcolato
    }

    class Verbale {
        +string sal FK
        +float importo
        +date data_verbale
    }

    class Tecnico {
        <<enumeration>>
        +Alberto_Crespi
        +Fortunato_Dal_Ben
        +Giacomo_Rossello
        +Giuseppe_Arena
        +Marco_Mameli
        +Massimo_Bini
        +Pietro_Pollera
        +Rino_Impertatrice
        +Roberto_Castelli
        +Roberto_Colombo
    }

    class StatoContratto {
        <<enumeration>>
        +attivo
        +completato
        +scaduto
    }

    class AuditLog {
        +int id PK
        +string operazione
        +string utente
        +date data_operazione
        +string dettagli
    }

    %% Definizione delle relazioni tra le classi
    AnagraficaDitte --> TipologiaServizio : "uses"
    AnagraficaDitte --> LottoGeografico : "uses"
    AnagraficaDitte --> CIG : "has"
    CIG --> ContrattoAttuativo : "includes"
    ContrattoAttuativo --> SAL : "includes"
    SAL --> TipoIntervento : "uses"
    CIG --> TipoContratto : "uses"
    ContrattoAttuativo --> Tecnico : "has"
    SAL --> Verbale : "generates"
    Verbale --> ContrattoAttuativo : "erodes"
    ContrattoAttuativo --> CIG : "erodes"
    CIG --> StatoContratto : "uses"
    ContrattoAttuativo --> StatoContratto : "uses"
    SAL --> AuditLog : "logs"
    Verbale --> AuditLog : "logs"
