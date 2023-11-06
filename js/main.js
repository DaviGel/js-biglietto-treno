const kilometriTotali = parseInt(
  prompt('Inserisci il numero di km da percorrere:')
);

const etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

let prezzoBiglietto = kilometriTotali * 0.21;
// N.B. dato che il metodo toFixed() restituisce una stringa, potrei convertire prezzoBiglietto.toFixed(2) in un numero, qualora fosse necessario, tramite la funzione parseInt()
console.log('Il prezzo del biglietto è:', prezzoBiglietto.toFixed(2), '€');

if (etaPasseggero > 0 && etaPasseggero < 18) {
  prezzoBiglietto *= 0.8;
  console.log('Il prezzo del biglietto è:', prezzoBiglietto.toFixed(2), '€');
} else if (etaPasseggero > 65) {
  prezzoBiglietto *= 0.6;
  console.log('Il prezzo del biglietto è:', prezzoBiglietto.toFixed(2), '€');
}
