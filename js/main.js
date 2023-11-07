'use strict';

const scontoMinorenni = 0.8;
const scontoAnziani = 0.6;

const kilometri = Number(prompt('Inserisci il numero di km da percorrere:'));

const etaPasseggero = Number(prompt("Inserisci l'età del passeggero:"));

if (
  !isNaN(kilometri) &&
  !isNaN(etaPasseggero) &&
  kilometri > 0 &&
  etaPasseggero > 0 &&
  etaPasseggero <= 130
) {
  let prezzoBiglietto = kilometri * 0.21;

  if (etaPasseggero < 18) {
    prezzoBiglietto *= scontoMinorenni;
  } else if (etaPasseggero > 65) {
    prezzoBiglietto *= scontoAnziani;
  }

  /* N.B. dato che il metodo toFixed() restituisce una stringa, potrei convertire prezzoBiglietto.toFixed(2) in un numero, qualora fosse necessario, tramite la funzione Number() */
  console.log('Il prezzo del biglietto è:', prezzoBiglietto.toFixed(2), '€');
} else {
  console.log("Inserire i km validi e un'età valida in formato numerico!");
}
