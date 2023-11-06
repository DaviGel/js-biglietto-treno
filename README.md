Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

# Biglietto del treno

1. Chiedere all'utente, tramite un `prompt`, il n° di km da percorrere e salvarlo in una variabile chiamata kilometriTotali. Convertire il valore di kilometriTotali da stringa a numero tramite la funzione `parseInt()`.
2. Chiedere all'utente, tramite un `prompt`, l'età del passeggero e salvarla in una variabile chiamata etaPasseggero. Convertire il valore di etaPasseggero da stringa a numero tramite la funzione `parseInt()`.
3. Calcolare il prezzo del biglietto moltiplicando kilometriTotali \* 0.21 €.
4. SE etaPasseggero è > 0 e < di 18 stampo in console il prodotto tra kilometriTotali \* 0.21 € \* 0.8 così da ottenere uno sconto del 20% sul prezzo totale, arrotondando il numero a due cifre decimali tramite il metodo `toFixed(2)`.
5. ALTRIMENTI SE etaPasseggero è > di 65 stampo in console il prodotto tra kilometriTotali \* 0.21 € \* 0.6 così da ottenere uno sconto del 40% sul prezzo totale, arrotondando il numero a due cifre decimali tramite il metodo `toFixed(2)`.

_Created by Davide Geloso_
