// PROMPT PER LA RICHIESTA DI KM ED ETA'
let km_utente = parseInt(prompt("Inserisci il numero di km da percorrere").trim());
console.log(km_utente)
let eta_utente = parseInt(prompt("Inserisci la tua età").trim())
console.log(eta_utente)

// IF PER LA VERIFICA DEL CONTENUTO INSERITO DALL'UTENTE
if (isNaN(km_utente) || isNaN(eta_utente)) {
    alert("Uno dei valori non è un numero")
    throw new Error("Valori inseriti non validi")
} else {

}

// CALCOLO PREZZO INTERO
let prezzo_biglietto = km_utente * 0.21
console.log(prezzo_biglietto)

// DICHIARAZIONE VARIABILI SCONTI
let sconto_minorenni = prezzo_biglietto * 0.2
let sconto_over = prezzo_biglietto * 0.4

// CALCOLO PREZZO IN BASE ALL'ETA'
let prezzo_minorenne = prezzo_biglietto - sconto_minorenni
console.log(prezzo_minorenne)
let prezzo_over = prezzo_biglietto - sconto_over
console.log(prezzo_over)

// VISUALIZZAZIONE PREZZO
if (eta_utente < 18) {
    document.getElementById("prezzo_biglietto").innerHTML+= prezzo_minorenne.toFixed(2) + " \u20ac"
} else if (eta_utente > 65) {
    document.getElementById("prezzo_biglietto").innerHTML+= prezzo_over.toFixed(2) + " \u20ac"
} else {
    document.getElementById("prezzo_biglietto").innerHTML+= prezzo_biglietto.toFixed(2) + " \u20ac"
}