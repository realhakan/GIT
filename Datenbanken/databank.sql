CREATE DATABASE Test

CREATE TABLE KundenKonto(
  EMAIL VARCHAR(255),
  Vorname VARCHAR(255),
  KontoID INT not NULL,
  Nachname VARCHAR(255)
);

CREATE TABLE kunde (
    KundenID INT not NULL,
    Kundenname VARCHAR(255),
    Telefonnummer INT not NULL,
    EMAIL VARCHAR(255),
    Adresse VARCHAR(255),
    Kontostatus VARCHAR(255)
);

CREATE TABLE Einkaufshistorie(
    Preis INT not NULL,
    Menge INT not NULL,
    KundenID INT not NULL,
    ProduktID INT not NULL,
    EinkaufshistorieID INT not NULL,
    EInkaufsdatum VARCHAR (255)
);

CREATE TABLE PRODUKT(
    ProduktID INT not NULL,
    Produktname VARCHAR(255),
    KatogerienID INT not NULL,
    Herteller VARCHAR(255),
    Lagerbestand INT not NULL,
    Preis INT not NULL
);





