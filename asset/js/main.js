//inseriamo la mail dal HTML...ATTENZIONE da mette nella condizione button
const url_game = `www.facebook.com`

const emails = [`marco@mail.com`, `giuseppe@mail.com`, `simone@mail.com`]
    //attiviamo la funzione
function myFunction() {
    //inseriamo la mail dal HTML
    const insertEmail = document.getElementById(`insertEmail`).value;

    let vero_falso = false;
    //prendiamo in esame tutte le mail
    for (let i = 0; i < emails.length; i++) {
        //assegno ad una variabile la mail per ogni 
        let email = emails[i]
        if (insertEmail == email) {
            vero_falso = true;
        }
    }

    console.log(vero_falso);
    if (vero_falso == true) {
        document.getElementById("enter").innerHTML =
            "entra nel gioco";
    } else {
        document.getElementById("reset").innerHTML =
            "inserisci nuovamente la email";
    }
}
let vittoria_sconfitta = false


//funzione del lancio
function Lancio() {
    //inserisco il mio lancio in una variabile
    let lancioMio = document.getElementById(`lancioMio`).value
        //inserisco una variabile di un numero casuale
    let lancioComp = Math.floor(Math.random() * 6) + 1
        //se il mio lancio è maggiore della variabile del compuer
    if (lancioMio > lancioComp) {
        //creo un messaggio di vittoria
        document.getElementById("risultato").innerHTML = `hai vinto`
            //se il mio lancio è inferiore alla variabile del computer
    } else if (lancioMio < lancioComp) {
        //creo un messaggio di perdita
        document.getElementById("risultato").innerHTML = `hai perso`
    } else {
        //creo un messaggio di pareggio
        document.getElementById("risultato").innerHTML = `questo è un pareggio`
    }
    //mostro a schermo il mio lancio
    document.getElementById("myLancio").innerHTML = `il tuo lancio è ${lancioMio}`;
    //mostro a schermo il numero casuale del computer
    document.getElementById("randomNumber").innerHTML = `il lacio del computer è ${lancioComp}`;
}