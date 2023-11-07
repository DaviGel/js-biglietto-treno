# Biglietto del treno

1. Dichiaro tre variabili: scontoMinori, scontoAnziani e prezzoKilometro in cui salvo i relativi valori.
2. Chiedere all'utente, tramite un `prompt`, il n° di km da percorrere e salvarlo in una variabile chiamata kilometri. Convertire il valore di kilometri da stringa a numero tramite la funzione `Number()`.
3. Chiedere all'utente, tramite un `prompt`, l'età del passeggero e salvarla in una variabile chiamata etaPasseggero. Convertire il valore di etaPasseggero da stringa a numero tramite la funzione `Number()`.
4. SE etaPasseggero è un numero e kilometri è un numero e kilometri è > 0 e etaPasseggero è > di 0 e <= di 130 dichiaro la variabile prezzoBiglietto che equivale a kilometri \* prezzoKilometro. SE etaPasseggero < 18 a prezzoBiglietto sottraggo (prezzoBiglietto \* scontoMinori) / 100. ALTRIMENTI SE etaPasseggero è > di 65 a prezzoBiglietto sottraggo (prezzoBiglietto \* scontoMinori) / 100. Stampo in console prezzoBiglietto convertito in numero decimale a due cifre col metodo toFixed(2). ALTRIMENTI stampo in console il seguente messaggio d'errore: "Inserire i km validi e un'età valida in formato numerico!".

_Created by Davide Geloso_
