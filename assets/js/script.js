/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
   nome: 'Manuel',
   cognome: 'Burgalassi',
   eta: 29,
   citta: 'San Vincenzo',
}

console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta} `);



/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

persona['email'] = 'manuel.burgalassi@gmail.com';
delete persona.eta;

console.log(persona);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 32,
   indirizzo: {
      via: 'Petrazzi',
      citta: 'San Vincenzo',
      cap: 57027,
   },
}

console.log(utente.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(persona['nome']);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 13;
let b = 5;
let c = 13;

if (a > b && a > c) {
   console.log(`Il numero più alto è ${a}`);
} else if (b > a && b > c) {
   console.log(`Il numero più alto è ${b}`);
} else if (c > a && c > b) {
   console.log(`Il numero più alto è ${c}`);
} else if (a === b && b === c) {
   console.log(`Tutti e 3 i numeri sono uguali ed equivalgono a ${a}`);
} else if (a === b) {
   console.log(`a e b sono pari ed equivalgono a ${a}`);
} else if (a === c) {
   console.log(`a e c sono pari ed equivalgono a ${a}`);
} else if (b === c) {
   console.log(`c e b sono pari ed equivalgono a ${c}`)
};


/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totale;
totale = 53;

if (totale >= 50) {
   console.log(`Totale carrello: ${totale}€ - Spedizione: inclusa - Totale finale: ${totale}€`);
} else {
   console.log(`Totale carrello: ${totale}€ - Spedizione: 9.90€ - Totale finale: ${totale + 9.90}€`);
};

let totaleFinale = totale >= 50
   ? `Totale carrello: ${totale}€ - Spedizione: inclusa - Totale finale: ${totale}€`
   : `Totale carrello: ${totale}€ - Spedizione: 9.90€ - Totale finale: ${totale + 9.90}€`;

console.log(totaleFinale);


/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cestino = [10, 'fogli', true]
for (const elemento of cestino)

   if (typeof elemento === 'number') {
      console.log(elemento + ' è un numero');
   } else {
      console.log(elemento + ' non è un numero');
   };

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const vuoto = [];

vuoto.push(1, 2, 3, 4, 5);
vuoto.unshift(0);

console.log(vuoto);
console.log(vuoto.length);


/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const scuola = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];

/*
let cercaQuaderno = scuola.indexOf('Quaderno');
console.log(cercaQuaderno); 
*/

scuola.splice(1, 1,);
console.log(scuola);

scuola.splice(1, 0, 'Diario');
console.log(scuola);


/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = ['Penna', 'Quaderno', 'Zaino']

let zainoCerca = prodotti.includes('Zaino');
console.log(`Zaino è in carrello: ${zainoCerca}`); 
//console.log(prodotti.includes('Zaino'));


let cercaZaino = prodotti.indexOf('Zaino');
if (prodotti.includes('Zaino')=== true) {
   console.log(cercaZaino);
} else {
   console.log(`Non in carrello`)
};
//console.log(prodotti.indexOf('Zaino'));

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
