(JavaScript)
Aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste. 

Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).

-STRUTTURA JS
1)Dichiarare variabile bottone;
2)Creazione del metodo che controlla la compilazione dei campi del form;
3)Creazione del metodo che controlla la compilazione del campo "sconto";
4)Creazione del metodo per calcolare il preventivo senza sconto;
5)Creazione del metodo per calcolare il preventivo con sconto;
6)Creazione del metodo per inserire il prezzo del preventivo nella pagina HTML;
7)Creazione del metodo per gestire l'errore a video dello sconto non valido;


-STRUTTURA JS BONUS
1)Dichiarazione dell'array con i 3 oggetti jobs;
2)Aggiungere le due proprietà(nome e prezzo) al singolo oggetto jobs;
3)Creazione del metodo che  aggiunge i tre jobs nell'HTML;
4)Creazione del metodo che innesca l'aggiunta dei tre jobs nell'HTML;
4)Creazione del metodo che controlla la compilazione del campo del lavoro;
5)Creazione del metodo che calcola il preventivo; 
