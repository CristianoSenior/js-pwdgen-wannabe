// Chiedi all'utente cognome , nome , colore preferito

// creiamo var per memorizzare input utente COGNOME
var cognomeUtente;
// creiamo var per memorizzare input utente NOME
var nomeUtente;
// creiamo var per memorizzare input utente  COLORE PREFERITO
var colorePreferito



// Chiediamo all'utente il cognome
cognomeUtente = prompt("inserisci il tuo cognome")
// Chiediamo all'utente il cognome
nomeUtente = prompt("inserisci il tuo nome")
// Chiediamo all'utente il colore preferito
colorePreferito = prompt("inserisci il tuo colore preferito")


// scriviamo il riassunto delle informazioni dell'utente
document.getElementById("mio_id") .innerHTML = "Ecco la tua password" + cognomeUtente + nomeUtente + colorePreferito;
